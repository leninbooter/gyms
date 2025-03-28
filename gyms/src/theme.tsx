import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        GymsGridBox: {
            styleOverrides: {
                root: {
                }
            }
        },
        FiltersButton: {
            styleOverrides: {
                root: {
                    variants: [{
                        props: { variant: 'contained' },
                        style: {
                            position: 'fixed',
                            right: '30px',
                            bottom: '70px',
                        }
                    }]
                }
            }
        }
    }
});

export default theme;