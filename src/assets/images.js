// Image assets - Using actual assets from Figma design
// These are the real images extracted from the design

// Import image assets
import heroVideo from './hero-video.mp4'
import seaBassFingeringsBg from './sea_brass_fingerings_bg.png'
import whyImage from './why.png'
import bgFooter from './bg_footer.jpg'
import standardGrade from './standard_grade.jpg'
import premiumGrade from './premium_grade.jpg'

// Import SVG icons
import cupIcon from './cup.svg'
import geneticIcon from './genetic.svg'
import coldIcon from './cold.svg'
import techIcon from './tech.svg'
import phoneIcon from './phone.svg'

// Carousel images
import carousel1 from './carousel/Frame 68.png'
import carousel2 from './carousel/Frame 69.png'
import carousel3 from './carousel/Frame 70.png'
import carousel4 from './carousel/Frame 71.png'
import carousel5 from './carousel/Frame 72.png'

export const images = {
  hero: {
    background: seaBassFingeringsBg,
    video: heroVideo,
  },
  whyChoose: {
    farm: whyImage,
  },
  icons: {
    cup: cupIcon,
    genetic: geneticIcon,
    cold: coldIcon,
    tech: techIcon,
    phone: phoneIcon,
  },
  products: {
    oceanBoats: seaBassFingeringsBg,
    oceanWaves: seaBassFingeringsBg,
    standardDrone: standardGrade,
    premiumFarmer: premiumGrade,
  },
  footer: {
    background: bgFooter,
  },
  carousel: [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
  ],
  gallery: [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
  ]
}
