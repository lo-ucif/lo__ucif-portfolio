import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const assetsDir = './src/assets';
const files = await fs.readdir(assetsDir);

const images = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));

for (const file of images) {
  const inputPath = path.join(assetsDir, file);
  const nameWithoutExt = file.replace(/\.(png|jpg|jpeg)$/i, '');
  const outputPath = path.join(assetsDir, `${nameWithoutExt}.webp`);
  
  await sharp(inputPath)
    .resize(1920, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outputPath);
  
  console.log(`Converted: ${file} -> ${nameWithoutExt}.webp`);
}
