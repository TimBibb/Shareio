import React from "react";
export function NameFields({ handleChange, formData }) {
  return (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="firstname">
          First Name
        </label>
        <input
          id="firstname"
          name="firstname"
          type="text"
          value={formData.firstname}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-gray-700 border border-indigo-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="lastname">
          Last Name
        </label>
        <input
          id="lastname"
          name="lastname"
          type="text"
          value={formData.lastname}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-gray-700 border border-indigo-300 rounded"
        />
      </div>
    </>
  );
}
