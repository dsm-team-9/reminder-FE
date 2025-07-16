import React, { useState } from "react";
import Book from "../assets/book.svg";
import "./Category.css";

export const Category = () => {
  const [selectedSubject, setSelectedSubject] = useState("math");

  const subjects = ["all", "math", "history", "science", "korean", "society"];

  return (
    <div className="Category-all">
      <img src={Book} alt="Book illustration" />

      <div className="Category-texts">
        <div className="Category__title">Category</div>
        <div className="Category__subject">
          {subjects.map((subject) => (
            <div
              key={subject}
              className="Category__subject-each"
              style={{
                color: selectedSubject === subject ? "#1C1F42" : "#5F6074",
              }}
              onClick={() => setSelectedSubject(subject)}
            >
              {subject}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
