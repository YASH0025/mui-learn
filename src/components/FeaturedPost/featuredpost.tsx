import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import useStyles from "../style";

const FeaturedPost = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.cover}>
        <CardContent className={classes.textContainers}>
          <Typography className={classes.titles} gutterBottom>
            Title of a longet featured blog post
          </Typography>
          <Typography variant="h5">
            Blogging has become a popular way for individuals to share their
            thoughts, experiences, and expertise with a wider audience. Whether
            it's a personal blog documenting a traveler's adventures, a food
            blog featuring delicious recipes, or a technology blog discussing
            the latest gadgets, blogs cover a wide range of topics. Bloggers
            often use their platform to connect with like-minded individuals,
            offer advice and tips, and engage in meaningful discussions with
            their readers. With the rise of social media and online platforms,
            blogging has become more accessible than ever, allowing anyone with
            a passion or interest to create their own online space and share
            their voice with the world.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" className={classes.btn}>
            Read More
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default FeaturedPost;
