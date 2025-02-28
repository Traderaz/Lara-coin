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
        {/* Crypto & Music Symbols */}
        <span className="symbol">₿</span>
        <span className="symbol">Ξ</span>
        <span className="symbol">₮</span>
        <span className="symbol">Ł</span>
        <span className="symbol">♪</span>
        <span className="symbol">♫</span>
        <span className="symbol">2</span>
        <span className="symbol">⛓️</span>
        <span className="symbol">$</span>
        <span className="symbol">♯</span>
        <span className="symbol">♭</span>
      </div>

      <div className="pitch-header">
        <h1>2CHAINZ TOKEN</h1>
        <p className="subtitle">The Ultimate Hip-Hop/Rap Meets Crypto Revolution</p>
      </div>

      <div className="executive-summary">
        <div className="section-card summary">
          <h2>EXECUTIVE SUMMARY</h2>
          <p>A ground breaking cryptocurrency that combines 2Chainz's entrepreneurial success with blockchain innovation, 
             creating a unique ecosystem where fans can participate in the future of music and digital finance.</p>
        </div>
      </div>

      <div className="content-grid">
        <div className="section-card vision">
          <h2>THE BIG IDEA</h2>
          <ul>
            <li>🎵 First hip-hop/rap icon-backed crypto token</li>
            <li>🌍 Bridges hip-hop/rap culture and decentralized finance</li>
            <li>💰 Empowers global fans with exclusive 2Chainz experiences</li>
          </ul>
        </div>

        <div className="section-card strategy">
          <h2>MARKET STRATEGIES</h2>
          <ul>
            <li>🔥 Tease & Hype: 2Chainz announces "True to crypto, true to hip-hop/rap"</li>
            <li>📈 Liquidity Lock: Ensuring price stability and investor confidence</li>
            <li>💬 Community-Driven: Exclusive Discord & Telegram communities</li>
            <li>📱 Viral Platforms: Leveraging Instagram, TikTok & X for massive reach</li>
          </ul>
        </div>

        <div className="section-card revenue">
          <h2>REVENUE POTENTIAL</h2>
          <ul>
            <li>🏦 DEX Market Maker: Building a sustainable token economy</li>
            <li>📊 Growth Strategy: Fan engagement drives token value</li>
            <li>💸 Token Utility: Access to exclusive merch, events & content</li>
          </ul>
        </div>

        <div className="section-card partnerships">
          <h2>PARTNERSHIPS & COLLABORATIONS</h2>
          <ul>
            <li>💎 Strategic Investors: Leading crypto & entertainment firms</li>
            <li>🎨 Entertainment Integration: Events, festivals & media</li>
          </ul>
        </div>

        <div className="section-card deliverables">
          <h2>KEY DELIVERABLES</h2>
          <ul>
            <li>⏳ Pre-Launch:</li>
            <ul>
              <li>• 2Chainz announcement: "Blockchain got me feeling blessed"</li>
              <li>• Influencer campaign with hip-hop/rap community leaders</li>
            </ul>
            <li>🚀 Launch Day:</li>
            <ul>
              <li>• Global announcement across all platforms</li>
              <li>• Exclusive fan rewards activation</li>
            </ul>
            <li>📢 Post-Launch:</li>
            <ul>
              <li>• Regular community events & token holder benefits</li>
              <li>• Exclusive access to new content & merchandise</li>
            </ul>
          </ul>
        </div>

        <div className="section-card viral">
          <h2>VIRAL STRATEGY</h2>
          <ul>
            <li>📣 #2ChainzToken: The official launch hashtag</li>
            <li>🔥 Rap Challenge: Community-driven engagement campaign</li>
            <li>🎥 Premium Content: High-quality visuals & exclusive drops</li>
          </ul>
        </div>

        <div className="section-card market-opportunity">
          <h2>MARKET OPPORTUNITY</h2>
          <ul>
            <li>🎯 Combined Market Potential:</li>
            <li>• Global Cryptocurrency Market: $2T+</li>
            <li>• Hip-Hop/Rap Industry: $15.7B+</li>
            <li>• Digital Collectibles: $31B</li>
            <li>• Rap Streaming Market: $3B+</li>
          </ul>
        </div>

        <div className="section-card next-steps">
          <h2>NEXT STEPS</h2>
          <ul>
            <li>🎨 Finalize Brand Identity: Align with 2Chainz's iconic style</li>
            <li>📄 Develop Platform & Whitepaper: Clear roadmap & utility</li>
            <li>📢 Launch Strategy: Coordinated PR & entertainment industry push</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
            