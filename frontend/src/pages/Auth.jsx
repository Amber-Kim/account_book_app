import styles from '../styles/authComponents/Auth.module.scss'
import MainContainer from '../components/Containers/MainContainer';
import { Title } from '../components/Titles/Titles'
import { useState, useEffect } from 'react';

const Auth = () => {
  // Login
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  // Register
  const [regEmail, setRegEmail] = useState("");
  const [regPw, setRegPw] = useState("");


  return (
    <MainContainer>
      {/* Login */}
      <form 
        action="submit" 
        onSubmit={(e) => e.preventDefault()}
        className={styles.registerForm}  
      >
        <div className={styles.container}>
          <Title>Login</Title>
          <span>Email :</span>
          <input 
            type="email"
            autoComplete='username'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <span>Password :</span>
          <input 
            type="password"
            autoComplete='password'
            onChange={(e) => setPw(e.target.value)}
            value={pw}
          />
          {/* Login Button*/}
          <button>Login Now</button>
        </div>
      </form>

      {/* Register Form */}
      <form 
        action="submit" 
        onSubmit={(e) => e.preventDefault()}
        className={styles.registerForm}  
      >
        <div className={styles.container}>
          <Title>Register</Title>
          <span> Email :</span>
          <input 
          type="email"
          autoComplete='email'
          onChange={(e) => setRegEmail(e.target.value)}
          value={regEmail}
          />
          <span>Password : </span>
          <input 
          type="password"
          autoComplete='new-password'
          onChange={(e) => setRegPw(e.target.value)}
          value={regPw}
          />
        {/* Register button */}
        <button>Register</button>
        </div>
      </form>
    </MainContainer>
  );
};

export default Auth;