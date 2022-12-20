import { Row, Form, Button } from "react-bootstrap";
import pepper from "../Assets/chili-pepper.png";
import { useState } from "react";
import axios from "axios";
import About from "../Components/About";
import padThai from "../Assets/pad-thai.png";


import Recipe from "../Components/Recipe";

const ACCESS_POINT = process.env.REACT_APP_ACCESS_POINT;
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Homepage() {
  const [recipes, setRecipes] = useState([]);
  const [input1, setInput1] = useState("");

  const getRecipes = () => {
    axios
      .get(
        `${ACCESS_POINT}/findByIngredients?apiKey=${API_KEY}&ingredients=${input1}`
      )
      .then((res) => setRecipes(res.data))
      .catch((error) => console.error(error));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setInput1(input1);

    getRecipes();
  };

  console.log(recipes);

  return (
    <div className="my-5">
      <div>
        <img src={padThai} width="30%" />
        <h1 className="mt-4">Search for a recipe</h1>
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <main
              className="col-lg-12 mx-auto py-3"
              style={{ maxWidth: "350px" }}
            >
              <div className="content mx-auto">
                <Row className="g-6">
                  <Form.Label>
                    <h5>
                    Enter your ingredients seperated by commas
                    </h5>
                  </Form.Label>
                  <Form.Control
                    className="mb-3"
                    size="lg"
                    type="text"
                    onChange={(e) => setInput1(e.target.value)}
                    value={input1}
                    placeholder="example: chicken,flour,salt"
                    required
                  />
                  <div>
                    <Button
                      type="submit"
                      style={{ maxWidth: "250px", background:"#f90f0d"}}
                      variant="danger"
                      size="lg"
                    >
                      Let's Get Spicy
                      <img
                        style={{ marginLeft: "5px" }}
                        src={pepper}
                        width="25"
                        height="25"
                      />
                    </Button>
                  </div>
                </Row>
              </div>
            </main>
          </div>
        </Form>
      </div>
      <article>
        <Row xs={1} md={2} lg={3} className="g-5 py-5 mx-auto">
          {recipes.map((recipe) => {
            return (
              <>
                <Recipe recipe={recipe} />
              </>
            );
          })}
        </Row>
      </article>
      <About />
    </div>
  );
}
