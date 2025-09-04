import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { params: string[] } }
) {
  const [width, height] = params.params;
  
  // Create a simple colored rectangle as placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:rgb(168,85,247);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(249,115,22);stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" opacity="0.3"/>
      <text x="50%" y="50%" font-family="Arial" font-size="14" fill="white" text-anchor="middle" dy="0.3em">
        Ad Preview ${width}x${height}
      </text>
    </svg>
  `;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}
