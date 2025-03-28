import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GymsImageGallery from './gymsImageGallery';
import GymsFeatures from './gymsFeatures';

function GymsCard(props) {
    return (
        <Grid size={{ xs: 4, sm: 3, md: 2, lg: 2 }}>
            <Card>
                <CardContent>
                    <Grid container columnSpacing={{ xs: 2, md: 2}} columns={1}>
                        <Grid size={1}>
                            <Typography variant="h5">
                                {props.gym.name}
                            </Typography>
                        </Grid>
                        <Grid size={1}>
                            <GymsImageGallery />
                        </Grid>
                        <Grid size={1}>
                            <GymsFeatures />
                        </Grid>
                        <Grid size={1}>
                            <h3>Resumen opiniones</h3>
                            {props.gym.reviews}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default GymsCard;