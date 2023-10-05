import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useSelector, useDispatch } from "react-redux";
import { InlineWidget, PopupWidget, PopupButton } from "react-calendly";

// Path: /review
const theme = createTheme({
  palette: {
    mode: "dark", // or 'dark' for the dark theme
  },
});

function ReviewPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const singleClient = useSelector((store) => store.client);
  const rootElement = document.getElementById("popup-root");
  console.log(singleClient);

  function handlePrevious(path) {
    console.log("inside handlePrevious");
    switch (path) {
      case "/servicechoice":
        history.push("/servicechoice");
        break;
      case "/foodpreferences":
        history.push("/foodpreferences");
        break;
      case "/clientlocationinfo":
        history.push("/clientlocationinfo");
        break;
      case "/additionalinfo":
        history.push("/additionalinfo");
        break;
      case "/demographics":
        history.push("/demographics");
        break;
      default:
      // code block? Not sure what to add for default
    }
  }
  // useEffect(() => {
  //   dispatch({ type: "FETCH_USER" });
  // }, []); // Empty dependency array means it runs only once on mount

  // const store = useSelector((store) => store);
  // const [heading, setHeading] = useState('Functional Component');

  return (
    // <div className="App">
    <ThemeProvider theme={theme}>
      <div>
        <style type="text/css">
          {`
          .calendly-badge-widget { 
            left: 50% !important; 
            margin-left: -100px !important; 
            margin-bottom: 200px;
          }
        `}
        </style>
        <CssBaseline />
        <Container
          maxWidth="lg"
          sx={{
            width: "100%", // Custom width
            height: "70vh", // Custom height
            // Add any other custom styles here
          }}
        >
          {/* <Box
            sx={{
              bgcolor: "rgba(255, 225, 160, 0.4)",
              height: "80vh",
              width: "100%",
            }}
          > */}
          <header
            className="App-header"
            style={{
              textAlign: "center", // Center text horizontally
              margin: "50px 0", // Add top and bottom margins
              padding: "30px",
            }}
          >
            {/* Your other content */}Review and Schedule apppointment
          </header>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={12}>
              <Grid item xs={6} md={4}>
                <Card
                  variant="outlined"
                  sx={{
                    backgroundColor: "#eaeaea",
                    boxShadow: 5,
                    color: "black",
                  }}
                >
                  <CardContent onClick={() => handlePrevious("/servicechoice")}>
                    <Typography
                      sx={{ fontSize: 24 }}
                      color="black"
                      gutterBottom
                    >
                      Products I'm interested in..
                    </Typography>
                    <Typography variant="h8" component="div">
                      Services:
                      <ul>
                        {singleClient.service_names?.map(
                          (serviceName, index) => (
                            <li key={index}>{serviceName}</li>
                          )
                        )}
                      </ul>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card
                  variant="outlined"
                  sx={{
                    backgroundColor: "#eaeaea",
                    boxShadow: 5,
                    color: "black",
                  }}
                >
                  <CardContent
                    onClick={() => handlePrevious("/foodpreferences")}
                  >
                    <Typography
                      sx={{ fontSize: 24 }}
                      color="black"
                      gutterBottom
                    >
                      Foods we're interested in..
                    </Typography>
                    <Typography variant="h8" component="div">
                      Services:
                      <ul>
                        {singleClient.product_types?.map(
                          (productType, index) => (
                            <li key={index}>{productType}</li>
                          )
                        )}
                      </ul>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card
                  variant="outlined"
                  sx={{
                    backgroundColor: "#eaeaea",
                    boxShadow: 5,
                    color: "black",
                  }}
                >
                  <CardContent
                    onClick={() => handlePrevious("/clientlocationinfo")}
                  >
                    <Typography
                      sx={{ fontSize: 24 }}
                      color="black"
                      gutterBottom
                    >
                      Who we are...
                    </Typography>
                    <Typography variant="h8" component="div">
                      <ul>
                        <li>{singleClient.business_name}</li>
                        <li>{singleClient.address}</li>
                        <li>{singleClient.website}</li>
                        <li>{singleClient.phone}</li>
                        <li>
                          {singleClient.first_name}, {singleClient.last_name}
                        </li>
                        {/* <li>{singleClient}</li> */}
                        {/* <li>{singleClient}</li> */}
                      </ul>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card
                  variant="outlined"
                  sx={{
                    backgroundColor: "#eaeaea",
                    boxShadow: 5,
                    color: "black",
                  }}
                >
                  <CardContent
                    onClick={() => handlePrevious("/additionalinfo")}
                  >
                    <Typography
                      sx={{ fontSize: 24 }}
                      color="black"
                      gutterBottom
                    >
                      Additional info
                    </Typography>
                    <Typography variant="h8" component="div">
                      a;sldjf;lakjsdf;lajs;lkdfj
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card
                  variant="outlined"
                  sx={{
                    backgroundColor: "#eaeaea",
                    boxShadow: 5,
                    color: "black",
                  }}
                  onClick={() => handlePrevious("/demographics")}
                >
                  <CardContent onClick={() => handlePrevious("/demographics")}>
                    <Typography
                      sx={{ fontSize: 24 }}
                      color="black"
                      gutterBottom
                    >
                      Who we're serving..
                    </Typography>
                    <Typography variant="h8" component="div">
                      <ul>
                        <li>{singleClient.demographics}</li>
                        {/* <li>{singleClient.address}</li> */}
                        {/* <li>{singleClient.website}</li> */}
                        {/* <li>{singleClient.phone}</li> */}
                        {/* <li>{singleClient.first_name}, {singleClient.last_name}</li> */}
                        {/* <li>{singleClient}</li> */}
                        {/* <li>{singleClient}</li> */}
                      </ul>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            {/* </Box> */}

            <PopupWidget
              url="https://calendly.com/dontyellwillcry"
              rootElement={rootElement}
              text="Click here to schedule!"
              textColor="#ffffff"
              color="#00a2ff"
              style={{
                position: "absolute",
                top: "50px",
                left: "20px",
              }}
            />
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default ReviewPage;
