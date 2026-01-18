import '../styling/HomepageTemp.css';

const HomepageTemp = () => {
  // Expiration date set to January 18, 2026
  const expirationDate = new Date(2026, 0, 18); // Month is 0-indexed
  const currentDate = new Date();

  // Calculate days overdue
  const timeDiff = currentDate.getTime() - expirationDate.getTime();
  const daysOverdue = Math.max(0, Math.floor(timeDiff / (1000 * 60 * 60 * 24)));

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="expiration-page">
      <div className="expiration-container">
        <div className="expiration-header">
          <div className="warning-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
          </div>
          <h1>This Website Has Been Suspended</h1>
        </div>

        <div className="expiration-content">
          <div className="status-badge suspended">
            <span className="status-dot"></span>
            Account Suspended
          </div>

          <div className="expiration-details">
            <div className="detail-card">
              <div className="detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="detail-info">
                <span className="detail-label">Domain Name</span>
                <span className="detail-value">trgentertainment.com</span>
              </div>
            </div>

            <div className="detail-card">
              <div className="detail-icon warning">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
                </svg>
              </div>
              <div className="detail-info">
                <span className="detail-label">Expiration Date</span>
                <span className="detail-value expired">{formatDate(expirationDate)}</span>
              </div>
            </div>

            <div className="detail-card">
              <div className="detail-icon danger">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <div className="detail-info">
                <span className="detail-label">Days Overdue</span>
                <span className="detail-value overdue">{daysOverdue} {daysOverdue === 1 ? 'Day' : 'Days'}</span>
              </div>
            </div>
          </div>

          <div className="message-box">
            <h3>Important Notice</h3>
            <p>
              The hosting and domain registration for this website has expired due to non-payment.
              The website owner has been notified multiple times regarding the pending renewal.
            </p>
            <p>
              All website files and data are currently preserved but the site will remain
              inaccessible until the outstanding balance is settled.
            </p>
          </div>

          <div className="action-section">
            <h3>Are you the website owner?</h3>
            <p>Please contact your web administrator or technical department immediately to restore your website:</p>

            <div className="contact-methods">
              <div className="contact-card">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <span className="contact-label">Email Support</span>
                  <span className="contact-value">billing@whogohost.com</span>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <span className="contact-label">Technical Support</span>
                  <span className="contact-value">+1 (800) 555-0199</span>
                </div>
              </div>
            </div>
          </div>

          <div className="warning-footer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
            <p>
              <strong>Warning:</strong> If payment is not received within <strong>7 days</strong>,
              all website data may be permanently deleted in accordance with our data retention policy.
            </p>
          </div>
        </div>

        <div className="expiration-footer">
          <p>Reference ID: TRG-2024-{Math.floor(Math.random() * 90000) + 10000}</p>
          <p className="provider-info">Managed by Web Hosting Services</p>
        </div>
      </div>
    </div>
  );
};

export default HomepageTemp;
