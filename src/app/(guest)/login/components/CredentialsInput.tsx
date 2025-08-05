"use client";
import PrimaryBtn from "@/components/buttons/PrimaryBtn";
import PasswordField from "@/components/forms/PasswordField";
import PhoneField from "@/components/forms/PhoneField";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const CredentialsInput: React.FC = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { replace } = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const dummyUser = {
      phoneNumber: "01234567890",
      password: "password123",
    };

    if (
      formData.phoneNumber === dummyUser.phoneNumber &&
      formData.password === dummyUser.password
    ) {
      toast.success("Successfully logged in");
      replace("/dashboard");
    } else {
      toast.error("Invalid phone number or password");
      setLoading(false);
    }
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
            <PrimaryBtn loading={loading} content="Sign In" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CredentialsInput;
