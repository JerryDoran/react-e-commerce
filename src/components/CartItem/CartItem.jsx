import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import makeStyles from "./styles";

const CartItem = ({ item, handleUpdateCartQuantity, handleRemoveFromCart }) => {
  const styles = makeStyles();
  return (
    <Card>
      <CardMedia
        alt={item.name}
        className={styles.media}
        image={item.media.source}
      />
      <CardContent className={styles.cardContent}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h6">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <div className={styles.buttons}>
          <Button
            style={{
              maxWidth: "30px",
              maxHeight: "30px",
              minWidth: "30px",
              minHeight: "30px"
            }}
            type="button"
            size="small"
            variant="outlined"
            onClick={() => handleUpdateCartQuantity(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography style={{ marginLeft: "10px", marginRight: "10px" }}>
            {item.quantity}
          </Typography>
          <Button
            style={{
              maxWidth: "30px",
              maxHeight: "30px",
              minWidth: "30px",
              minHeight: "30px"
            }}
            type="button"
            size="small"
            variant="outlined"
            onClick={() => handleUpdateCartQuantity(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        {/* <IconButton aria-label="delete">
          <DeleteIcon color="secondary" fontSize="small" />
        </IconButton> */}
        <Button
          variant="contained"
          type="button"
          color="secondary"
          size="small"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
