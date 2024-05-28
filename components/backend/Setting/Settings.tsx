"use client";

import React, { useState } from "react";

const Settings = () => {
  const [paymentMethods, setPaymentMethods] = useState<string[]>([
    "Credit Card",
    "PayPal",
  ]);
  const [shippingOptions, setShippingOptions] = useState<string[]>([
    "Standard",
    "Express",
  ]);
  const [taxRate, setTaxRate] = useState<number>(15);
  const [isReadOnly, setIsReadOnly] = useState<boolean>(false);

  const handlePaymentChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newPaymentMethods = [...paymentMethods];
    newPaymentMethods[index] = event.target.value;
    setPaymentMethods(newPaymentMethods);
  };

  const addPaymentMethod = () => {
    setPaymentMethods([...paymentMethods, ""]);
  };

  const handleShippingChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newShippingOptions = [...shippingOptions];
    newShippingOptions[index] = event.target.value;
    setShippingOptions(newShippingOptions);
  };

  const addShippingOption = () => {
    setShippingOptions([...shippingOptions, ""]);
  };

  const handleTaxRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaxRate(Number(event.target.value));
  };

  const handleSaveSettings = () => {
    console.log("Settings saved:", {
      paymentMethods,
      shippingOptions,
      taxRate,
    });
  };

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="grid grid-cols-2 gap-4">
        {" "}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Payment Methods</h2>
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="mb-4 flex flex-col md:flex-row md:items-center"
            >
              <input
                type="text"
                value={method}
                onChange={(e) => handlePaymentChange(e, index)}
                className="border p-3 w-full md:w-auto md:flex-grow rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
                placeholder="Enter payment method"
              />
            </div>
          ))}
          <button
            onClick={addPaymentMethod}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md transition-colors duration-300"
          >
            Add Payment Method
          </button>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Shipping Options</h2>
          {shippingOptions.map((option, index) => (
            <div
              key={index}
              className="mb-4 flex flex-col md:flex-row md:items-center"
            >
              <input
                type="text"
                value={option}
                onChange={(e) => handleShippingChange(e, index)}
                className="border p-3 w-full md:w-auto md:flex-grow rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
                placeholder="Enter shipping option"
              />
            </div>
          ))}
          <button
            onClick={addShippingOption}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md transition-colors duration-300"
          >
            Add Shipping Option
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tax Rate</h2>
        <input
          type="text"
          value={taxRate}
          onChange={handleTaxRateChange}
          className="border p-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
          placeholder="Enter tax rate"
        />
      </div>
      <button
        onClick={handleSaveSettings}
        className="bg-green-600 hover:bg-green-700 text-white p-3 w-full md:w-auto rounded-md transition-colors duration-300"
      >
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
