"use client";

import React, { useState } from "react";

const Settings = () => {
  const [paymentMethods, setPaymentMethods] = useState<string[]>([
    "Cresit Card",
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
    const newPaymentMehtods = [...paymentMethods];
    newPaymentMehtods[index] = event.target.value;
    setPaymentMethods(newPaymentMehtods);
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Setting</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Payment Methods</h2>
        {paymentMethods.map((method, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              value={method}
              onChange={(e) => handlePaymentChange(e, index)}
              className="border p-2 w-full"
              placeholder="Enter payment method"
            />
          </div>
        ))}
        <button
          onClick={addPaymentMethod}
          className="bg-green-500 text-slate-50 p-2 rounded"
        >
          Add Payment Method
        </button>
      </div>
    </div>
  );
};

export default Settings;
