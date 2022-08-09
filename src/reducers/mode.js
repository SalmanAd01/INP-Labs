import { createTheme } from "@mui/material";
const changeMode = (state="light", action) => {
    switch (action.type) {
        case 'LIGHT_MODE':
            return createTheme({
                palette: {
                    mode: "light",
                }
            });

        case 'DARK_MODE':
            return createTheme({
                palette: {
                    mode: "dark",
                }
            });

        default:
            return createTheme({
                palette: {
                    mode: "light",
                }
            });;
    }
}
export default changeMode;