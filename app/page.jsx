import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Info from '@/components/Info'
import Menu from '@/components/Menu'
import Payments from '@/components/Payments'
import Principal from '@/components/Principal'
import Schedules from '@/components/Schedules'

export default function Home() {
  return (
    <main>
      <Header />
      <Principal />
      <Info />
      <Menu />
      <Schedules />
      <Payments />
      <Footer />
    </main>
  )
}
