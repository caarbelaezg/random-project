import { LoginForm } from "../../components/LoginForm";
import { motion } from "framer-motion";
import "./styles.css";

export const Login = () => {
  return (
    <>
      <div className="loginPage">
        <div className="loginPage__sectionA">
          <div className="loginPage__description">
            <h1>Untitled UI</h1>
            <p>Just for fun</p>
          </div>
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="loginPage__circle"
          ></motion.div>
          <div className="loginPage__blur"></div>
        </div>
        <div className="loginPage__sectionB">
          <LoginForm />
        </div>
        <footer className="loginPage__footer">
          <h5>© 2023 Untitled UI. All rights reserved.</h5>
          <ul className="loginPage__footer-list">
            <li className="loginPage__footer-list-item">
              <a className="loginPage__footer-link" href="#">
                Terms of use
              </a>
            </li>
            <li className="loginPage__footer-list-item">
              <a className="loginPage__footer-link" href="#">
                Privacy
              </a>
            </li>
            <li className="loginPage__footer-list-item">
              <a className="loginPage__footer-link" href="#">
                Cookies
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};
