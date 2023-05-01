import { FormEvent } from 'react';
import styles from './LoginForm.module.scss';

 const LoginForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userNameEl = document.getElementById('username') as HTMLInputElement | null;
    const passwordEl = document.getElementById('password') as HTMLInputElement | null;

    // values
    alert(`USERNAME: ${userNameEl!.value}, PASSWORD: ${passwordEl!.value}`)
  }

  return (
    <div className={styles.LoginForm}>
      <h2>Login form</h2>
      <form action="" method="post" className={styles.LoginForm__form} onSubmit={e => handleSubmit(e)}>
        {/* username */}
        <div className={styles.LoginForm__formGroup}>
          <label htmlFor="username">Username</label>

          <input 
            id='username' 
            type="text" 
            name="username" 
            placeholder="Enter username" 
            value="t.testov01"
            required 
          />
        </div>

        {/* password */}
        <div className={styles.LoginForm__formGroup}>
          <label htmlFor="password">Password</label>

          <input 
            id='password'
            type="password"
            name="password" 
            placeholder="Enter password" 
            value="aethe5ooth1Doqu"
            required 
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default LoginForm;
