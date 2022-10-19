import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us";
  });
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
};

export default Contact;
