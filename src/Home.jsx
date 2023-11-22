import { Link } from "react-router-dom";
import { Box, Typography, Button, Container } from "@mui/material";

export default function Home() {
  return (
    <div className="homepage">
      <Box textAlign={"center"}>
        <Container maxWidth="sm">
          <Typography variant="h3" marginTop="5%">
            Welcome To Trivia
          </Typography>
          <Typography variant="h6" paragraph marginTop="5%" marginBottom="5%">
            Welcome to this trivia website, in this website you will find a lot
            of interesting quizes in subjects that you like. in this website I
            (The devloper) use a trivia API.
          </Typography>
          <a  className="atag" href="https://opentdb.com/api_config.php">
            Trivia API
          </a>
        </Container>
        <Link   to="/Login">
          <Button color="secondary" variant="contained" margintop="5%">
            Try Quiz
          </Button>
        </Link>
      </Box>
    </div>
  );
}
