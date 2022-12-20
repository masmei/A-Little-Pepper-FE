import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import axios from "axios";

function RecipeCard({ recipe }) {
  const [recipeInfo, setRecipeInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${recipe}/information?apiKey=9ab6abef58ff4088ab12f31009f1a8a9`
      )
      .then((res) => {
        setRecipeInfo(res.data);
        console.log(recipeInfo);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Col>
        <Card variant="light" style={{ alignItems: "center", background: "#F8C771"}}>
          <Card.Img
            className="py-3"
            variant="top"
            src={recipeInfo.image}
            style={{ width: "250px", borderRadius: "50%" }}
          />
          <Card.Body>
            <Card.Title>
              <Card.Link
                href={`/recipe/${recipeInfo.id}`}
                style={{ color: "red" }}
              >
                {recipeInfo.title}
              </Card.Link>
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default RecipeCard;
