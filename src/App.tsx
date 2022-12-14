import { Box } from '@mui/material'

import React from 'react'
import { ResponsiveAppBar } from './components/AppBar'
import { ActionAreaCard } from './components/Dashboard'

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Box padding={3}>
        <ActionAreaCard />
      </Box>
    </>
  )
}

export default App
