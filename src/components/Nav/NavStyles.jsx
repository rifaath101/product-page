import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  appbar: {
    width: '74%',
    marginLeft: theme.spacing(15),
    boxShadow: 'none',
    backgroundColor: 'white',
    borderBottom: '2px solid hsl(223, 64%, 98%)',
    padding: '1%',
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(0),
      width: '100%',
      borderBottom: 'none',
    },
  },
  typography: {
    marginLeft: theme.spacing(9),
  },
  cursor: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  link: {
    marginRight: theme.spacing(3),
    color: 'hsl(219, 9%, 45%)',
    fontSize: '14px',
    '&:hover': {
      color: 'black',
      textDecoration: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  cart: {
    marginLeft: theme.spacing(25),
    color: 'black',
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(6),
    },
  },
  avatar: {
    '&:hover': {
      border: '2px solid hsl(26, 100%, 60%)',
    },
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
    },
  },
  badge: {
    marginRight: '3%',
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(3),
    },
  },
}))
