import { brand } from '../config/brand'
import heroPortrait from '../assets/hero/hero-portrait.svg'
import braceletStack from '../assets/products/bracelet-stack.svg'
import goldPendant from '../assets/products/gold-pendant.svg'
import goldRings from '../assets/products/gold-rings.svg'
import minimalWatch from '../assets/products/minimal-watch.svg'
import silverPendant from '../assets/products/silver-pendant.svg'
import { buildProductWhatsAppUrl } from '../utils/whatsapp'

const contactPriceLabel = 'Contact for pricing'
const generalMaterial = 'Hand-selected beads and decorative elements'
const careInstructions =
  'Store dry, avoid harsh chemicals, and handle gently. Final care guidance remains editable until the client confirms product-specific instructions.'

function createProduct({
  id,
  slug,
  name,
  category,
  shortDescription,
  description,
  image,
  imageAlt,
  colours,
  sizes,
  featured = false,
  newArrival = false,
  bestSeller = false,
  madeToOrder = true,
  customisable = true,
  tags,
}) {
  return {
    id,
    slug,
    name,
    category,
    shortDescription,
    description,
    price: null,
    priceLabel: contactPriceLabel,
    currency: brand.currency,
    images: [{ src: image, alt: imageAlt }],
    colours,
    sizes,
    material: generalMaterial,
    stock: null,
    featured,
    newArrival,
    bestSeller,
    madeToOrder,
    customisable,
    rating: null,
    reviewCount: 0,
    tags,
    careInstructions,
    productionTime: null,
    isMockData: true,
    href: '#custom-order-form',
    whatsappHref: buildProductWhatsAppUrl(name),
    whatsappLabel: madeToOrder ? 'Request on WhatsApp' : 'Enquire on WhatsApp',
  }
}

export const allProducts = [
  createProduct({
    id: 'sss-001',
    slug: 'handcrafted-beaded-statement-necklace',
    name: 'Handcrafted Beaded Statement Necklace',
    category: 'Beaded Jewellery',
    shortDescription:
      'A bold handcrafted necklace designed to bring colour, texture, and individuality to everyday styling.',
    description:
      'A handcrafted beaded statement piece created to bring colour, texture and individuality to your look. Custom colours and sizing may be requested. This is editable mock product content for development.',
    image: goldPendant,
    imageAlt:
      'Temporary mock image representing a handcrafted beaded statement necklace by Selah Starr Studio',
    colours: ['Editable mock colourways'],
    sizes: ['Custom sizing available'],
    featured: true,
    newArrival: true,
    bestSeller: true,
    tags: ['statement', 'necklace', 'mock data'],
  }),
  createProduct({
    id: 'sss-002',
    slug: 'layered-colour-bead-bracelet',
    name: 'Layered Colour Bead Bracelet',
    category: 'Bracelets',
    shortDescription:
      'A layered bracelet concept with playful bead spacing and an expressive studio-made finish.',
    description:
      'This layered bracelet mock-up reflects Selah Starr Studio’s expressive handmade direction, with room for custom colour stories and sizing requests before launch details are confirmed.',
    image: braceletStack,
    imageAlt:
      'Temporary mock image representing a layered colour bead bracelet by Selah Starr Studio',
    colours: ['Editable mock colourways'],
    sizes: ['Custom sizing available'],
    featured: true,
    bestSeller: true,
    tags: ['bracelet', 'layered', 'mock data'],
  }),
  createProduct({
    id: 'sss-003',
    slug: 'sculptural-beaded-earrings',
    name: 'Sculptural Beaded Earrings',
    category: 'Earrings',
    shortDescription:
      'Statement earrings with movement, colour contrast, and handcrafted character.',
    description:
      'Designed as wearable art, these mock sculptural earrings suggest movement and texture through layered beadwork. Colour combinations and sizing remain editable until the client confirms the final assortment.',
    image: silverPendant,
    imageAlt:
      'Temporary mock image representing sculptural beaded earrings by Selah Starr Studio',
    colours: ['Editable mock colourways'],
    sizes: ['One size'],
    featured: true,
    newArrival: true,
    tags: ['earrings', 'wearable art', 'mock data'],
  }),
  createProduct({
    id: 'sss-004',
    slug: 'custom-waist-bead-set',
    name: 'Custom Waist Bead Set',
    category: 'Waist Beads',
    shortDescription:
      'A custom waist bead concept created around personal colour preferences and measurements.',
    description:
      'This editable mock waist bead set is positioned as a made-to-order piece shaped around preferred colours, measurements, and occasion-based styling.',
    image: goldRings,
    imageAlt:
      'Temporary mock image representing a custom waist bead set by Selah Starr Studio',
    colours: ['Editable mock colourways'],
    sizes: ['Measurement-based fit'],
    featured: true,
    bestSeller: true,
    tags: ['waist beads', 'custom', 'mock data'],
  }),
  createProduct({
    id: 'sss-005',
    slug: 'pearl-and-crystal-bralette',
    name: 'Pearl and Crystal Bralette',
    category: 'Beaded Bralettes',
    shortDescription:
      'A dramatic bralette concept designed for styling moments, celebrations, and performance looks.',
    description:
      'This temporary bralette concept presents a more sculptural Selah Starr Studio direction, pairing beadwork, decorative elements, and a made-to-order fit. Final materials and pricing remain unconfirmed.',
    image: heroPortrait,
    imageAlt:
      'Temporary mock image representing a pearl and crystal beaded bralette by Selah Starr Studio',
    colours: ['Editable mock colourways'],
    sizes: ['Made-to-measure'],
    featured: true,
    newArrival: true,
    bestSeller: true,
    tags: ['bralette', 'statement', 'mock data'],
  }),
  createProduct({
    id: 'sss-006',
    slug: 'multicolour-beaded-bralette',
    name: 'Multicolour Beaded Bralette',
    category: 'Beaded Bralettes',
    shortDescription:
      'A high-impact bralette concept built around colour, pattern, and stage-ready presence.',
    description:
      'This mock product highlights Selah Starr Studio’s wearable-art positioning through layered colour and beadwork intended for custom requests, styled shoots, and bold occasion dressing.',
    image: minimalWatch,
    imageAlt:
      'Temporary mock image representing a multicolour beaded bralette by Selah Starr Studio',
    colours: ['Editable mock colourways'],
    sizes: ['Made-to-measure'],
    featured: true,
    tags: ['bralette', 'colour', 'mock data'],
  }),
  createProduct({
    id: 'sss-007',
    slug: 'custom-festival-body-piece',
    name: 'Custom Festival Body Piece',
    category: 'Wearable Art',
    shortDescription:
      'A custom body piece concept for styling around movement, events, and personal expression.',
    description:
      'This wearable-art mock entry is framed as a custom conversation piece shaped around the wearer’s preferred colours, fit notes, and event styling goals.',
    image: braceletStack,
    imageAlt:
      'Temporary mock image representing a custom festival body piece by Selah Starr Studio',
    colours: ['Editable mock colourways'],
    sizes: ['Made-to-measure'],
    featured: true,
    bestSeller: true,
    tags: ['body piece', 'custom', 'mock data'],
  }),
  createProduct({
    id: 'sss-008',
    slug: 'handwoven-beaded-choker',
    name: 'Handwoven Beaded Choker',
    category: 'Beaded Necklaces',
    shortDescription:
      'A close-fit necklace concept with handwoven texture and bold handcrafted detailing.',
    description:
      'This choker mock-up is positioned as a detailed handwoven piece with an expressive silhouette and flexible custom-colour direction. Final materials, sizing notes, and pricing remain editable.',
    image: goldPendant,
    imageAlt:
      'Temporary mock image representing a handwoven beaded choker by Selah Starr Studio',
    colours: ['Editable mock colourways'],
    sizes: ['Custom sizing available'],
    featured: true,
    tags: ['choker', 'necklace', 'mock data'],
  }),
  createProduct({
    id: 'sss-009',
    slug: 'beaded-shoulder-accessory',
    name: 'Beaded Shoulder Accessory',
    category: 'Wearable Art',
    shortDescription:
      'A styled accessory concept designed to drape across the shoulders with artistic impact.',
    description:
      'Created as editable mock content, this beaded shoulder accessory showcases a more fashion-led Selah Starr Studio offering for editorials, celebrations, and custom commissions.',
    image: heroPortrait,
    imageAlt:
      'Temporary mock image representing a beaded shoulder accessory by Selah Starr Studio',
    colours: ['Editable mock colourways'],
    sizes: ['Made-to-measure'],
    tags: ['shoulder accessory', 'custom', 'mock data'],
  }),
  createProduct({
    id: 'sss-010',
    slug: 'custom-bridal-beadwork',
    name: 'Custom Bridal Beadwork',
    category: 'Custom Pieces',
    shortDescription:
      'A bridal-focused custom concept for ceremony styling, receptions, and personal fittings.',
    description:
      'This mock product frames bridal beadwork as a consultation-led service with colour, fit, and occasion details confirmed directly with the client before production.',
    image: silverPendant,
    imageAlt:
      'Temporary mock image representing custom bridal beadwork by Selah Starr Studio',
    colours: ['Editable mock colourways'],
    sizes: ['Made-to-measure'],
    bestSeller: true,
    tags: ['bridal', 'custom', 'mock data'],
  }),
  createProduct({
    id: 'sss-011',
    slug: 'crystal-fringe-necklace',
    name: 'Crystal Fringe Necklace',
    category: 'Beaded Jewellery',
    shortDescription:
      'A fringe-led necklace concept with movement, sparkle, and a handmade finish.',
    description:
      'This temporary necklace entry emphasises fluid movement and expressive styling through handcrafted beading and decorative fringe details. Final specifications remain editable.',
    image: goldRings,
    imageAlt:
      'Temporary mock image representing a crystal fringe necklace by Selah Starr Studio',
    colours: ['Editable mock colourways'],
    sizes: ['Custom sizing available'],
    newArrival: true,
    tags: ['fringe', 'necklace', 'mock data'],
  }),
  createProduct({
    id: 'sss-012',
    slug: 'artistic-beaded-body-chain',
    name: 'Artistic Beaded Body Chain',
    category: 'Wearable Art',
    shortDescription:
      'A body-chain concept designed to layer over dresses, resortwear, or styled looks.',
    description:
      'Positioned as editable mock content, this body chain reflects Selah Starr Studio’s handmade wearable-art direction and is intended for made-to-order custom sizing.',
    image: minimalWatch,
    imageAlt:
      'Temporary mock image representing an artistic beaded body chain by Selah Starr Studio',
    colours: ['Editable mock colourways'],
    sizes: ['Made-to-measure'],
    tags: ['body chain', 'wearable art', 'mock data'],
  }),
]

export const featuredProducts = allProducts.filter((product) => product.featured).slice(0, 8)
