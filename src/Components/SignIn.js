import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate(`/profile`);
    }
  },[user, navigate]);

  return (
    <div className="text-center">
      <div>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
}
