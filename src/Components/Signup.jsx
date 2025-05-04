import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';

const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: fullName });
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthForm
      onSubmit={handleSignup}
      fields={[
        {
          label: 'الاسم الكامل',
          type: 'text',
          placeholder: 'مثال: رانيا',
          value: fullName,
          onChange: (e) => setFullName(e.target.value),
        },
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
      submitText="إنشاء حساب"
      error={error}
      redirect={{
        text: 'لديك حساب؟',
        linkText: 'تسجيل الدخول',
        onClick: () => navigate('/login'),
      }}
    />
  );
};
export default Signup;