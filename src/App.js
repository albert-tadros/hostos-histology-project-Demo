// import React from "react";
// import HistologyImage from "./HistologyImage";
// import { Container, Row, Col } from "react-bootstrap";
// import "./App.css";

// const focusPoints1 = [
//   { label: "A", x: 0.1, y: 0.1 },
//   { label: "B", x: 0.5, y: 0.5 },
//   { label: "C", x: 0.9, y: 0.9 },
// ];

// const focusPoints2 = [
//   { label: "Stains", x: 0.2, y: 0.2 },
//   { label: "E", x: 0.4, y: 0.4 },
//   { label: "F", x: 0.6, y: 0.6 },
// ];

// function App() {
//   return (
//     <div className="App">
//       <div className="histology-container">
//         <HistologyImage
//           imageUrl="https://res.cloudinary.com/dyzyp6y4d/image/upload/v1680568945/Histology/Vagina-2_cmp3va.tiff"
//           width={800}
//           height={600}
//           focusPoints={focusPoints1}
//         />
//         <HistologyImage
//           imageUrl="https://res.cloudinary.com/dyzyp6y4d/image/upload/v1680568844/Histology/01_R01C00_CH4_Z00007_yek2n2.tiff"
//           width={800}
//           height={600}
//           focusPoints={focusPoints2}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import HistologyImage from "./HistologyImage";
// import { Container, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import useResizeObserver from "./useResizeObserver";
// import axios from "axios";
// import * as GeoTIFF from "geotiff";

// const histologyImage1 = {
//   imageUrl:
//     "https://res.cloudinary.com/dyzyp6y4d/image/upload/v1680568945/Histology/Vagina-2_cmp3va.tiff",
//   focusPoints: [
//     { id: 1, x: 0.25, y: 0.25, label: "A" },
//     { id: 2, x: 0.75, y: 0.25, label: "B" },
//   ],
//   title: "Simple Cuboidal Epithelium",
//   description:
//     "Simple cuboidal epithelium consists of a monolayer of epithelial cells that appear to be square-shaped in cross section. With large, rounded, centrally located nuclei, all the cells of this epithelium are directly attached to the basement membrane.",
// };

// const histologyImage2 = {
//   imageUrl:
//     "https://res.cloudinary.com/dyzyp6y4d/image/upload/v1680568844/Histology/01_R01C00_CH4_Z00007_yek2n2.tiff",
//   focusPoints: [
//     { id: 1, x: 0.25, y: 0.25, label: "C" },
//     { id: 2, x: 0.75, y: 0.25, label: "D" },
//   ],
//   title: "Simple Cuboidal Epithelium",
//   description:
//     "Simple cuboidal epithelium consists of a monolayer of epithelial cells that appear to be square-shaped in cross section. With large, rounded, centrally located nuclei, all the cells of this epithelium are directly attached to the basement membrane.",
// };

// const getImageDimensions = async (url) => {
//   return new Promise(async (resolve) => {
//     const response = await axios.get(url, {
//       responseType: "arraybuffer",
//     });
//     const tiff = await GeoTIFF.fromArrayBuffer(response.data);
//     const image = await tiff.getImage();
//     resolve({ width: image.getWidth(), height: image.getHeight() });
//   });
// };

// function App() {
//   const [colRef, colSize] = useResizeObserver();
//   const [colRef1, colSize1] = useResizeObserver();
//   const [image1Height, setImage1Height] = useState(null);
//   const [image2Height, setImage2Height] = useState(null);
//   const [scaleFactor, setScaleFactor] = useState(1);

//   useEffect(() => {
//     const fetchImageDimensions = async () => {
//       const dimensions = await getImageDimensions(histologyImage1.imageUrl);
//       if (colSize.width && dimensions.width) {
//         setScaleFactor(colSize.width / dimensions.width);
//       }
//     };

//     fetchImageDimensions();
//   }, [colSize.width]);

//   useEffect(() => {
//     const updateImageHeight = async (imageUrl, setSize) => {
//       if (colSize.width) {
//         const dimensions = await getImageDimensions(imageUrl);
//         const aspectRatio = dimensions.height / dimensions.width;
//         setSize(colSize.width * aspectRatio);
//       }
//     };

//     updateImageHeight(histologyImage1.imageUrl, setImage1Height);
//   }, [colSize.width]);

//   useEffect(() => {
//     const updateImageHeight = async (imageUrl, setSize) => {
//       if (colSize1.width) {
//         const dimensions = await getImageDimensions(imageUrl);
//         const aspectRatio = dimensions.height / dimensions.width;
//         setSize(colSize1.width * aspectRatio);
//       }
//     };

//     updateImageHeight(histologyImage2.imageUrl, setImage2Height);
//   }, [colSize1.width]);

//   return (
//     <div className="App">
//       <Container>
//         <Row>
//           <Col lg={10} ref={colRef} style={{ marginBottom: "5%" }}>
//             {colSize.width && image1Height && (
//               <HistologyImage
//                 imageUrl={histologyImage1.imageUrl}
//                 width={colSize.width}
//                 height={image1Height}
//                 focusPoints={histologyImage1.focusPoints}
//               />
//             )}
//           </Col>
//           <Col lg={2}>
//             <h1>{histologyImage1.title}</h1>{" "}
//             <p>{histologyImage1.description}</p>
//           </Col>
//         </Row>
//         <Row>
//           <Col lg={10} ref={colRef1} style={{ marginBottom: "5%" }}>
//             {colSize1.width && image2Height && (
//               <HistologyImage
//                 imageUrl={histologyImage2.imageUrl}
//                 width={colSize1.width}
//                 height={image2Height}
//                 focusPoints={histologyImage2.focusPoints}
//               />
//             )}
//           </Col>
//           <Col lg={2}>
//             <h1>{histologyImage2.title}</h1>{" "}
//             <p>{histologyImage2.description}</p>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default App;

// This is the working code

// import React from "react";
// import "./App.css";
// import HistologyImage from "./HistologyImage";
// import TextToSpeech from "./TextToSpeech";
// import QuizComponent from "./QuizComponent";
// import { Container, Row, Col } from "react-bootstrap";

// const App = () => {
//   const histologyImage1 = {
//     imageUrl:
//       "https://res.cloudinary.com/dyzyp6y4d/image/upload/v1680568945/Histology/Vagina-2_cmp3va.tiff",
//     focusPoints: [
//       { id: 1, x: 1.25, y: 1.25, label: "Area1" },
//       { id: 2, x: 0.25, y: 0.25, label: "Area2" },
//     ],
//     title_en: "Simple Cuboidal Epithelium",
//     description_en:
//       "Simple cuboidal epithelium consists of a monolayer of epithelial cells that appear to be square-shaped in cross section. With large, rounded, centrally located nuclei, all the cells of this epithelium are directly attached to the basement membrane.",
//     title_es: "ss",
//     description_es:
//       "El epitelio cuboideo simple consta de una monocapa de células epiteliales que parecen tener forma cuadrada en la sección transversal. Con núcleos grandes, redondeados y ubicados en el centro, todas las células de este epitelio están unidas directamente a la membrana basal.",
//   };

//   const histologyImage2 = {
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

//   return (
//     <div className="App">
//       <Container fluid>
//         <Row>
//           <Col lg={9} md={6} sm={12}>
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
//       <Container>
//         <Row>
//           <QuizComponent />
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default App;

// Routes
import React from "react";
import Home from "./Home";
import QuizComponent from "./QuizComponent";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* Your existing App content */}

        {/* Add a styled Link component to navigate to the QuizComponent */}

        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
