import { Typography, Container, Button } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { Add, Remove, ShoppingCartOutlined } from '@material-ui/icons'
import './ProductDescription.css'
import { useMatchMedia } from '../useMatchMedia'
import { useStyles } from './ProductStyles'
import { CountContext } from '../Store/CreateContext'
export const ProductDescription = ({ children }) => {
  const classes = useStyles()
  const isMobileResolution = useMatchMedia('(max-width:1024px)', true)
  const [count, setCount] = useContext(CountContext)
  const [num, setNum] = useState(0)
  const handleClick = () => {
    setCount(num)
  }

  return (
    <Container className={classes.container}>
      <Typography
        variant='h6'
        className={`${classes.company} ${classes.orangeColor} ${classes.bold}`}
      >
        SNEAKER COMPANY
      </Typography>

      <Typography variant='h3' className={`${classes.title} ${classes.bold}`}>
        Fall Limited Edition Sneakers
      </Typography>
      <Typography className={classes.description}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </Typography>
      <div style={{ display: 'flex', marginTop: '5%' }}>
        <Typography variant='h6' className={`${classes.price} ${classes.bold}`}>
          $125.00
        </Typography>
        <Typography
          className={`${classes.discount} ${classes.orangeColor} ${classes.bold}`}
        >
          50%
        </Typography>
        {isMobileResolution && (
          <Typography className={`${classes.oldPriceSm} ${classes.bold}`}>
            $250.00
          </Typography>
        )}
      </div>
      <Typography className={`${classes.oldPrice} ${classes.bold}`}>
        $250.00
      </Typography>

      <div
        style={{
          display: isMobileResolution ? 'grid' : 'flex',
          marginTop: '5%',
        }}
      >
        <Button variant='contained' disableRipple className={classes.orderBtn}>
          <div style={{ display: 'flex', justifyContent: 'spaceBetween' }}>
            <Remove
              className={`${classes.remove} ${classes.orangeColor}`}
              onClick={() => {
                0 === num ? setNum(0) : setNum(num - 1)
              }}
            />
            <Typography className={`${classes.amount} ${classes.bold}`}>
              {num}
            </Typography>
            <Add
              className={`${classes.add} ${classes.orangeColor}`}
              onClick={() => setNum(num + 1)}
            />
          </div>
        </Button>
        <Button
          variant='contained'
          className={classes.addBtn}
          onClick={handleClick}
        >
          <ShoppingCartOutlined className={classes.cart} />
          <Typography className={`${classes.cartText} ${classes.bold}`}>
            Add to cart
          </Typography>
        </Button>
      </div>
    </Container>
  )
}
