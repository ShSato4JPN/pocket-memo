import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Paper from '@mui/material/Paper'
import CreateUserForm from '../blocks/CreateUserForm'

const CreateUser: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container component='main' maxWidth='sm' sx={{ my: 20 }}>
        <Paper>
          <CreateUserForm />
        </Paper>
      </Container>
    </>
  )
}

export default CreateUser
