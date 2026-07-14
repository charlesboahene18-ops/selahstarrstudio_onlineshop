import { AnnouncementMarquee } from '../components/AnnouncementMarquee'
import { Header } from '../components/Header'
import { ThemeShowcaseHero } from '../components/ThemeShowcaseHero'
import { LaunchHero } from '../components/LaunchHero'
import { CollectionGrid } from '../components/CollectionGrid'
import { GiftBanner } from '../components/GiftBanner'
import { MembershipForm } from '../components/MembershipForm'
import { ProductGrid } from '../components/ProductGrid'
import { MissionCollage } from '../components/MissionCollage'
import { FAQAccordion } from '../components/FAQAccordion'
import { SocialCollage } from '../components/SocialCollage'
import { BlogSection } from '../components/BlogSection'
import { Footer } from '../components/Footer'
import {
  allProducts,
  blogSection,
  blogPosts,
  announcementMessages,
  collectionSections,
  faqItems,
  faqSection,
  footerLinkGroups,
  footerContent,
  giftBannerContent,
  headerSocialLinks,
  launchContent,
  membershipContent,
  missionContent,
  navLinks,
  productSection,
  showcaseSlides,
  socialContent,
  themeHeroContent,
} from '../data/storefrontContent'

export function HomePage() {
  return (
    <div className="site-page">
      <AnnouncementMarquee messages={announcementMessages} />
      <Header navLinks={navLinks} products={allProducts} socialLinks={headerSocialLinks} />
      <main>
        <ThemeShowcaseHero content={themeHeroContent} slides={showcaseSlides} />
        <LaunchHero content={launchContent} />
        <CollectionGrid
          id={collectionSections.featured.id}
          eyebrow={collectionSections.featured.eyebrow}
          title={collectionSections.featured.title}
          description={collectionSections.featured.description}
          items={collectionSections.featured.items}
          tone={collectionSections.featured.tone}
        />
        <CollectionGrid
          id={collectionSections.studio.id}
          eyebrow={collectionSections.studio.eyebrow}
          title={collectionSections.studio.title}
          description={collectionSections.studio.description}
          items={collectionSections.studio.items}
          tone={collectionSections.studio.tone}
        />
        <GiftBanner content={giftBannerContent} />
        <MembershipForm content={membershipContent} />
        <ProductGrid
          id={productSection.id}
          eyebrow={productSection.eyebrow}
          title={productSection.title}
          description={productSection.description}
          products={allProducts.slice(0, 8)}
          cta={productSection.cta}
          ctaHref={productSection.ctaHref}
        />
        <MissionCollage content={missionContent} />
        <FAQAccordion content={faqSection} items={faqItems} />
        <SocialCollage content={socialContent} />
        <BlogSection content={blogSection} posts={blogPosts} />
      </main>
      <Footer content={footerContent} groups={footerLinkGroups} />
    </div>
  )
}
