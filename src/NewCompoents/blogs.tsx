import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const Blogs = () => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "Description 1",
      imageUrl: "https://source.unsplash.com/random",
    },
    {
      id: 2,
      title: "Card 2",
      description: "Description 2",
      imageUrl: "https://source.unsplash.com/random/thor",
    },
    {
      id: 3,
      title: "Card 3",
      description: "Description 3",
      imageUrl: "https://source.unsplash.com/random/captain",
    },
    {
      id: 4,
      title: "Card 4",
      description: "Description 4",
      imageUrl: "https://source.unsplash.com/random/ironman",
    },
    {
      id: 3,
      title: "Card 5",
      description: "Description 5",
      imageUrl: "https://source.unsplash.com/random/goku",
    },
    {
      id: 3,
      title: "Card 6",
      description: "Description 6",
      imageUrl: "https://source.unsplash.com/random/phone",
    },
    {
      id: 3,
      title: "Card 7",
      description: "Description 7",
      imageUrl: "https://source.unsplash.com/random/books",
    },
    {
      id: 3,
      title: "Card 8",
      description: "Description 8",
      imageUrl: "https://source.unsplash.com/random/hulk",
    },
    {
      id: 3,
      title: "Card 9",
      description: "Description 9",
      imageUrl: "https://source.unsplash.com/random/antman",
    },
    {
      id: 3,
      title: "Card 7",
      description: "Description 7",
      imageUrl: "https://source.unsplash.com/random/books",
    },
    {
      id: 3,
      title: "Card 8",
      description: "Description 8",
      imageUrl: "https://source.unsplash.com/random/thanos",
    },
    {
      id: 3,
      title: "Card 9",
      description: "Description 9",
      imageUrl: "https://source.unsplash.com/random/antmans",
    },
    // Add more cards as needed
  ];

  return (
    <>
      <Typography
        variant="h3"
        color="primary"
        align="center"
        style={{ margin: "3%" }}
      >
        My Collection
      </Typography>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            {cards.map((card) => (
              <Grid item xs={12} md={8} lg={2} spacing={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={card.imageUrl}
                    alt={card.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Blogs;
