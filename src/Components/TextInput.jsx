import React from "react";

function TextInput({ title, placeholder, type, getFunction }) {
  return (
    <div className="mt-4">
      <h1 className="py-2">{title}</h1>
      <input type="text" placeholder={placeholder} className="w-full py-4 px-4 bg-[#F2F2F4] focus:outline-none"  />
    </div>
  );
}

export default TextInput;
