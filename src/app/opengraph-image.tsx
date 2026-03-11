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
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="36" height="36" viewBox="0 0 50 50" fill="white">
              <path d="M26.85,7.23a24.65,24.65,0,0,0-1.22,2.18,24.26,24.26,0,0,0-1.49,3.81c.29,0,.57,0,.86,0s.75,0,1.11.05a22.29,22.29,0,0,1,1.4-2.81c.39-.65.81-1.29,1.26-1.9s.94-1.18,1.44-1.74a22.19,22.19,0,0,1,3.36-3c.52-.38,1.06-.73,1.61-1.06l.57-.32a25.62,25.62,0,0,0-3.41-1.33l-.5.41-.05,0a25.09,25.09,0,0,0-3.5,3.64A24.5,24.5,0,0,0,26.85,7.23Z"/>
              <path d="M21.6,9.74a24.49,24.49,0,0,0-.45,4.09,12.13,12.13,0,0,1,1.91-.48,20.78,20.78,0,0,1,.63-3.12,22.59,22.59,0,0,1,.72-2.15c.28-.71.6-1.39.94-2.06a22.67,22.67,0,0,1,2.47-3.77c.39-.48.81-.95,1.24-1.4l.47-.46A25.67,25.67,0,0,0,25.9,0l-.38.52h0A24.43,24.43,0,0,0,23.08,5a22.19,22.19,0,0,0-.86,2.36C22,8.11,21.77,8.92,21.6,9.74Z"/>
              <path d="M8.58,32a23.13,23.13,0,0,0,2.5,0A23.6,23.6,0,0,0,15,31.32a11.06,11.06,0,0,1-.91-1.74,19.91,19.91,0,0,1-3.08.19c-.76,0-1.52-.06-2.27-.14a20.76,20.76,0,0,1-2.23-.38,22.56,22.56,0,0,1-4.28-1.4Q1.4,27.46.59,27L0,26.69a24.69,24.69,0,0,0,.5,3.58l.59.23.06,0a25.15,25.15,0,0,0,4.89,1.21C6.91,31.84,7.74,31.92,8.58,32Z"/>
              <path d="M22.85,42.5a23.46,23.46,0,0,0,1.22-2.19,23.71,23.71,0,0,0,1.39-3.49H25a11,11,0,0,1-1.52-.1,19.78,19.78,0,0,1-1.29,2.56,22.33,22.33,0,0,1-1.26,1.9,21.94,21.94,0,0,1-1.44,1.75,22.12,22.12,0,0,1-3.36,3,19.66,19.66,0,0,1-1.76,1.15l-.56.32a25.64,25.64,0,0,0,3.37,1.39l.49-.4.24-.2a25,25,0,0,0,3.5-3.63C21.92,43.89,22.41,43.21,22.85,42.5Z"/>
              <path d="M41.21,13.37c-.83.11-1.66.25-2.48.43s-1.62.42-2.41.69a23.07,23.07,0,0,0-3.6,1.57,11.66,11.66,0,0,1,1.39,1.42,21.82,21.82,0,0,1,2.83-.94,21.47,21.47,0,0,1,2.23-.45c.75-.11,1.5-.18,2.25-.22a21.82,21.82,0,0,1,4.5.26c.7.11,1.39.26,2.08.44l.62.18a24.83,24.83,0,0,0-1.47-3.38l-.64-.07-.25,0A25.81,25.81,0,0,0,41.21,13.37Z"/>
            </svg>
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
