import Grid from '@mui/material/Grid2';
import FacetContainer from './facetContainer';

function facetListContainer({children}) {
    return (
        <Grid container>
            {children}
        </Grid>
    );
};

export default facetListContainer;