import React, { useEffect } from "react";

import {  useNavigate } from "react-router-dom";

import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBank,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { getUserData, logout } from "../../services";
import { useState } from "react";

function Header() {
  const [userData, setUserData] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getUserData()
      .then((response) => {
        setUserData(response.data);

        setIsOpen(!isOpen);
      })
      .catch((error) => {
        alert("user data fetching is failed");
      });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div>
        {localStorage.getItem("userType") === "customer" && (
          <NavDropdown title="Transactions" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/withdraw">
              Withdraw
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/deposit">
              deposit
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/customer">
              dashboard
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/account">
              create account
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/update">
              update details
            </NavDropdown.Item>
          </NavDropdown>
        )}
      </div>

      <div className="container">
        <a className="navbar-brand" href="#">
          <span
            data-testid="bank-icon"
            className="action-icon bank-icon"
            onClick={() => {
              navigate("/bankinfo");
            }}
          >
            <FontAwesomeIcon icon={faBank} color="white" size="lg" />
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li>
              {localStorage.getItem("authTokens") && (
                <NavDropdown
                  title={
                    <span data-testid="person-icon">
                      <FontAwesomeIcon icon={faUser} color="white" size="lg" />
                    </span>
                  }
                  data-testid="basic-nav-dropdown"
                  show={isOpen}
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <NavDropdown.Item data-testid="name">
                    name: {userData.username}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    fistname: {userData.firstname}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    lastname:{userData.lastname}
                  </NavDropdown.Item>
                  <NavDropdown.Item>email:{userData.email}</NavDropdown.Item>
                </NavDropdown>
              )}
            </li>
            &nbsp;
            <li style={{ paddingLeft: "17px" }} className="nav-item">
              <button
                data-testid="logout-button"
                id="logout-button"
                onClick={() => {
                  const confirmBox = window.confirm(
                    "Do you really want to exit ?"
                  );
                  if (confirmBox === true) {
                    logout();
                    navigate("/");
                  }
                }}
              >
                {" "}
                <FontAwesomeIcon icon={faSignOutAlt} color="white" size="lg" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </nav>
  );
}

export default Header;
