// import React from "react";
// import "./App.css";
// import HistologyImage from "./HistologyImage";
// import TextToSpeech from "./TextToSpeech";
// import QuizComponent from "./QuizComponent";
// import { Container, Row, Col } from "react-bootstrap";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// const Home = () => {
//   const histologyImage2 = {
//     imageUrl:
//       "https://res.cloudinary.com/dyzyp6y4d/image/upload/v1680568945/Histology/Vagina-2_cmp3va.tiff",
//     focusPoints: [
//       { id: 1, x: 1.25, y: 1.25, label: "Area1" },
//       { id: 2, x: 0.25, y: 0.25, label: "Area2" },
//     ],
//     title_en: "Vagina",
//     description_en:
//       "The vagina is a fibromuscular tube that connects the cervix of the uterus to the vestibule of the external genitalia. It is kept moist by mucus produced by cervical glands",
//     title_es: "ss",
//     description_es:
//       "El epitelio cuboideo simple consta de una monocapa de células epiteliales que parecen tener forma cuadrada en la sección transversal. Con núcleos grandes, redondeados y ubicados en el centro, todas las células de este epitelio están unidas directamente a la membrana basal.",
//   };

//   const histologyImage1 = {
//     imageUrl:
//       "https://res.cloudinary.com/dyzyp6y4d/image/upload/v1680568844/Histology/01_R01C00_CH4_Z00007_yek2n2.tiff",
//     focusPoints: [
//       { id: 1, x: 0.25, y: 0.25, label: "Area1" },
//       { id: 2, x: 1.2, y: 1.25, label: "Area2" },
//     ],
//     title_en: "Simple Cuboidal Epithelium",
//     description_en:
//       "Simple cuboidal epithelium consists of a monolayer of epithelial cells that appear to be square-shaped in cross section. With large, rounded, centrally located nuclei, all the cells of this epithelium are directly attached to the basement membrane.",
//     title_es: "ss",
//     description_es:
//       "El epitelio cuboideo simple consta de una monocapa de células epiteliales que parecen tener forma cuadrada en la sección transversal. Con núcleos grandes, redondeados y ubicados en el centro, todas las células de este epitelio están unidas directamente a la membrana basal.",
//   };

//   const buttonStyle = {
//     padding: "10px 20px",
//     backgroundColor: "#007BFF",
//     color: "white",
//     borderRadius: "5px",
//     textDecoration: "none",
//     display: "inline-block",
//     marginBottom: "20px",
//     alignItems: "center",
//   };

//   return (
//     <div className="App">
//       <Container fluid>
//         <Row>
//           <Col lg={9} md={6} sm={12} style={{ marginBottom: "3%" }}>
//             <HistologyImage
//               imageUrl={histologyImage1.imageUrl}
//               focusPoints={histologyImage1.focusPoints}
//             />
//           </Col>
//           <Col lg={3}>
//             {/* <h1>{histologyImage1.title}</h1>{" "}
//             <p>{histologyImage1.description}</p>{" "} */}
//             <h1>{histologyImage1.title_en}</h1>
//             <TextToSpeech
//               englishText={histologyImage1.description_en}
//               spanishText={histologyImage1.description_es}
//             />
//           </Col>
//         </Row>
//         <Row style={{ marginBottom: "5%" }}>
//           <Col lg={9} md={6} sm={12}>
//             <HistologyImage
//               imageUrl={histologyImage2.imageUrl}
//               focusPoints={histologyImage2.focusPoints}
//             />
//           </Col>
//           <Col lg={3}>
//             <h1>{histologyImage2.title_en}</h1>{" "}
//             <TextToSpeech
//               englishText={histologyImage1.description_en}
//               spanishText={histologyImage1.description_es}
//             />
//           </Col>
//         </Row>
//       </Container>
//       <Link to="/quiz" style={buttonStyle}>
//         Go to Quiz Page
//       </Link>
//     </div>
//   );
// };

// export default Home;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Home.js for Demo

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Slide from "./Slide";
import HistoData from "./histodata";
import QuizComponent from "./QuizComponent";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "./navbar";
import { Container } from "react-bootstrap";
import Welcome from "./welcome";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./index";

const histoData = HistoData;
let fetchData = histoData.map((data) => {
  return <Slide data={data} />;
});

const goToQuizBox = {
  padding: "10px 20px",
  borderRadius: "5px",
  textDecoration: "none",
  display: "flex",
  marginBottom: "1%",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: "#4CAF50",
};
const buttonStyle = {
  color: "white",
  backgroundColor: "#4CAF50",
  borderColor: "#4CAF50",
};

const textStyle = {
  fontSize: "20px",
  padding: "2%",
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <div className="container">{fetchData}</div>
      <div className="d-grid gap-2" style={goToQuizBox}>
        <Card>
          <Card.Title style={textStyle}>Check Your knowledge</Card.Title>
          <Card.Text style={textStyle}>
            We've created a multiple-choice quiz to help you engage more with
            the materials. We recommend that you study the histology slides and
            its background information, then take the quiz to reenforce your
            learning.
          </Card.Text>
          <Card.Body>
            <Button style={buttonStyle} href="/quiz" size="lg">
              Click to Take the Quiz
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
