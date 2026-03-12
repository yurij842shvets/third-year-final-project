import googleLogo from '../../assets/google-logo.png'
import './LoginForm.css'

export default function LoginForm() {
  return (
    <>
      <form action="" className="login-form">
        <p>Ви можете авторизуватися за допомогою<br /> акаунта Google</p>
        <button className='login-form-google-button'><img src={googleLogo} alt="google-logo"/>Google </button>
        <p>Або увійти за допомогою ел. пошти та<br /> праолю після реєстрації</p>
        <label className='login-form-label' htmlFor="">Електронна пошта:</label>
        <input className='login-form-input' type="text" placeholder='your@email.com' />
        <label className='login-form-label' htmlFor="">Пароль:</label>
        <input className='login-form-input' type="text" placeholder='your password'/>
        <div>
          <button className='login-form-login-button'>Увійти</button>
          <button className='login-form-signup-button'>Реєстрація </button>
        </div>
      </form>
    </>
  );
}
