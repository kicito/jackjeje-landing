# Thai Sea Bass Export Website

A modern, responsive Vue.js web application for Thai Sea Bass Export company, showcasing premium quality sea bass fingerlings from certified hatcheries.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Component-Based**: Built with reusable Vue 3 components
- **Contact Form**: Interactive form for customer inquiries
- **Product Showcase**: Display of Standard and Premium Grade fry products

## Project Structure

```
tsb-export/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── style.css
│   └── components/
│       ├── Header.vue
│       ├── Hero.vue
│       ├── WhyChooseUs.vue
│       ├── WhyChooseDetails.vue
│       ├── Products.vue
│       ├── ContactForm.vue
│       └── Footer.vue
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Components

### Header
- Fixed navigation bar with logo and menu links
- Call-to-action button for "Get in Touch"

### Hero
- Eye-catching hero section with title and description
- Image gallery background
- Pagination indicators

### WhyChooseUs
- Section highlighting company value proposition
- Brief introduction with CTA button
- Blue branded banner

### WhyChooseDetails
- Detailed feature cards showcasing:
  - Certified Quality
  - Superior Genetics
  - Cold Chain Logistics
  - Technical Support
- Image showcase

### Products
- Display of two product tiers:
  - Standard Grade Fry
  - Premium Grade Fry
- Detailed specifications for each product
- Request price buttons

### ContactForm
- Interactive contact form with validation
- Contact information display
- Form fields:
  - Company Name
  - Country
  - Required Quantity
  - Preferred Size
  - Contact Email
  - Additional Requirements

### Footer
- Company information and tagline
- Contact details
- Social media links
- Navigation menu
- Copyright information

## Customization

### Colors
The primary brand color is Crimson (#dc143c). You can modify colors in the component style sections.

### Content
Update text content directly in the Vue component templates to match your specific needs.

### Images
Replace placeholder backgrounds and images with actual product photos by updating the background styles or adding `<img>` tags.

## Technologies Used

- **Vue 3**: Progressive JavaScript framework
- **Vite**: Fast build tool and development server
- **CSS3**: Modern styling with flexbox and grid

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2024 Thai Sea Bass Export. All rights reserved.

## Contact

For questions or support, please contact:
- Email: export@thaiSeabass.com
- Phone: +66 (0) 2-xxx-xxxx
