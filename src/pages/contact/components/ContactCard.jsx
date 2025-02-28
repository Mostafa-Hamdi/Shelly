import React from "react";
const ContactCard = ({ img, heading, data }) => {
  return (
    <div className="contact-card flex items-center gap-3 mb-5">
      <img src={img} alt="" />
      <div>
        <h3 className="mb-1 font-semibold">{heading}</h3>
        <p className="text-[var(--gray-color)] text-[15px]">{data}</p>
      </div>
    </div>
  );
};

export default ContactCard;
