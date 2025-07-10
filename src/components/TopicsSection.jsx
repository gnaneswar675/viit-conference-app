import React from 'react';

const TopicsSection = () => {
  return (
    <section id="topics" className="topics-section">
      <h1 className="topics-title">TOPICS</h1>
      <div className="topics-table-wrap">
        <table className="topics-table">
          <tbody>
            <tr>
              <td>Advanced Algorithms in Computational Intelligence</td>
              <td>Optimization techniques</td>
            </tr>
            <tr>
              <td>Computer Vision</td>
              <td>Machine Learning and Deep learning algorithms</td>
            </tr>
            <tr>
              <td>Data science</td>
              <td>Neural Networks</td>
            </tr>
            <tr>
              <td>Fuzzy systems</td>
              <td>Hybrid models</td>
            </tr>
            <tr>
              <td>Network theory</td>
              <td>Evolutionary algorithms</td>
            </tr>
            <tr>
              <td>Generative models and algorithms</td>
              <td>Probabilistic and statistical models</td>
            </tr>
            <tr>
              <td>Time-series analysis</td>
              <td>Graph theory or graph learning algorithms</td>
            </tr>
            <tr>
              <td>Dimensionality reduction and feature extraction</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: 'right' }}>But are not limited to...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TopicsSection;