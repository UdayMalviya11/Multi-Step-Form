import React from "react";

const Step2 = ({ formData, handleChange }) => {
  const { address1, address2, city, state, zip } = formData;

  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Address Line 1</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter your address"
          value={address1}
          onChange={handleChange("address1")}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Address Line 2</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter your address"
          value={address2}
          onChange={handleChange("address2")}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">City</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter your city"
          value={city}
          onChange={handleChange("city")}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">State</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter your state"
          value={state}
          onChange={handleChange("state")}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Zip Code</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter your zip code"
          value={zip}
          onChange={handleChange("zip")}
          required
        />
      </div>
    </form>
  );
};

export default Step2;
