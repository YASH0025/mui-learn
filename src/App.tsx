import { Container, Divider, ThemeProvider } from "@mui/material";
import "./App.css";
// import FeaturedPost from "./components/FeaturedPost/featuredpost";
// import Headers from "./components/Headers/headers";
import { createTheme } from "@mui/material/styles";
import Home from "./NewCompoents/Home";
import Blogs from "./NewCompoents/blogs";
import Skills from "./NewCompoents/skllls";
import Projects from "./NewCompoents/projects";
import ContactForm from "./NewCompoents/contactform";
import Footers from "./NewCompoents/footers";
import Navbars from "./NewCompoents/Navbars";
import AboutPage from "./NewCompoents/aboutme";
// import { featuredPosts, sidebar } from "./Data/data";
// import PostCard from "./components/PostCard/postcard";
// // import useStyles from "./components/style";
// import Sidebar from "./components/SideBar/sidebar";
// import Mains from "./components/Mains/mains";
// import FeaturedPost from "./components/FeaturedPost/featuredpost";
// import Headers from "./components/Headers/headers";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  // const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      {/* <Headers /> */}
      {/* <Container maxWidth={false} className="container" sx={{ mt: 4 }}>
        <FeaturedPost />
        <br />
        <Grid container spacing={4} style={{ marginTop: "50px" }}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          <Mains title="From The Firehorse" />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container> */}
      <Navbars />
      <Container maxWidth={false} className="container" sx={{ mt: 4 }}>
        <div id="home">
          <Home />
        </div>
        <Divider />
        <div id="blogs">
          <Blogs />
        </div>
        <Divider />
        <div id="skills">
          <Skills />
        </div>
        <Divider />
        <div id="projects">
          <Projects />
        </div>
        <Divider />
        <div id="about">
          <AboutPage />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
        <Divider />
      </Container>
      {/* Render components directly */}

      <Footers />
    </ThemeProvider>
  );
}

export default App;
