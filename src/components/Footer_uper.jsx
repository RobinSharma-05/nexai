import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ellipse_left from "../assets/images/webp/Ellipse_left.webp";
import ellipse_right from "../assets/images/webp/Ellipse_right.webp";
import circle_right from "../assets/images/webp/circle_right.webp";

const Footer_uper = () => {
  return (
    <div className="position-relative">
      <img
        className="position-absolute w-25 ellipse_eight d-none d-lg-block"
        src={ellipse_left}
        alt=""
      />
      <img
        className="position-absolute w-20 ellipse_ninth d-none d-lg-block"
        src={ellipse_right}
        alt=""
      />
      <img
        className="position-absolute circle_forth d-none d-lg-block"
        src={circle_right}
        alt=""
      />
      <Container className="md:py-5 mb-5 px-3 px-md-5" id="about">
        <div className="d-lg-flex justify-content-between align-items-center py-5">
          <h3 className="ff-recharge fs-40 text-white mx-w-520">
            Ready to get started
            <span className="green_color"> Talk to us Today</span>{" "}
          </h3>
          <Link className="butn butn__new d-inline-block ff-recharge fs-18 me-5 mt-4 mt-lg-0">
            Get Started
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Footer_uper;
