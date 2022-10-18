import React from "react";

const Button = ({ styles }) => (
  <button 
  type="button" 
  className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  onClick={() => window.open('mailto:email@example.com?subject=Subject&body=Hi%20Datasintesa%20team,')}
  >
    Get Started
  </button>
);

export default Button;
