import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./login.module.css";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
const LogIn = () => {
  return (
    <div className={styles.logCont}>
      <h1 className={styles.h1}>Login</h1>
      <Form>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            className={styles.customCss}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            className={styles.customCss}
          />
        </FloatingLabel>
        <Button variant="none" className={styles.btnCss} type="submit">
          Sign in
        </Button>
      </Form>
      <div>
        <button className={styles.createBtn}>Create account</button>
      </div>
    </div>
  );
};

export default LogIn;
