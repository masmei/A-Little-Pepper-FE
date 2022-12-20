import React from "react";
import { Col, Card, Image } from "react-bootstrap";

export default function RecipeList({ recipe }) {
  return (
    <div>
      <Col className="overflow-hidden">
        <Card border= "light" variant="light" style={{ alignItems: "center" }}>
          <Card.Body>
            <Image roundedCircle="true" src={recipe.image} style= {{border: "2px solid #F8C771"}}/>
            <Card.Title className="mt-3">
              <Card.Link
                href={`/recipe/${recipe.id}`}
                style={{ color: "#FB8F00" }}
              >
                {recipe.title}
              </Card.Link>
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
