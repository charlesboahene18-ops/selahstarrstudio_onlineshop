import { brand } from '../config/brand'
import blogCare from '../assets/editorial/blog-care.svg'
import blogLayering from '../assets/editorial/blog-layering.svg'
import blogOccasion from '../assets/editorial/blog-occasion.svg'
import missionPortraitPhoto from '../assets/instagram/Adorned in intention.Each curve, each coil, each crafted detail — a prayer of becoming.Selah Sta.jpg'
import missionCouplePhoto from '../assets/instagram/Reposting this correctly this time “My love child 🫶🏾🥹“Shot by @giannasnapped Beaded fit @fres-2.jpg'
import missionBraletteDetail from '../assets/instagram/Handcrafted with intention.Each beaded bralette is made to your exact measurements — offering fu.jpg'
import customOrderPearlSet from '../assets/custom-orders/custom-order-pearl-set.jpg'
import customOrderPurpleCuff from '../assets/custom-orders/custom-order-arm-cuffs.jpg'
import customOrderGoldChoker from '../assets/custom-orders/custom-order-gold-choker.jpg'
import giftMomentsVideo from '../assets/make_it_a_seconds_video.mp4'
import socialPendant from '../assets/social/social-pendant.svg'
import socialSquareOne from '../assets/social/social-square-one.svg'
import socialSquareTwo from '../assets/social/social-square-two.svg'
import socialWatch from '../assets/social/social-watch.svg'
import { featuredCollections, studioCollections } from './collectionData'
import { allProducts, featuredProducts } from './mockProducts'
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp'
import {
  toCollectionRoute,
  toHomeSection,
  toJournalRoute,
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

const toCollectionMenuLink = (collection) => ({
  label: collection.name,
  description: collection.label,
  href: collection.href,
})

const featuredCollectionLinks = featuredCollections.map(toCollectionMenuLink)
const studioCollectionLinks = studioCollections.map(toCollectionMenuLink)

export const navLinks = [
  {
    label: 'Shop',
    href: toProductsRoute(),
    columns: [
      {
        title: 'Jewellery Type',
        links: studioCollectionLinks,
      },
      {
        title: 'Signature Collections',
        links: featuredCollectionLinks,
      },
      {
        title: 'Browse the Studio',
        links: [
          {
            label: 'All Products',
            description: 'View the full studio assortment',
            href: toProductsRoute(),
          },
          {
            label: 'Featured Pieces',
            description: 'Jump to the curated bestseller edit',
            href: toHomeSection('bestsellers'),
          },
          {
            label: 'Gift Moments',
            description: 'Explore meaningful gifting ideas',
            href: toHomeSection('gifts'),
          },
          {
            label: 'Studio Journal',
            description: 'Read styling notes and brand stories',
            href: toJournalRoute(),
          },
        ],
      },
    ],
    featureCards: [
      {
        title: featuredCollections[0].name,
        description: featuredCollections[0].description,
        ctaLabel: 'Shop collection',
        href: featuredCollections[0].href,
        image: featuredCollections[0].image,
        imageAlt: featuredCollections[0].imageAlt,
      },
      {
        title: featuredCollections[3].name,
        description: featuredCollections[3].description,
        ctaLabel: 'Explore editorial pieces',
        href: featuredCollections[3].href,
        image: featuredCollections[3].image,
        imageAlt: featuredCollections[3].imageAlt,
      },
    ],
  },
  {
    label: 'Collections',
    href: toHomeSection('collections'),
    columns: [
      {
        title: 'Featured Collections',
        links: featuredCollectionLinks,
      },
      {
        title: 'Studio Categories',
        links: studioCollectionLinks,
      },
      {
        title: 'Discover More',
        links: [
          {
            label: 'Collection Spotlight',
            description: 'Browse the main collection grid',
            href: toHomeSection('collections'),
          },
          {
            label: 'Custom Order Spotlight',
            description: 'View the featured bespoke section',
            href: toHomeSection('launch'),
          },
          {
            label: 'Follow the Journey',
            description: 'Jump to the studio social collage',
            href: toHomeSection('social'),
          },
        ],
      },
    ],
    featureCards: [
      {
        title: featuredCollections[1].name,
        description: featuredCollections[1].description,
        ctaLabel: 'See statement pieces',
        href: featuredCollections[1].href,
        image: featuredCollections[1].image,
        imageAlt: featuredCollections[1].imageAlt,
      },
      {
        title: featuredCollections[2].name,
        description: featuredCollections[2].description,
        ctaLabel: 'Browse bespoke pieces',
        href: featuredCollections[2].href,
        image: featuredCollections[2].image,
        imageAlt: featuredCollections[2].imageAlt,
      },
    ],
  },
  {
    label: 'About',
    href: toHomeSection('mission'),
    columns: [
      {
        title: 'About Selah Starr',
        links: [
          {
            label: 'Our Story',
            description: 'Meet the studio and its point of view',
            href: toHomeSection('mission'),
          },
          {
            label: 'Studio Journal',
            description: 'Read the latest notes and features',
            href: toJournalRoute(),
          },
          {
            label: 'Follow Our Journey',
            description: 'See the studio social collage',
            href: toHomeSection('social'),
          },
        ],
      },
      {
        title: 'Help & Support',
        links: [
          {
            label: 'Contact',
            description: 'Reach out directly to the studio',
            href: toHomeSection('contact'),
          },
          {
            label: 'FAQs',
            description: 'Answers to shipping, care, and orders',
            href: toHomeSection('faq'),
          },
          {
            label: 'Custom Order Enquiry',
            description: 'Submit a bespoke order enquiry on WhatsApp',
            href: buildWhatsAppUrl(whatsappMessages.customOrder),
            external: true,
          },
        ],
      },
      {
        title: 'Explore the Site',
        links: [
          {
            label: 'All Products',
            description: 'Browse the full studio assortment',
            href: toProductsRoute(),
          },
          {
            label: 'Gift Moments',
            description: 'Discover gifting-focused pieces',
            href: toHomeSection('gifts'),
          },
          {
            label: 'Featured Pieces',
            description: 'Jump to the hero product section',
            href: toHomeSection('bestsellers'),
          },
        ],
      },
    ],
    featureCards: [
      {
        title: 'Inside the studio',
        description: 'See the custom-order process and the handmade details behind Selah Starr Studio.',
        ctaLabel: 'Read the brand story',
        href: toHomeSection('mission'),
        image: customOrderPearlSet,
        imageAlt: 'Selah Starr Studio custom pearl set in the studio',
      },
      {
        title: 'Need help?',
        description: 'Start with FAQs, then reach out for custom orders, sizing, or support.',
        ctaLabel: 'Get support',
        href: toHomeSection('faq'),
        image: customOrderGoldChoker,
        imageAlt: 'Selah Starr Studio handcrafted choker design for support and custom enquiries',
      },
    ],
  },
]

export const headerSocialLinks = socialLinks

export const themeHeroContent = {
  title: 'WEAR YOUR STORY',
  promotion: '10% Off All Products this Summer',
  shopLabel: 'SHOP NOW',
  shopHref: toProductsRoute(),
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
  video: giftMomentsVideo,
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
    'A curated edit of Selah Starr Studio’s handmade beadwork, custom pieces, and wearable-art designs — each one made to order.',
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
      src: missionPortraitPhoto,
      alt: 'Editorial portrait of a model wearing a gold headwrap, hoop earrings, and a wire-wrapped ring, styled by Selah Starr Studio',
    },
    {
      src: missionCouplePhoto,
      alt: 'A couple embracing in doorway light, styled with a handcrafted beaded bralette by Selah Starr Studio',
    },
    {
      src: missionBraletteDetail,
      alt: 'Close-up detail of a handcrafted beaded bralette in ocean colours by Selah Starr Studio',
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
      src: missionPortraitPhoto,
      alt: 'Selah Starr Studio portrait styled with golden accessories',
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
    title: 'Contact',
    links: [
      { label: `WhatsApp — ${brand.whatsappNumber}`, href: brand.whatsappUrl, external: true },
      { label: `Instagram — ${brand.instagramHandle}`, href: brand.instagramUrl, external: true },
      {
        label: 'Start a Custom Order',
        href: buildWhatsAppUrl(whatsappMessages.customOrder),
        external: true,
      },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Shipping details to confirm', href: '#faq' },
      { label: 'Returns details to confirm', href: '#faq' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { label: 'About Selah Starr', href: '#mission' },
      { label: 'Studio Journal', href: toJournalRoute() },
      { label: 'Follow Our Journey', href: '#social' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Handmade Jewellery', href: toCollectionRoute('beaded-jewellery') },
      { label: 'Wearable Art', href: toCollectionRoute('wearable-art') },
      { label: 'Featured Creations', href: toProductsRoute() },
    ],
  },
]

export const footerContent = {
  description:
    'Handmade jewellery, expressive beadwork and custom wearable art created to celebrate individuality.',
  originNote: 'Handmade with care in Ghana',
  socialLinks,
  whatsappBadgeHref: buildWhatsAppUrl(whatsappMessages.generalEnquiry),
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
