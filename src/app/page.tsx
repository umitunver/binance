import { AppLayout, Container } from '@/components'
import styles from './page.module.css'
import { EasySteps, Hero, HomeFeed, PopularCryptocurrencies, TokenRewards } from '@/views'
import HomeSlider from '@/views/homeSlider'

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <HomeSlider />
      <PopularCryptocurrencies />
      <HomeFeed />
      <TokenRewards />
      <EasySteps />
    </AppLayout>
  )
}
