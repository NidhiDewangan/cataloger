import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} | Created by Nidhi Dewangan</p>
    </footer>
  );
}

export default Footer;
