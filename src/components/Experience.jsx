import React from "react";
import htmlImage from "../assets/experienceImage/html.png";
import javascriptImage from "../assets/experienceImage/javascript.png";
import reactImage from "../assets/experienceImage/react.png";
import tailwindImage from "../assets/experienceImage/tailwind.png";
import bootstrapImage from "../assets/experienceImage/bootstrap.png";
import angularImage from "../assets/experienceImage/angular.png";
import mysqlImage from "../assets/experienceImage/mysql.png";
import semanticImage from "../assets/experienceImage/SemanticUI.png";
import typescriptImage from "../assets/experienceImage/typescript.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: angularImage,
      title: "Angular",
      style: "shadow-red-600",
    },
    {
      id: 2,
      src: reactImage,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: mysqlImage,
      title: "MySQL",
      style: "shadow-white",
    },
    {
      id: 4,
      src: bootstrapImage,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },
    {
      id: 5,
      src: tailwindImage,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: semanticImage,
      title: "Semantic UI",
      style: "shadow-blue-300",
    },
    {
      id: 7,
      src: javascriptImage,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 8,
      src: typescriptImage,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: htmlImage,
      title: "HTML",
      style: "shadow-orange-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've learned</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
