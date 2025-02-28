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
        <span className="symbol">𝄞</span>
        <span className="symbol">𝄢</span>
        <span className="symbol">A</span>
        <span className="symbol">$</span>
        <span className="symbol">♯</span>
        <span className="symbol">♭</span>
      </div>

      <div className="pitch-header">
        <h1>ASHANTI TOKEN</h1>
        <p className="subtitle">The First R&B Queen-Backed Digital Currency</p>
      </div>

      <div className="executive-summary">
        <div className="section-card summary">
          <h2>EXECUTIVE SUMMARY</h2>
          <p>A ground breaking cryptocurrency that merges Ashanti's iconic R&B legacy with blockchain technology, 
             creating an ecosystem where fans can connect with the future of music and digital finance.</p>
        </div>
      </div>

      <div className="content-grid">
        <div className="section-card vision">
          <h2>THE BIG IDEA</h2>
          <ul>
            <li>🎵 First R&B legend-backed crypto token</li>
            <li>🌍 Bridges music, fashion, and decentralised finance</li>
            <li>💰 Empowers global fans with exclusive access</li>
          </ul>
        </div>

        <div className="section-card strategy">
          <h2>MARKET STRATEGIES</h2>
          <ul>
            <li>🔥 Tease & Hype: Ashanti announces "The future of R&B meets crypto"</li>
            <li>📈 Liquidity Lock: Ensuring price stability and investor confidence</li>
            <li>💬 Community-Driven: Exclusive Twitter Spaces, Telegram & Discord chats</li>
            <li>📱 Viral Platforms: Leveraging X, TikTok, Instagram for massive adoption</li>
          </ul>
        </div>

        <div className="section-card revenue">
          <h2>REVENUE POTENTIAL</h2>
          <ul>
            <li>🏦 DEX Market Maker: Building a sustainable token economy</li>
            <li>📊 Growth Strategy: Fan engagement drives token value</li>
            <li>💸 Token Utility: Access to exclusive music, events & merchandise</li>
          </ul>
        </div>

        <div className="section-card partnerships">
          <h2>PARTNERSHIPS & COLLABORATIONS</h2>
          <ul>
            <li>💎 Strategic Investors: Leading crypto & entertainment firms</li>
            <li>🎨 Entertainment Integration: Concert venues, festivals & media</li>
          </ul>
        </div>

        <div className="section-card deliverables">
          <h2>KEY DELIVERABLES</h2>
          <ul>
            <li>⏳ Pre-Launch:</li>
            <ul>
              <li>• Ashanti's announcement: "R&B meets Web3 - get ready"</li>
              <li>• Influencer campaign with music industry leaders</li>
            </ul>
            <li>🚀 Launch Day:</li>
            <ul>
              <li>• Global announcement across all platforms</li>
              <li>• Exclusive fan rewards activation</li>
            </ul>
            <li>📢 Post-Launch:</li>
            <ul>
              <li>• Regular community events & token holder benefits</li>
              <li>• Exclusive access to new music & content</li>
            </ul>
          </ul>
        </div>

        <div className="section-card viral">
          <h2>VIRAL STRATEGY</h2>
          <ul>
            <li>📣 #AshantiToken: The official launch hashtag</li>
            <li>🔥 R&B Challenge: Fan-driven engagement campaign</li>
            <li>🎥 Hype Videos & Influencer Endorsements: High-quality content</li>
          </ul>
        </div>

        <div className="section-card market-opportunity">
          <h2>MARKET OPPORTUNITY</h2>
          <ul>
            <li>🎯 Combined Market Potential:</li>
            <li>• Global Cryptocurrency Market: $2T+</li>
            <li>• Music Industry: $26B+</li>
            <li>• Digital Collectibles: $31B</li>
            <li>• R&B Streaming Market: $2B+</li>
          </ul>
        </div>

        <div className="section-card next-steps">
          <h2>NEXT STEPS</h2>
          <ul>
            <li>🎨 Finalize Brand Identity: Align with Ashanti's iconic style</li>
            <li>📄 Develop Platform & Whitepaper: Clear roadmap & utility</li>
            <li>📢 Launch Strategy: Coordinated PR & entertainment industry push</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
