import React from "react";

const Step3 = ({ formData }) => {
  const { name, email, phone, address1, address2, city, state, zip } = formData;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Confirmation</h3>
      <ul className="list-disc pl-5">
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Phone:</strong> {phone}</li>
        <li><strong>Address 1:</strong> {address1}</li>
        <li><strong>Address 2:</strong> {address2}</li>
        <li><strong>City:</strong> {city}</li>
        <li><strong>State:</strong> {state}</li>
        <li><strong>Zip Code:</strong> {zip}</li>
      </ul>
    </div>
  );
};

export default Step3;
