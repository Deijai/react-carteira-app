import React from "react";
import GlobalSTyles from "./styles/GlobalSTyles";
import { Layout } from './components/Layout/index';
import { ThemeProvider } from 'styled-components';
import dark from "./theme/dark";
import AppRedirect from "./routes";


const App = () => {
    return (
        <ThemeProvider theme={dark}>
        <GlobalSTyles />
            <AppRedirect />
        </ThemeProvider>
        
    );
}

export default App;