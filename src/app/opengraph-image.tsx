import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background: 'linear-gradient(135deg, #115C47 0%, #0C3F32 60%, #FB9A31 100%)',
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 2,
            textTransform: 'uppercase',
            opacity: 0.9,
          }}
        >
          Dakota Autism Center
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 900 }}>
          <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.05 }}>
            Evidence-Based ABA Therapy in Minnesota
          </div>
          <div style={{ fontSize: 30, opacity: 0.95 }}>
            Center-Based, In-Home, and EIDBI Services for Families
          </div>
        </div>
      </div>
    ),
    size,
  );
}
