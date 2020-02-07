import React from 'react'
import logo from './logo.svg'
import './App.css'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { theme } from './theme/globalStyle'

const AppWrapper = styled.div`
  text-align: center;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const AppLogo = styled.img`
  animation: ${rotate360} infinite 120s linear;
  height: 80px;

  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`

const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const AppTitle = styled.h1`
  font-size: 1.3em;
`

const AppIntro = styled.p`
  color: ${props => props.theme.dark};
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`

const EmojiWrapper = styled.span.attrs({
  role: 'img'
})``

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          Bootstrapped with <code>create-react-app</code>.
        </AppIntro>
        <AppIntro>
          Components styled with <code>styled-components</code>{' '}
          <EmojiWrapper aria-label="nail polish" />
        </AppIntro>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
