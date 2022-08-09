import { Box, Stack, ThemeProvider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  // const [mode, setMode] = React.useState("light");
  const theme = useSelector(state => state.changeMode);
  // const darkTheme = createTheme({
  //   palette: {
  //     mode:mode,
  //   }
  // });
  return (
    <ThemeProvider theme={theme}>

      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar></Navbar>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
        <Add></Add>
      </Box>
    </ThemeProvider>
  );
}

export default App;
