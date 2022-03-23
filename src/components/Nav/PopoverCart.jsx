import {
  Popover,
  Typography,
  Card,
  Container,
  Divider,
  Button,
} from '@material-ui/core'
import thumb from '../../images/image-product-1-thumbnail.jpg'
import { useStyles } from './PopoverStyles'
import { useContext } from 'react'
import { CountContext } from '../Store/CreateContext'
import DeleteIcon from '@material-ui/icons/Delete'
import './PopoverStyles.css'

const PopoverCart = (props) => {
  const classes = useStyles()
  const [count, setCount] = useContext(CountContext)
  const finalNum = 125 * count
  return (
    <Popover
      open={props.open}
      anchorEl={props.anchorEl}
      anchorOrigin={props.anchorOrigin}
      transformOrigin={props.transformOrigin}
      onClose={props.onClose}
      className={classes.popover}
    >
      <Card className={classes.cardPopover}>
        <Container className={classes.cartStatusCon}>
          <Typography className={classes.popoverTitle}>Cart</Typography>
          <Divider className={classes.divider} />
          {count === 0 ? (
            <Typography className={classes.emptyCart}>
              Your cart is empty
            </Typography>
          ) : (
            <Container className={classes.orderCon} style={{ display: 'grid' }}>
              <div style={{ display: 'flex' }}>
                <img src={thumb} alt='thumbnail' className='order-img' />
                <div style={{ display: 'grid' }}>
                  <Typography className={classes.orderTitle}>
                    Fall Limited Edition Sneakers
                  </Typography>
                  <div style={{ display: 'flex' }}>
                    <Typography className={classes.orderNum}>
                      $125.00 x {count}
                    </Typography>
                    <Typography className={classes.finalNum}>
                      ${finalNum}.00
                    </Typography>
                  </div>
                </div>
                <DeleteIcon
                  onClick={() => setCount(0)}
                  className={classes.binIcon}
                />
              </div>
              <Button variant='contained' className={classes.checkout}>
                Checkout
              </Button>
            </Container>
          )}
        </Container>
      </Card>
    </Popover>
  )
}

export default PopoverCart
