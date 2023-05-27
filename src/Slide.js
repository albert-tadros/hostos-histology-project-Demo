import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import Container from "react-bootstrap/Container";
import { Container, Row, Col } from "react-bootstrap";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import TextToSpeech from "./TextToSpeech";

export default function Slide({ data }) {
  // const index = data.id;
  const img = data.img;
  // const imgArr = [{ img }];
  const titleEn = data.title_en;
  const descriptionEn = data.description_en;
  const descriptionEs = data.description_es;

  const [open, setOpen] = React.useState(false);
  const fullscreenRef = React.useRef(null);

  return (
    <div>
      <div className="lightbox">
        <Row>
          <Col lg={9} md={6} sm={12}>
            <Button
              variant="primary"
              style={{ marginLeft: "5%" }}
              onClick={() => setOpen(true)}
            >
              Open Slide
            </Button>

            <Lightbox
              plugins={[
                Captions,
                Fullscreen,
                Slideshow,
                Thumbnails,
                Video,
                Zoom,
              ]}
              fullscreen={{ ref: fullscreenRef }}
              on={{
                click: () => fullscreenRef.current?.enter(),
              }}
              open={open}
              close={() => setOpen(false)}
              slides={[
                {
                  src: img,
                  alt: titleEn,
                  width: 3840,
                  height: 2560,
                },
              ]}
            />
            <TransformWrapper
              InitialScale={1}
              InitialPositionX={1}
              InitialPositionY={1}
              doubleClick={{ disabled: true }}
            >
              {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <React.Fragment>
                  <TransformComponent>
                    <img
                      src={img}
                      OnClick={() => alert()}
                      style={{
                        width: "100%",
                        padding: "1%",
                        paddingTop: "0%",
                        marginLeft: "4%",
                        marginBottom: "0%",
                      }}
                      className="slide-img"
                      alt={titleEn}
                    />
                  </TransformComponent>

                  <div style={{ marginBottom: "5%", marginLeft: "5%" }}>
                    <Button
                      variant="secondary"
                      style={{ marginRight: "2%" }}
                      onClick={() => zoomIn()}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                    <Button
                      variant="secondary"
                      style={{ marginRight: "2%" }}
                      onClick={() => zoomOut()}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </Button>
                    <Button
                      variant="secondary"
                      style={{ marginRight: "2%" }}
                      onClick={() => resetTransform()}
                    >
                      Reset
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </TransformWrapper>
          </Col>
          <Col lg={3} style={{ textAlign: "center" }}>
            <h1>{titleEn}</h1>{" "}
            <TextToSpeech
              englishText={descriptionEn}
              spanishText={descriptionEs}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
