import React from "react"
import { Link } from "react-router-dom"
import favicon from "../styles/assets/twitter-logo.png"
import "../styles/leftNav.css"

function LeftNav() {
  return (
    <div>
      <Link to="/users">
        <img src={favicon} alt="logo" style={{ width: "40px" }} />
      </Link>
      <Link to="/users">
        <h2>
          <i className="fa fa-home" aria-hidden="true"></i>{" "}
          <span className="title">Home</span>
        </h2>
      </Link>
      <Link to="/profile">
        <h2>
          <i className="fa fa-user" aria-hidden="true"></i>{" "}
          <span className="title">Profile</span>
        </h2>
      </Link>
      <Link to="/users">
        <h2>
          <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
          <span className="title">Messages</span>
        </h2>
      </Link>
      <Link to="/users">
        <h2>
          <i className="fa fa-bell" aria-hidden="true"></i>{" "}
          <span className="title">Notifications</span>
        </h2>
      </Link>
      <Link to="/users">
        <h2>
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>{" "}
          <span className="title">More</span>
        </h2>
      </Link>
      <button style={{ marginRight: "10px", marginTop: "30px" }}>
        <span style={{ padding: "15px 70px 15px 70px" }}>Tweet</span>
      </button>
    </div>
  )
}

export default LeftNav
