import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import "./RightNav.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Qzone from "./Qzone/Qzone";

const RightNav = () => {
  return (
    <div>
      <h2>Login with</h2>
      <Button className="mb-2 btn-width" variant="outline-primary">
        Login with Google
      </Button>
      <Button className="btn-width" variant="outline-primary">
        Login with Github
      </Button>
      <div className="my-5">
        <h2>Find us on</h2>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook>{" "}
            <a href="">
              <span className="ms-2">Facebook</span>
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter>
            <a href="">
              <span className="ms-2">Twitter</span>
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram>
            <a href="">
              <span className="ms-2">Instagram</span>
            </a>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>

      <div className="bg-image text-white text-center p-4">
        <h2>Creating An Amazing Newspaper</h2>
        <p className="dot-border">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
          maiores molestias nisi animi quos nam enim odit. Odio, ipsa
          asperiores!
        </p>
        <Button variant="danger">Danger</Button>
      </div>
    </div>
  );
};

export default RightNav;
