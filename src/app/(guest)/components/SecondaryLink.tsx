import Link from "next/link";
import React from "react";

interface Props {
  content: string;
  link: string;
}

function SecondaryLink({ content, link }: Props) {
  return (
    <div className="flex justify-end">
      <Link href={link}>
        <span className="text-purple-800 poppins font-bold hover:underline">
          {content}
        </span>
      </Link>
    </div>
  );
}

export default SecondaryLink;
