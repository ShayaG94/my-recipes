import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import BasicList from "./Components/List/List";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveAppBar from "./Components/AppBar/AppBar"

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    return (
            <ThemeProvider theme={darkTheme}>
                < ResponsiveAppBar />
                <CssBaseline />
                    < BasicList />
                    <Navbar />
            </ThemeProvider>
    );
}

export default App;
