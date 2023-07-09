import React from 'react';
import './App.css'; // Archivo CSS con los estilos adicionales
import { styled } from '@mui/material/styles'; // Import correcto para makeStyles
import Typography from '@mui/material/Typography'; // Import correcto para Typography

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
});

const Title = styled(Typography)({
  marginBottom: '16px',
});

const Subtitle = styled(Typography)({
  opacity: 0.5,
  marginBottom: '16px',
});

function App() {

  return (
    <Container>
      <Title variant="h4">
        Calculadora
      </Title>
      <Subtitle variant="body1">
        Calculadora creada con Material-UI
      </Subtitle>
      {/* Espacio para la calculadora */}
    </Container>
  )
}

export default App
