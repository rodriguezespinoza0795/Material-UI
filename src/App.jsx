import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Search from './components/Search'

const App = () => {
  const [inputValue, setInputValue] = useState('octocat')

  const getUserInformation = async () => {
    const url = 'https://api.github.com/users/'
    const GitHubUser = await fetch(`${url}${inputValue}`, {
      method: 'GET'
    })
    const response = await GitHubUser.json()
    console.log('Buscar User', response)
  }

  useEffect(() => {
    getUserInformation()
  }, [])

  return(
    <Container sx={{
      background: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }} >
      <Search
        handleSearch={getUserInformation}
        setInputValue={setInputValue}
      />
    </Container>
  )
};

export default App;