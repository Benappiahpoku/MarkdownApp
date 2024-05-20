// HomePage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // import the CSS file

const HomePage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // TODO: Load the notes data and set the notes
  }, []);

  return (
    <div className="home-page">
      <h1>Notes</h1>
      <Link to="/create">Create a new note</Link>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
