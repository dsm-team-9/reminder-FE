import React from "react";
import Book from "../assets/book.svg";
import "./Category.css";

export const Category = () => {
  return (
    <>
      <div className="Category-all">
        <img src={Book} alt="Book illustration" />

        <div className="Category-texts">
          <div className="Category__title">Category</div>
          <div className="Categotry__subject">
            <div className="Category__subject-each">math</div>
            <div className="Category__subject-each">history</div>
            <div className="Category__subject-each">science</div>
            <div className="Category__subject-each">korean</div>
            <div className="Category__subject-each">society</div>
          </div>
        </div>
      </div>
    </>
  );
};
