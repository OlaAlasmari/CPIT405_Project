// Import React
import React from 'react';

// Reusable AuthForm component for both login and signup
const AuthForm = ({
  title,             // Optional: Title of the page (not used in this code)
  description,       // JSX for the subtitle under the title
  onSubmit,          // Function to run when the form is submitted
  fields,            // Array of input fields (each with label, type, value...)
  submitText,        // Text on the submit button
  error,             // Error message to show
  redirectText,      // Text before the redirect link (e.g. "لديك حساب؟")
  redirectLinkText,  // Text for the redirect link (e.g. "تسجيل الدخول")
  onRedirectClick,   // Function to run when user clicks the redirect link
}) => {
  return (
    // Section for the whole form layout
    <section className="hero-section d-flex align-items-center justify-content-center">
      <div className="container text-center">
        
        {/* Title of the app */}
        <h1 className="main mt-5">SaudiOlogy سعوديولوجي</h1>

        {/* Subtitle/Description (customizable) */}
        <p className="main4 mt-4">
          {description}
        </p>

        {/* Card container for the form */}
        <div className="card hero-card mt-4 shadow mx-auto">
          <div className="card-body">

            {/* Start of form */}
            <form onSubmit={onSubmit}>

              {/* Render each input field dynamically using map */}
              {fields.map((field, idx) => (
                <div key={idx} className="mb-3 text-end">
                  <label className="form-label">{field.label}</label>
                  <input
                    type={field.type}            // type of input (text, email, password...)
                    className="form-control text-end"
                    placeholder={field.placeholder}
                    value={field.value}          // bind input to the value from state
                    onChange={field.onChange}    // update the value on change
                    required
                  />
                </div>
              ))}

              {/* If there's an error, show it in red text */}
              {error && <p className="text-danger text-end">{error}</p>}

              {/* Submit button */}
              <div className="d-flex justify-content-center">
                <button type="submit" className="cta-button px-5">
                  {submitText}
                </button>
              </div>
            </form>

            {/* Bottom redirect link (e.g. go to login or signup) */}
            <p className="mt-4 text-end login-redirect">
              {redirectText}{' '}
              <span
                className="nav-link-clickable signup-link"
                onClick={onRedirectClick}
              >
                {redirectLinkText}
              </span>
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};
export default AuthForm;
