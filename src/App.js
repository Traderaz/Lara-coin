import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section-card').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <div className="floating-symbols">
        {/* Bitcoin Symbols */}
        <span className="symbol">₿</span>
        <span className="symbol">₿</span>
        <span className="symbol">₿</span>
        <span className="symbol">₿</span>
        <span className="symbol">₿</span>
        <span className="symbol">₿</span>
        <span className="symbol">₿</span>
        <span className="symbol">₿</span>
        <span className="symbol">₿</span>
        <span className="symbol">₿</span>
        <span className="symbol">₿</span>
        <span className="symbol">₿</span>
        <span className="symbol">₿</span>
        <span className="symbol">₿</span>
        <span className="symbol">₿</span>
      </div>

      <div className="pitch-header">
        <h1>LARA TRUMP TOKEN</h1>
        <p className="subtitle">The Ultimate Crypto Revolution</p>
      </div>

      <div className="executive-summary">
        <div className="section-card summary">
          <h2>EXECUTIVE SUMMARY</h2>
          <p>A groundbreaking cryptocurrency that combines Lara Trump's political influence with blockchain innovation, 
             creating a unique ecosystem where supporters can participate in the future of digital finance.</p>
        </div>
      </div>

      <div className="content-grid">
        <div className="section-card vision">
          <h2>THE BIG IDEA</h2>
          <ul>
            <li>Lara Trump official memecoin on Solana</li>
            <li>Bridging the political world on chain</li>
            <li>Rallying people who believe in decentralised power and freedom through Web 3</li>
          </ul>
        </div>

        <div className="section-card strategy">
          <h2>MARKET STRATEGIES</h2>
          <ul>
            <li>Custom Meteora launch</li>
            <li>Majority of tokens vested/locked over a 1 year period to ensure market confidence</li>
            <li>Low circulating supply to push price</li>
            <li>Moonshot and exchange listings to increase volume</li>
            <li>Full in house Dev team nothing will be outsourced</li>
          </ul>
        </div>

        <div className="section-card revenue">
          <h2>REVENUE POTENTIAL</h2>
          <ul>
            <li>In House Market Makers: Building a sustainable token economy</li>
            <li>Growth Strategy: Supporter engagement drives token value</li>
          </ul>
        </div>

        <div className="section-card deliverables">
          <h2>KEY DELIVERABLES</h2>
          <ul>
            <li>Lara needs to post on all social media platforms including her website embracing the fact it is her official token on launch day</li>
            <li>Bi weekly support on social media post launch</li>
          </ul>
        </div>

        <div className="section-card market-opportunity">
          <h2>MARKET OPPORTUNITY</h2>
          <ul>
            <li>Combined Market Potential:</li>
            <li>• Global Cryptocurrency Market: $2T+</li>
            <li>• Political Market: $15.7B+</li>
            <li>• Digital Collectibles: $31B</li>
            <li>• Political Streaming Market: $3B+</li>
          </ul>
        </div>

        <div className="section-card guarantee">
          <h2>OUR GUARANTEE</h2>
          <ul>
            <li>$750,000 USD</li>
            <li>50% Revenue Share Backend</li>
            <li>2% Personal Supply for Lara</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
            