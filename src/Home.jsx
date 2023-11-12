import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Box, Typography, Button, Paper, Container } from "@mui/material";
export default function Home() {
  return (
    <Paper elevation={3} style={{ marginTop: "5%" }}>
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
          <a  className="atag" href="https://opentdb.com/api_config.php">Trivia API</a>
        </Container>

        <Link to="/Options">
          <Button color="secondary" variant="contained" marginTop="5%">
            Try Quiz
          </Button>
        </Link>
      </Box>
    </Paper>
  );
}
