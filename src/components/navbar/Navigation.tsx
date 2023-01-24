import React, { useState }from 'react';
import Hamburger from './hamburger';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';



const Navigation = () => {

  const [ open, setOpen ] = useState(false)

  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <Hamburger/>
        {open && <MobileNavigation/>}
        <DesktopNavigation/>
      </div>
    </div>
  )
}

export default Navigation
