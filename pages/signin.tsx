import { useEffect, useState } from 'react';
import styles from '../styles/signin.module.scss';

const SignInSignUp = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const contentClassName = isSignIn ? styles.cont : `${styles.cont} ${styles.s__signup}`

  return (
    <>
      <div className={contentClassName}>
        <div className={`${styles.form} ${styles.sign_in}`}>
          <h2 className={styles.signin__title}>Welcome back,</h2>
          <label className={styles.signin__label}>
            <span>Email</span>
            <input className={styles.input} type="email" />
          </label>
          <label className={styles.signin__label}>
            <span>Password</span>
            <input className={styles.input} type="password" />
          </label>
          <p className={styles.forgot_pass}>Forgot password?</p>
          <button type="button" className={`${styles.submit} ${styles.button}`}>
            Sign In
          </button>
          <button type="button" className={`${styles.fb_btn} ${styles.button}`}>
            Connect with <span>facebook</span>
          </button>
        </div>
        <div className={styles.sub_cont}>
          <div className={styles.img}>
            <div className={`${styles.img__text} ${styles.m__up}`}>
              <h2 className={styles.signin__title}>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className={`${styles.img__text} ${styles.m__in}`}>
              <h2 className={styles.signin__title}>One of us?</h2>
              <p>If you already have an account, just sign in. We&apos;ve missed you!</p>
            </div>
            <div className={styles.img__btn} onClick={() => setIsSignIn(!isSignIn)}>
              <span className={styles.m__up}>Sign Up</span>
              <span className={styles.m__in}>Sign In</span>
            </div>
          </div>
          <div className={`${styles.form} ${styles.sign_up}`}>
            <h2 className={styles.signin__title}>Time to feel like home,</h2>
            <label className={styles.signin__label}>
              <span>Name</span>
              <input className={styles.input} type="text" />
            </label>
            <label className={styles.signin__label}>
              <span>Email</span>
              <input className={styles.input} type="email" />
            </label>
            <label className={styles.signin__label}>
              <span>Password</span>
              <input className={styles.input} type="password" />
            </label>
            <button type="button" className={`${styles.submit} ${styles.button}`}>
              Sign Up
            </button>
            <button type="button" className={`${styles.fb_btn} ${styles.button}`}>
              Join with <span>facebook</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInSignUp;