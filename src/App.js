import { Box, createTheme, Grid, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import AddPost from "./components/AddPost";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Options from "./components/Options";
import Sidebar from "./components/Sidebar";



function App() {

  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  })

  return (
   <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Grid container spacing={1} sx={{ mt: 2 }}>
        <Grid item xs={2}>
          <Sidebar setMode={setMode} mode={mode}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Main />
        </Grid>
        <Grid item xs={4}>
          <Options />
        </Grid> 
        <AddPost/> 
      </Grid>  
    </Box>
   </ThemeProvider>
    
  );
}

export default App;
