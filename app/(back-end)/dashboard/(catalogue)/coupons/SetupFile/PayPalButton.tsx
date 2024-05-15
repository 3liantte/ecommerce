import React from "react";
import { useEffect } from "react";

interface PayPalButtonProps {
  amount: number;
}

declare global {
  interface Window {
    paypal: any;
  }
}

const PayPalButton = ({ amount }: PayPalButtonProps) => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.paypal) {
      window.paypal
        .Buttons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount.toFixed(2),
                  },
                },
              ],
            });
          },
          onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              alert("Transaction completed by" + details.payer.name.givem_name);
            });
          },
        })
        .render("#paypal-button-container");
    }
  });

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
