import React from "react";
import { Typography, Box } from "@mui/material";

const Welcome = () => {
  return (
    <div>
      <Box
        sx={{
          padding: "20px",
          color: "#333",
          backgroundColor: "#e0f7fa",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ color: "#006064" }}
        >
          Welcome to Hostos Histology Resource!
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ color: "#00838f" }}
        >
          Your Interactive Guide to Histology
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          This dynamic, bilingual web application is designed to assist our
          biology students studying histology. Tailored specifically to the
          curriculum you engage with at Hostos Community College, this tool
          brings histology study to your fingertips, aligning closely with your
          course materials to provide an immersive, accessible learning
          experience.
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Explore our rich collection of{" "}
          <strong style={{ color: "#d81b60" }}>Histology Slides</strong>, each
          accompanied by bilingual text descriptions that enhance your
          understanding of microscopic structures and their functions. Take
          advantage of the{" "}
          <strong style={{ color: "#d81b60" }}>Interactive Image Viewer</strong>{" "}
          to manipulate microscope slides virtually, simulating different
          magnifications for a realistic lab experience from your screen.
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Test your knowledge with our{" "}
          <strong style={{ color: "#d81b60" }}>
            'Check-Your-Knowledge' Quiz
          </strong>
          , designed to complement your learning and provide a quick, engaging
          way to review key histology concepts.
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          In line with our commitment to accessible learning, this application
          includes a <strong style={{ color: "#d81b60" }}>Voice Reader</strong>{" "}
          in both English and Spanish, supporting our students with vision
          impairments and those who prefer auditory learning.
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Start exploring now to enhance your understanding and appreciation of
          histology. Welcome to our community of dedicated, young histologists!
          Here's to uncovering the wonders of biology, together.
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "20px",
          marginTop: "20px",
          color: "#333",
          backgroundColor: "#fff59d",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ color: "#f57f17" }}
        >
          Epithelial Tissue Slides
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Dive into the world of epithelial tissues with our detailed slide
          collection. Each slide provides a unique view of the diverse
          epithelial types, complete with annotations and bilingual
          descriptions. Perfect for mastering the histology of epithelia, these
          slides will guide you through the intricacies of tissue structures and
          functions.
        </Typography>
        {/* Add more content or functionality here */}
      </Box>
    </div>
  );
};

export default Welcome;
