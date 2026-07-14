import { brand } from '../config/brand'
import chainBanner from '../assets/backgrounds/chain-banner.svg'
import missionDetail from '../assets/editorial/mission-detail.svg'
import blogCare from '../assets/editorial/blog-care.svg'
import blogLayering from '../assets/editorial/blog-layering.svg'
import blogOccasion from '../assets/editorial/blog-occasion.svg'
import missionPortrait from '../assets/editorial/mission-portrait.svg'
import missionStudio from '../assets/editorial/mission-studio.svg'
import heroPortrait from '../assets/hero/hero-portrait.svg'
import braceletStack from '../assets/products/bracelet-stack.svg'
import goldPendant from '../assets/products/gold-pendant.svg'
import socialPendant from '../assets/social/social-pendant.svg'
import socialPortrait from '../assets/social/social-portrait.svg'
import socialSquareOne from '../assets/social/social-square-one.svg'
import socialSquareTwo from '../assets/social/social-square-two.svg'
import socialWatch from '../assets/social/social-watch.svg'
import { featuredCollections, studioCollections } from './collectionData'
import { allProducts, featuredProducts } from './mockProducts'

export const announcementMessages = [
  'Handmade pieces created with care',
  'Custom orders are available',
  `Follow ${brand.instagramHandle} on Instagram`,
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Custom Orders', href: '#custom-order-form' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
]

export const headerSocialLinks = [
  {
    icon: 'instagram',
    label: 'Instagram',
    href: brand.instagramUrl,
    external: true,
  },
]

export const themeHeroContent = {
  eyebrow: brand.name,
  serifTitle: 'Wearable Art, Handmade',
  sansTitle: 'With Soul & Sparkle',
  description: brand.heroSupportingCopy,
  primaryCta: 'Shop the Collection',
  primaryHref: '#collections',
  secondaryCta: 'Request a Custom Piece',
  secondaryHref: '#custom-order-form',
  scriptText: 'Wearable Art',
  badgeText: 'S',
  showcaseAnnouncementText: announcementMessages.join(' · '),
  showcaseBrandLabel: brand.shortName,
  showcaseSocialHandle: brand.instagramHandle,
}

export const launchContent = {
  eyebrow: 'Custom order spotlight',
  title: 'Designed Around You',
  accent: 'Custom',
  description:
    'Request a custom jewellery or wearable-art piece inspired by your preferred colours, measurements, occasion and personal style. All product details remain editable until confirmed by Selah Starr Studio.',
  cta: 'Start a Custom Order',
  href: '#custom-order-form',
  images: [
    {
      src: braceletStack,
      alt: 'Temporary mock image representing a custom beaded bracelet concept by Selah Starr Studio',
    },
    {
      src: heroPortrait,
      alt: 'Temporary mock image representing a custom wearable art portrait for Selah Starr Studio',
    },
    {
      src: goldPendant,
      alt: 'Temporary mock image representing a custom necklace concept by Selah Starr Studio',
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
  href: '#bestsellers',
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
  cta: 'Request a featured piece',
  ctaHref: '#custom-order-form',
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
    'Visit Selah Starr Studio on Instagram for new pieces, custom-order inspiration, and behind-the-scenes studio moments. The collage below uses temporary mock assets only.',
  ctaLabel: `Follow ${brand.instagramHandle}`,
  ctaHref: brand.instagramUrl,
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
    category: 'Draft Styling Guide',
    title: 'Styling Statement Beadwork With Confidence',
    excerpt:
      'Draft article concept: pair one expressive piece with simple silhouettes, then let colour and craftsmanship lead the look.',
    image: blogLayering,
    imageAlt:
      'Temporary mock image representing a draft styling article for Selah Starr Studio',
    href: '#contact',
  },
  {
    category: 'Draft Care Guide',
    title: 'How to Care for Handmade Beaded Pieces',
    excerpt:
      'Draft article concept: store pieces carefully, protect them from moisture, and handle delicate beadwork with intention.',
    image: blogCare,
    imageAlt:
      'Temporary mock image representing a draft care guide for Selah Starr Studio',
    href: '#contact',
  },
  {
    category: 'Draft Custom Guide',
    title: 'Choosing Colours for a Custom Jewellery Design',
    excerpt:
      'Draft article concept: start with mood, occasion, and personal style, then build a colour story around how the piece will be worn.',
    image: blogOccasion,
    imageAlt:
      'Temporary mock image representing a draft custom design article for Selah Starr Studio',
    href: '#contact',
  },
]

export const footerLinkGroups = [
  {
    title: 'Shop',
    links: [
      { label: 'Handmade Jewellery', href: '#collections' },
      { label: 'Wearable Art', href: '#studio-categories' },
      { label: 'Featured Creations', href: '#bestsellers' },
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
    ],
  },
]

export const footerContent = {
  description:
    'Handmade jewellery, expressive beadwork and custom wearable art created to celebrate individuality.',
  socialLinks: [
    {
      icon: 'instagram',
      label: 'Instagram',
      href: brand.instagramUrl,
      external: true,
    },
  ],
  customOrder: {
    title: 'Start a Custom Order',
    description:
      'Share your preferred colours, measurements, occasion, and style notes to begin an editable custom-order request.',
    fields: {
      name: 'Name',
      contact: 'Instagram handle or email',
      details: 'Preferred colours, measurements, occasion, and style notes',
    },
    buttonLabel: 'Send Request',
    idleMessage:
      'This form is frontend-only. Until a live workflow is connected, clients should contact Selah Starr Studio through Instagram.',
    validationMessage: 'Add a contact method and a few request details before submitting.',
    successMessage:
      'Your request has been captured in this demo UI only. Connect this form to Selah Starr Studio’s preferred contact workflow before launch.',
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
  contactCta: 'Contact us through Instagram',
  contactHref: brand.instagramUrl,
  copyright: `© ${new Date().getFullYear()} ${brand.name}. All rights reserved.`,
}

export const showcaseSlides = [
  {
    key: 'custom-order',
    label: 'custom order slide',
    type: 'launch',
    title: 'Custom Piece Preview',
    description: 'Three mock visuals showing the studio’s made-to-order and wearable-art direction.',
    mobileTitle: 'Custom piece',
    mobileDescription: 'Personal beadwork and made-to-order wearable art.',
    cta: 'Start a custom order',
    images: launchContent.images,
    mobileImage: launchContent.images[0],
    miniImages: [launchContent.images[0], launchContent.images[2]],
  },
  {
    key: 'featured-collections',
    label: 'featured collections slide',
    type: 'collection',
    title: 'Beaded Creations',
    description: 'Category cards centered on handmade jewellery, custom pieces, and wearable art.',
    mobileTitle: 'Collections',
    mobileDescription: 'Beaded jewellery, bralettes, custom pieces, and wearable art.',
    cta: 'Browse collections',
    items: featuredCollections,
    mobileImage: {
      src: featuredCollections[0].image,
      alt: featuredCollections[0].imageAlt,
    },
    miniImages: featuredCollections.slice(0, 2).map((item) => ({
      src: item.image,
      alt: item.imageAlt,
    })),
  },
  {
    key: 'studio-categories',
    label: 'studio categories slide',
    type: 'collection',
    title: 'Studio Categories',
    description: 'Additional category previews for necklaces, bracelets, earrings, and waist beads.',
    mobileTitle: 'Studio pieces',
    mobileDescription: 'Necklaces, bracelets, earrings, and waist beads.',
    cta: 'View more',
    items: studioCollections,
    mobileImage: {
      src: studioCollections[0].image,
      alt: studioCollections[0].imageAlt,
    },
    miniImages: studioCollections.slice(0, 2).map((item) => ({
      src: item.image,
      alt: item.imageAlt,
    })),
  },
  {
    key: 'featured-products',
    label: 'featured products slide',
    type: 'bestsellers',
    title: 'Featured Creations',
    description: 'Editable mock product cards with contact-for-pricing labels and handmade storytelling.',
    mobileTitle: 'Featured pieces',
    mobileDescription: 'Customisable mock products for the Selah Starr Studio catalogue.',
    cta: 'Shop the collection',
    items: featuredProducts,
    mobileImage: featuredProducts[0].images[0],
    miniImages: featuredProducts.slice(0, 2).map((item) => ({
      src: item.images[0].src,
      alt: item.images[0].alt,
    })),
  },
  {
    key: 'mission',
    label: 'mission slide',
    type: 'mission',
    title: 'Jewellery Made to Tell Your Story',
    description: 'A soft collage and brand story focused on beadwork, individuality, and handmade detail.',
    mobileTitle: 'Our story',
    mobileDescription: 'Handmade jewellery, colour stories, and wearable art.',
    cta: 'Discover our story',
    images: missionContent.images,
    mobileImage: missionContent.images[1],
    miniImages: missionContent.images.slice(0, 2),
  },
  {
    key: 'social',
    label: 'social collage slide',
    type: 'social',
    title: 'Follow Our Journey',
    description: 'A branded social collage with temporary mock assets and the studio’s Instagram handle.',
    mobileTitle: 'Follow us',
    mobileDescription: 'Studio moments and temporary mock social imagery.',
    cta: `Follow ${brand.instagramHandle}`,
    images: socialContent.images.slice(0, 4),
    mobileImage: socialContent.images[1],
    miniImages: socialContent.images.slice(0, 2),
  },
]

export { allProducts, brand, featuredProducts }
