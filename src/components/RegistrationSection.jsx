import React from 'react';

const RegistrationSection = () => {
  return (
    <section id="register" className="registration-section">
      <h1 className="registration-title">REGISTRATION FEE:</h1>
      <div className="registration-table-wrap">
        <table className="registration-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Indian (INR)</th>
              <th>Foreign (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Academician</td>
              <td>₹8000</td>
              <td>$200</td>
            </tr>
            <tr>
              <td>Students<br /><span style={{ fontSize: '0.95em' }}>(UG, PG, Ph.D. Research Scholars)</span></td>
              <td>₹4000</td>
              <td>$150</td>
            </tr>
            <tr>
              <td>Industry Participants</td>
              <td>₹10000</td>
              <td>$250</td>
            </tr>
            <tr>
              <td>Only Participation</td>
              <td>₹3000</td>
              <td>$100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RegistrationSection;