from PIL import Image
import os
import random
import glob

# Configuration
IMAGE_DIR = r"C:\Users\oolli\.gemini\antigravity\scratch\quimp-tattoo-shop\Tatouages pour fond d'ecran"
OUTPUT_PATH = r"C:\Users\oolli\.gemini\antigravity\scratch\quimp-tattoo-shop\collage_base.png"
CANVAS_SIZE = (2048, 2048)
BG_COLOR = (26, 26, 26) # #1a1a1a

def create_collage():
    # Find images
    image_paths = glob.glob(os.path.join(IMAGE_DIR, "*.jpg")) + glob.glob(os.path.join(IMAGE_DIR, "*.png"))
    if not image_paths:
        print("No images found!")
        return

    print(f"Found {len(image_paths)} images.")

    # Create canvas
    canvas = Image.new('RGB', CANVAS_SIZE, BG_COLOR)
    
    # Calculate grid or layout
    # For 7 images, let's try a scattered look or a 3x3 grid with empty spots
    # Better: a dense packing.
    
    positions = [
        (100, 100), (800, 100), (1500, 100),
        (300, 800), (1200, 800),
        (100, 1500), (900, 1500)
    ]
    
    # Resize and paste
    for i, img_path in enumerate(image_paths):
        try:
            img = Image.open(img_path)
            # Remove background if possible? These are JPGs, likely have white bg.
            # We assume the user wants the content.
            # Convert to RGBA
            img = img.convert("RGBA")
            
            # Smart resize: keep aspect ratio, fit in 600x600 box
            img.thumbnail((600, 600))
            
            # Position
            pos = positions[i % len(positions)]
            
            # Add some randomness
            angle = random.randint(-15, 15)
            img = img.rotate(angle, expand=True, resample=Image.BICUBIC)
            
            # Simple blending: if white bg, make it transparent?
            # Assuming the images are sketches on white.
            # Let's try to multiply blend manually or just paste for now.
            # Actually, generate_image will handle the "style", I just need the layout.
            # So pasting as is (even with white bg) is fine, the prompt will say "gold on dark".
            
            # Center of the slot
            offset_x = pos[0] + random.randint(-50, 50)
            offset_y = pos[1] + random.randint(-50, 50)
            
            # Paste (using alpha channel as mask if exists)
            canvas.paste(img, (offset_x, offset_y), img)
            
        except Exception as e:
            print(f"Error processing {img_path}: {e}")

    canvas.save(OUTPUT_PATH)
    print(f"Collage saved to {OUTPUT_PATH}")

if __name__ == "__main__":
    create_collage()
