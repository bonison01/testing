// src/pages/RedirectToDeliveryRates.jsx
import { useEffect } from "react";

const RedirectToDeliveryRates = () => {
  useEffect(() => {
    window.location.href = "https://matengmarket.com/delivery-rates";
  }, []);

  return <p>Redirecting to delivery rates...</p>;
};

export default RedirectToDeliveryRates;
