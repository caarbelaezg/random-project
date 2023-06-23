import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation"
import { Footer } from "./Footer"

import './styles.css'

export const Layout = () => {
  return (
    <div className="layout">
      <Navigation />
      <div className="layout__page">
        <Outlet />
      </div>
      <Footer />
    </div>

  )
}
