import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/infinity.png";
import makeStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const styles = makeStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={styles.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={styles.title} color="inherit">
            <Link to="/">
              <img
                // component={Link}
                // to="/"
                src={logo}
                alt="Infinity Stone"
                height="25px"
                className={styles.image}
              />
            </Link>
            Infinity-Stone
          </Typography>

          <div className={styles.grow} />
          {location.pathname === "/" && (
            <div className={styles.menuButton}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
