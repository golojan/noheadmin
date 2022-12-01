import React from 'react'
import { useAtom } from 'jotai'
import { menuOpenedAtom } from '../store'

const NavHeader = () => {
  const [menuOpened, setMenuOpened] = useAtom(menuOpenedAtom);
  const toggleMenu = () => {
    setMenuOpened(!menuOpened)
  }
  return (
    <>
      <div className="nav-header">
        <a href={"/dashboard"} className="brand-logo">
          <img className="logo-abbr" src={"/images/logo.png"} alt />
          <img className="logo-compact" src={"/images/logo-text.png"} alt />
          <img className="brand-title" src={"/images/logo-text.png"} alt />
        </a>
        <div className="nav-control" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpened ? 'is-active' : ''}`}>
            <span className="line" /><span className="line" /><span className="line" />
          </div>
        </div>
      </div>
    </>
  )
}

export default NavHeader