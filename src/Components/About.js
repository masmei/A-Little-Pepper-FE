import { Col, Row, Container, Image } from "react-bootstrap";
import image1 from "../Assets/image1.jpg"
import image2 from "../Assets/image2.jpg"
import image3 from "../Assets/image3.jpg"
import image4 from "../Assets/image4.jpg"
import image5 from "../Assets/image5.jpg"
import image6 from "../Assets/image6.jpg"

function About() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
        <h1>What is a Little Pepper?</h1>
        <h5 className="mt-5">A Little Pepper is an application to fight food wastage, save money, and have fun cooking a homemade meal from the very ingredients in your fridge.</h5>
        <Image className="mt-5" src={image1} style={{maxWidth:"700px"}}/>
        </Col>
      </Row>
      <Row sm={1} md={1} lg={2} className="my-5 py-5">
        <Col style={{padding:"40px"}}>
          <h2 className="mt-5">Clear Away the Clutter</h2>
          <h5 className="mt-5">Eliminate the disctractions that make recipe websites such a pain to use. Enjoy cooking without technology getting in the way.</h5>
        </Col>
        <Col >
          <Image src={image2} style={{maxWidth:"700px"}}/>
        </Col>
      </Row>
      <Row sm={1} md={2} className="my-5 py-5">
      <Col >
          <Image src={image3} style={{maxWidth:"700px"}}/>
        </Col>
      <Col style={{padding:"40px"}}>
          <h2 className="mt-5">Save Your Favorite Recipes</h2>
          <h5 className="mt-5">Bookmark all your favorite recipes in your profile.</h5>
        </Col>
      </Row>
      <Row sm={1} md={2} className="my-5 py-5">
      <Col style={{padding:"40px"}}>
          <h2 className="mt-5">Track Your Calories</h2>
          <h5 className="mt-5">Our app comes with a built in calorie tracker.Easily track your calories per meal with a click of a button.</h5>
        </Col>
        <Col >
          <Image src={image5} style={{maxWidth:"700px"}}/>
        </Col>
      </Row>
      <Row sm={1} md={2} className="my-5 py-5">
      <Col >
          <Image src={image4} style={{maxWidth:"700px"}}/>
        </Col>
      <Col style={{padding:"40px"}}>
          <h2 className="mt-5">Save Money</h2>
          <h5 className="mt-5">Eating out way too much? A Little Pepper helps you save money and cook a wholesome recipe with no hassle.</h5>
        </Col>
      </Row>
      <Row sm={1} md={2} className="my-5 py-5">
      <Col style={{padding:"40px"}}>
          <h2 className="mt-5">Stop Food Wastage</h2>
          <h5 className="mt-5">54% of food waste in New York City come from residential settings and the average household throws out 8 lbs of food each week. With A Little Pepper, you can cut down on food wastage and save your food from spoiling.</h5>
        </Col>
        <Col >
          <Image src={image6} style={{maxWidth:"700px"}}/>
        </Col>
      </Row>
    </Container>
  )
}

export default About