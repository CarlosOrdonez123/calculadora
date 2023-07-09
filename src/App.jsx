import React, { useState } from 'react';
import './App.css';
import { styled } from '@mui/material/styles';
import { Typography, Button } from '@mui/material';
import '@fontsource/roboto';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const Title = styled(Typography)({
  marginBottom: '16px',
});

const Subtitle = styled(Typography)({
  opacity: 0.5,
  marginBottom: '16px',
});

const CalculatorContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '32px',
});

const Display = styled('div')({
  width: '260px',
  height: '40px',
  backgroundColor: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '8px',
  marginBottom: '16px',
  borderStyle: 'solid',
  borderColor: '#752273',
  borderRadius: '20px',
  fontFamily: 'Montserrat, sans-serif',
});

const ButtonRow = styled('div')({
  display: 'flex',
  marginBottom: '8px',
});

const CalculatorButton = styled(Button)({
  margin: '4px',
  backgroundImage: 'radial-gradient(circle at 50% -20.71%, #cbe7e1 0, #cae7e3 6.25%, #c9e7e6 12.5%, #c9e7e8 18.75%, #c9e7eb 25%, #c9e7ed 31.25%, #cae6ef 37.5%, #cbe6f1 43.75%, #cde5f2 50%, #cfe4f3 56.25%, #d1e4f4 62.5%, #d4e3f5 68.75%, #d7e2f5 75%, #dae1f5 81.25%, #dde0f4 87.5%, #e0e0f4 93.75%, #e3dff2 100%)',
  color: 'black',
  fontFamily: 'Montserrat, sans-serif',
});

const CalculatorButtonIgual = styled(Button)({
  margin: '4px',
  backgroundImage: 'radial-gradient(circle at 50% 50%, #12b07c 0, #12b07c 50%, #12b07c 100%)',
  color: 'black',
  fontFamily: 'Montserrat, sans-serif',
});

const CalculatorButtonAC = styled(Button)({
  margin: '4px',
  backgroundImage: 'radial-gradient(circle at 50% 50%, #e16366 0, #e16366 50%, #e16366 100%)',
  color: 'black',
  fontFamily: 'Montserrat, sans-serif',
  width: '44vh',
});

function App() {

  const [displayContent, setDisplayContent] = useState('');

  const handleButtonClick = (buttonContent) => {
    if (buttonContent === 'AC') {
      setDisplayContent('');
    } else {
      setDisplayContent((prevContent) => prevContent + buttonContent);
    }
  };

  return (
    <Container>
      <Title variant="h4">Calculadora</Title>
      <Subtitle variant="body1">Calculadora creada con Material-UI</Subtitle>
      <CalculatorContainer>
        <Display>{displayContent}</Display>
        <ButtonRow>
          <CalculatorButton variant="contained" onClick={() => handleButtonClick('1')}>
            1
          </CalculatorButton>
          <CalculatorButton variant="contained" onClick={() => handleButtonClick('2')}>
            2
          </CalculatorButton>
          <CalculatorButton variant="contained" onClick={() => handleButtonClick('3')}>
            3
          </CalculatorButton>
          <CalculatorButton variant="contained" onClick={() => handleButtonClick('/')}>
            /
          </CalculatorButton>
        </ButtonRow>
        <ButtonRow>
          <CalculatorButton variant="contained" onClick={() => handleButtonClick('4')}>
            4
          </CalculatorButton>
          <CalculatorButton variant="contained" onClick={() => handleButtonClick('5')}>
            5
          </CalculatorButton>
          <CalculatorButton variant="contained" onClick={() => handleButtonClick('6')}>
            6
          </CalculatorButton>
          <CalculatorButton variant="contained" onClick={() => handleButtonClick('x')}>
            x
          </CalculatorButton>
        </ButtonRow>
        <ButtonRow>
          <CalculatorButton variant="contained" onClick={() => handleButtonClick('7')}>
            7
          </CalculatorButton>
          <CalculatorButton variant="contained" onClick={() => handleButtonClick('8')}>
            8
          </CalculatorButton>
          <CalculatorButton variant="contained" onClick={() => handleButtonClick('9')}>
            9
          </CalculatorButton>
          <CalculatorButton variant="contained" onClick={() => handleButtonClick('-')}>
            -
          </CalculatorButton>
        </ButtonRow>
        <ButtonRow>
          <CalculatorButton variant="contained" onClick={() => handleButtonClick('0')}>
            0
          </CalculatorButton>
          <CalculatorButton variant="contained" onClick={() => handleButtonClick('.')}>
            .
          </CalculatorButton>
          <CalculatorButton variant="contained" onClick={() => handleButtonClick('+')}>
            +
          </CalculatorButton>
          <CalculatorButtonIgual variant="contained" onClick={() => handleButtonClick('=')}>
            =
          </CalculatorButtonIgual>
        </ButtonRow>
        <ButtonRow>
          <CalculatorButtonAC variant="contained" onClick={() => handleButtonClick('AC')}>
            AC
          </CalculatorButtonAC>
        </ButtonRow>
      </CalculatorContainer>
    </Container>
  );
};

export default App
