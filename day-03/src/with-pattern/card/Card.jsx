import React from "react";

function Card({ children }) {
  return (
    <div className="main">
      <div className="card-container">{children}</div>
    </div>
  );
}

function CardImage({ children }) {
  return <div className="card-image">{children}</div>;
}

function CardContent({children}){
   return(
     <div className="card-content">
        {children}
     </div>
   )
}

function CardHeader({ children }) {
  return (
    <div className="card-title">
      {children}
    </div>
  );
}

function CardBody({ children }) {
  return (
    <div className="card-body">
      {children}
    </div>
  );
}
function CardFooter({ children }) {
  return (
      <div className="card-actions">{children}</div>
  );
}

Card.Image = CardImage;
Card.Content = CardContent;
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
