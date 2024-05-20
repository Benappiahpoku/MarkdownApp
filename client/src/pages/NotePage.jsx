// NotePage.js
import React, { useState, useEffect } from "react";
import "./NotePage.css"; // import the CSS file

const NotePage = ({ match }) => {
  const [note, setNote] = useState(null);

  useEffect(() => {
    // TODO: Load the note data and set the note
  }, [match.params.id]);

  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <div className="note-page">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
};

export default NotePage;
