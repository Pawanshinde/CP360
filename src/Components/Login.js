import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState(null);
// const[logger, setLogger] =useState(false)

  const navigate = useNavigate();

  const passwordCheck = (password) => {
    let password1 = password.split("");
    let res = password1.reduce((accum, val) => {
      return parseInt(accum) + parseInt(val);
    });
    return res;
  };

  
  const handlesubmit = (e) => {
    e.preventDefault();

    let re = /\S+@\S+\.\S+/;
    if (!email || !password) 
    setError("please enter email and password");

    else if (re.test(email) && passwordCheck(password) === 10) {
      setError(null);
      props.onLogged(true)
      
      
      
    
     

      
      navigate("home");
     

    } else {
      setError("invalid email or password");
    }
    console.log(error)
   
  };

  const triggerHandler =() =>{
    //.onLogged(isLoggedin)
  }

  return (
    <div>
      <h2>CP-360 LOGIN</h2>
      <form onSubmit={handlesubmit}>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setError(null);
              setEmail(e.target.value);
            }}
            className="Input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setError(null);
              setpassword(e.target.value);
            }}
            className="Input"
          />
        </div>
        
        <button type="submit" onClick={triggerHandler}>
          Log in
        </button>
      </form>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
     
    </div>
  );
}

export default Login;
