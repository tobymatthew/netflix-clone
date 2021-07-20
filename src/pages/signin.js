import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../component";
import * as ROUTES from "../constant/router";

export default function Signin() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const isInvalid = emailAddress === "" || password === "";

  const handleSignin = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} methods="POST">
            <Form.Input
              type="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
