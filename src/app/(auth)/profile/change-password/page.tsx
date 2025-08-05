"use client";

import React, { useState } from "react";
import PrimaryBtn from "@/components/buttons/PrimaryBtn";
import PasswordField from "@/components/forms/PasswordField";
import { ResultWithoutData } from "@/api";
import { showToast } from "@/services/Toaster";
import changePassword from "../action/ChangePassword";
import { validatePassword } from "./validatePassword";

const ChangePassword: React.FC = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!formData.newPassword || !formData.confirmPassword) {
      setFormError("All fields are required.");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setFormError("New password and confirm password do not match.");
      return;
    }

    const passwordErrors = validatePassword(formData.newPassword);
    if (passwordErrors.length > 0) {
      setFormError(passwordErrors.join(" "));
      return;
    }

    setLoading(true);
    try {
      const result: ResultWithoutData = await changePassword({
        password: formData.newPassword,
      });

      showToast(result);
      if (result.success) {
        setFormData({ newPassword: "", confirmPassword: "" });
      }
    } catch (error: any) {
      setFormError(error.message || "Failed to change password.");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="min-h-screen flex items-start justify-center pt-12">
        <form
          onSubmit={handlePasswordChange}
          method="POST"
          className="bg- p-8 rounded-lg shadow-lg w-full max-w-screen-md"
        >
          <div className="flex flex-col gap-4">
            <PasswordField
              label="New Password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />

            <PasswordField
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {formError && (
              <div className="text-red-500 text-sm mt-2">{formError}</div>
            )}

            <PrimaryBtn
              disabled={loading}
              loading={loading}
              content="Change Password"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
