import "./Terms.css";

function Terms(props) {
  return (
    <>
      <div className="container terms-main">
        <h1 className="terms-header">Terms and Conditions</h1>

        <div className="terms-section">
          <h2>1. Introduction</h2>
          <p>
            This is an example of the introduction section of the terms and
            conditions.
          </p>
        </div>

        <div className="terms-section">
          <h2>2. Acceptance of Terms</h2>
          <p>
            By using our service, you agree to comply with these terms and
            conditions.
          </p>
        </div>

        <div className="terms-section">
          <h2>3. User Conduct</h2>
          <p>
            When using our service, you agree not to engage in any unlawful
            activities.
          </p>
        </div>
      </div>
    </>
  );
}
export default Terms;
