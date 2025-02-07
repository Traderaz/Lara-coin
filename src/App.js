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
        {/* Crypto Symbols */}
        <span className="symbol">₿</span>
        <span className="symbol">Ξ</span>
        <span className="symbol">₮</span>
        <span className="symbol">Ł</span>
        {/* Music Symbols */}
        <span className="symbol">♪</span>
        <span className="symbol">♫</span>
        <span className="symbol">𝄞</span>
        <span className="symbol">𝄢</span>
        {/* Additional Symbols */}
        <span className="symbol">Y</span>
        <span className="symbol">$</span>
        <span className="symbol">♯</span>
        <span className="symbol">♭</span>
      </div>
      <div className="pitch-header">
        <h1>YE COIN - VISION & STRATEGY</h1>
        <p className="subtitle">Revolutionizing the intersection of culture and cryptocurrency</p>
      </div>

      <div className="executive-summary">
        <div className="section-card summary">
          <h2>EXECUTIVE SUMMARY</h2>
          <p>A groundbreaking cryptocurrency initiative that merges Ye's cultural influence with blockchain technology, 
             creating an ecosystem where fans can participate in and benefit from the future of digital finance and creative commerce.</p>
        </div>
      </div>

      <div className="content-grid">
        <div className="section-card vision">
          <h2>THE BIG IDEA</h2>
          <ul>
            <li>🎵 First culture-driven lifestyle crypto token</li>
            <li>🌍 Bridges music, fashion, and decentralised finance</li>
            <li>💰 Empowers global fans with exclusive access</li>
          </ul>
        </div>

        <div className="section-card strategy">
          <h2>MARKET STRATEGIES</h2>
          <ul>
            <li>🔥 Tease & Hype: Ye drops a cryptic tweet like "The future is independent. Ye Coin coming."</li>
            <li>📈 Liquidity Lock: Ensuring price stability and investor confidence</li>
            <li>💬 Community-Driven: Exclusive Twitter Spaces, Telegram & Discord chats</li>
            <li>📱 Viral Platforms: Leveraging X, TikTok, Instagram for massive adoption</li>
          </ul>
        </div>

        <div className="section-card revenue">
          <h2>REVENUE POTENTIAL</h2>
          <ul>
            <li>🏦 DEX Market Maker: Building a self-sustaining token economy</li>
            <li>📊 Growth Strategy: More adoption = increased token value</li>
            <li>💸 Token Utility: Community staking rewards & premium access to Ye-related projects</li>
          </ul>
        </div>

        <div className="section-card partnerships">
          <h2>PARTNERSHIPS & COLLABORATIONS</h2>
          <ul>
            <li>🤝 Crypto & Web3 Collaborations: Working with blockchain pioneers & DeFi platforms</li>
            <li>💎 Strategic Investors: Backed by top-tier fintech leaders & private investors</li>
            <li>🎨 Fashion & Music Integration: Ye Coin connects with Yeezy, Donda & creative brands</li>
          </ul>
        </div>

        <div className="section-card deliverables">
          <h2>KEY DELIVERABLES</h2>
          <ul>
            <li>⏳ Pre-Launch:</li>
            <ul>
              <li>• Ye's teaser tweet: "The future is independent. Ye Coin coming."</li>
              <li>• Social media hype campaign led by influencers & cultural icons</li>
            </ul>
            <li>🚀 Launch Day:</li>
            <ul>
              <li>• Official announcement across Ye's channels</li>
              <li>• Community activation with exclusive giveaways & perks</li>
            </ul>
            <li>📢 Post-Launch:</li>
            <ul>
              <li>• Ongoing engagement via Twitter, Instagram & Discord</li>
              <li>• Exclusive access for token holders to future Ye projects</li>
            </ul>
          </ul>
        </div>

        <div className="section-card viral">
          <h2>VIRAL STRATEGY</h2>
          <ul>
            <li>📣 #YeCoin: The official launch hashtag</li>
            <li>🔥 Challenge Campaign: Fan-driven engagement to push token awareness</li>
            <li>🎥 Hype Videos & Influencer Endorsements: High-quality content showcasing the project</li>
          </ul>
        </div>

        <div className="section-card market-opportunity">
          <h2>MARKET OPPORTUNITY</h2>
          <ul>
            <li>🎯 Combined Market Potential:</li>
            <li>• Global Cryptocurrency Market: $2T+</li>
            <li>• Fashion & Streetwear: $50B+</li>
            <li>• Music Industry: $26B+</li>
            <li>• NFT Market: $31B</li>
          </ul>
        </div>

        <div className="section-card next-steps">
          <h2>NEXT STEPS</h2>
          <ul>
            <li>🎨 Finalize Visual Identity: Align with Ye's branding & luxury aesthetic</li>
            <li>📄 Develop Website & Whitepaper: Provide clear utility & roadmap</li>
            <li>📢 Community Building: Drive early adoption via social media, PR & strategic partnerships</li>
          </ul>
        </div>

        <div className="section-card offer highlight-card">
          <h2>OUR GUARANTEE</h2>
          <ul>
            <li>💰 $20 Million Initial Guarantee</li>
            <li>🤝 Strategic Partnerships with Top Crypto Exchanges</li>
            <li>🌐 Extensive Network of Crypto Market Makers</li>
            <li>🚀 Dedicated Marketing Budget for Global Reach</li>
            <li>⚡ Fast-Track Listing on Major Platforms</li>
            <li>🔒 Long-term Value Protection Strategy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
