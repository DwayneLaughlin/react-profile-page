import React from "react";

function Contact() {
  return (
    <div className="test-p has-background-primary bordlength">
      <div className="has-text-centered has-text-weight-bold is-size-1">
        Contact
      </div>
      <div className="columns">
        <div className="column is-1"></div>

        <div className="column has-text-centered is-size-4">
          Phone: 773.263.2678
          <br />
          Email: dwaynelaughlin@gmail.com <br />
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/dwayne-laughlin-74982118b">
            https://www.linkedin.com/in/dwayne-laughlin-74982118b/
          </a>
        </div>

        <div className="column is-1"></div>
      </div>
    </div>
  );
}

export default Contact;
