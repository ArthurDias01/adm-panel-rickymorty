import { ReactNode } from "react"
import { Inter } from 'next/font/google'
import { Header } from '@/components/Layout/Header'
import { LogoExtended } from '@/components/LogoExtended'
import { Main, Container } from './styled'
import { NavBar } from "./NavBar"
import { Navlink } from "./NavLink"
import { SearchBox } from "../SeachBox"
import { useRouter } from "next/router"

const inter = Inter({ subsets: ['latin'] })
interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {

  const router = useRouter();
  const { id } = router.query

  return (
    <Main className={`${inter.className} `}>
      <Header>
        <LogoExtended />
        <NavBar>
          <Navlink linkTitle="Home" href="/" />
        </NavBar>
        {id === undefined && <SearchBox />}
      </Header>
      <Container>
        {children}
      </Container>
    </Main>
  )
}
