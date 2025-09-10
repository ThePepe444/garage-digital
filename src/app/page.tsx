import Hero from '@/components/Hero'
import FeaturedTips from '@/components/FeaturedTips'
import LatestReviews from '@/components/LatestReviews'
import CarComparisons from '@/components/CarComparisons'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedTips />
      <LatestReviews />
      <CarComparisons />
      <Newsletter />
    </div>
  )
}
