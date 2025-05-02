import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import AuthForm from './AuthForm';

const Loginpage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError('Email or password is incorrect.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (err) {
      setError('فشل تسجيل الدخول عبر Google');
    }
  };

  return (
    <AuthForm
      description={
        <>
          خلك معنا.. ترى الدرب زين<br />
          <span className="main4">سوالف دروب وعلم ماله اثنين</span>
        </>
      }
      onSubmit={handleLogin}
      fields={[
        {
          label: 'البريد الإلكتروني',
          type: 'email',
          placeholder: 'example@gmail.com',
          value: email,
          onChange: (e) => setEmail(e.target.value),
        },
        {
          label: 'كلمة المرور',
          type: 'password',
          placeholder: '••••••••',
          value: password,
          onChange: (e) => setPassword(e.target.value),
        },
      ]}
      submitText="تسجيل الدخول"
      error={error}
      redirectText="ليس لديك حساب؟"
      redirectLinkText="أنشئ حسابًا الآن"
      onRedirectClick={() => navigate('/signup')}

      // Google button
      extraButton={
<button
  onClick={handleGoogleLogin}
  className="google-login-btn mt-3"
>
  <img
    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
    alt="Google icon"
    width="20"
    height="20"
  />
  <span className="fw-medium">تسجيل الدخول باستخدام Google</span>
</button>

      }
    />
  );
};

export default Loginpage;

