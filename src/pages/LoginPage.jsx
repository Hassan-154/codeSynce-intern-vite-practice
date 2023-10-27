import '../style/login.css'
import { useState } from 'react'
function LoginPage() {

  //to keep track on user input
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  
  //email validation using regEx
  const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  function loginUser()
  {
    if(emailPattern.test(email))
    {
      console.log("email true: ")
    }
    else{
      console.log("please put a valid email: ")
    }
    if(passwordPattern.test(pass))
    {
      console.log("pass true: ")
    }
    else
    {
      console.log("please put a valid pass: ")
    }
  }
  return (
    <div className="login">
    <div className="login__content">
    {/* heading */}
      <h1>Login Page</h1>
      {/* input email & password */}
      <div className='input__field'>
        <label>Email:</label>
        <input onChange={ e => setEmail(e.target.value) } type='email' className='input'/>
        <label>Password:</label>
        <input onChange={ e => setPass(e.target.value)} type="password" className='input'/>
      </div>
      {/* sign in button */}
      <div className='button__container'>
      <button onClick={loginUser}>Sign in</button>
      </div>
    </div>
  </div>
  )
}

export default LoginPage