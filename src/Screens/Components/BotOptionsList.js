import React from "react";

import "./../../CSS/BotOptionsList.css";


const BotOptionsList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      <button
        onClick={props.actionProvider.ShowCardsList}
        target="_blank"
        rel="noopener noreferrer"
        className="link-list-item-url"
      >
        {link.text}
      </button>
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default BotOptionsList;
