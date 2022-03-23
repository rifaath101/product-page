import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  popover: {
    marginTop: '1.5%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '8%',
    },
  },
  cartStatusCon: {
    width: '290px',
    height: '200px',
    paddingLeft: '0',
    [theme.breakpoints.down('sm')]: {
      width: '400px',
      height: '350px',
    },
  },
  popoverTitle: {
    paddingTop: '6%',
    marginLeft: '8%',
    fontSize: '14px',
    fontWeight: '700',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },

  divider: {
    marginTop: '6%',
    width: '110%',
  },
  emptyCart: {
    color: 'hsl(219, 9%, 45%)',
    fontWeight: '700',
    fontSize: '14px',
    margin: '50px 40px 50px 75px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      margin: '110px 50px 110px 100px',
    },
  },
  orderCon: {
    margin: '20px 15px 20px 12px',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      margin: '25px 20px 25px 17px',
    },
  },
  orderTitle: {
    fontSize: '14px',
    color: '#7a7a7a',

    marginLeft: '12px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '20px',
      fontSize: '20px',
    },
  },
  binIcon: {
    height: '18px',
    marginTop: '13px',
    marginLeft: '7px',
    color: '#c4c4c4',
    '&:hover': {
      cursor: 'pointer',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      marginRight: '26px',
      height: '28px',
      width: '28px',
    },
  },
  orderNum: {
    fontSize: '14px',
    color: '#7a7a7a',
    marginLeft: '12px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '20px',
      fontSize: '20px',
    },
  },
  finalNum: {
    fontSize: '14px',
    fontWeight: '700',
    marginLeft: '7px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '20px',
      fontSize: '20px',
    },
  },
  checkout: {
    backgroundColor: 'hsl(26, 100%, 55%)',
    borderRadius: '8px',
    marginTop: '20px',
    textTransform: 'none',
    color: 'white',
    fontWeight: '700',
    '&:hover': {
      backgroundColor: 'hsl(26, 100%, 70%)',
      boxShadow: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '17%',
      marginRight: '8%',
      padding: '5%',
      borderRadius: '12px',
      fontSize: '20px',
    },
  },
}))
