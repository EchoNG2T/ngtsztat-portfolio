import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          During my studies in BSc (Hons) Information Technology and Higher
          Diploma in Software Engineering, I gained a solid foundation in HTML,
          CSS, JavaScript, and other web technologies. I also had the
          opportunity to work on various projects, both independently and in
          team settings, where I developed practical skills in front-end and
          back-end development.
        </p>
        <br />
        <p className="text-xl">
          As a dedicated learner, I am committed to staying up-to-date with the
          latest trends and technologies in the field of web development. I am
          eager to expand my knowledge and skills in frameworks such as React,
          Angular, and Node.js.
        </p>
        <br />
        <p className="text-xl">
          I am now actively seeking opportunities to kick-start my career in web
          development, where I can contribute my enthusiasm, creativity, and
          technical skills. If you are looking for a motivated and dedicated web
          developer, I would love to connect and discuss how I can be a valuable
          addition to your team.
        </p>
      </div>
    </div>
  );
};

export default About;
