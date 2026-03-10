import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1 style={{ fontWeight: 600 }}>{productName}</h1>
          <p style={{ color: '#a1a1aa', lineHeight: '1.7' }}>{productDesription}</p>
          <div style={{ marginTop: '20px' }}>
            <a href={learnMore} style={{ color: '#3291ff', textDecoration: 'none', fontWeight: 500 }}>Learn More →</a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} style={{ borderRadius: '16px', maxWidth: '100%', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;