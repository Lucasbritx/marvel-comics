import React from "react";
import emailjs from "emailjs-com";

const emailHelper = async (receiverEmail: string, message: string) => {
  const result = await emailjs.send(
    `${process.env.REACT_APP_SERVICE_ID}`,
    `${process.env.REACT_APP_TEMPLATE_ID}`,
    {
      to: `${receiverEmail}`,
      message: `${message}`,
    },
    `${process.env.REACT_APP_USER_ID}`
  );

  return result.status === 200;
};

export default emailHelper;
