import React from "react";
import { Link } from "react-router-dom";

import Breadcrumb from "react-bootstrap/Breadcrumb";

function MainBreadcrumb(props) {
  return (
    <Breadcrumb style={{ marginTop: "-1rem" }}>
      <Link style={{ textDecoration: "none" }} to="/">
        Home
      </Link>
      <Breadcrumb.Item active>{'\u00A0'}/ {props.page}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default MainBreadcrumb;
