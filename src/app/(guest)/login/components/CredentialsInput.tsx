"use client";

import React from "react";
import useLogin from "../hooks/useLogin";
import PrimaryBtn from "@/components/buttons/PrimaryBtn";
import PasswordField from "@/components/forms/PasswordField";
import PhoneField from "@/components/forms/PhoneField";

const Page: React.FC = () => {
  const { formData, updateForm, handleSubmit, loading } = useLogin();
  const isSaveDisabled = false;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateForm(name as keyof typeof formData, value);
  };


  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <form onSubmit={handleSubmit} method="POST" className="w-full">
          <div className="flex flex-col gap-4">
            <PhoneField
              id="phone"
              name="phoneNumber"
              value={formData.phoneNumber}
              placeholder="Enter your Phone Number"
              onChange={handleChange}
              required
            />

            <PasswordField
              label="Password"
              id="password"
              name="password"
              value={formData.password}
              placeholder="Enter Password"
              onChange={handleChange}
              required
            />

            <PrimaryBtn
              disabled={isSaveDisabled}
              loading={loading}
              content="Sign In"
            />
          </div>
        </form>
      </div>
    </div>
  );

  
};

export default Page;
