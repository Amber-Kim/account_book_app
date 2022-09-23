import styles from '../styles/authComponents/Auth.module.scss'
import MainContainer from '../components/Containers/MainContainer';
import { Title } from '../components/Titles/Titles'
import { useState, useEffect } from 'react';

import { useLoginUser, useRegisterUser } from '../queries/user';

const Auth = () => {
  // Login
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  // Register
  const [regEmail, setRegEmail] = useState("");
  const [regPw, setRegPw] = useState("");

  let body = {
    email: email,
    password: pw,
  };

  let regBody = {
    email: regEmail,
    password: regPw,
  };

  const {
    mutate: loginHandler,
    isError: loginError,
    error: loginErr,
  } = useLoginUser();

  const {
    mutateAsync: registerHandler,
    isSuccess: registerSucc,
    isError: registerError,
    error: registerErr,
  } = useRegisterUser();

  return (
<MainContainer>
      {/* LOGIN */}
      <form action="submit" onSubmit={(e) => e.preventDefault()}>
        <div className={styles.container}>
          <Title>Login</Title>
          <span>Email :</span>
          <input
            type="email"
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <span>Password :</span>
          <input
            type="password"
            onChange={(e) => setPw(e.target.value)}
            value={pw}
            autoComplete="password"
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
          <span>Email :</span>
          <input
            type="email"
            onChange={(e) => setRegEmail(e.target.value)}
            value={regEmail}
            autoComplete="email"
          />
          <span>Password :</span>
          <input
            type="password"
            onChange={(e) => setRegPw(e.target.value)}
            value={regPw}
            autoComplete="new-password"
          />
          
        {/* Register button */}
        <button onClick={() => registerHandler(regBody)}>Register</button>
        </div>
      </form>
    </MainContainer>
  );
};

export default Auth;