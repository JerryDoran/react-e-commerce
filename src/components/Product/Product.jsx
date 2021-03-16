import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import makeStyles from "./styles";

// source: "https://cdn.chec.io/merchants/23107/assets/9yBvKYb51teFwBie|black_keyboard.jpg"

const Product = ({ product, onAddToCart }) => {
  const styles = makeStyles();

  return (
    <Card className={styles.root}>
      <CardMedia
        className={styles.media}
        image={product.media.source}
        title={product.name}
      />

      <CardContent>
        <div className={styles.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions disableSpacing className={styles.cardActions}>
        <IconButton
          aria-label="Add to Cart"
          onClick={() => onAddToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
