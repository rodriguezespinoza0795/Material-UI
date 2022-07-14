import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Search from './components/Search'
import UserCard from './containers/UserCard'

const App = () => {
  const [inputValue, setInputValue] = useState('octocat')
  const [defaultValue, setDefaultValue] = useState({})
  const [userInfo, setUserInfo] = useState({})

  const getUserInformation = async () => {
    const url = 'https://api.github.com/users/'
    const GitHubUser = await fetch(`${url}${inputValue}`, {
      method: 'GET'
    })
    const response = await GitHubUser.json()

    if (inputValue === 'octocat') {
      setDefaultValue(response)
    }

    if (response?.message === "Not Found") {
      setUserInfo(defaultValue)
    } else {
      setUserInfo(response)
    }

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
      <UserCard userInfo={userInfo} />
    </Container>
  )
};

export default App;