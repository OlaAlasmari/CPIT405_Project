import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // used to redirect the user after login
import { signInWithEmailAndPassword } from 'firebase/auth'; // Firebase method for login
import { auth } from '../firebase'; // our configured Firebase auth instance
import AuthForm from './AuthForm'; // reusable form component

// Loginpage component
const Loginpage = () => {
const navigate = useNavigate(); // enables page redirection

  // Input states for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State to store any error messages (e.g. wrong password)
  const [error, setError] = useState('');

  // Function called when the login form is submitted
  const handleLogin = async (e) => {
    e.preventDefault();     // Prevents the page from refreshing
    setError('');           // Clears any previous errors

    try {
      // Attempt to log in with email and password
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // If successful, redirect to the homepage
    } catch (err) {
      // If login fails, show an error message
      setError('Email or password is incorrect.');
    }
  };

  return (
    // Render the reusable AuthForm component and pass necessary props
    <AuthForm
      description={
        <>
          {/* Description shown below the title */}
          خلك معنا.. ترى الدرب زين<br />
          <span className="main4">سوالف دروب وعلم ماله اثنين</span>
        </>
      }

      onSubmit={handleLogin} // function to handle login on form submit

      // Array of input fields (email and password) with their labels, types, values, and change handlers
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

      submitText="تسجيل الدخول" // Text for the submit button
      error={error}              // Show error message if exists
      redirectText="ليس لديك حساب؟"            // Text before the redirect link
      redirectLinkText="أنشئ حسابًا الآن"      // Text that acts as a link
      onRedirectClick={() => navigate('/signup')} // Go to signup page if user clicks the link
    />
  );
};
export default Loginpage;
