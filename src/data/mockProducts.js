import { brand } from '../config/brand'
import heroPortrait from '../assets/hero/hero-portrait.svg'
import goldRings from '../assets/products/gold-rings.svg'
import minimalWatch from '../assets/products/minimal-watch.svg'
import silverPendant from '../assets/products/silver-pendant.svg'
import prismaticHeartsNecklace from '../assets/instagram/Love isn’t one color.It isn’t one moment.It isn’t one story.Prismatic Hearts is a celebration of.jpg'
import layeredBraceletStack from '../assets/instagram/E5108176-6256-4C42-9458-E1F2EF153F5F.PNG'
import customWaistBeadSet from '../assets/kc9yvxkc9yvxkc9y.jpg'
import pearlAndGoldSet from '../assets/custom-orders/custom-order-pearl-set.jpg'
import crystalCascadeBralette from '../assets/products/beaded-bralette.png'
import wireWrappedCuff from '../assets/custom-orders/custom-order-arm-cuffs.jpg'
import wireWrappedChoker from '../assets/custom-orders/custom-order-gold-choker.jpg'
import { buildProductWhatsAppUrl } from '../utils/whatsapp'
import { toProductRoute } from '../utils/routes'

const contactPriceLabel = 'Contact for pricing'
const generalMaterial = 'Hand-selected beads and decorative elements'
const careInstructions =
  'Store each piece flat in a dry pouch away from direct sunlight, put jewellery on after perfume and lotion, and wipe gently with a soft, dry cloth after wear.'

function formatPriceLabel(price, currency) {
  if (price == null) return contactPriceLabel
  const symbol = currency === 'GHS' ? 'GH₵' : `${currency} `
  return `${symbol}${price.toLocaleString('en-GH')}`
}

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
  material,
  price = null,
  hasPhoto = true,
  shopLabel = 'Shop Now',
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
    price,
    priceLabel: formatPriceLabel(price, brand.currency),
    currency: brand.currency,
    images: [{ src: image, alt: imageAlt }],
    hasPhoto,
    shopLabel,
    colours,
    sizes,
    material: material ?? generalMaterial,
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
    isMockData: price == null,
    href: toProductRoute(slug),
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
      'A gold chain necklace set with a rainbow of heart-shaped gemstones, finished with a matching lariat drop.',
    description:
      'Each heart-shaped gemstone is bezel-set along a fine gold chain, finished with a matching lariat drop at the front. A colourful, versatile statement piece that layers beautifully or shines on its own.',
    image: prismaticHeartsNecklace,
    imageAlt:
      'Model wearing a gold chain necklace set with multicolour heart-shaped gemstones and a matching lariat drop, handcrafted by Selah Starr Studio',
    colours: ['Gold-plated chain with multicolour heart-cut gemstone settings in ruby, emerald, sapphire, amethyst, and citrine tones'],
    sizes: ['Adjustable, approx. 40–45cm'],
    material: 'Gold-plated brass chain with faceted glass gemstone settings',
    price: 450,
    shopLabel: 'Shop the Necklace',
    featured: true,
    newArrival: true,
    bestSeller: true,
    tags: ['statement', 'necklace', 'pearl'],
  }),
  createProduct({
    id: 'sss-002',
    slug: 'layered-bracelet-stack',
    name: 'Layered Bracelet Stack',
    category: 'Bracelets',
    shortDescription:
      'A trio of stacked beaded bracelets combining matte onyx, red agate, and gold pavé panther details.',
    description:
      'Worn together as a set, this trio of stacked bracelets pairs matte onyx with rich red agate and gold pavé panther-head accents. Each strand can also be requested on its own for a more understated everyday look.',
    image: layeredBraceletStack,
    imageAlt:
      'A stack of three beaded bracelets in matte onyx, red agate, and gold pavé panther-head details, worn on the wrist',
    colours: ['Matte onyx, red agate, and gold-plated accents'],
    sizes: ['Stretch fit, one size (approx. 17–19cm)'],
    material: 'Matte onyx beads, red agate, and gold-plated cubic zirconia accents',
    price: 280,
    shopLabel: 'Shop the Bracelet',
    featured: true,
    bestSeller: true,
    tags: ['bracelet', 'layered', 'onyx'],
  }),
  createProduct({
    id: 'sss-003',
    slug: 'pearl-and-gold-drop-earrings',
    name: 'Pearl and Gold Drop Earrings',
    category: 'Earrings',
    shortDescription:
      'Freshwater pearl drop earrings finished with gold-plated hoops, designed to pair with the matching pearl necklace and bracelet.',
    description:
      'These drop earrings pair genuine freshwater pearls with gold-plated hoops and beaded spacers. Offered as huggie hoops or classic ear-wire dangles, they complete the matching pearl necklace and bracelet for a polished, cohesive look.',
    image: pearlAndGoldSet,
    imageAlt:
      'Two pairs of freshwater pearl and gold-plated drop earrings styled alongside a matching pearl necklace and bracelet by Selah Starr Studio',
    colours: ['Freshwater pearl with gold-plated hoops and beads'],
    sizes: ['One size — hoop or ear-wire dangle styles available'],
    material: 'Freshwater pearls and gold-plated brass findings',
    price: 150,
    shopLabel: 'Shop the Earrings',
    featured: true,
    newArrival: true,
    tags: ['earrings', 'pearl', 'gold'],
  }),
  createProduct({
    id: 'sss-004',
    slug: 'custom-waist-bead-set',
    name: 'Custom Waist Bead Set',
    category: 'Waist Beads',
    shortDescription:
      'A made-to-measure waist bead set created around your preferred colours and desired fit.',
    description:
      'Each waist bead set is made to order after a short consultation on colour, bead size, and fit. Popular for everyday wear, body appreciation, and gifting, every strand is finished by hand to your measurements.',
    image: customWaistBeadSet,
    imageAlt: 'Custom waist bead set by Selah Starr Studio, made to order in your chosen colours',
    colours: ['Made to order in your preferred colour palette'],
    sizes: ['Measured to your waist for a personal fit'],
    material: 'Glass and acrylic beads on adjustable elastic or string',
    price: 120,
    hasPhoto: true,
    featured: true,
    bestSeller: true,
    tags: ['waist beads', 'custom'],
  }),
  createProduct({
    id: 'sss-005',
    slug: 'crystal-cascade-bralette',
    name: 'Crystal Cascade Bralette',
    category: 'Beaded Bralettes',
    shortDescription:
      'A dramatic beaded bralette in ruby and pink crystal, finished with cascading fringe and a hand-set agate pendant.',
    description:
      'Built entirely from faceted crystal beads, this bralette drapes into a cascading fringe finished with a hand-set agate pendant. Made to measure for performance looks, photoshoots, and standout occasion styling.',
    image: crystalCascadeBralette,
    imageAlt:
      'Ruby and pink crystal beaded bralette with cascading fringe and a hand-set agate pendant, handcrafted by Selah Starr Studio',
    colours: ['Ruby red and pink crystal with clear accent drops'],
    sizes: ['Made-to-measure, fitted to your bust and torso length'],
    material: 'Faceted glass crystal beads, gold-plated chain, and an agate cabochon pendant',
    price: 650,
    shopLabel: 'Shop the Bralette',
    featured: true,
    newArrival: true,
    bestSeller: true,
    tags: ['bralette', 'statement', 'crystal'],
  }),
  createProduct({
    id: 'sss-006',
    slug: 'multicolour-beaded-bralette',
    name: 'Multicolour Beaded Bralette',
    category: 'Beaded Bralettes',
    shortDescription:
      'A high-impact bralette built around your chosen colour palette, made to measure for standout styling.',
    description:
      'This bralette is created around a bold colour combination chosen at consultation, giving you a custom-fit statement piece for editorials, performances, or special occasions. Share your palette and measurements to begin.',
    image: minimalWatch,
    imageAlt: 'Multicolour beaded bralette concept by Selah Starr Studio, made to order in your chosen colours',
    colours: ['Made to order in your chosen colour combination'],
    sizes: ['Made-to-measure, fitted to your bust and torso length'],
    material: 'Hand-selected glass and acrylic beads on flexible thread',
    price: 580,
    hasPhoto: false,
    featured: true,
    tags: ['bralette', 'colour'],
  }),
  createProduct({
    id: 'sss-007',
    slug: 'wire-wrapped-statement-cuff',
    name: 'Wire-Wrapped Statement Cuff',
    category: 'Wearable Art',
    shortDescription:
      'A sculptural arm cuff hand-coiled in amethyst wire and finished with faceted crystal accents.',
    description:
      'This wearable-art cuff is hand-coiled from coloured wire into a spiralling silhouette, finished with faceted crystal accents. Made to measure for festivals, editorials, and statement styling.',
    image: wireWrappedCuff,
    imageAlt:
      'Sculptural amethyst wire-wrapped arm cuff with faceted crystal accents, handcrafted by Selah Starr Studio',
    colours: ['Amethyst purple wire with clear crystal accents'],
    sizes: ['Made-to-measure, wraps to fit your upper arm'],
    material: 'Hand-coiled coloured wire and faceted crystal beads',
    price: 320,
    shopLabel: 'Shop the Cuff',
    featured: true,
    bestSeller: true,
    tags: ['wearable art', 'wire wrap', 'custom'],
  }),
  createProduct({
    id: 'sss-008',
    slug: 'wire-wrapped-charm-choker',
    name: 'Wire-Wrapped Charm Choker',
    category: 'Beaded Necklaces',
    shortDescription:
      'A hand-coiled gold wire choker finished with a wire-wrapped mother-of-pearl drop pendant.',
    description:
      'This close-fit choker is hand-coiled from gold-plated wire and finished with a wire-wrapped mother-of-pearl drop. A versatile everyday piece that layers easily with longer necklaces.',
    image: wireWrappedChoker,
    imageAlt:
      'Hand-coiled gold wire choker with a wire-wrapped mother-of-pearl drop pendant, handcrafted by Selah Starr Studio',
    colours: ['Gold-plated wire with a mother-of-pearl drop'],
    sizes: ['Adjustable, fits most neck sizes'],
    material: 'Hand-coiled gold-plated wire and a wire-wrapped mother-of-pearl drop',
    price: 220,
    shopLabel: 'Shop the Choker',
    featured: true,
    tags: ['choker', 'necklace', 'wire wrap'],
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
    hasPhoto: false,
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
    hasPhoto: false,
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
    hasPhoto: false,
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
    hasPhoto: false,
    tags: ['body chain', 'wearable art', 'mock data'],
  }),
]

export const featuredProducts = allProducts.filter((product) => product.featured).slice(0, 8)
