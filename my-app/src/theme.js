
import { createTheme } from "@mui/material/styles";


export const Colors = {
    primary: "#E48283",
    secondary: "#697470"

};

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary,
        },
        secondary: {
            main: Colors.secondary,
        },
    }


}
)


export default theme