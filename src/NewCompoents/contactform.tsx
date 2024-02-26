import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function ContactForm() {
  return (
    <>
      <Typography variant="h3" sx={{ mt: 4, mb: 4 }}>
        Contact Me
      </Typography>
      <Grid item xs={12} md={8}>
        <Card style={{ marginBottom: "30px" }}>
          <CardContent sx={{ padding: 4 }}>
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="contact-name">Your Name</InputLabel>
                <Input
                  id="contact-name"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle sx={{ color: "action.active" }} />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="contact-email">Your Email</InputLabel>
                <Input
                  id="contact-email"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle sx={{ color: "action.active" }} />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="contact-message">Message</InputLabel>
                <TextField
                  id="contact-message"
                  multiline
                  rows={4}
                  variant="standard"
                />
              </FormControl>
              <Grid container spacing={2} justifyContent="center">
                <Button
                  variant="outlined"
                  size="large"
                  style={{ borderColor: "white" }}
                >
                  Send-
                  <SendIcon />
                </Button>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
