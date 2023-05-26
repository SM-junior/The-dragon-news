import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="container">
      <h2>Our Terms and Conditions</h2>
      <p>
        1.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
        a temporibus mollitia optio beatae blanditiis voluptatum quibusdam
        delectus sequi commodi minima nihil rerum ducimus laudantium modi fugit
        saepe veniam tempora!
      </p>
      <p>
        1.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
        a temporibus mollitia optio beatae blanditiis voluptatum quibusdam
        delectus sequi commodi minima nihil rerum ducimus laudantium modi fugit
        saepe veniam tempora!
      </p>
      <p>
        1.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
        a temporibus mollitia optio beatae blanditiis voluptatum quibusdam
        delectus sequi commodi minima nihil rerum ducimus laudantium modi fugit
        saepe veniam tempora!
      </p>
      <p className="fw-bold">
        Go back to <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;
