import "../style/login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  //to keep track on user input
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const [disable, setDisable] = useState(true);
  const [validEmail, setValidEmail] = useState(false);
  const [validPass, setValidPass] = useState(false);
  
  const [state,setState] = useState({
    name:'filter',
    id:2
  })
  console.log(state)


  //email validation using regEx
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  useEffect(() => {
    //check the email validation
    if (emailPattern.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
    //check the password validation
    if (passwordPattern.test(pass)) {
      setValidPass(true);
    } else {
      setValidPass(false);
    }
    //check if both placeholder have some text
    // if () {
    //   setDisable(false);
    // } else {
    //   setDisable(true);
    // }
  }, [email, pass]);

  //navigate to layout page if information is true:
  const navigate = useNavigate();
  //function to store login info into local storage.
  function SignIn() {
    //after email and password verification call the function
    if (emailPattern.test(email) && passwordPattern.test(pass)) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", pass);
      navigate("/layout");
    } else {
      alert("please correct your login details.");
    }
  }

  return (
    <div className="login">
      <div className="login__content">
        {/* heading */}
        <h1>Login Page</h1>
        {/* input email & password */}
        <div className="input__field">
          <label>Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className={validEmail ? "input GreenOutline" : "input redOutline"}
          />
          <label>Password:</label>
          <input
            onChange={(e) => {setPass(e.target.value) 
            console.log(email !== "" && pass !== "", pass === "")}}
            type="password"
            className={validPass ? "input GreenOutline" : "input redOutline"}
          />
        </div>
        {pass}
        {/* sign in button */}
        <div className="button__container">
          <button
            className={(!email || !pass) ? "hide" : "show"}
            disabled={!email || !pass}
            onClick={SignIn}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
