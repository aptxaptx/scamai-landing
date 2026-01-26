'use client';

import { useState } from 'react';
import { ArrowRight, Check, Code, Shield, Zap, DollarSign, Globe, Clock } from 'lucide-react';

// Improved color scheme - better contrast and conversion
const colors = {
  bg: '#0a0a0a',
  surface: '#141414',
  primary: '#00e676', // Better green for conversions
  primaryDark: '#00c853',
  accent: '#00bcd4', // Cyan accent
  text: '#ffffff',
  textMuted: '#9ca3af',
  border: '#1f1f1f',
};

export default function ScamAILanding() {
  const [volume, setVolume] = useState(10000);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pricePerScan = volume <= 10000 ? 0.05 : volume <= 100000 ? 0.03 : 0.01;
  const monthlyPrice = volume * pricePerScan;

  return (
    <main style={{ 
      backgroundColor: colors.bg, 
      color: colors.text, 
      minHeight: '100vh',
      isolation: 'isolate',
      position: 'relative',
      zIndex: 0
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${colors.border}`
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}>R</div>
              <span style={{ fontWeight: '600', fontSize: '18px' }}>Reality Inc.</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="desktop-menu" style={{ alignItems: 'center', gap: '2rem' }}>
              <a href="#features" style={{ color: colors.textMuted, textDecoration: 'none' }}>Features</a>
              <a href="#pricing" style={{ color: colors.textMuted, textDecoration: 'none' }}>Pricing</a>
              <a href="https://docs.scam.ai" style={{ color: colors.textMuted, textDecoration: 'none' }}>Docs</a>
              <button style={{
                padding: '0.625rem 1.5rem',
                backgroundColor: colors.primary,
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '14px'
              }}>
                Get API Key
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                padding: '0.5rem',
                background: 'none',
                border: 'none',
                color: colors.text,
                cursor: 'pointer',
                fontSize: '24px'
              }}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="mobile-menu" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              paddingTop: '1rem'
            }}>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} style={{ color: colors.textMuted, textDecoration: 'none', padding: '0.5rem 0' }}>Features</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} style={{ color: colors.textMuted, textDecoration: 'none', padding: '0.5rem 0' }}>Pricing</a>
              <a href="https://docs.scam.ai" style={{ color: colors.textMuted, textDecoration: 'none', padding: '0.5rem 0' }}>Docs</a>
              <button style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: colors.primary,
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                marginTop: '0.5rem'
              }}>
                Get API Key
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Conversion Optimized */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
        {/* Trust Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: colors.surface,
          border: `1px solid ${colors.border}`,
          borderRadius: '24px',
          marginBottom: '2rem',
          fontSize: '14px'
        }}>
          <Shield style={{ width: '16px', height: '16px', color: colors.primary }} />
          <span style={{ color: colors.textMuted }}>Trusted by 500+ companies</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(2rem, 6vw, 4rem)',
          fontWeight: '700',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          background: `linear-gradient(135deg, ${colors.text}, ${colors.textMuted})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Deepfake Detection API<br />
          <span style={{
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            That Actually Works
          </span>
        </h1>

        <p style={{
          fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
          color: colors.textMuted,
          maxWidth: '42rem',
          margin: '0 auto 2.5rem',
          lineHeight: 1.6
        }}>
          99.9% accuracy. Self-serve API. Pay-per-scan pricing starting at $0.01.
          <br />No sales calls, no contracts, no BS.
        </p>

        {/* Primary CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 2rem',
            backgroundColor: colors.primary,
            color: '#000',
            border: 'none',
            borderRadius: '12px',
            fontWeight: '600',
            fontSize: '18px',
            cursor: 'pointer',
            boxShadow: `0 8px 32px ${colors.primary}40`,
            transition: 'transform 0.2s',
            minHeight: '56px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Start Free Trial
            <ArrowRight style={{ width: '20px', height: '20px' }} />
          </button>
          <p style={{ fontSize: '14px', color: colors.textMuted }}>
            1,000 free scans • No credit card required
          </p>
        </div>

        {/* Quick Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '2rem',
          maxWidth: '600px',
          margin: '0 auto',
          padding: '2rem 0'
        }}>
          {[
            { label: 'Accuracy', value: '99.9%' },
            { label: 'Response Time', value: '<2s' },
            { label: 'Uptime', value: '99.99%' },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: colors.primary, marginBottom: '0.25rem' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '14px', color: colors.textMuted }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features - Simplified */}
      <section id="features" style={{
        padding: '4rem 1.5rem',
        backgroundColor: colors.surface,
        borderTop: `1px solid ${colors.border}`,
        borderBottom: `1px solid ${colors.border}`
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Everything you need. Nothing you don't.
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: <Zap style={{ width: '24px', height: '24px' }} />,
                title: 'Instant Setup',
                description: 'Get your API key and start scanning in under 60 seconds.'
              },
              {
                icon: <Globe style={{ width: '24px', height: '24px' }} />,
                title: 'Multi-Modal Detection',
                description: 'Video, audio, and images. One unified API for everything.'
              },
              {
                icon: <DollarSign style={{ width: '24px', height: '24px' }} />,
                title: 'Transparent Pricing',
                description: 'Pay only for what you use. Volume discounts included.'
              },
              {
                icon: <Code style={{ width: '24px', height: '24px' }} />,
                title: 'Developer First',
                description: 'RESTful API, SDKs for all languages, webhooks support.'
              },
              {
                icon: <Shield style={{ width: '24px', height: '24px' }} />,
                title: 'Enterprise Grade',
                description: '99.9% accuracy, SOC2 compliant, GDPR ready.'
              },
              {
                icon: <Clock style={{ width: '24px', height: '24px' }} />,
                title: 'No Sales BS',
                description: 'Self-serve platform. No demos, no calls, no waiting.'
              },
            ].map((feature) => (
              <div key={feature.title} style={{
                padding: '2rem',
                backgroundColor: colors.bg,
                border: `1px solid ${colors.border}`,
                borderRadius: '16px',
                transition: 'border-color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = colors.primary}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = colors.border}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: colors.surface,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.primary,
                  marginBottom: '1rem'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  {feature.title}
                </h3>
                <p style={{ color: colors.textMuted, lineHeight: 1.6, fontSize: '15px' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Interactive */}
      <section id="pricing" style={{ padding: '4rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '1rem'
        }}>
          Simple, transparent pricing
        </h2>
        <p style={{
          textAlign: 'center',
          color: colors.textMuted,
          marginBottom: '3rem',
          fontSize: '1.125rem'
        }}>
          Volume-based pricing that scales with you
        </p>

        <div style={{
          backgroundColor: colors.surface,
          border: `1px solid ${colors.border}`,
          borderRadius: '24px',
          padding: 'clamp(2rem, 4vw, 3rem)'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '1rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <span style={{ fontSize: '18px', fontWeight: '600' }}>Monthly Volume</span>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: colors.primary }}>
                {volume.toLocaleString()} scans
              </span>
            </label>
            <input
              type="range"
              min="1000"
              max="1000000"
              step="1000"
              value={volume}
              onChange={(e) => setVolume(parseInt(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '8px',
                appearance: 'none',
                cursor: 'pointer',
                background: `linear-gradient(to right, ${colors.primary} 0%, ${colors.primary} ${((volume - 1000) / 999000) * 100}%, ${colors.border} ${((volume - 1000) / 999000) * 100}%, ${colors.border} 100%)`
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: colors.textMuted, marginTop: '0.5rem' }}>
              <span>1K</span>
              <span>500K</span>
              <span>1M</span>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              padding: '1.5rem',
              backgroundColor: colors.bg,
              borderRadius: '12px'
            }}>
              <div style={{ fontSize: '14px', color: colors.textMuted, marginBottom: '0.5rem' }}>
                Price per scan
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: colors.text }}>
                ${pricePerScan.toFixed(2)}
              </div>
            </div>
            <div style={{
              padding: '1.5rem',
              backgroundColor: colors.bg,
              border: `2px solid ${colors.primary}`,
              borderRadius: '12px'
            }}>
              <div style={{ fontSize: '14px', color: colors.textMuted, marginBottom: '0.5rem' }}>
                Monthly total
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: colors.primary }}>
                ${monthlyPrice.toLocaleString()}
              </div>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0.75rem',
            padding: '1.5rem',
            backgroundColor: colors.bg,
            borderRadius: '12px',
            marginBottom: '2rem'
          }}>
            {[
              '0-10K: $0.05/scan',
              '10K-100K: $0.03/scan',
              '100K+: $0.01/scan'
            ].map((tier) => (
              <div key={tier} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check style={{ width: '16px', height: '16px', color: colors.primary }} />
                <span style={{ fontSize: '14px', color: colors.textMuted }}>{tier}</span>
              </div>
            ))}
          </div>

          <button style={{
            width: '100%',
            padding: '1rem',
            backgroundColor: colors.primary,
            color: '#000',
            border: 'none',
            borderRadius: '12px',
            fontWeight: '600',
            fontSize: '18px',
            cursor: 'pointer',
            minHeight: '56px'
          }}>
            Start with {volume.toLocaleString()} scans/month
          </button>
          <p style={{ textAlign: 'center', fontSize: '14px', color: colors.textMuted, marginTop: '1rem' }}>
            Includes 1,000 free scans to start
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: '4rem 1.5rem',
        backgroundColor: colors.surface,
        borderTop: `1px solid ${colors.border}`,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            Ready to detect deepfakes?
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: colors.textMuted,
            marginBottom: '2rem'
          }}>
            Start scanning in 60 seconds. No credit card required.
          </p>
          <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 2rem',
            backgroundColor: colors.primary,
            color: '#000',
            border: 'none',
            borderRadius: '12px',
            fontWeight: '600',
            fontSize: '18px',
            cursor: 'pointer',
            boxShadow: `0 8px 32px ${colors.primary}40`,
            minHeight: '56px'
          }}>
            Get Started Free
            <ArrowRight style={{ width: '20px', height: '20px' }} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem 1.5rem',
        borderTop: `1px solid ${colors.border}`,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '2rem',
            fontSize: '14px'
          }}>
            {['API Docs', 'Pricing', 'Privacy Policy', 'Terms', 'Contact'].map((link) => (
              <a key={link} href="#" style={{ color: colors.textMuted, textDecoration: 'none' }}>
                {link}
              </a>
            ))}
          </div>
          <p style={{ fontSize: '14px', color: colors.textMuted }}>
            © 2026 Reality Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
