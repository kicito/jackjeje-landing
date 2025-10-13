# Image Assets Guide

## Current Setup

The application is currently using placeholder images from Unsplash. For production use, you should replace these with your actual images from Figma.

## Images Extracted from Figma

I've extracted the following images from your Figma design:

### 1. Hero Section
- **hero-background.jpg** - Aerial view of fish farming operation
  - Size: 1440x700px (min)
  - Shows workers with nets in fish farming cages

### 2. Why Choose Section
- **aquaculture-farm.jpg** - Sea bass farm with traditional boats
  - Size: 545x360px (min)
  - Shows aquaculture setup with blue boats

### 3. Products Section

#### Background
- **ocean-boats.jpg** - Ocean scene with traditional Thai fishing boats at sunset
  - Size: 1440x573px (min)
  - Golden hour lighting with boats

#### Product Cards
- **drone-standard.jpg** - Drone flying over golden field
  - Size: 580x400px (min)
  - For Standard Grade Fry card

- **farmer-premium.jpg** - Farmer in checkered shirt and cap
  - Size: 580x400px (min)
  - For Premium Grade Fry card

### 4. Gallery Images (Hero Section)
- **gallery-1.jpg** through **gallery-4.jpg**
  - Size: 240x160px each
  - Various aquaculture and fish farming scenes

## How to Add Real Images

### Option 1: Download from Figma (Recommended)

1. Open the Figma file: https://www.figma.com/design/IvyJFv7gI6fUZhcLesbwWJ/Powerten
2. Select each image node
3. Export as JPG or PNG (use Export settings in right panel)
4. Save to `/public/images/` directory with the names above

### Option 2: Use the Images I Found

The screenshots I extracted show the actual images from Figma. You can:
1. Screenshot the Figma design at high resolution
2. Crop individual images
3. Optimize them using tools like TinyPNG or ImageOptim
4. Save to `/public/images/`

### Option 3: Use Professional Stock Images

If you don't have access to the original images:
1. Search for similar images on:
   - Unsplash (free, high quality)
   - Pexels (free, high quality)
   - Shutterstock (paid, professional)

2. Search terms to use:
   - "sea bass aquaculture"
   - "fish farming Thailand"
   - "fishing boats Thailand"
   - "aquaculture aerial view"
   - "fish farm worker"

## Updating the Application

Once you have the images:

1. Place them in `/public/images/` directory
2. Update `/src/assets/images.js`:

```javascript
export const images = {
  hero: {
    background: '/images/hero-background.jpg',
  },
  whyChoose: {
    farm: '/images/aquaculture-farm.jpg',
  },
  products: {
    oceanBoats: '/images/ocean-boats.jpg',
    oceanWaves: '/images/ocean-waves.jpg',
    standardDrone: '/images/drone-standard.jpg',
    premiumFarmer: '/images/farmer-premium.jpg',
  },
  gallery: [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
  ]
}
```

3. The app will automatically use your local images!

## Image Optimization Tips

For best performance:
- Use JPG for photos (smaller file size)
- Use PNG for images with transparency
- Optimize images before uploading:
  - Hero: ~200KB max
  - Products: ~100KB max
  - Gallery: ~50KB max
- Consider WebP format for even better compression
- Use responsive images with different sizes for mobile/desktop

## Current State

Right now, the app uses Unsplash placeholder images that are similar to the Figma design. These are loaded from external URLs and will work fine for development and demonstration purposes.
