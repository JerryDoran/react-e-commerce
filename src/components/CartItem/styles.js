import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  button: {
    color: "red"
  },
  card: {
    marginBottom: "20px"
  },
  media: {
    height: "100%",
    width: "100%",
    paddingTop: "56.25%"
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between"
  },
  cardActions: {
    justifyContent: "space-between",
    fontSize: "24"
  },
  buttons: {
    display: "flex",
    alignItems: "center"
  }
}));
