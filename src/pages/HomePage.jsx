import { CollectionSpotlight } from '../components/CollectionSpotlight'
import { ThemeShowcaseHero } from '../components/ThemeShowcaseHero'
import { LaunchHero } from '../components/LaunchHero'
import { GiftBanner } from '../components/GiftBanner'
import { ProductGrid } from '../components/ProductGrid'
import { MissionCollage } from '../components/MissionCollage'
import { FAQAccordion } from '../components/FAQAccordion'
import { SocialCollage } from '../components/SocialCollage'
import { BlogSection } from '../components/BlogSection'
import {
  blogSection,
  blogPosts,
  collectionSections,
  faqItems,
  faqSection,
  giftBannerContent,
  headerSocialLinks,
  launchContent,
  missionContent,
  navLinks,
  featuredProducts,
  productSection,
  socialContent,
  themeHeroContent,
  allProducts,
} from '../data/storefrontContent'

export function HomePage() {
  return (
    <>
      <ThemeShowcaseHero
        content={themeHeroContent}
        navLinks={navLinks}
        products={allProducts}
        socialLinks={headerSocialLinks}
      />
      <LaunchHero content={launchContent} />
      <CollectionSpotlight
        id={collectionSections.featured.id}
        eyebrow={collectionSections.featured.eyebrow}
        title={collectionSections.featured.title}
        items={collectionSections.featured.items}
      />
      <GiftBanner content={giftBannerContent} />
      <ProductGrid
        id={productSection.id}
        eyebrow={productSection.eyebrow}
        title={productSection.title}
        description={productSection.description}
        products={featuredProducts}
        cta={productSection.cta}
        ctaHref={productSection.ctaHref}
        ctaExternal={productSection.ctaExternal}
      />
      <MissionCollage content={missionContent} />
      <FAQAccordion content={faqSection} items={faqItems} />
      <SocialCollage content={socialContent} />
      <BlogSection content={blogSection} posts={blogPosts} />
    </>
  )
}
