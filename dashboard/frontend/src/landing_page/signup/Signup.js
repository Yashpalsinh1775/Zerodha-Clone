import React from "react";

function SignUp() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">Welcome to Our Website</h1>
        <p style={{ textAlign: "center" }}>
          We're glad you're here! Explore our platform to learn more about what
          we offer.
        </p>
        <div className="row p-3 mt-5 border-top">
          <h1 className="text-center">🚀Introduction📈</h1>
        </div>
        <div
          className="row p-3 text-muted"
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <div className="col-6 p-5 text-center">
            <img
              src="media/images/yashpal.jpg"
              style={{ borderRadius: "100%", width: "50%" }}
            />

            <h4 className="mt-5">YASHPALSINH JADEJA</h4>
            <h6>Software Engineer</h6>
          </div>
          <div className="col-6 p-3">
            <p>
              As a passionate and detail-oriented software engineer, I have
              developed a full-stack Zerodha clone that simulates the core
              functionalities of a stock trading platform. This project
              demonstrates my proficiency in modern web development, combining a
              seamless frontend experience with a robust backend infrastructure.
            </p>
            <p>
              This project is a comprehensive full-stack web application that
              replicates the core features of Zerodha - India's largest stock
              brokerage platform. It allows users to monitor stock prices,
              manage their portfolio, and simulate trades.
            </p>
            <p>
                The objective was to create an industry-level trading UI/UX with
                robust backend functionality, demonstrating practical skills in
                frontend development, backend APIs, database design, and full
                stack integration.
            </p>
          </div>
        </div>
        <div className="col-6 p-5">
          <h3>Key Features</h3>
          <p>📊 Dynamic Charts (using Chart.js or Recharts) </p>
          <p>💼 User Portfolio with Holdings </p>
          <p>🧾 Order Placement (Buy/Sell UI)</p>
          <p>☁️MongoDB Integration for Data Storage</p>
          <p>🖥️ Frontend in React JS with Tailwind CSS / Material UI</p>
        </div>
        <div className="col-6 p-5">
            <h3>Others Details</h3>
          <p>
            Recreate the user interface and functionality of Zerodha as closely
            as possible.
          </p>
          <p>Learn and implement full stack development workflow.</p>
          <p>Improve user experience (UX) and create a responsive design.</p>
          <p>Interactive doughnut/bar/line charts for portfolio breakdown.</p>
          <p>Recharts or Chart.js library integration</p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
