import React, { useState } from 'react'
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  return (
    <div>Login</div>
  )
}

export default Login