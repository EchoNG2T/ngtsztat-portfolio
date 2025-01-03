import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4dqkkwx", "template_u5yucs2", form.current, {
        publicKey: "OdjqyabxSOnN70kTW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Please enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-while focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Please enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-while focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:putline-none"
              placeholder="Please enter your message here"
            ></textarea>

            <input
              type="submit"
              value="Message me :)"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
