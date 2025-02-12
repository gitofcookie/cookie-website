import React from "react";
import Navbar from "../components/Navbar/Navbar";
import hero_animation from "../../assets/animations/hero_animation.json";
import Lottie from "lottie-react";
import NextButton from "../components/NextButton/NextButton";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();
  return (
    <div>
      <div className="home_container" style={{ height: "calc(100vh - 0px)" }}>
        <div className="row g-0 w-100 h-100">
          <div className="col-md-6 order-md-2 order-2 d-flex p-4 ps-5 d-flex justify-content-center align-items-center">
            <div
              className="hero_content"
              style={{ width: "500px", lineHeight: "60px" }}
            >
              <h1 style={{ color: "black", marginBottom: '25px' }}>
                Where every ideas baked to <b>perfection</b>
              </h1>
              <h5>
                At <b>Cookie</b>, we blend technology with creativity to build
                cutting-edge solutions that drive businesses forward. Whether
                it's software development, AI-driven applications. We are
                committed to delivering seamless, scalable, and secure tech
                innovations.
              </h5>
              <button
                style={{
                  padding: "10px 60px",
                  fontSize: "20px",
                  marginTop: "20px",
                  borderRadius: "20px",
                  backgroundColor: "black",
                  color: "white",
                  border: 0,
                }}
                onClick={() => navigate('/contact-us')}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center align-items-center">
            <Lottie
              animationData={hero_animation}
              loop={true}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="row g-0 d-flex justify-content-center align-items-center px-4">
          <NextButton page="about" />
        </div>
      </div>
    </div>
  );
}
