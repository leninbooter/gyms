import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FacetListContainer from '../Filters/Layout/facetListContainer';
import FacetContainer from '../Filters/Layout/facetContainer';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function valuetext(value: number) {
    return `${value} Kg`;
}

function BasicGrid() {
    const [discos, setDiscos] = React.useState<number[]>([1, 25]);
    const handleDiscosChange = (event: Event, newValue: number | number[]) => {
        setDiscos(newValue as number[]);
    };

    const [mancuernas, setMancuernas] = React.useState<number[]>([1, 25]);
    const handleMancuernasChange  = (event: Event, newValue: number | number[]) => {
        setMancuernas(newValue as number[]);
      };

return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container columnSpacing={10}>
            <Grid size={12}>
                <Grid container columnSpacing={10}>
                    <Grid size={12}>
                        <Typography variant="h6" component="div" sx={{ p: 2 }}>
                            Fortalecimiento
                        </Typography>
                    </Grid>
                    <Grid size={{xs: 12, sm: 6, md: 3, lg: 3}}>
                        <Typography gutterBottom>Discos</Typography>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={discos}
                            min={1}
                            max={25}
                            onChange={handleDiscosChange}
                            valueLabelDisplay="on"
                            getAriaValueText={valuetext}
                            getValueLabelText={valuetext}
                            valueLabelFormat={valuetext}
                        />
                    </Grid>
                    <Grid size={{xs: 12, sm: 6, md: 3, lg: 3}}>
                        <Typography gutterBottom>Mancuernas</Typography>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={mancuernas}
                            min={1}
                            max={25}
                            onChange={handleMancuernasChange}
                            valueLabelDisplay="on"
                            getAriaValueText={valuetext}
                            getValueLabelText={valuetext}
                            valueLabelFormat={valuetext}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={12}>
                <Grid container columnSpacing={10}>
                    <Grid size={12}>
                        <Typography variant="h6" component="div" sx={{ p: 2 }}>
                            Clases dirigidas
                        </Typography>
                    </Grid>
                    <Grid size={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Spinning" />
                        </FormGroup>
                    </Grid>
                    <Grid size={12}>
                    <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Body bump" />
                        </FormGroup>
                    </Grid>
                    <Grid size={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Body combat" />
                        </FormGroup>
                    </Grid>
                    <Grid size={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="HIIT" />
                        </FormGroup>
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={12}>
                <FacetListContainer>
                    <FacetContainer title="Horario lunes a viernes">
                        <FormControl sx={{ m: 1}}>
                            <InputLabel id="demo-simple-select-label">Apertura</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={"00"}
                                label="Apertura"
                            >
                                <MenuItem value={"00"}>00:00</MenuItem>
                                <MenuItem value={"01"}>01:00</MenuItem>
                                <MenuItem value={"05"}>05:20</MenuItem>
                            </Select>
                        </FormControl> 
                        <FormControl sx={{ m: 1}}>
                            <InputLabel id="demo-simple-select-label">Cierre</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={"00"}
                                label="Cierre"
                            >
                                <MenuItem value={"00"}>00:00</MenuItem>
                                <MenuItem value={"01"}>01:00</MenuItem>
                                <MenuItem value={"05"}>05:20</MenuItem>
                            </Select>
                        </FormControl>
                    </FacetContainer>

                    <FacetContainer title="Horario sábado y domingo">
                        <FormControl sx={{ m: 1}}>
                            <InputLabel id="demo-simple-select-label">Apertura</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={"00"}
                                label="Apertura"
                            >
                                <MenuItem value={"00"}>00:00</MenuItem>
                                <MenuItem value={"01"}>01:00</MenuItem>
                                <MenuItem value={"05"}>05:20</MenuItem>
                            </Select>
                        </FormControl> 
                        <FormControl sx={{ m: 1}}>
                            <InputLabel id="demo-simple-select-label">Cierre</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={"00"}
                                label="Cierre"
                            >
                                <MenuItem value={"00"}>00:00</MenuItem>
                                <MenuItem value={"01"}>01:00</MenuItem>
                                <MenuItem value={"05"}>05:20</MenuItem>
                            </Select>
                        </FormControl>
                    </FacetContainer>
                </FacetListContainer>
            </Grid>



            
            <Grid size={4}>
                <Grid container>
                    <Grid size={12}>
                        <Typography variant="h6" component="div" sx={{ p: 2 }}>
                            Horario festivos
                        </Typography>
                    </Grid>
                    <Grid size={{xs: 12, sm: 6, md: 3, lg: 3}}>
                        <Slider
                            step={null}
                            min={0}
                            max={180}
                            marks={[
                                {value: 0, label: "00:00"},
                                {value: 15, label: "01:00"},
                                {value: 30, label: "05:00"},
                                {value: 45, label: "06:00"},
                                {value: 60, label: "07:00"},
                                {value: 75, label: "08:00"},
                                {value: 90, label: "09:00"},
                                {value: 105, label: "10:00"},
                                {value: 120, label: "20:00"},
                                {value: 135, label: "21:00"},
                                {value: 150, label: "22:00"},
                                {value: 165, label: "23:00"},
                                {value: 180, label: "24:00"}
                            ]}
                            defaultValue={[75, 135]}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={3}>
                <Grid container>
                    <Grid size={12}>
                        <Typography variant="h6" component="div" sx={{ p: 2 }}>
                            Estacionamiento
                        </Typography>
                    </Grid>
                    <Grid size={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Privado gratuito" />
                        </FormGroup>
                    </Grid>
                    <Grid size={12}>
                    <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Privado de pago" />
                        </FormGroup>
                    </Grid>
                    <Grid size={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Calle" />
                        </FormGroup>
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={3}>
                <Grid container>
                    <Grid size={12}>
                        <Typography variant="h6" component="div" sx={{ p: 2 }}>
                            Accesibilidad
                        </Typography>
                    </Grid>
                    <Grid size={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Rampas de acceso" />
                        </FormGroup>
                    </Grid>
                    <Grid size={12}>
                    <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Rampas de acceso no necesarias" />
                        </FormGroup>
                    </Grid>
                    <Grid size={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Ascensor" />
                        </FormGroup>
                    </Grid>
                    <Grid size={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Ascensor no necesario" />
                        </FormGroup>
                    </Grid>
                    <Grid size={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Aseos adaptados" />
                        </FormGroup>
                    </Grid>
                    <Grid size={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Aseos no adaptados" />
                        </FormGroup>
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={3}>
                <Grid container>
                    <Grid size={12}>
                        <Typography variant="h6" component="div" sx={{ p: 2 }}>
                            Permanencia
                        </Typography>
                    </Grid>
                    <Grid size={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Sí" />
                        </FormGroup>
                    </Grid>
                    <Grid size={12}>
                    <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="No" />
                        </FormGroup>
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={3}>
                <Grid container>
                    <Grid size={12}>
                        <Typography variant="h6" component="div" sx={{ p: 2 }}>
                            Áreas de bienestar
                        </Typography>
                    </Grid>
                    <Grid size={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Piscina" />
                        </FormGroup>
                    </Grid>
                    <Grid size={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Sauna" />
                        </FormGroup>
                    </Grid>
                    <Grid size={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Baño de vapor" />
                        </FormGroup>
                    </Grid>
                    <Grid size={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Solarium" />
                        </FormGroup>
                    </Grid>
                    <Grid size={12}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Entren" />
                        </FormGroup>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </Box>
    );
}

const BasicGridStyled = styled(BasicGrid, {name: "GymsFilters", slot: "root"})();

export default BasicGridStyled;
