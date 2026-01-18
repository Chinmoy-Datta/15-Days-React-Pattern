import React from "react";

function Card({ image, title, body, primaryAction, secondaryAction }) {
  return (
       <div className="main">
      <div className="card-container">
        <div className="card-image">
          {image}
        </div>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-body">{body}</p>
          <div className="card-actions">
            {primaryAction}
            {secondaryAction}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
