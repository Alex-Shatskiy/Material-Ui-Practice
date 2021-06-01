import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  toolBar: {
    backgroundColor: "#1976d2",
  },
  container: {
    backgroundColor: "white",
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "20px",
  },
  button: {
    marginTop: "30px",
  },
  blueButton: {
    backgroundColor: "#1976d2",
  },
  cardGrid: {
    padding: "20px 0px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    // padding: theme.spacing(8, 0, 6),
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}))

export default useStyles
