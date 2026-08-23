import braceletStack from '../assets/products/bracelet-stack.svg'
import beadedBralette from '../assets/products/beaded-bralette.png'
import beadedJewelleryPearlSiren from '../assets/products/beaded-jewellery-pearl-siren.jpg'
import customPiece from '../assets/products/custom-piece.png'
import goldPendant from '../assets/products/gold-pendant.svg'
import minimalWatch from '../assets/products/minimal-watch.svg'
import silverStuds from '../assets/collections/silver-studs.svg'
import wearableArtBracelets from '../assets/products/05B5EEF3-AC45-41DC-8E18-67212F7299BB.PNG'
import { toCollectionRoute } from '../utils/routes'

export const featuredCollections = [
  {
    slug: 'beaded-jewellery',
    homeSectionId: 'collections',
    name: 'Beaded Jewellery',
    label: 'Handmade edit',
    description:
      'Necklaces and statement pieces centered on colour, beadwork, and handcrafted detail.',
    longDescription:
      'This collection brings together Selah Starr Studio pieces designed for expressive everyday styling and occasion dressing. Each item shown here remains flexible for final client-approved assortment details.',
    productCategories: ['Beaded Jewellery', 'Beaded Necklaces'],
    spotlightDescription: 'Handcrafted details',
    image: beadedJewelleryPearlSiren,
    imageAlt: 'Selah Starr Studio Pearl Siren jewellery set',
    imageObjectPosition: 'center 38%',
    href: toCollectionRoute('beaded-jewellery'),
  },
  {
    slug: 'beaded-bralettes',
    homeSectionId: 'collections',
    name: 'Beaded Bralettes',
    label: 'Statement fit',
    description:
      'Made-to-measure sculptural pieces intended for fashion-forward styling and performance looks.',
    longDescription:
      'These mock concepts highlight a more dramatic side of the studio catalogue, with silhouettes built for custom sizing, bold colour stories, and styling-led commissions.',
    productCategories: ['Beaded Bralettes'],
    spotlightDescription: 'Statement fit',
    image: beadedBralette,
    imageAlt: 'Selah Starr Studio handcrafted beaded bralette',
    imageObjectPosition: 'center 28%',
    href: toCollectionRoute('beaded-bralettes'),
  },
  {
    slug: 'custom-pieces',
    homeSectionId: 'collections',
    name: 'Custom Pieces',
    label: 'Made for you',
    description:
      'Consultation-led designs tailored to colour preferences, fit notes, and personal occasions.',
    longDescription:
      'These entries represent the part of the studio experience that begins with a conversation. Shapes, colours, and measurements can all be adjusted before the final piece is confirmed.',
    productCategories: ['Custom Pieces'],
    spotlightDescription: 'Made for you',
    image: customPiece,
    imageAlt: 'Selah Starr Studio custom jewellery piece on red fabric',
    imageObjectPosition: 'center 42%',
    href: toCollectionRoute('custom-pieces'),
  },
  {
    slug: 'wearable-art',
    homeSectionId: 'collections',
    name: 'Wearable Art',
    label: 'Studio forms',
    description:
      'Experimental body pieces and editorial accessories built around movement and presence.',
    longDescription:
      'This collection frames Selah Starr Studio as a wearable-art practice, combining beadwork with fashion-led silhouettes and commission-based storytelling.',
    productCategories: ['Wearable Art'],
    spotlightDescription: 'Studio forms',
    image: wearableArtBracelets,
    imageAlt: 'Selah Starr Studio natural stone bracelet design',
    imageObjectPosition: 'center 36%',
    href: toCollectionRoute('wearable-art'),
  },
]

export const studioCollections = [
  {
    slug: 'beaded-necklaces',
    homeSectionId: 'studio-categories',
    name: 'Beaded Necklaces',
    label: 'Colour stories',
    description:
      'Close-fit chokers, pendants, and layered necklaces shaped around texture and colour.',
    longDescription:
      'This category focuses on neckwear concepts ranging from bold statement pieces to more compact woven forms, all still editable as the final assortment is refined.',
    productCategories: ['Beaded Necklaces'],
    image: goldPendant,
    imageAlt:
      'Temporary mock image representing beaded necklaces by Selah Starr Studio',
    href: toCollectionRoute('beaded-necklaces'),
  },
  {
    slug: 'bracelets',
    homeSectionId: 'studio-categories',
    name: 'Bracelets',
    label: 'Layered detail',
    description:
      'Handmade wrist pieces designed for stacking, gifting, and colour-led styling.',
    longDescription:
      'The bracelet selection showcases layered bead spacing, stacked forms, and flexible sizing options intended for customisation before launch.',
    productCategories: ['Bracelets'],
    image: braceletStack,
    imageAlt:
      'Temporary mock image representing beaded bracelets by Selah Starr Studio',
    href: toCollectionRoute('bracelets'),
  },
  {
    slug: 'earrings',
    homeSectionId: 'studio-categories',
    name: 'Earrings',
    label: 'Sculptural drop',
    description:
      'Statement earrings with handcrafted movement, contrast, and decorative beadwork.',
    longDescription:
      'These pieces lean into shape and texture, showing how the studio can adapt earrings for both everyday wear and more sculptural styling moments.',
    productCategories: ['Earrings'],
    image: silverStuds,
    imageAlt:
      'Temporary mock image representing handmade earrings by Selah Starr Studio',
    href: toCollectionRoute('earrings'),
  },
  {
    slug: 'waist-beads',
    homeSectionId: 'studio-categories',
    name: 'Waist Beads',
    label: 'Custom fit',
    description:
      'Measurement-based waist bead concepts shaped around colour, fit, and personal ritual.',
    longDescription:
      'This category is positioned as a custom conversation, with sizing, styling, and bead choices confirmed directly with the studio before production.',
    productCategories: ['Waist Beads'],
    image: minimalWatch,
    imageAlt:
      'Temporary mock image representing waist beads by Selah Starr Studio',
    href: toCollectionRoute('waist-beads'),
  },
]

export const allCollections = [...featuredCollections, ...studioCollections]
