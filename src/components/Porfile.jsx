import React, { useState } from "react";
import CardWindow from "./CardWindow";
import projectThumbnail_CRUD from "../assets/projectImage/CRUD/Thumbnail.png";
import projectThumbnail_CRUD_Re from "../assets/projectImage/CRUD_Redevelopment/Thumbnail.png";
import projectThumbnail_FoodBlog from "../assets/projectImage/FoodBlog/Thumbnail.png";
import projectThumbnail_ObjectDetection from "../assets/projectImage/ObjectDetection/Thumbnail.png";
import projectThumbnail_DataAnalysis from "../assets/projectImage/DataAnalysis/Thumbnail.png";
import projectImage_CRUD_1 from "../assets/projectImage/CRUD/Slide1.png";
import projectImage_CRUD_2 from "../assets/projectImage/CRUD/Slide2.png";
import projectImage_CRUD_3 from "../assets/projectImage/CRUD/Slide3.png";
import projectImage_CRUD_4 from "../assets/projectImage/CRUD/Slide4.png";
import projectImage_CRUD_Re_1 from "../assets/projectImage/CRUD_Redevelopment/Slide1.png";
import projectImage_CRUD_Re_2 from "../assets/projectImage/CRUD_Redevelopment/Slide2.png";
import projectImage_CRUD_Re_3 from "../assets/projectImage/CRUD_Redevelopment/Slide3.png";
import projectImage_CRUD_Re_4 from "../assets/projectImage/CRUD_Redevelopment/Slide4.png";
import projectImage_FoodBlog_1 from "../assets/projectImage/FoodBlog/Slide1.png";
import projectImage_FoodBlog_2 from "../assets/projectImage/FoodBlog/Slide2.png";
import projectImage_FoodBlog_3 from "../assets/projectImage/FoodBlog/Slide3.png";
import projectImage_FoodBlog_4 from "../assets/projectImage/FoodBlog/Slide4.png";
import projectImage_ObjectDetection_1 from "../assets/projectImage/ObjectDetection/Slide1.PNG";
import projectImage_ObjectDetection_2 from "../assets/projectImage/ObjectDetection/Slide2.PNG";
import projectImage_ObjectDetection_3 from "../assets/projectImage/ObjectDetection/Slide3.PNG";
import projectImage_ObjectDetection_4 from "../assets/projectImage/ObjectDetection/Slide4.PNG";
import projectImage_ObjectDetection_5 from "../assets/projectImage/ObjectDetection/Slide5.PNG";
import projectImage_ObjectDetection_6 from "../assets/projectImage/ObjectDetection/Slide6.PNG";
import projectImage_ObjectDetection_7 from "../assets/projectImage/ObjectDetection/Slide7.PNG";
import projectImage_ObjectDetection_8 from "../assets/projectImage/ObjectDetection/Slide8.PNG";
import projectImage_ObjectDetection_9 from "../assets/projectImage/ObjectDetection/Slide9.PNG";
import projectImage_ObjectDetection_10 from "../assets/projectImage/ObjectDetection/Slide10.PNG";
import projectImage_ObjectDetection_11 from "../assets/projectImage/ObjectDetection/Slide11.PNG";
import projectImage_ObjectDetection_12 from "../assets/projectImage/ObjectDetection/Slide12.PNG";
import projectImage_ObjectDetection_13 from "../assets/projectImage/ObjectDetection/Slide13.PNG";
import projectImage_ObjectDetection_14 from "../assets/projectImage/ObjectDetection/Slide14.PNG";
import projectImage_ObjectDetection_15 from "../assets/projectImage/ObjectDetection/Slide15.PNG";
import projectImage_ObjectDetection_16 from "../assets/projectImage/ObjectDetection/Slide16.PNG";
import projectImage_ObjectDetection_17 from "../assets/projectImage/ObjectDetection/Slide17.PNG";
import projectImage_ObjectDetection_18 from "../assets/projectImage/ObjectDetection/Slide18.PNG";
import projectImage_ObjectDetection_19 from "../assets/projectImage/ObjectDetection/Slide19.PNG";
import projectImage_ObjectDetection_20 from "../assets/projectImage/ObjectDetection/Slide20.PNG";
import projectImage_ObjectDetection_21 from "../assets/projectImage/ObjectDetection/Slide21.PNG";
import projectImage_ObjectDetection_22 from "../assets/projectImage/ObjectDetection/Slide22.PNG";
import projectImage_ObjectDetection_23 from "../assets/projectImage/ObjectDetection/Slide23.PNG";
import projectImage_ObjectDetection_24 from "../assets/projectImage/ObjectDetection/Slide24.PNG";
import projectImage_DataAnalysis_1 from "../assets/projectImage/DataAnalysis/Slide1.PNG";
import projectImage_DataAnalysis_2 from "../assets/projectImage/DataAnalysis/Slide2.PNG";
import projectImage_DataAnalysis_3 from "../assets/projectImage/DataAnalysis/Slide3.PNG";
import projectImage_DataAnalysis_4 from "../assets/projectImage/DataAnalysis/Slide4.PNG";
import projectImage_DataAnalysis_5 from "../assets/projectImage/DataAnalysis/Slide5.PNG";
import projectImage_DataAnalysis_6 from "../assets/projectImage/DataAnalysis/Slide6.PNG";
import projectImage_DataAnalysis_7 from "../assets/projectImage/DataAnalysis/Slide7.PNG";
import projectImage_DataAnalysis_8 from "../assets/projectImage/DataAnalysis/Slide8.PNG";
import projectImage_DataAnalysis_9 from "../assets/projectImage/DataAnalysis/Slide9.PNG";
import projectImage_DataAnalysis_10 from "../assets/projectImage/DataAnalysis/Slide10.PNG";
import projectImage_DataAnalysis_11 from "../assets/projectImage/DataAnalysis/Slide11.PNG";
import projectImage_DataAnalysis_12 from "../assets/projectImage/DataAnalysis/Slide12.PNG";
import projectImage_DataAnalysis_13 from "../assets/projectImage/DataAnalysis/Slide13.PNG";
import projectImage_DataAnalysis_14 from "../assets/projectImage/DataAnalysis/Slide14.PNG";
import projectImage_DataAnalysis_15 from "../assets/projectImage/DataAnalysis/Slide15.PNG";

const Porfile = () => {
  const portfolios = [
    {
      id: 1,
      src: projectThumbnail_CRUD,
      title: "Market Information SPA with RESTful Web Service",
      projectOverview:
        "The 'Market Information System' is a single-page application designed to provide users with access to market information in Hong Kong.\n\n The application allows users to perform various actions such as creating, updating, reading, and deleting market information records. The data is stored in a MySQL database and is managed through a RESTful web service. \n\nThe interface is designed as a user-friendly Single Page Application (SPA) that communicates with the RESTful web service to retrieve and manipulate data.",
      projectDescription:
        "The project comprises three main components: the client-side SPA, the RESTful API server, and the MySQL database. \n\nThe client-side SPA enables users to interact with the application, while the RESTful API server serves as an intermediary between the client and the MySQL database. \n\nThe technologies used in this project include RESTful API design, AJAX for asynchronous communication, and Single-Page Application (SPA) architecture.",
      technologiesUsed:
        "RESTful API, AJAX, Single-Page Application(SPA), XML and JSON Formats, Bootstrap, MySQL Database",
      srcDetail: [
        projectImage_CRUD_1,
        projectImage_CRUD_2,
        projectImage_CRUD_3,
        projectImage_CRUD_4,
      ],
    },
    {
      id: 2,
      src: projectThumbnail_CRUD_Re,
      title: "Front-End Rewrite with Angular and Semantic UI",
      projectOverview:
        "The redevelopment project aims to enhance the Hong Kong Market Information System by transitioning from a JavaScript-based AJAX approach to a more dynamic and efficient Angular Single-Page Application (SPA) using the MVC framework.\n\n The goal is to improve user functionality and streamline CRUD (Create, Read, Update, Delete) operations on market-related data. By leveraging Angular's capabilities, the project seeks to enhance the user experience, optimize performance, and provide a more structured architecture.",
      projectDescription:
        "The Hong Kong Market Information System SPA is designed to offer users an enhanced platform for managing market-related information in Hong Kong.\n\n The previous version of the application utilized a JavaScript-based AJAX approach, which allowed for asynchronous communication between the client and server, resulting in dynamic updates without requiring a full page reload.The new version, however, embraces the Angular MVC framework, which offers a more structured architecture for developing dynamic web applications.\n\n By compares the two approaches in terms of their pros and cons, strengths and weaknesses, and ease of maintenance. The JavaScript-based AJAX approach is praised for its simplicity and wide browser support, while the MVC framework approach, implemented using Angular, is lauded for its modular and structured architecture, code reusability, and enhanced productivity.",
      technologiesUsed:
        "Angular, MVC Architecture, TypeScript, HttpClient Module, RESTful Server and MySQL",
      srcDetail: [
        projectImage_CRUD_Re_1,
        projectImage_CRUD_Re_2,
        projectImage_CRUD_Re_3,
        projectImage_CRUD_Re_4,
      ],
    },
    {
      id: 3,
      src: projectThumbnail_FoodBlog,
      title: "Food Blog Record",
      projectOverview:
        "The 'Food Blog Note Mobile Application' is a personal mobile app designed to revolutionize the note-taking process for food blogger. The project aims to replace traditional handwritten notes and digital camera snapshots with a streamlined digital solution. \n\nThe app allows users to efficiently record and organize restaurant information, dishes, ratings, and comments. Through features like note-taking, record searching, editing, deletion, and map-based location tracking, the app provides a solution to enhance user's food blogging experience.",
      projectDescription:
        "The 'Food Blog Note Mobile Application' project is developed to cater to the needs of food blogger. This mobile app providing a platform for users to quickly and systematically record her dining experiences. The app's key features include: Note Taking,Search Record, Edit and Delete Records and Map Integration.",
      technologiesUsed:
        "React Native, Expo, SQLite, Expo Location, React Navigation, React Native Share",
      srcDetail: [
        projectImage_FoodBlog_1,
        projectImage_FoodBlog_2,
        projectImage_FoodBlog_3,
        projectImage_FoodBlog_4,
      ],
    },
    {
      id: 4,
      src: projectThumbnail_ObjectDetection,
      urlReport:
        "https://docs.google.com/document/d/1BzHL2iw8c90z2dest6Wsr7wfLBv9kxCW/edit?usp=sharing&ouid=108686739862260488338&rtpof=true&sd=true",
      urlCode:
        "https://colab.research.google.com/drive/1qmLhSbuYJHhpNF29nm8UmpSI9EJmvmE5?usp=sharing",
      title: "Comparative study of YOLOv7 and YOLOv7-X object detection model",
      projectOverview:
        "This project focuses on real-time object detection in road traffic monitoring using advanced computer vision techniques. The study compares the performance of two state-of-the-art object detection models, YOLOv7 and YOLOv7-X, in terms of accuracy, precision, recall, inference speed, and complexity. \n\nThe goal is to identify which model is better suited for specific applications and scenarios. The project aims to contribute to the development of more effective and efficient monitoring systems to enhance road safety.",
      projectDescription:
        "The rise of artificial intelligence has driven the exploration of AI-based solutions in road traffic monitoring. Traditional methods have limitations in real-time event capture, prompting the adoption of deep learning object detection models.\n\n This project specifically focuses on YOLO (You Only Look Once) models, namely YOLOv7 and YOLOv7-X, which are designed for real-time object detection with varying emphasis on accuracy and speed.",
      technologiesUsed:
        "Deep Learning Framework, Google Colab, Python, Data Collection and Preprocessing, Evaluation Metrics, Visualization",
      srcDetail: [
        projectImage_ObjectDetection_1,
        projectImage_ObjectDetection_2,
        projectImage_ObjectDetection_3,
        projectImage_ObjectDetection_4,
        projectImage_ObjectDetection_5,
        projectImage_ObjectDetection_6,
        projectImage_ObjectDetection_7,
        projectImage_ObjectDetection_8,
        projectImage_ObjectDetection_9,
        projectImage_ObjectDetection_10,
        projectImage_ObjectDetection_11,
        projectImage_ObjectDetection_12,
        projectImage_ObjectDetection_13,
        projectImage_ObjectDetection_14,
        projectImage_ObjectDetection_15,
        projectImage_ObjectDetection_16,
        projectImage_ObjectDetection_17,
        projectImage_ObjectDetection_18,
        projectImage_ObjectDetection_19,
        projectImage_ObjectDetection_20,
        projectImage_ObjectDetection_21,
        projectImage_ObjectDetection_22,
        projectImage_ObjectDetection_23,
        projectImage_ObjectDetection_24,
      ],
    },
    {
      id: 5,
      src: projectThumbnail_DataAnalysis,
      urlReport:
        "https://docs.google.com/document/d/1yV7a4_HcntnVYhMqeIUsNiBO1r-WwwG-/edit?usp=sharing&ouid=108686739862260488338&rtpof=true&sd=true",
      urlCode:
        "https://colab.research.google.com/drive/1Pxv4ADno1ety8gErZh0BrIS-jzaw6QDE?usp=sharing",
      title: "Data Analysis",
      projectOverview:
        "his project presents a comprehensive analysis of the global COVID-19 pandemic, focusing on its impact in the first half of the year. The primary goal is to provide insights into the pandemic's effects on a global scale, aiding resource persons in making informed decisions, conducting further analysis, and building upon the findings. \n\nThrough data analysis and visualization, the project assesses the performance of various countries in managing the crisis, identifies key metrics, and employs time series analysis to forecast future trends. The project's significance lies in its potential to contribute to the understanding of pandemic management strategies and preparedness for future crises.",
      projectDescription:
        "In the wake of the COVID-19 pandemic, this project delves into a thorough examination of its repercussions across the world during the initial six months. \n\nThe project begins by contextualizing the issue and addressing the problem analysis, emphasizing the project's rationale in providing valuable insights to guide decision-making. The analysis comprises three pivotal sections: Data Analysis, Solution Design, and Implementation. \n\nThe data analysis section leverages the 'covid_19_clean_complete' dataset sourced from Kaggle, which contains pertinent information on infections, deaths, recoveries, and more. The porject details data exploration and preprocessing, ensuring data quality for subsequent analysis. \n\nThe solution design involves a strategic approach encompassing data aggregation, visualization, time series analysis, and success metrics, all aimed at evaluating countries' responses to the pandemic. \n\nThe project's implementation is facilitated by Google Colab and Python 3, employing libraries like pandas, numpy, scikit-learn, matplotlib, seaborn, and statsmodels for dataset handling, analysis, and visualization.",
      technologiesUsed:
        "Google Colab, Python 3, pandas and numpy, scikit-learn, matplotlib and seaborn, statsmodels",
      srcDetail: [
        projectImage_DataAnalysis_1,
        projectImage_DataAnalysis_2,
        projectImage_DataAnalysis_3,
        projectImage_DataAnalysis_4,
        projectImage_DataAnalysis_5,
        projectImage_DataAnalysis_6,
        projectImage_DataAnalysis_7,
        projectImage_DataAnalysis_8,
        projectImage_DataAnalysis_9,
        projectImage_DataAnalysis_10,
        projectImage_DataAnalysis_11,
        projectImage_DataAnalysis_12,
        projectImage_DataAnalysis_13,
        projectImage_DataAnalysis_14,
        projectImage_DataAnalysis_15,
      ],
    },
  ];
  const [isCardOpen, setCardOpen] = useState(false);
  const [currentPortfolioId, setCurrentPortfolioId] = useState(null);

  const handleOpenCard = (id) => {
    setCurrentPortfolioId(id);
    setCardOpen(true);
  };

  const handleCloseCard = () => {
    setCardOpen(false);
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-110"
                onClick={() => handleOpenCard(id)}
              />
              <CardWindow
                isOpen={isCardOpen}
                onClose={handleCloseCard}
                portfolios={portfolios}
                currentPortfolioId={currentPortfolioId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Porfile;
