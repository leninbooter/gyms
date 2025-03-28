import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import GymsGridBox from './gymsGridBox';

function GymsGrid(props) {
    return (
        <GymsGridBox sx={{ flexGrow: 1 }}>
            <Grid m={1} container spacing={{ xs: 2, md: 2}} columns={{ xs: 1, sm: 2, md: 6, lg: 6}}>
                {props.children}
            </Grid>
        </GymsGridBox>
    );
};

export default GymsGrid;