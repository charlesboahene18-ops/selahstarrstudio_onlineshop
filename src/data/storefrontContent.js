import { brand } from '../config/brand'
import chainBanner from '../assets/backgrounds/chain-banner.svg'
import missionDetail from '../assets/editorial/mission-detail.svg'
import blogCare from '../assets/editorial/blog-care.svg'
import blogLayering from '../assets/editorial/blog-layering.svg'
import blogOccasion from '../assets/editorial/blog-occasion.svg'
import missionPortrait from '../assets/editorial/mission-portrait.svg'
import missionStudio from '../assets/editorial/mission-studio.svg'
import customOrderPearlSet from '../assets/custom-order-pearl-set.jpg'
import customOrderPurpleCuff from '../assets/custom-order-arm-cuffs.jpg'
import customOrderGoldChoker from '../assets/custom-order-gold-choker.jpg'
import socialPendant from '../assets/social/social-pendant.svg'
import socialPortrait from '../assets/social/social-portrait.svg'
import socialSquareOne from '../assets/social/social-square-one.svg'
import socialSquareTwo from '../assets/social/social-square-two.svg'
import socialWatch from '../assets/social/social-watch.svg'
import { featuredCollections, studioCollections } from './collectionData'
import { allProducts, featuredProducts } from './mockProducts'
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp'
import {
  toCollectionRoute,
  toHomeSection,
  toJournalPostRoute,
  toProductsRoute,
} from '../utils/routes'

export const announcementMessages = [
  'Handmade pieces created with care',
  'Custom orders are available',
  `Follow ${brand.instagramHandle} on Instagram`,
]

export const socialLinks = [
  {
    icon: 'instagram',
    label: 'Instagram',
    ariaLabel: `Follow ${brand.name} on Instagram`,
    href: brand.instagramUrl,
    external: true,
  },
  {
    icon: 'whatsapp',
    label: 'WhatsApp',
    ariaLabel: 'Contact Selah Starr Studio on WhatsApp',
    href: brand.whatsappUrl,
    external: true,
  },
]

export const navLinks = [
  {
    label: 'Shop',
    href: toProductsRoute(),
    items: featuredCollections.map((collection) => ({
      label: collection.name,
      description: collection.label,
      href: collection.href,
    })),
  },
  {
    label: 'Collections',
    href: toHomeSection('collections'),
    items: studioCollections.map((collection) => ({
      label: collection.name,
      description: collection.label,
      href: collection.href,
    })),
  },
  { label: 'About', href: toHomeSection('mission') },
]

export const headerSocialLinks = socialLinks

export const themeHeroContent = {
  eyebrow: brand.name,
  introLines: [brand.name.toUpperCase(), brand.wordmarkTagline, brand.name.toUpperCase()],
  serifTitle: 'Wearable Art, Handmade',
  sansTitle: 'With Soul & Sparkle',
  description: brand.heroSupportingCopy,
  primaryCta: 'Shop the Collection',
  primaryHref: toProductsRoute(),
  secondaryCta: 'Request a Custom Piece on WhatsApp',
  secondaryHref: buildWhatsAppUrl(whatsappMessages.customPiece),
  secondaryExternal: true,
}

export const launchContent = {
  eyebrow: 'Custom order spotlight',
  title: 'Designed Around You',
  accent: 'Custom',
  description:
    'Request a custom jewellery or wearable-art piece inspired by your preferred colours, measurements, occasion and personal style. All product details remain editable until confirmed by Selah Starr Studio.',
  cta: 'Start a Custom Order on WhatsApp',
  href: buildWhatsAppUrl(whatsappMessages.customOrder),
  external: true,
  images: [
    {
      src: customOrderPearlSet,
      alt: 'Freshwater pearl necklace, bracelet and earrings by Selah Starr Studio',
      objectPosition: 'center top',
    },
    {
      src: customOrderPurpleCuff,
      alt: 'Purple handmade wire arm cuff by Selah Starr Studio',
      objectPosition: 'center top',
    },
    {
      src: customOrderGoldChoker,
      alt: 'Gold handmade wire choker on a red jewellery display by Selah Starr Studio',
      objectPosition: 'center 38%',
    },
  ],
}

export const collectionSections = {
  featured: {
    id: 'collections',
    eyebrow: 'Collection spotlight',
    title: 'Beaded Creations & Wearable Art',
    description:
      'Editable mock categories tailored to Selah Starr Studio’s handmade beadwork and custom design direction.',
    items: featuredCollections,
    tone: 'gold',
  },
  studio: {
    id: 'studio-categories',
    eyebrow: 'Studio categories',
    title: 'More Ways to Wear Selah Starr',
    description:
      'Additional temporary categories for necklaces, bracelets, earrings, and waist beads while the final assortment is being confirmed.',
    items: studioCollections,
    tone: 'silver',
  },
}

export const giftBannerContent = {
  eyebrow: 'Gift moments',
  title: 'Made With Intention',
  description:
    'Celebrate someone special with a handcrafted piece created with colour, detail and personal meaning.',
  cta: 'Explore Gift Ideas',
  href: toProductsRoute(),
  background: chainBanner,
}

export const membershipContent = {
  eyebrow: 'Newsletter',
  title: 'Join the Selah Starr Community',
  description:
    'Receive updates about new creations, custom-order openings and behind-the-scenes studio moments.',
  placeholder: 'Enter your email',
  buttonLabel: 'Join the Community',
  idleMessage:
    'This signup form is frontend-only and should be connected to a real mailing service before launch.',
  emptyMessage: 'Enter an email address to join the Selah Starr community.',
  invalidMessage: 'Enter a valid email format, for example name@yourmail.com.',
  successMessage:
    'Thanks for joining. This demo signup is frontend-only until a mailing service is connected.',
}

export const productSection = {
  id: 'bestsellers',
  eyebrow: 'Featured pieces',
  title: 'Featured Creations',
  description:
    'Temporary mock product cards representing Selah Starr Studio’s handmade beadwork, custom pieces, and wearable-art direction.',
  cta: 'Enquire on WhatsApp',
  ctaHref: buildWhatsAppUrl(whatsappMessages.generalEnquiry),
  ctaExternal: true,
}

export const missionContent = {
  eyebrow: 'Brand story',
  title: 'Jewellery Made to Tell',
  accent: 'Your Story',
  description:
    'Selah Starr Studio creates expressive handmade jewellery and wearable art through detailed beadwork, thoughtful colour combinations and individual craftsmanship. Each piece is designed to help its wearer feel distinctive, confident and beautifully seen. From statement jewellery to custom beaded fashion, every design begins with creativity and is shaped by the personality of the person who will wear it.',
  cta: 'Discover Our Story',
  href: '#contact',
  images: [
    {
      src: missionPortrait,
      alt: 'Temporary mock image representing a Selah Starr Studio portrait editorial',
    },
    {
      src: missionStudio,
      alt: 'Temporary mock image representing a Selah Starr Studio studio detail',
    },
    {
      src: missionDetail,
      alt: 'Temporary mock image representing handmade beadwork and decorative elements',
    },
  ],
}

export const faqSection = {
  eyebrow: 'Helpful details',
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about handmade pieces, custom orders, care, and shipping. Any policy details not yet confirmed remain clearly marked as editable.',
}

export const faqItems = [
  {
    question: 'Are your pieces handmade?',
    answer:
      'Selah Starr Studio is presented here as a handmade jewellery and wearable-art brand. Final client-approved wording about process and production can be updated in this mock content before launch.',
  },
  {
    question: 'Can I request a custom design?',
    answer:
      'Yes. Custom orders are currently represented as an editable frontend flow so the client can confirm the final consultation and order process.',
  },
  {
    question: 'Can I choose my colours?',
    answer:
      'Custom colour requests are supported in this mock experience. Final options and limitations should be confirmed directly by Selah Starr Studio.',
  },
  {
    question: 'How do I submit my measurements?',
    answer:
      'Use the custom-order request form to share measurements and fit notes. The final client-approved measurement workflow is still to be confirmed.',
  },
  {
    question: 'How long does a custom order take?',
    answer:
      'Production time depends on the piece and the request. Final turnaround times should be confirmed by the client before launch and before any order is accepted.',
  },
  {
    question: 'How should I care for my beaded piece?',
    answer:
      'Store each piece dry, avoid harsh chemicals, and handle with care. Product-specific care guidance remains editable until approved by the client.',
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      'Shipping availability, production time and delivery cost depend on the order and destination. Contact Selah Starr Studio to confirm the details before placing an order.',
  },
  {
    question: 'Can custom orders be returned?',
    answer:
      'Returns and exchange terms for custom pieces have not been confirmed. This website intentionally avoids publishing a firm policy until the client provides approved guidance.',
  },
]

export const socialContent = {
  eyebrow: 'Follow Our Journey',
  title: 'follow us',
  description:
    'Visit Selah Starr Studio on Instagram for new pieces, custom-order inspiration, and behind-the-scenes studio moments, or message the studio directly on WhatsApp for enquiries.',
  ctaLabel: `Follow ${brand.instagramHandle}`,
  ctaHref: brand.instagramUrl,
  socialLinks,
  images: [
    {
      src: socialSquareOne,
      alt: 'Temporary mock image representing handmade beadwork for Selah Starr Studio social content',
    },
    {
      src: socialPortrait,
      alt: 'Temporary mock image representing a Selah Starr Studio portrait social post',
    },
    {
      src: socialSquareTwo,
      alt: 'Temporary mock image representing colourful wearable art for Selah Starr Studio social content',
    },
    {
      src: socialWatch,
      alt: 'Temporary mock image representing a handcrafted accessory social post',
    },
    {
      src: socialPendant,
      alt: 'Temporary mock image representing beadwork detail for Selah Starr Studio social content',
    },
  ],
}

export const blogSection = {
  eyebrow: 'Studio journal',
  title: 'Draft Stories Behind the Beadwork',
  description:
    'Temporary editorial cards written in Selah Starr Studio’s voice. These articles should be treated as draft content until the client approves final copy.',
}

export const blogPosts = [
  {
    slug: 'styling-statement-beadwork-with-confidence',
    category: 'Draft Styling Guide',
    title: 'Styling Statement Beadwork With Confidence',
    excerpt:
      'Draft article concept: pair one expressive piece with simple silhouettes, then let colour and craftsmanship lead the look.',
    image: blogLayering,
    imageAlt:
      'Temporary mock image representing a draft styling article for Selah Starr Studio',
    href: toJournalPostRoute('styling-statement-beadwork-with-confidence'),
    readingTime: '4 min read',
    introduction:
      'This draft journal entry explores how Selah Starr Studio statement beadwork can stay expressive without overwhelming the full outfit.',
    sections: [
      {
        heading: 'Start With One Lead Piece',
        body:
          'Choose the necklace, earring set, or body piece you want to build around first. Let that handcrafted focal point guide your neckline, sleeve volume, and colour balance.',
      },
      {
        heading: 'Give Colour Room To Breathe',
        body:
          'When beadwork is already doing visual work, cleaner fabric silhouettes usually create the strongest contrast. Simple cuts allow texture and colour placement to stay intentional.',
      },
      {
        heading: 'Repeat A Detail, Not The Whole Palette',
        body:
          'A single accent colour repeated in shoes, makeup, or a bag often feels more refined than matching every shade in the piece. The jewellery remains the main event.',
      },
    ],
  },
  {
    slug: 'how-to-care-for-handmade-beaded-pieces',
    category: 'Draft Care Guide',
    title: 'How to Care for Handmade Beaded Pieces',
    excerpt:
      'Draft article concept: store pieces carefully, protect them from moisture, and handle delicate beadwork with intention.',
    image: blogCare,
    imageAlt:
      'Temporary mock image representing a draft care guide for Selah Starr Studio',
    href: toJournalPostRoute('how-to-care-for-handmade-beaded-pieces'),
    readingTime: '3 min read',
    introduction:
      'This draft care guide outlines the baseline habits that help handmade beadwork retain its shape, finish, and visual clarity over time.',
    sections: [
      {
        heading: 'Store Pieces Separately',
        body:
          'Keeping handcrafted items in separate pouches or compartments reduces tangling, friction, and unnecessary stress on closures or woven sections.',
      },
      {
        heading: 'Keep Moisture And Chemicals Away',
        body:
          'Perfume, lotion, and humidity can all affect delicate materials differently. It is safer to add jewellery after getting dressed and to keep pieces dry when not in use.',
      },
      {
        heading: 'Check Fit Before Each Wear',
        body:
          'For made-to-measure or more sculptural pieces, a quick check of ties, clasps, and bead tension helps catch small issues before they become larger repairs.',
      },
    ],
  },
  {
    slug: 'choosing-colours-for-a-custom-jewellery-design',
    category: 'Draft Custom Guide',
    title: 'Choosing Colours for a Custom Jewellery Design',
    excerpt:
      'Draft article concept: start with mood, occasion, and personal style, then build a colour story around how the piece will be worn.',
    image: blogOccasion,
    imageAlt:
      'Temporary mock image representing a draft custom design article for Selah Starr Studio',
    href: toJournalPostRoute('choosing-colours-for-a-custom-jewellery-design'),
    readingTime: '5 min read',
    introduction:
      'This draft custom-order note helps clients think through colour in a way that feels personal, wearable, and connected to the occasion.',
    sections: [
      {
        heading: 'Begin With Mood Before Shade',
        body:
          'Words like celebratory, grounded, soft, bold, or ceremonial are often more useful than naming exact colours immediately. Mood gives the design direction.',
      },
      {
        heading: 'Match The Piece To The Moment',
        body:
          'A commission for a wedding guest look, performance costume, or editorial shoot may need a very different colour rhythm from an everyday accessory.',
      },
      {
        heading: 'Use Skin Tone And Wardrobe As Reference',
        body:
          'Bringing a few garments, inspiration images, or fabric tones into the conversation helps the studio shape a palette that feels lived-in rather than random.',
      },
    ],
  },
]

export const footerLinkGroups = [
  {
    title: 'Shop',
    links: [
      { label: 'Handmade Jewellery', href: toCollectionRoute('beaded-jewellery') },
      { label: 'Wearable Art', href: toCollectionRoute('wearable-art') },
      { label: 'Featured Creations', href: toProductsRoute() },
    ],
  },
  {
    title: 'Studio',
    links: [
      { label: 'About Selah Starr', href: '#mission' },
      { label: 'Custom Orders', href: '#custom-order-form' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { label: 'Shipping details to confirm', href: '#faq' },
      { label: 'Returns details to confirm', href: '#faq' },
      { label: 'Contact us through Instagram', href: brand.instagramUrl, external: true },
      { label: `WhatsApp: ${brand.whatsappNumber}`, href: brand.whatsappUrl, external: true },
    ],
  },
]

export const footerContent = {
  description:
    'Handmade jewellery, expressive beadwork and custom wearable art created to celebrate individuality.',
  socialLinks,
  contactLinks: [
    {
      label: 'Contact us on WhatsApp',
      href: buildWhatsAppUrl(whatsappMessages.generalEnquiry),
      external: true,
    },
    {
      label: 'Contact us through Instagram',
      href: brand.instagramUrl,
      external: true,
    },
  ],
  contactDetails: [
    {
      label: 'WhatsApp',
      value: brand.whatsappNumber,
      href: brand.whatsappUrl,
      external: true,
    },
  ],
  customOrder: {
    title: 'Start a Custom Order',
    description:
      'Share your preferred colours, measurements, occasion, and style notes to begin a WhatsApp custom-order conversation.',
    fields: {
      name: 'Name',
      contact: 'Instagram handle, email, or phone',
      details: 'Preferred colours, measurements, occasion, and style notes',
    },
    buttonLabel: 'Start a Custom Order on WhatsApp',
    idleMessage:
      'This form now opens WhatsApp with your custom-order details for a direct conversation with Selah Starr Studio.',
    validationMessage: 'Add a contact method and a few request details before submitting.',
    successMessage:
      'Opening WhatsApp with your custom-order details.',
  },
  newsletter: {
    title: 'Join the Selah Starr Community',
    description:
      'Receive updates about new creations, custom-order openings and behind-the-scenes studio moments.',
    inputLabel: 'Email address',
    placeholder: 'Enter your email',
    buttonLabel: 'Join the Community',
    idleMessage:
      'No live mailing service is connected yet. This newsletter form remains a frontend-only placeholder.',
    invalidMessage: 'Enter a valid email address to join the community.',
    successMessage:
      'You are on the list in this demo build. Connect a real mailing service before production.',
  },
  copyright: `© ${new Date().getFullYear()} ${brand.name}. All rights reserved.`,
}

export { allProducts, brand, featuredProducts }
