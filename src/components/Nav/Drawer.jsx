import {
  SwipeableDrawer,
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core'
import menu from '../../images/icon-menu.svg'
import React, { useState } from 'react'
import close from '../../images/icon-close.svg'

const useStyles = makeStyles((theme) => ({
  fontStyle: {
    fontWeight: '700',
  },
  list: {
    width: 270,
  },
}))

const Drawer = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  return (
    <>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='open drawer'
        onClick={() => setOpen(true)}
        style={props.style}
      >
        <img src={menu} alt='menu' />
      </IconButton>
      <SwipeableDrawer
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
      >
        <div className={classes.list}>
          <Box textAlign='center' p={2}>
            <img
              src={close}
              alt='close icon'
              style={{ marginRight: '95%' }}
              onClick={() => setOpen(false)}
            />
          </Box>

          <List>
            <ListItem>
              <ListItemText
                disableTypography
                primary={
                  <Typography className={classes.fontStyle}>
                    Collections
                  </Typography>
                }
              />
            </ListItem>

            <ListItem OnClick={() => {}}>
              <ListItemText
                disableTypography
                primary={
                  <Typography className={classes.fontStyle}>Men</Typography>
                }
              />
            </ListItem>
            <ListItem OnClick={() => {}}>
              <ListItemText
                disableTypography
                primary={
                  <Typography className={classes.fontStyle}>Women</Typography>
                }
              />
            </ListItem>
            <ListItem OnClick={() => {}}>
              <ListItemText
                disableTypography
                primary={
                  <Typography className={classes.fontStyle}>About</Typography>
                }
              />
            </ListItem>
            <ListItem OnClick={() => {}}>
              <ListItemText
                disableTypography
                primary={
                  <Typography className={classes.fontStyle}>Contact</Typography>
                }
              />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </>
  )
}

export default Drawer
