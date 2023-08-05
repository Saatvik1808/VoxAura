import React, { useContext, useState } from "react";
import { Col, Container, Form, Row, Button, Spinner } from "react-bootstrap";
import { useLoginUserMutation } from "../services/appApi";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { AppContext } from "../context/appContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { socket } = useContext(AppContext);
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  function handleLogin(e) {
    e.preventDefault();
    // login logic
    loginUser({ email, password }).then(({ data }) => {
      if (data) {
        // socket work
        socket.emit("new-user");
        // navigate to the chat
        navigate("/chat");
      }
    });
  }

  return (
    <Container>
      <Row>
        <Col md={5} className="login__bg"></Col>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="login-form-container">
            <form className="login-form" onSubmit={handleLogin}>
              <h1 className="login-form-title">Login</h1>
              <div className="login-form-group">
                {error && <p className="alert alert-danger">{error.data}</p>}
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>

              <div className="login-form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>

              <button className="login-button" type="submit">
                {isLoading ? (
                  <Spinner animation="border" size="sm" className="spinner" />
                ) : (
                  "Login"
                )}
              </button>

              <div className="login-form-footer">
                Don't have an account? <Link to="/signup">Signup</Link>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
