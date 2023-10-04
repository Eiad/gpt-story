import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div>Privacy Content</div>
      <div>{currentYear}</div>
    </div>
  );
}

export default Footer;
