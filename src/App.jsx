import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Router from 'pages';

const App = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.backgroundColor};
    margin:0;
    min-height: 100vh;
  }
`;

const lightMode = {
    backgroundColor: '#F6F8FC',
    secondaryBackgroundColor: '#DFDFDF',
    leftNavBackgroundColor: '#FAFAFA',
    link: 'rgb(112, 76, 182)',
    text: 'black'
};

const darkMode = {
    backgroundColor: 'black',
    leftNavBackgroundColor: '#FAFAFA',
    link: 'rgb(112, 76, 182)',
    text: 'white'
};

export default () => {
    return (
        <ThemeProvider theme={lightMode}>
            <GlobalStyle />
            <App>
                <Router />
            </App>
        </ThemeProvider>
    );
};
