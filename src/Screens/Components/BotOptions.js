import React from "react";

import "./../../CSS/BotOptions.css";

const BotOptions = (props) => {
  const options = [
    { text: "Credit Card Queries", handler: props.actionProvider.handleBotOptionsList, id: 1 },
    { text: "Debit Card Queries", handler: () => {}, id: 2 },
    { text: "Account Information", handler: () => {}, id: 3 },
    { text: "Security", handler: () => {}, id: 4 },
    { text: "FAQs", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default BotOptions;