import BottomNav from './BottomNav'
import SideNav from './SideNav'
import BlendNav from './BlendNav'

import Setting from '../setting/index'

const NavArr = [
  BottomNav,
  SideNav,
  BlendNav
]

const Nav = NavArr[Setting.nav]

export default Nav