import { Grid } from "@material-ui/core";
import Product from "../Product/Product";
import makeStyles from "./styles";

const Products = ({ products, onAddToCart }) => {
  const styles = makeStyles();
  return (
    <main className={styles.content}>
      <div className={styles.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
