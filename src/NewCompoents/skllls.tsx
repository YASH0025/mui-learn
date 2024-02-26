import { Button, Grid, IconButton, Typography } from "@mui/material";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandGraphql } from "react-icons/tb";

const Skills = () => {
  // Array of objects representing buttons and skills
  const buttons = [
    { skill: "JavaScript", icon: IoLogoJavascript, color: "#f0db4f" },
    { skill: "React", icon: FaReact, color: "#61dafb" },
    { skill: "Typescript", icon: SiTypescript, color: "#007acc" },
    { skill: "Nest Js", icon: SiNestjs, color: "#e0234e" },
    { skill: "NextJS", icon: SiNextdotjs, color: "#FFFFFF" },
    { skill: "Html5", icon: TiHtml5, color: "#e34c26" },
    { skill: "Css", icon: FaCss3Alt, color: "#264de4" },
    { skill: "MongoDb", icon: DiMongodb, color: "#4DB33D" },
    { skill: "Tailwind", icon: TbBrandTailwind, color: "#38B2AC" },
    { skill: "Graphql", icon: TbBrandGraphql, color: "#E535AB" },
  ];

  return (
    <>
      <Typography variant="h3" sx={{ mt: 4, mb: 2 }}>
        Skills
      </Typography>

      <Grid item xs={12} md={6}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Programming Languages
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {buttons.map((button, index) => (
            <Grid item key={index}>
              <Button
                variant="outlined"
                size="medium"
                style={{
                  color: button.color,
                  borderColor: button.color,
                  margin: "5px",
                }}
              >
                <IconButton>
                  <button.icon style={{ color: button.color }} />
                </IconButton>
                <Typography variant="h6">{button.skill}</Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Skills;
