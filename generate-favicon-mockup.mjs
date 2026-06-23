import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const LOGO_PATH = 'src/assets/8.webp';
const OUTPUT_PATH = 'public/favicon-mockup.png';
const WIDTH = 1400;
const HEIGHT = 850;

const DARK_BG = '#121212';
const TAB_BAR_BG = '#1a1a1a';
const ACTIVE_TAB_BG = '#252525';
const INACTIVE_TAB_BG = '#1e1e1e';
const TAB_BORDER = '#333333';
const TEXT_COLOR = '#e0e0e0';
const ADDRESS_BAR_BG = '#2a2a2a';
const ADDRESS_BAR_TEXT = '#aaaaaa';
const BTN_COLOR = '#888888';
const HOVER_BTN_COLOR = '#ffffff';

async function generate() {
  const logoBuffer = fs.readFileSync(LOGO_PATH);
  const logoInfo = await sharp(logoBuffer).metadata();

  const faviconSize = 22;
  const favicon = await sharp(logoBuffer)
    .resize(faviconSize, faviconSize, { fit: 'cover' })
    .png()
    .toBuffer();

  const tabHeight = 50;
  const tabBarHeight = 60;
  const addrBarHeight = 48;
  const contentY = tabBarHeight + addrBarHeight;
  const borderRadius = 10;

  // Build the SVG for the entire scene
  const svgParts = [];

  // Helper: rounded rect path
  function roundRect(x, y, w, h, r, tl = true, tr = true, br = true, bl = true) {
    const parts = [];
    if (tl) {
      parts.push(`M ${x + r} ${y}`);
      parts.push(`Q ${x} ${y} ${x} ${y + r}`);
    } else {
      parts.push(`M ${x} ${y}`);
    }
    if (bl) {
      parts.push(`L ${x} ${y + h - r}`);
      parts.push(`Q ${x} ${y + h} ${x + r} ${y + h}`);
    } else {
      parts.push(`L ${x} ${y + h}`);
    }
    if (br) {
      parts.push(`L ${x + w - r} ${y + h}`);
      parts.push(`Q ${x + w} ${y + h} ${x + w} ${y + h - r}`);
    } else {
      parts.push(`L ${x + w} ${y + h}`);
    }
    if (tr) {
      parts.push(`L ${x + w} ${y + r}`);
      parts.push(`Q ${x + w} ${y} ${x + w - r} ${y}`);
    } else {
      parts.push(`L ${x + w} ${y}`);
    }
    parts.push('Z');
    return parts.join(' ');
  }

  // Outer window
  svgParts.push(`<rect width="${WIDTH}" height="${HEIGHT}" rx="${borderRadius}" fill="${DARK_BG}" />`);

  // Tab bar background
  svgParts.push(`<rect x="0" y="0" width="${WIDTH}" height="${tabBarHeight}" fill="${TAB_BAR_BG}" />`);

  // Inactive tab (left)
  const inactTabX = 30;
  const inactTabW = 160;
  svgParts.push(`<path d="${roundRect(inactTabX, 5, inactTabW, tabBarHeight - 5, 8)}" fill="${INACTIVE_TAB_BG}" />`);
  svgParts.push(`<rect x="${inactTabX}" y="${tabBarHeight - 5}" width="${inactTabW}" height="5" fill="${TAB_BAR_BG}" />`);

  // Inactive tab (right of active)
  const inactTabX2 = 30 + inactTabW + 8 + 260 + 8;
  svgParts.push(`<path d="${roundRect(inactTabX2, 5, 180, tabBarHeight - 5, 8)}" fill="${INACTIVE_TAB_BG}" />`);
  svgParts.push(`<rect x="${inactTabX2}" y="${tabBarHeight - 5}" width="180" height="5" fill="${TAB_BAR_BG}" />`);

  // Active tab
  const activeTabX = 30 + inactTabW + 8;
  const activeTabW = 260;
  svgParts.push(`<path d="${roundRect(activeTabX, 5, activeTabW, tabBarHeight - 5, 8)}" fill="${ACTIVE_TAB_BG}" />`);

  // Favicon position in active tab
  const faviconX = activeTabX + 14;
  const faviconY = (tabBarHeight - faviconSize) / 2 + 2;

  // Title text
  const titleX = faviconX + faviconSize + 10;
  const titleY = tabBarHeight / 2 + 6;
  svgParts.push(`<text x="${titleX}" y="${titleY}" font-family="'Segoe UI', system-ui, sans-serif" font-size="14" fill="${TEXT_COLOR}" font-weight="500" dominant-baseline="middle">Ahmed Loucif | Web Developer</text>`);

  // Tab close button
  const closeX = activeTabX + activeTabW - 28;
  const closeY = tabBarHeight / 2;
  svgParts.push(`<circle cx="${closeX}" cy="${closeY}" r="10" fill="none" stroke="${BTN_COLOR}" stroke-width="1.2" />`);
  svgParts.push(`<line x1="${closeX - 3.5}" y1="${closeY - 3.5}" x2="${closeX + 3.5}" y2="${closeY + 3.5}" stroke="${BTN_COLOR}" stroke-width="1.2" />`);
  svgParts.push(`<line x1="${closeX + 3.5}" y1="${closeY - 3.5}" x2="${closeX - 3.5}" y2="${closeY + 3.5}" stroke="${BTN_COLOR}" stroke-width="1.2" />`);

  // Window control buttons (top right)
  const ctrlX = WIDTH - 100;
  const ctrlY = 10;
  // Minimize
  svgParts.push(`<rect x="${ctrlX}" y="${ctrlY + 12}" width="12" height="2" rx="1" fill="${BTN_COLOR}" />`);
  // Maximize
  svgParts.push(`<rect x="${ctrlX + 20}" y="${ctrlY + 6}" width="12" height="12" rx="1.5" fill="none" stroke="${BTN_COLOR}" stroke-width="1.5" />`);
  // Close
  svgParts.push(`<line x1="${ctrlX + 46}" y1="${ctrlY + 6}" x2="${ctrlX + 58}" y2="${ctrlY + 18}" stroke="${BTN_COLOR}" stroke-width="1.5" />`);
  svgParts.push(`<line x1="${ctrlX + 58}" y1="${ctrlY + 6}" x2="${ctrlX + 46}" y2="${ctrlY + 18}" stroke="${BTN_COLOR}" stroke-width="1.5" />`);

  // Separator line
  svgParts.push(`<line x1="0" y1="${tabBarHeight}" x2="${WIDTH}" y2="${tabBarHeight}" stroke="#2a2a2a" stroke-width="1" />`);

  // Address bar area
  svgParts.push(`<rect x="0" y="${tabBarHeight}" width="${WIDTH}" height="${addrBarHeight}" fill="#1e1e1e" />`);

  // Navigation buttons
  const navY = tabBarHeight + addrBarHeight / 2;
  // Back
  svgParts.push(`<polygon points="${36},${navY - 6} ${36},${navY + 6} ${46},${navY + 10} ${46},${navY - 10}" fill="${BTN_COLOR}" transform="rotate(180, 41, ${navY})" />`);
  // Forward
  svgParts.push(`<polygon points="${66},${navY - 6} ${66},${navY + 6} ${76},${navY + 10} ${76},${navY - 10}" fill="${BTN_COLOR}" />`);
  // Refresh
  svgParts.push(`<path d="M ${98} ${navY - 8} A 8 8 0 1 1 ${89} ${navY + 5}" fill="none" stroke="${BTN_COLOR}" stroke-width="1.8" />`);
  svgParts.push(`<line x1="${89}" y1="${navY + 5}" x2="${89}" y2="${navY + 12}" stroke="${BTN_COLOR}" stroke-width="1.8" />`);

  // URL bar
  const urlBarX = 120;
  const urlBarW = WIDTH - urlBarX - 80;
  const urlBarH = 32;
  const urlBarY = tabBarHeight + (addrBarHeight - urlBarH) / 2;
  svgParts.push(`<rect x="${urlBarX}" y="${urlBarY}" width="${urlBarW}" height="${urlBarH}" rx="${urlBarH / 2}" fill="${ADDRESS_BAR_BG}" />`);

  // Lock icon in URL bar
  const lockX = urlBarX + 14;
  svgParts.push(`<rect x="${lockX}" y="${urlBarY + 9}" width="8" height="10" rx="1" fill="none" stroke="#4caf50" stroke-width="1.5" />`);
  svgParts.push(`<path d="M ${lockX + 1.5} ${urlBarY + 9} V ${urlBarY + 5} A 2.5 2.5 0 0 1 ${lockX + 6.5} ${urlBarY + 5} V ${urlBarY + 9}" fill="none" stroke="#4caf50" stroke-width="1.5" />`);

  // URL text
  const urlTextX = lockX + 16;
  const urlTextY = urlBarY + urlBarH / 2 + 1;
  svgParts.push(`<text x="${urlTextX}" y="${urlTextY}" font-family="'Segoe UI', system-ui, sans-serif" font-size="13" fill="${ADDRESS_BAR_TEXT}" dominant-baseline="middle">ahmedloucif.dev</text>`);

  // Separator
  svgParts.push(`<line x1="0" y1="${tabBarHeight + addrBarHeight}" x2="${WIDTH}" y2="${tabBarHeight + addrBarHeight}" stroke="#2a2a2a" stroke-width="1" />`);

  // Content area - gradient background
  svgParts.push(`<defs>
    <linearGradient id="contentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#16213e;stop-opacity:1" />
    </linearGradient>
  </defs>`);
  svgParts.push(`<rect x="0" y="${contentY}" width="${WIDTH}" height="${HEIGHT - contentY}" fill="url(#contentGrad)" />`);

  // Some mock content lines
  const contentStartY = contentY + 40;
  for (let i = 0; i < 6; i++) {
    const lineY = contentStartY + i * 30;
    const lineW = 600 + Math.random() * 300;
    svgParts.push(`<rect x="40" y="${lineY}" width="${lineW}" height="8" rx="4" fill="#2a2a4a" opacity="0.6" />`);
  }

  // Hero section mockup
  svgParts.push(`<rect x="40" y="${contentStartY + 220}" width="500" height="160" rx="12" fill="#1e2a4a" opacity="0.5" />`);
  svgParts.push(`<rect x="60" y="${contentStartY + 240}" width="300" height="18" rx="4" fill="#3a4a6a" opacity="0.4" />`);
  svgParts.push(`<rect x="60" y="${contentStartY + 270}" width="220" height="12" rx="4" fill="#3a4a6a" opacity="0.3" />`);
  svgParts.push(`<rect x="60" y="${contentStartY + 300}" width="350" height="12" rx="4" fill="#3a4a6a" opacity="0.3" />`);
  svgParts.push(`<rect x="60" y="${contentStartY + 330}" width="120" height="36" rx="6" fill="#4a6a9a" opacity="0.5" />`);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
    ${svgParts.join('\n    ')}
  </svg>`;

  const svgBuffer = Buffer.from(svg);

  const overlay = await sharp(svgBuffer).png().toBuffer();

  // Composite: first render the SVG background, then overlay the favicon
  const result = await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 4,
      background: DARK_BG,
    },
  })
    .composite([
      { input: overlay, top: 0, left: 0 },
      { input: favicon, top: faviconY, left: faviconX },
    ])
    .png()
    .toFile(OUTPUT_PATH);

  console.log(`✅ Mockup saved to ${OUTPUT_PATH}`);
  console.log(`   Dimensions: ${result.width}x${result.height}`);
  console.log(`   File size: ${(fs.statSync(OUTPUT_PATH).size / 1024).toFixed(1)} KB`);
}

generate().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
