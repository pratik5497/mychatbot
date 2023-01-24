import React from "react";

import "./../../CSS/BotOptionsList.css";


const StolenCreditCardOptions = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      <button
        onClick={()=>{}}
        rel="noopener noreferrer"
        className="link-list-item-url"
      >
        {link.text}
      </button>
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default StolenCreditCardOptions;
