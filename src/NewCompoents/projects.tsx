import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description 1",
      imageUrl: "https://source.unsplash.com/random/blackwidow",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description 2",
      imageUrl: "https://source.unsplash.com/random/Odin",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description 3",
      imageUrl: "https://source.unsplash.com/random/marvels",
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description 4",
      imageUrl: "https://source.unsplash.com/random/hawkeye",
    },
    {
      id: 3,
      title: "Project 5",
      description: "Description 5",
      imageUrl: "https://source.unsplash.com/random/loki",
    },
    {
      id: 3,
      title: "Project 6",
      description: "Description 6",
      imageUrl: "https://source.unsplash.com/random/daredevil",
    },

    // Add more cards as needed
  ];

  return (
    <>
      <Typography variant="h3" sx={{ mt: 4, mb: 4 }}>
        Projects
      </Typography>

      <Card>
        <CardContent>
          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid item xs={12} md={8} lg={2} spacing={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.imageUrl}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {project.title}
                    </Typography>
                    <Typography>{project.description}</Typography>
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

export default Projects;
