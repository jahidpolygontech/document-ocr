import React from "react";
import CredentialsInput from "./components/CredentialsInput";

const page: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-xl rounded-2xl p-5 w-full">
        <div className="flex flex-col gap-4 items-center">
          <CredentialsInput />
        </div>
      </div>
    </div>
  );
};

export default page;