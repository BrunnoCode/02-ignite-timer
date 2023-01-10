import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/logo-ignite.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/">
          <Timer size={20}/>
        </NavLink>

        <NavLink to="/history">
          <Scroll size={20}/>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
