import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import makeStyles from "./styles";

const Cart = ({
  cart,
  handleUpdateCartQuantity,
  handleRemoveFromCart,
  handleEmptyCart
}) => {
  const styles = makeStyles();

  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        You have no items in your cart.
        <Link to="/" className={styles.link}>
          Go shopping!
        </Link>
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => {
            return (
              <Grid item xs={12} sm={4} key={item.id}>
                <CartItem
                  item={item}
                  handleUpdateCartQuantity={handleUpdateCartQuantity}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              </Grid>
            );
          })}
        </Grid>
        <div className={styles.cardDetails}>
          <Typography variant="h5">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              className={styles.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleEmptyCart}
            >
              Empty Cart
            </Button>
            <Button
              component={Link}
              to="/checkout"
              className={styles.checkoutButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          </div>
        </div>
      </>
    );
  };

  if (!cart.line_items) return "Loading...";

  return (
    <Container>
      <div className={styles.toobar} />
      <Typography className={styles.title} variant="h5">
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
