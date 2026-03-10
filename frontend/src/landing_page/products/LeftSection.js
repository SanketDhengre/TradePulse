import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} style={{ borderRadius: '16px', maxWidth: '100%', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 style={{ fontWeight: 600 }}>{productName}</h1>
          <p style={{ color: '#a1a1aa', lineHeight: '1.7' }}>{productDesription}</p>
          <div style={{ display: 'flex', gap: '24px', marginTop: '20px' }}>
            <a href={tryDemo} style={{ color: '#3291ff', textDecoration: 'none', fontWeight: 500 }}>Try Demo →</a>
            <a href={learnMore} style={{ color: '#a1a1aa', textDecoration: 'none', fontWeight: 500 }}>
              Learn More →
            </a>
          </div>
          <div className="mt-4" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" style={{ height: '40px', opacity: 0.85 }} />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ height: '40px', opacity: 0.85 }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;