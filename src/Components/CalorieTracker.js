import { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function CalorieTracker({
  profile,
  totCal,
  setTotCal,
  totFat,
  setTotFat,
  totCarb,
  setTotCarb,
  totProtein,
  setTotProtein,
}) {
  const [recipes, setRecipes] = useState([]);
  const [diet, setDiet] = useState("Average");
  const [dietInfo, setDietInfo] = useState(
    "This is the default diet that most individuals follow with a balanced ratio of carbohydrates, fats, and protein. This is typically used when a person does not have any specific goals in mind as this is a perfect diet to maintain weight. This assumes that the individual spends the reccomended 30 mminutes of daily activies"
  );

  let calSum = 0;
  let calArr = recipes.map((recipe) => Number(recipe.cal));
  calArr.forEach((amount) => {
    calSum += amount;
    return calSum;
  });

  useEffect(() => {
    // handleDiet()
  }, [diet, dietInfo]);

  const handleDiet = (e) => {
    setDiet(e.target.value);
    console.log(diet);
    if (diet === "Average") {
      setTotCal(2000);
      setTotFat(55.56);
      setTotCarb(275);
      setTotProtein(125);
      setDietInfo(
        "This is the default diet that most individuals follow with a balanced ratio of carbohydrates, fats, and protein. This is typically used when a person does not have any specific goals in mind as this is a perfect diet to maintain weight. This assumes that the individual spends the reccomended 30 mminutes of daily activies"
      );
    } else if (diet === "Athlete") {
      setTotCal(3000);
      setTotFat(83.33);
      setTotCarb(337);
      setTotProtein(225);
      setDietInfo(
        "An athlete diet is for individuals who are active exercising, this includes any type of dynamic movments or muscle-building. The main focus of this diet is high protein consumption to ensure healthy muscle building and enough carbohydrates to maintain energy for these activities."
      );
    } else if (diet === "Weight-Loss") {
      setTotCal(1500);
      setTotFat(25);
      setTotCarb(187.5);
      setTotProtein(131.25);
      setDietInfo(
        "This diet is gears toward individuals are looking to lose some belly fat. This assumes the individual is meeting the daily reccomended 30 minutes of activies, if not more to ensure burning more calories than you consume."
      );
    } else if (diet === "Keto") {
      setTotCal(2000);
      setTotFat(155.56);
      setTotCarb(25);
      setTotProtein(125);
      setDietInfo(
        "A keto diet is unique as this diet is geared toward eliminating carbohydrates and high consumption of fat and protein. By eliminating carbohydrates from the diet, it forces your body to use fat for energy. This is a very good diet for weight-loss as now your body has a consistent fuel source from your fat reserves, which allows you to be less hungry, meaning less calories consumed. Note that when you start a keto diet, the initial weight loss is water weight."
      );
    }
  };

  return (
    <div>
      <div>
        <h2>Tracker</h2>
        <Row className="justify-content-center g-2">
          <ProgressBar
            style={{ width: "51%", height:"30px", fontSize: "20px"}}
            striped
            animated
            variant="success"
            now={(profile.cal / totCal) * 100}
            label={`Calories`}
          />
          <ProgressBar
            style={{ width: "51%", height:"30px", fontSize: "20px" }}
            striped
            animated
            variant="info"
            now={(profile.fat / totFat) * 100}
            label={`Fat`}
          />
          <ProgressBar
            style={{ width: "51%", height:"30px", fontSize: "20px" }}
            striped
            animated
            variant="warning"
            now={(profile.carb / totCarb) * 100}
            label={`Carbs`}
          />
          <ProgressBar
            style={{ width: "51%", height:"30px", fontSize: "20px" }}
            striped
            animated
            variant="danger"
            now={(profile.protein / totProtein) * 100}
            label={`Protein`}
          />
        </Row>

        <div
          className="mt-4 d-flex align-items-center justify-content-center"
          style={{ gap: ".5rem" }}
        >
          <Button variant="outline-dark" onClick={handleDiet} value={"Average"}>
            Average
          </Button>

          <Button variant="outline-dark" onClick={handleDiet} value={"Athlete"}>
            Athlete
          </Button>

          <Button
            variant="outline-dark"
            onClick={handleDiet}
            value={"Weight-Loss"}
          >
            Weight-Loss
          </Button>

          <Button variant="outline-dark" onClick={handleDiet} value={"Keto"}>
            Keto
          </Button>
        </div>
        <Container className= "mt-3" style={{maxWidth:"700px"}}>
          <h4 style={{color:"#FB8F00"}}>Current Diet: {diet}</h4>
          <h5>{dietInfo}</h5>
        </Container>
      </div>
    </div>
  );
}
