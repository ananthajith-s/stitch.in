import img1 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.02 AM.jpeg';
import img2 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.04 AM.jpeg';
import img3 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.06 AM.jpeg';
import img4 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.07 AM.jpeg';
import img5 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.08 AM.jpeg';
import img6 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.10 AM (1).jpeg';
import img7 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.10 AM.jpeg';
import img8 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.12 AM (1).jpeg';
import img9 from '../assets/images/Firefly-3.png';

import cat1 from '../assets/images/WhatsApp Image 2026-05-20 at 9.31.59 AM (1).jpeg';
import cat2 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.15 AM (1).jpeg';
import cat3 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.18 AM (1).jpeg';
import cat4 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.18 AM (2).jpeg';

import inst1 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.18 AM.jpeg';
import inst2 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.19 AM (1).jpeg';
import inst3 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.19 AM.jpeg';
import inst4 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.20 AM (1).jpeg';
import inst5 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.20 AM.jpeg';
import inst6 from '../assets/images/WhatsApp Image 2026-05-20 at 9.32.21 AM (1).jpeg';

// Mock Products Data
export const products = [
  {
    id: 1,
    name: "Classic Oxford Shirt",
    price: 380.00,
    category: "Essentials",
    image: img1,
    colors: ["White", "Blue", "Black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Crafted with attention to detail, this piece combines quality materials with contemporary design. Perfect for the professional, the creative, or anyone who values the intersection of style and substance.",
    details: {
      material: "100% Premium Cotton",
      fit: "Classic Fit",
      care: "Machine wash cold, lay flat to dry"
    }
  },
  {
    id: 2,
    name: "Minimal Linen Shirt",
    price: 450.00,
    category: "Essentials",
    image: img2,
    colors: ["Beige", "White", "Taupe"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Crafted with attention to detail, this piece combines quality materials with contemporary design. Perfect for the professional, the creative, or anyone who values the intersection of style and substance.",
    details: {
      material: "100% Premium Linen",
      fit: "Relaxed Fit",
      care: "Gentle machine wash, air dry recommended"
    }
  },
  {
    id: 3,
    name: "Signature Striped Shirt",
    price: 550.00,
    category: "Signature",
    image: img3,
    colors: ["Navy/White", "Black/White", "Gray/White"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Crafted with attention to detail, this piece combines quality materials with contemporary design. Perfect for the professional, the creative, or anyone who values the intersection of style and substance.",
    details: {
      material: "Premium Cotton Blend",
      fit: "Tailored Fit",
      care: "Machine wash warm, tumble dry medium"
    }
  },
  {
    id: 4,
    name: "Bold Pattern Shirt",
    price: 340.00,
    category: "Signature",
    image: img4,
    colors: ["Burgundy/Cream", "Navy/Gold", "Forest/Ivory"],
    sizes: ["S", "M", "L", "XL"],
    description: "Crafted with attention to detail, this piece combines quality materials with contemporary design. Perfect for the professional, the creative, or anyone who values the intersection of style and substance.",
    details: {
      material: "100% Premium Cotton",
      fit: "Contemporary Fit",
      care: "Machine wash cold, hang to dry"
    }
  },
  {
    id: 5,
    name: "Heritage Denim Shirt",
    price: 295.00,
    category: "Heritage Denim",
    image: img5,
    colors: ["Light Wash", "Medium Wash", "Dark Wash"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Crafted with attention to detail, this piece combines quality materials with contemporary design. Perfect for the professional, the creative, or anyone who values the intersection of style and substance.",
    details: {
      material: "100% Premium Denim",
      fit: "Classic Fit",
      care: "Wash inside out, cold water, air dry"
    }
  },
  {
    id: 6,
    name: "Vintage Denim Jacket",
    price: 620.00,
    category: "Heritage Denim",
    image: img6,
    colors: ["Indigo", "Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Crafted with attention to detail, this piece combines quality materials with contemporary design. Perfect for the professional, the creative, or anyone who values the intersection of style and substance.",
    details: {
      material: "100% Premium Denim",
      fit: "Oversized Fit",
      care: "Wash separately, air dry only"
    }
  },
  {
    id: 7,
    name: "Statement Floral Shirt",
    price: 480.00,
    category: "Statement",
    image: img7,
    colors: ["Black/Floral", "Navy/Botanical", "White/Floral"],
    sizes: ["M", "L", "XL"],
    description: "Crafted with attention to detail, this piece combines quality materials with contemporary design. Perfect for the professional, the creative, or anyone who values the intersection of style and substance.",
    details: {
      material: "100% Premium Cotton",
      fit: "Contemporary Fit",
      care: "Machine wash cold, tumble dry low"
    }
  },
  {
    id: 8,
    name: "Oversized Statement Shirt",
    price: 195.00,
    category: "Statement",
    image: img8,
    colors: ["Charcoal", "Cream", "Olive"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Crafted with attention to detail, this piece combines quality materials with contemporary design. Perfect for the professional, the creative, or anyone who values the intersection of style and substance.",
    details: {
      material: "Premium Cotton Blend",
      fit: "Oversized Fit",
      care: "Machine wash warm, tumble dry medium"
    }
  }
];

// Mock Categories Data
export const categories = [
  {
    id: 1,
    name: "Essentials",
    description: "Timeless basics that form the foundation of every wardrobe",
    image: cat1,
    itemCount: 2
  },
  {
    id: 2,
    name: "Signature",
    description: "Our curated collection of distinctive everyday pieces",
    image: cat2,
    itemCount: 2
  },
  {
    id: 3,
    name: "Heritage Denim",
    description: "Premium denim crafted with tradition and modern sensibility",
    image: cat3,
    itemCount: 2
  },
  {
    id: 4,
    name: "Statement",
    description: "Bold pieces that express individuality and creativity",
    image: cat4,
    itemCount: 2
  }
];

// Mock Featured Products for Homepage
export const featuredProducts = products.slice(0, 4);

// Instagram Feed Mock Data
export const instagramFeed = [
  {
    id: 1,
    image: inst1,
    likes: 342,
    comments: 28
  },
  {
    id: 2,
    image: inst2,
    likes: 521,
    comments: 45
  },
  {
    id: 3,
    image: inst3,
    likes: 678,
    comments: 62
  },
  {
    id: 4,
    image: inst4,
    likes: 445,
    comments: 38
  },
  {
    id: 5,
    image: inst5,
    likes: 589,
    comments: 51
  },
  {
    id: 6,
    image: inst6,
    likes: 412,
    comments: 33
  }
];
