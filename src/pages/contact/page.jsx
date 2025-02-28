import React from "react";
import Heading from "../../main components/Heading";
import AddComment from "./components/AddComment";

const Contact = () => {
  return (
    <div className="contact">
      <Heading pageName="contact" />
      <div className="map pb-10 py-[100px]">
        <div className="container mx-auto">
          <iframe
            className="w-full h-[250px] sm:h-[400px]"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
      <AddComment />
    </div>
  );
};

export default Contact;
