// GrammarCheckPage.js
import React, { useState } from "react";
import "./GrammarCheckPage.css"; // import the CSS file

const GrammarCheckPage = () => {
  const [text, setText] = useState("");
  const [checkedText, setCheckedText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Check the grammar of the text and set the checkedText
  };

  return (
    <div className="grammar-check-page">
      <h1>Grammar Check</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Text:
          <textarea value={text} onChange={handleTextChange} />
        </label>
        <button type="submit">Check</button>
      </form>
      <div>
        <h2>Checked Text</h2>
        <p>{checkedText}</p>
      </div>
    </div>
  );
};

export default GrammarCheckPage;
