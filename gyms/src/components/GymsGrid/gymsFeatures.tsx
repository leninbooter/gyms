import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LocalParkingRoundedIcon from '@mui/icons-material/LocalParkingRounded';
import AccessibleRoundedIcon from '@mui/icons-material/AccessibleRounded';
import LensRoundedIcon from '@mui/icons-material/LensRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import PoolRoundedIcon from '@mui/icons-material/PoolRounded';
import WavesRoundedIcon from '@mui/icons-material/WavesRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import DirectionsBikeRoundedIcon from '@mui/icons-material/DirectionsBikeRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import SaunaIcon from '../Icons/saunaIcon';

function GymsFeatures() {
    return (
      <div>
        <TableContainer component={Paper} sx={{width: '100%', overflowX: 'auto'}}>
            <Typography variant="h6" component="div" sx={{ p: 2 }}>
              Fortalecimiento
            </Typography>
          <Table size="small">
            <TableBody>
              <TableRow>
                  <TableCell><LensRoundedIcon /> Max</TableCell>
                  <TableCell>25 Kg</TableCell>
                  <TableCell><LensRoundedIcon /> Min</TableCell>
                  <TableCell>1.25 Kg</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell><FitnessCenterRoundedIcon /> Max</TableCell>
                  <TableCell>25 Kg</TableCell>
                  <TableCell><FitnessCenterRoundedIcon /> Min</TableCell>
                  <TableCell>1.25 Kg</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} sx={{width: '100%', overflowX: 'auto'}}>
            <Typography variant="h6" component="div" sx={{ p: 2 }}>
              Clases dirididas
            </Typography>
            <Table size="small">
              <TableBody>
                <TableRow>
                    <TableCell><DirectionsBikeRoundedIcon /></TableCell>
                    <TableCell>Sí</TableCell>
                    <TableCell>Body bump</TableCell>
                    <TableCell>Sí</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer component={Paper} sx={{width: '100%', overflowX: 'auto'}}>
            <Typography variant="h6" component="div" sx={{ p: 2 }}>
              Establecimiento
            </Typography>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell><AccessTimeRoundedIcon /></TableCell>
                  <TableCell>06:00</TableCell>
                  <TableCell><AccessTimeFilledRoundedIcon/></TableCell>
                  <TableCell>23:00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><AccessTimeRoundedIcon /></TableCell>
                  <TableCell>08:00</TableCell>
                  <TableCell><AccessTimeFilledRoundedIcon/></TableCell>
                  <TableCell>21:00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><AccessTimeRoundedIcon /></TableCell>
                  <TableCell>08:00</TableCell>
                  <TableCell><AccessTimeFilledRoundedIcon/></TableCell>
                  <TableCell>15:00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><AccessTimeRoundedIcon /></TableCell>
                  <TableCell>08:00</TableCell>
                  <TableCell><AccessTimeFilledRoundedIcon/></TableCell>
                  <TableCell>15:00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><LocalParkingRoundedIcon /></TableCell>
                  <TableCell>Privado pago</TableCell>
                  <TableCell><AccessibleRoundedIcon /></TableCell>
                  <TableCell>Rampas de acceso, ascensor no necesario, baño adaptado</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><CalendarMonthRoundedIcon /></TableCell>
                  <TableCell>No</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

        <TableContainer component={Paper} sx={{width: '100%', overflowX: 'auto'}}>
          <Typography variant="h6" component="div" sx={{ p: 2 }}>
            Áreas de bienestar
          </Typography>
          <Table size="small">
            <TableBody>
              <TableRow>
                  <TableCell><PoolRoundedIcon /></TableCell>
                  <TableCell>Sí</TableCell>
                  <TableCell><SaunaIcon width={40} height={40}/></TableCell>
                  <TableCell>No</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell><WavesRoundedIcon /></TableCell>
                  <TableCell>Sí</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
              </TableRow>
              <TableRow>
                  <TableCell>Zona al aire libre</TableCell>
                  <TableCell>Sí</TableCell>
                  <TableCell><WbSunnyRoundedIcon /></TableCell>
                  <TableCell>Sí</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
}

export default GymsFeatures;

