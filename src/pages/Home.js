import React from 'react';
import Container from "@material-ui/core/Container";
import {Typography, CssBaseline, createMuiTheme, ThemeProvider} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import green from "@material-ui/core/colors/green";
import background from '../background.png';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    fontFamily: "-apple-system",
  }
})

const theme2 = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    fontFamily: "-apple-system",
  }
})

const Home = () => {
  return (
  <Container>
  <Grid maxWidth="lg" disableGutters="true" style={{backgroundImage: `url(${background})`, 
   paddingLeft: 0, 
   paddingRight: 0,
   marginTop: 0, 

   backgroundSize:'cover',
   backgroundRepeat: 'no-repeat'}}>
     <CssBaseline />
     <ThemeProvider theme={theme}>
      <Typography
          color = "primary"
          component="h5"
          variant="h3"
        >
          Make Our Earth Greener
      </Typography>
     </ThemeProvider>
     <Grid item xs={6} container
       spacing={0}
       direction="column"
       alignItems="center"
       justify="center"
       style={{ minHeight: '100vh' }}>
      <ThemeProvider theme={theme2}>
        <Typography
          variant="body1"
          align="center"
        >
        Currently, people aren’t aware of how their actions affecting global environment and influencing others’ living, which is a factor causing environmental racism. Our App promotes people’s awareness of their daily environmental footprints, visualize others’ footprints, and encourage “green” actions through our reward and ranking games. We believe that our app will allow people to be aware of their daily environmental footprints and bring positive impacts on others.
       </Typography> 
      </ThemeProvider>
    </Grid>
   </Grid>
 </Container>
  );
};

export default Home;
