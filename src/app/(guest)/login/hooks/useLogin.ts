"use client";
import { useState } from "react";
import credentialsLogin from "../actions/CredentialsLoginAction";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface FormCredentialsLogin {
  phoneNumber: string;
  password: string;
}

const useLogin = () => {
  const initialFormData: FormCredentialsLogin = {
    phoneNumber: "",
    password: "",
  };

  const {replace} = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] =useState<FormCredentialsLogin>(initialFormData);

  const withCredentials = async () => {
    const { phoneNumber, password } = formData;
    
    try {
      const result = await credentialsLogin(phoneNumber, password);
      return result;
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const updateForm = (key: keyof FormCredentialsLogin, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // const result = await withCredentials();
      // if (result?.success) {
      //   toast.success("Successfully logged in");
      //   replace("/banks");
      // } else if (result?.error) {
      //   toast.error(result?.error);
      //   setLoading(false);
      // }
      setTimeout(() => {
        toast.success("Successfully logged in");
        replace("/dashboard");
      }, 1000);
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast.error(errorMessage);
      setLoading(false);
    }
  };

  return {
    formData,
    updateForm,
    credentials: {
      login: withCredentials,
    },
    handleSubmit,
    loading
  };
};

export default useLogin;
