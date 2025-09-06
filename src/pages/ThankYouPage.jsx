import { Link } from "react-router-dom";

export const ThankYouPage = () => {
  return (
    <div className="thank-you">
      <h1>Thank You for Your Purchase!</h1>
      <p>We truly appreciate your business and hope you enjoy your new items.</p>
      <p>A confirmation email has been sent to your inbox. If you have any questions, feel free to contact us.</p>
      <div className="thank-you-actions">
        <Link to="/" className="btn">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};
