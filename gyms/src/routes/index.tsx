import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'
import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { grey } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import GymsGrid from '../components/GymsGrid/gymsGrid'
import GymsCard from '../components/GymsGrid/gymsCard'
import FiltersButton from '../components/Index/filtersButton'
import GymsFilters from '../components/Index/gymsFilters'

export const Route = createFileRoute('/')({
  component: SwipeableEdgeDrawer,
})

const drawerBleeding = 56

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: grey[100],
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.background.default,
  }),
}))

const StyledBox = styled('div')(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.applyStyles('dark', {
    backgroundColor: grey[800],
  }),
}))

const Puller = styled('div')(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
  ...theme.applyStyles('dark', {
    backgroundColor: grey[900],
  }),
}))

function SwipeableEdgeDrawer() {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <FiltersButton onClick={toggleDrawer(true)} />
      <GymsGrid>
        <GymsCard gym={{
          name: "Dreamfit Villaverde", 
          reviews: [<div>
            <p>Llevo entrenando en [Nombre del Gym] durante varios meses y ha sido una experiencia increíble. El lugar está siempre limpio, bien equipado y cuenta con una variedad de máquinas y pesas para cualquier tipo de entrenamiento.</p>
            <p>Lo que más me gusta es el ambiente: los entrenadores son muy atentos y siempre están dispuestos a ayudarte con la técnica o a recomendarte rutinas. Además, hay una comunidad muy motivadora, lo que hace que ir al gimnasio sea algo que realmente disfruto.</p>
          </div>]
        }} />
        <GymsCard gym={{name: "BasicFit Glorieta Cadiz"}}/>
        <GymsCard gym={{name: "Viva Gym"}}/>
      </GymsGrid>
      <SwipeableDrawer
        container={window.document.body}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>
            51 results
          </Typography>
        </StyledBox>
        <StyledBox sx={{ px: 2, pb: 2, height: '100%', overflow: 'auto' }}>
          <GymsFilters />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  )
}
