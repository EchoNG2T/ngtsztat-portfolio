import React, { useState } from "react";

const CardWindow = ({ isOpen, onClose, portfolios, currentPortfolioId }) => {
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(null);

  const handleBackdropClick = (event) => {
    if (event.target.classList.contains("backdrop")) {
      onClose();
    }
  };

  const currentPortfolio = portfolios.find(
    (portfolio) => portfolio.id === currentPortfolioId
  );

  const openFullscreenImage = (index) => {
    setFullscreenImageIndex(index);
  };

  const closeFullscreenImage = () => {
    setFullscreenImageIndex(null);
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center backdrop"
    >
      <div className="w-2/3 h-2/3 bg-gray-700 text-black p-4 rounded-md flex flex-col items-center">
        <div className="bg-gradient-to-r from-teal-500 to-black w-full py-2 text-center">
          <h2 className="text-2xl font-bold mb-2 text-white">
            {currentPortfolio.title}
          </h2>
        </div>

        {/*Grid to two columns*/}
        <div className="grid grid-cols-2">
          {/*Left-hand-side grid & project detail*/}
          <div
            className="bg-gray-900 p-4 text-center overflow-hidden overflow-y-scroll hide-scrollbar"
            style={{ maxHeight: "47vh" }}
          >
            <div className="grid grid-cols-2">
              {/*Show the report if exist*/}
              {currentPortfolio.urlReport && (
                <div className="py-2">
                  <a
                    href={currentPortfolio.urlReport}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-700 text-white px-4 py-2 rounded-md"
                  >
                    Visit Report
                  </a>
                </div>
              )}
              {/*Show the report if exist*/}
              {currentPortfolio.urlCode && (
                <div className="py-2">
                  <a
                    href={currentPortfolio.urlCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-700 text-white px-4 py-2 rounded-md"
                  >
                    Visit Code
                  </a>
                </div>
              )}
            </div>
            {/*Project Overview area*/}
            <div>
              <p className="text-4xl text-white font-bold inline border-b-4 border-gray-500">
                Overview
              </p>
              <p className="py-6 text-white">
                {currentPortfolio.projectOverview
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </p>
            </div>
            {/*Project technologies used area*/}
            <div>
              <p className="text-4xl text-white font-bold inline border-b-4 border-gray-500">
                Technologies Used
              </p>
              <p className="py-6 text-white">
                {currentPortfolio.technologiesUsed}
              </p>
            </div>
            {/*Project description used area*/}
            <div>
              <p className="text-4xl text-white font-bold inline border-b-4 border-gray-500">
                Description
              </p>
              <p className="py-6 text-white">
                {currentPortfolio.projectDescription
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </p>
            </div>
          </div>
          {/*Right-hand-side grid & project screen shot or slide*/}
          <div
            className="bg-teal-800 p-4 text-center overflow-hidden overflow-y-scroll hide-scrollbar"
            style={{ maxHeight: "47vh" }}
          >
            {currentPortfolio.srcDetail.map((imageUrl, index) => (
              <div
                key={index}
                className="flex justify-center items-center hover:scale-105 duration-200"
                onClick={() => openFullscreenImage(index)}
              >
                <img
                  key={index}
                  src={imageUrl}
                  alt={`${index}`}
                  className="py-3"
                />
              </div>
            ))}
          </div>
        </div>
        {/*Close card window*/}
        <button
          className="bg-teal-600 text-white mt-7 px-4 py-2 rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      {/*Full screen view the images if clicked*/}
      {fullscreenImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black flex justify-center items-center"
          onClick={closeFullscreenImage}
        >
          <button
            className="top-1/2 h-1/4 transform -translate-y-1/8 left-4 bg-gray-800 text-white p-2 rounded-full mr-5"
            onClick={(event) => {
              event.stopPropagation();
              openFullscreenImage(
                (fullscreenImageIndex + currentPortfolio.srcDetail.length - 1) %
                  currentPortfolio.srcDetail.length
              );
            }}
          >
            &lt;&lt;&lt;
          </button>
          <div className="flex justify-center items-center h-2/3 w-2/3">
            <img
              src={currentPortfolio.srcDetail[fullscreenImageIndex]}
              alt={`Fullscreen ${fullscreenImageIndex}`}
            />
          </div>
          <button
            className="top-1/2 h-1/4 transform -translate-y-1/8 right-4 bg-gray-800 text-white p-2 rounded-full ml-5"
            onClick={(event) => {
              event.stopPropagation();
              openFullscreenImage(
                (fullscreenImageIndex + 1) % currentPortfolio.srcDetail.length
              );
            }}
          >
            &gt;&gt;&gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default CardWindow;
