import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, { ColorModeContext} from "../src/components/Menu/components/ColorMode";

const theme = {
    light: {
        backgroundBase: "#F9F9F9",
        backgroundLevel1: "#FFFFFF",
        backgroundLevel2: "#F0F0F0",
        borderBase: "#E5e5e5",
        textColorBase: "#222222",
    },
    dark: { 
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
};

// _app.jd -> Definições globais do NextJS
// ThemeProvider -> Prover o tema para a pp toda
// ColorModeProvider -> Prove o state de ligt ou dark mode para todo mundo

function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"light"}>
            {props.children}
        </ColorModeProvider>
    )
}
function MyApp({ Component, pageProps }) {
    const contexto = React.useContext(ColorModeContext);
    console.log(contexto.mode);
   
    return (
            <ThemeProvider theme={theme[contexto.mode]}>
              <CSSReset />
              <Component {...pageProps} />
             </ThemeProvider>
    )
}

export default function _App(props) {
    return (
        <ProviderWrapper>
            <MyApp {...props} />   
        </ProviderWrapper>
    )
};