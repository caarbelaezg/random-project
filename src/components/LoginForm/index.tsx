import { Formik, Field, Form } from "formik";
import { motion } from "framer-motion";
import { loginSchema } from "./utils";

import login from "../../assets/login.svg";

import "./styles.css";

export const LoginForm = () => {
  return (
    <motion.div
      className="loginForm"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: [0, 1], scale: [1.3, 1] }}
      transition={{
        duration: 2,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="loginForm__image-container">
        <img className="loginForm__image" src={login} />
      </div>
      <motion.div className="loginForm__heading">
        <motion.h1 className="loginForm__title">Welcome back</motion.h1>
        <p className="loginForm__description">Plese enter your credentials</p>
      </motion.div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          console.log(JSON.stringify(values));
        }}
      >
        {({ errors, touched }) => (
          <Form className="loginForm__container">
            <motion.div className="loginForm__field-container">
              <Field
                id="email"
                name="email"
                placeholder="example@email.com"
                type="email"
                className="loginForm__field"
                required
                data-error={`${errors.email}`}
              />
              <label className="loginForm__label" htmlFor="email">
                Email
              </label>
              {errors.email && touched.email ? (
                <div className="loginForm__error">Invalid email!</div>
              ) : null}
            </motion.div>
            <motion.div className="loginForm__field-container">
              <Field
                id="password"
                name="password"
                type="password"
                className="loginForm__field"
                required
              />
              <label className="loginForm__label" htmlFor="password">
                Password
              </label>
            </motion.div>
            <a href="#" className="loginForm__forgot-password">Forgot password?</a>
            <button className="loginForm__cta" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <p className="loginForm__signUp">
        Don't you have an account?{" "}
        <a className="loginForm__link" href="#">
          Sign up
        </a>
      </p>
    </motion.div>
  );
};
