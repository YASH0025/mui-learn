import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
// Make sure you're importing `Theme` from "@mui/styles" instead of "@mui/material"

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0.6),
  },
  icons: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "20px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  tagline: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat",
  },
  tittlesPost: {
    fontSize: 40,
    fontFamily: "Montserrat",
  },
  cover: {
    backgroundImage:
      "url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') !important",
    backgroundPosition: "center",
    padding: "35px 25px",
  },

  titles: {
    fontSize: 40,
    fontFamily: "Montserrat",
  },
  textContainers: {
    color: "white",
  },

  btn: {
    margin: theme.spacing(1),
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  cards: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardsMedia: {
    width: 160,
  },
  minGrid: {
    marginTop: theme.spacing(5),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
  },

  sidebarSection: {
    marginTop: theme.spacing(3),
  },

  /////////////////////////////////new Componets////////////////////////////////////////////////////////////////////
  gridItem: {
    textAlign: "center",
    padding: theme.spacing(2), // Adjust the padding as needed
  },
  titleCard: {
    paddingBottom: theme.spacing(1), // Adjust the padding as needed
  },
  subtitle: {
    paddingBottom: theme.spacing(1), // Adjust the padding as needed
  },
  body: {
    paddingBottom: theme.spacing(1), // Adjust the padding as needed
  },

  formContainer: {
    padding: theme.spacing(3),
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },

  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  descriptionss: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
