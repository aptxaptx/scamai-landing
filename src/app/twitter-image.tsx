import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'ScamAI - AI Trust Platform for Deepfake Detection';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0b0b0b 0%, #1a1a2e 50%, #0b0b0b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        {/* Logo text */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: '36px', color: 'white', fontWeight: 700 }}>S</span>
          </div>
          <span
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-2px',
            }}
          >
            ScamAI
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            color: '#a1a1aa',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          AI Trust Platform for Deepfake Detection & Synthetic Media Verification
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            marginTop: '48px',
            color: '#71717a',
            fontSize: '20px',
          }}
        >
          <span>Real-time Detection</span>
          <span>•</span>
          <span>SOC 2 Type II</span>
          <span>•</span>
          <span>scam.ai</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
