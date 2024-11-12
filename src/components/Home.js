import image2 from "../assets/image2.png";
import image from "../assets/image.png";
export default function Home() {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            ExpenseTracker
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/app">
                  Go to app
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/team">
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src={image}
                alt="Expense Tracking Illustration"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-4 mb-4">Track Your Expenses Smartly</h1>
              <p className="lead mb-4">
                Take control of your financial life with our intuitive expense
                tracking solution. Monitor your spending, set budgets, and
                achieve your financial goals with ease.
              </p>
              <p className="mb-4">
                Our platform provides real-time insights into your spending
                patterns, helping you make informed decisions about your money
                management.
              </p>
              <button className="btn btn-dark btn-lg">
                <a className="btn btn-dark btn-lg" href="/app">
                  Get Started
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-5 mb-4">Why Choose ExpenseTracker?</h2>
              <ul className="list-unstyled">
                <li className="mb-3">✓ Easy to use interface</li>
                <li className="mb-3">✓ Detailed spending analytics</li>
                <li className="mb-3">✓ Custom budget settings</li>
                <li className="mb-3">✓ Secure data storage</li>
                <li className="mb-3">✓ Monthly reports and insights</li>
                <li className="mb-3">✓ Cross-platform accessibility</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <img
                src={image2}
                alt="Features Overview"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
