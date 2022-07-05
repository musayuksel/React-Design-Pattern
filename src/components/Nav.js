import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <ul>
      <li>
        <Link to={"split-screen"}>Split Screen</Link>
      </li>
      <li>
        <Link to={"list-items"}>List Items</Link>
      </li>
      <li>
        <Link to={"modal"}>Modals</Link>
      </li>
      <li>
        <Link to={"uncontrolled-form"}>Uncontrolled Form</Link>
      </li>
    </ul>
  );
}
