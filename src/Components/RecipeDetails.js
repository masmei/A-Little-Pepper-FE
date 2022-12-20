import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Col, Row, Container, Card, Button} from "react-bootstrap";
import { UserAuth } from "../Context/AuthContext";
import axios from "axios";
import image1 from "../Assets/logo.png";


const ACCESS_POINT = process.env.REACT_APP_ACCESS_POINT;
const API_KEY = process.env.REACT_APP_API_KEY;
const API = process.env.REACT_APP_API_URL;

export default function RecipeDetails() {
  const [nutrition, setNutrition] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [prices, setPrices] = useState([]);
  const [calorie, setCalorie] = useState('')
  const [recipe, setRecipe] = useState([]);

  let { id } = useParams();
  const { user } = UserAuth();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=9ab6abef58ff4088ab12f31009f1a8a9`
      ).then((res) => {
        setRecipe(res.data);
      })
      .catch((error) => console.error(error));

    axios
      .get(`${ACCESS_POINT}/${id}/nutritionWidget.json?apiKey=${API_KEY}`)
      .then((res) => {
        setNutrition(res.data)
        setCalorie(res.data.calories)
      })
      .catch((error) => console.error(error));

    axios
      .get(`${ACCESS_POINT}/${id}/ingredientWidget.json?apiKey=${API_KEY}`)
      .then((res) => setIngredients(res.data))
      .catch((error) => console.error(error));

    axios
      .get(`${ACCESS_POINT}/${id}/analyzedInstructions?apiKey=${API_KEY}`)
      .then((res) => {
        setInstructions(res.data[0].steps);
      })
      .catch((error) => console.error(error));

    axios
      .get(`${ACCESS_POINT}/${id}/priceBreakdownWidget.json?apiKey=${API_KEY}`)
      .then((res) => setPrices(res.data.ingredients))
      .catch((error) => console.error(error));

  }, [id]);


  const handleBookmark = () => {
    if (profile.recipes.includes(id)) {
      alert("Already Bookmarked!")
      return
    }
    let savedRecipes = [];
    if (profile.recipes.length < 1) {
      savedRecipes = [id];
    } else {
      savedRecipes = [...profile.recipes, id];
    }
    axios
      .put(`${API}/profiles/${user.uid}`, {
        uid: user.uid,
        name: user.displayName,
        cal: profile.cal,
        fat: profile.fat,
        carb: profile.carb,
        protein: profile.protein,
        recipes: savedRecipes,
      })
      .then(() => {
        console.log("update sent");
      });
  };

  const makeNum = (str) => {
    return str.replace(/\D/g, '') * 1;
  }

  const handleTrack = () => {
    let newCal = profile.cal + makeNum(nutrition.calories);
    let newFat = profile.fat + makeNum(nutrition.fat);
    let newCarb = profile.carb + makeNum(nutrition.carbs);
    let newProtein = profile.protein + makeNum(nutrition.protein);

    console.log(newCal)
    console.log(newFat)
    console.log(newCarb)
    console.log(newProtein)

    axios
      .put(`${API}/profiles/${user.uid}`, {
        uid: user.uid,
        name: user.displayName,
        cal: newCal,
        fat: newFat,
        carb: newCarb,
        protein: newProtein,
        recipes: profile.recipes,
      })
      .then(() => {
        console.log("update sent");
      });
  };

  useEffect(() => {
    if (user) {
      axios.get(`${API}/profiles/${user.uid}`).then((response) => {
        setProfile(response.data);
      });
    }
  }, [user]);

  let ingredient = ingredients.ingredients;
  let price = prices;

  let priceSum = 0;
  let priceArr = price.map((item) => Number(item.price));
  priceArr.forEach((amount) => {
    priceSum += amount;
    return priceSum;
  });

  console.log(calorie)

  return (
    <Container className="py-4">
      <h6>Hello {profile.name}!</h6>
      <Row className="py-3">
        <Col>
          <p>Recipe ID:{id}</p>
          <img src={recipe.image} width="500px" alt={recipe.name} />
        </Col>
        <Col className="mt-5">
          <h2>{recipe.title}</h2>
          <h4 style={{ color: "#FB8F00" }}>Nutritional Information</h4>
          <section>
            <p>Calorie: {makeNum(calorie)} calories</p>
            <p>Fat: {nutrition.fat}</p>
            <p>Carbohydrates: {nutrition.carbs}</p>
            <p>Protein: {nutrition.protein}</p>
          </section>
          {profile.id ? (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: ".5rem" }}
            >
              <Button size="lg" variant="outline-danger" onClick={handleTrack}>
                Track
              </Button>
              <Button size="lg" variant="outline-dark" onClick={handleBookmark}>
                Bookmark
              </Button>
            </div>
          ) : (
            <></>
          )}
        </Col>
      </Row>
      <Row className="py-5">
        <Col>
          <article>
            <Card
              variant="light"
              style={{ alignItems: "center" }}
            >
              <Card.Title>
                <h3 style={{ color: "#FB8F00" }}>
                Ingredients
                  </h3></Card.Title>
            {ingredient &&
              ingredient.map((item) => {
                return (
                    <Card.Text>
                      {item.amount.us.value} {item.amount.us.unit} of{" "}
                      {item.name}{" "}
                    </Card.Text>
                );
              })}
              </Card>
          </article>
        </Col>
        <Col>
          <article>
            <Card
              variant="light"
              style={{ alignItems: "center" }}
            >
              <Card.Title>
          <h3 style={{ color: "#FB8F00" }}>Ingredients Price Breakdown</h3>
          </Card.Title>
            {price &&
              price.map((item) => {
                return (
                    <Card.Text>
                      {item.amount.us.value} {item.amount.us.unit} {item.name} : ${(Math.round(10 * item.price) / 1000).toFixed(2)}{" "}
                    </Card.Text>
                );
              })}
            <h3 style={{color: "#FB8F00"}}>Total Cost: ${(Math.round(10 * priceSum) / 1000).toFixed(2)}</h3>
              </Card>
          </article>
        </Col>
      </Row>
  
      <article>
        <Card
          variant="light"
        > <Card.Title>
          <h3 style={{ color: "#FB8F00" }}>Instructions</h3>
        </Card.Title>
        {instructions &&
          instructions.map((instruction) => {
            return (
                <Card.Text>
                  Step {instruction.number}: {instruction.step}
                </Card.Text>
            );
          })}
          </Card>
      </article>
    </Container>

  );
}