import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette:{
        mode: "dark",
        primary: {
            main: "#E91E63"
        },
        secondary: {
            main: "#5A20CB"
        },
        background: {
            default: "#0D0D0D",
            paper: "#0D0D0D"
        }
    }
})