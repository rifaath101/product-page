import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Avatar,
  Badge,
} from '@material-ui/core'
import React from 'react'
import logo from '../../images/logo.svg'
import avatar from '../../images/image-avatar.png'
import Drawer from './Drawer'
import { useMatchMedia } from '../useMatchMedia'
import { useState, useContext } from 'react'
import PopoverCart from './PopoverCart'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { useStyles } from './NavStyles'
import { styled } from '@material-ui/core'
import { CountContext } from '../Store/CreateContext'

const StyledBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    color: 'white',
    backgroundColor: 'hsl(26, 100%, 55%)',
  },
})

const Navbar = () => {
  const classes = useStyles()
  const isMobileResolution = useMatchMedia('(max-width:1024px)', true)
  const [anchor, setAnchor] = useState(null)
  const [count, setCount] = useContext(CountContext)
  const openPopover = (event) => {
    setAnchor(event.currentTarget)
  }

  return (
    <AppBar className={classes.appbar} position='static'>
      <Toolbar>
        {isMobileResolution && <Drawer />}
        <img
          src={logo}
          alt='logo'
          className={`${classes.logo} ${classes.cursor} `}
        />
        <Typography className={classes.typography}>
          <Link href='#' className={`${classes.link} ${classes.cursor}`}>
            Collections
          </Link>
          <Link href='#' className={`${classes.link} ${classes.cursor}`}>
            Men
          </Link>
          <Link href='#' className={`${classes.link} ${classes.cursor}`}>
            Women
          </Link>
          <Link href='#' className={`${classes.link} ${classes.cursor}`}>
            About
          </Link>
          <Link href='#' className={`${classes.link} ${classes.cursor}`}>
            Contact
          </Link>
        </Typography>
        <StyledBadge badgeContent={count} className={classes.badge}>
          <ShoppingCartOutlinedIcon
            fontSize='medium'
            className={`${classes.cart} ${classes.cursor}`}
            onClick={openPopover}
          />
        </StyledBadge>

        <PopoverCart
          open={Boolean(anchor)}
          anchorEl={anchor}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          onClose={() => setAnchor(null)}
        />

        <Avatar
          className={`${classes.avatar} ${classes.cursor}`}
          alt='avatar'
          src={avatar}
        />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
