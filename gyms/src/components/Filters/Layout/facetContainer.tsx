import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

function FacetContainer({title, children}) {
    return (
        <Grid size={{xs: 12, sm: 6, md: 4, lg: 4}}>
            <Typography variant="h6" component="div" sx={{ p: 2 }}>
                {title}
            </Typography>
            {children}
        </Grid>
    );
};

export default FacetContainer;