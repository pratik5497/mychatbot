import React from "react";

import "./../../CSS/BotOptions.css";

const CreditCardList = (props) => {
  const options = [
    { text: "112233445566", handler: props.actionProvider.ShowStolenCardOptions, id: 1 },
    { text: "665544332211", handler:props.actionProvider.ShowStolenCardOptions, id: 2 },
    
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

export default CreditCardList;