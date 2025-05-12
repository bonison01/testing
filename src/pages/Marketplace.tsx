import { useEffect } from "react";

const Marketplace = () => {
  useEffect(() => {
    window.location.href = "https://matengmarket.com/delivery-rates";
  }, []);

  return <p>Redirecting to delivery rates...</p>;
};

export default Marketplace;