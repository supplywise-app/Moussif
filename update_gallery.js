import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const galleryJsonPath = path.join(__dirname, 'src/data/gallery.json');
const imagesDir = path.join(__dirname, 'public/images/gallery');

// Read existing data
let existingImages = [];
try {
    const existingData = JSON.parse(fs.readFileSync(galleryJsonPath, 'utf-8'));
    existingImages = existingData.images || [];
} catch (e) {
    console.log("No existing gallery.json found or invalid, starting fresh.");
}

// Read files from directory
const files = fs.readdirSync(imagesDir).filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));

console.log(`Found ${files.length} images in directory.`);

const newImages = files.map((file, index) => {
    const src = `/images/gallery/${file}`;

    // Check if already exists to preserve category and alt
    const existing = existingImages.find(img => img.src === src);
    if (existing) {
        return existing;
    }

    // New image -> Default to "Flashs dispos"
    return {
        id: Date.now() + index,
        src: src,
        alt: "Flash Tattoo",
        category: "Flashs dispos"
    };
});

// Write back to gallery.json
const output = { images: newImages };
fs.writeFileSync(galleryJsonPath, JSON.stringify(output, null, 4));

console.log(`Successfully updated gallery.json with ${newImages.length} images.`);
