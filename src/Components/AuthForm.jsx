import React from 'react';

const AuthForm = (props) => {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <h1 className="main mt-5">SaudiOlogy سعوديولوجي</h1>
        <p className="main4 mt-4 mb-0">خلك معنا.. ترى الدرب زين</p>
        <p className="main4 mt-2">سوالف دروب وعلم ماله اثنين</p>

        <div className="card hero-card mt-4 shadow mx-auto">
          <div className="card-body">
            <form onSubmit={props.onSubmit}>
              {props.fields.map((field, idx) => (
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
              {props.error && (
                <p className="text-danger text-end">{props.error}</p>
              )}
              <div className="d-flex justify-content-center">
                <button type="submit" className="cta-button px-5">
                  {props.submitText}
                </button>
              </div>
            </form>
            {props.extraButton && (
              <div className="mt-4 d-flex justify-content-center">
                {props.extraButton}
              </div>
            )}
            {props.redirect && (
              <p className="mt-4 text-end login-redirect">
                {props.redirect.text}{' '}
                <span
                  className="nav-link-clickable signup-link"
                  onClick={props.redirect.onClick}>
                  {props.redirect.linkText}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AuthForm;