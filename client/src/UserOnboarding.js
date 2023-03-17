import { NameFields } from "./NameFields";
import React, { useState } from "react";
import { SignUp } from "./SignUp";
import SignIn from "./SignIn";

function UserOnboarding() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSignUp, setIsSignUp] = useState(true);

  return isSignUp ? (
    <SignUp setIsSignUp={setIsSignUp} />
  ) : (
    <SignIn setIsSignUp={setIsSignUp} />
  );
}

export default UserOnboarding;
