import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import {
  Button,
  InputAdornment,
  OutlinedInput,
  IconButton
} from "@mui/material";

import {
  AccountCircle,
  LockPerson,
  Email,
  Visibility,
  VisibilityOff
} from "@mui/icons-material";

import { register } from "../../actions/auth";
import ImgButton from "../button/ImgButton";

const icons = [
  { src: "assets/img/auth/google.png", logo: "google" },
  { src: "assets/img/auth/instagram.png", logo: "instagram" },
  { src: "assets/img/auth/telegram.png", logo: "telegram" }
];

const Register = ({ handleOk }) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegister = (e) => {
    e.preventDefault();

    handleOk();

    setLoading(true);

    dispatch(register(username, email, password))
      .then(() => {
        navigate("/");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      <OutlinedInput
        type="text"
        name="username"
        value={username}
        onChange={onChangeUsername}
        size="small"
        placeholder="Username"
        sx={{
          width: "100%",
          border: "2px solid #2a3546",
          borderRadius: "10px",
          color: "white",
          marginBottom: "10px"
        }}
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle style={{ color: "wheat" }} />
          </InputAdornment>
        }
      />
      <OutlinedInput
        type="email"
        name="email"
        value={email}
        onChange={onChangeEmail}
        size="small"
        placeholder="Email"
        sx={{
          width: "100%",
          border: "2px solid #2a3546",
          borderRadius: "10px",
          color: "white",
          marginBottom: "10px"
        }}
        startAdornment={
          <InputAdornment position="start">
            <Email style={{ color: "wheat" }} />
          </InputAdornment>
        }
      />
      <OutlinedInput
        type={showPassword ? "text" : "password"}
        name="password"
        value={password}
        size="small"
        onChange={onChangePassword}
        placeholder="Password"
        sx={{
          width: "100%",
          border: "2px solid #2a3546",
          borderRadius: "10px",
          color: "white",
          marginBottom: "10px"
        }}
        startAdornment={
          <InputAdornment position="start">
            <LockPerson style={{ color: "wheat" }} />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              style={{ color: "#2283f6" }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />

      <a
        style={{
          color: "#2283f6",
          textDecoration: "underline",
          cursor: "pointer"
        }}
      >
        Forgot your password?
      </a>
      <Button
        variant="contained"
        style={{
          width: "100%",
          backgroundColor: "#f09000",
          borderRadius: "14px",
          padding: "10px 14px"
        }}
        onClick={handleRegister}
      >
        {loading && <span className="spinner-border spinner-border-sm"></span>}
        <span>Creat account</span>
      </Button>

      <div style={{ color: "white" }}>
        <p>Or Login With</p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gridGap: "8px"
          }}
        >
          {icons.map((icon, index) => (
            <ImgButton imageUrl={icon.src} key={index} />
          ))}
        </div>
      </div>

      <hr color="#2a3546" style={{ margin: "20px 0px" }} />
      <p style={{ color: "#2a3546", fontSize: "11px" }}>
        Copyright © 2019-2023 NAGA. All rights reserved.
      </p>
      <p style={{ color: "white", textAlign: "justify" }}>
        By accessing the site, I confirm that I am 18 years old and I have read
        the{" "}
        <a
          style={{
            color: "#2283f6",
            textDecoration: "underline",
            cursor: "pointer"
          }}
        >
          terms of service
        </a>
      </p>
    </div>
  );
};

export default Register;
