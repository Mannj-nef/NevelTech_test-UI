import Footer from '~/components/footer'
import Header from '~/components/header'

interface IMainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
