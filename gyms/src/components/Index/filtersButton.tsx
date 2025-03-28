import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import TuneIcon from '@mui/icons-material/Tune';

const FiltersButtonStyled = styled(Button, {name: "FiltersButton", slot: "root"})();

function FiltersButton({ onClick }) {
    return (
        <FiltersButtonStyled
            variant='contained'
            startIcon={<TuneIcon />}
            onClick={() => onClick(true)}
        >
            Filtros
        </FiltersButtonStyled>
    );
};

export default FiltersButton;