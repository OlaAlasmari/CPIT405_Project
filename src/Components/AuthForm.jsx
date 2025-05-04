import React from 'react';
import SubmitButton from './SubmitButton';

const AuthForm = ({
  title,
  description,
  onSubmit,
  fields,
  submitText,
  error,
  redirectText,
  redirectLinkText,
  onRedirectClick,
  extraButton // "Google button"
}) => {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <h1 className="main mt-5">SaudiOlogy سعوديولوجي</h1>

        <p className="main4 mt-4">{description}</p>

        <div className="card hero-card mt-4 shadow mx-auto">
          <div className="card-body">
            <form onSubmit={onSubmit}>
              {fields.map((field, idx) => (
                <div key={idx} className="mb-3 text-end">
                  <label className="form-label">{field.label}</label>
                  <input
                    type={field.type}
                    className="form-control text-end"
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={field.onChange}
                    required
                  />
                </div>
              ))}

              {error && <p className="text-danger text-end">{error}</p>}
              
              
              <div className="d-flex justify-content-center">
                <SubmitButton text={submitText} />
              </div>
            </form>

            {extraButton && (
              <div className="mt-4 d-flex justify-content-center">
                {extraButton}
              </div>
            )}

            <p className="mt-4 text-end login-redirect">
              {redirectText}{' '}
              <span className="nav-link-clickable signup-link" onClick={onRedirectClick}>
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