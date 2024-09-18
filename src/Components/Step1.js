import React from "react";

const Step1 = ({ formData, handleChange }) => {
  const { name, email, phone } = formData;

  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange("name")}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange("email")}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Phone</label>
        <input
          type="tel"
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter your phone number"
          value={phone}
          onChange={handleChange("phone")}
          required
        />
      </div>
    </form>
  );
};

export default Step1;
