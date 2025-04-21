import React from "react";
// import "./Card.css"; // optional for per-component styling

const Card = ({ title, children, onRemove, onTypeChange, type }) => (
  <div className="card">
    {title && <h3>{title}</h3>}
    <div className="card-content">
      {children}
      {onTypeChange && (
        <select value={type} onChange={(e) => onTypeChange(e.target.value)}>
          <option value="empty">Select Widget</option>
          <option value="cloud">Cloud</option>
          <option value="risk">Risk</option>
          <option value="image">Image</option>
        </select>
      )}
    </div>
    {onRemove && (
      <button className="remove-widget" onClick={onRemove}>
        ✖
      </button>
    )}
  </div>
);

export default Card;
