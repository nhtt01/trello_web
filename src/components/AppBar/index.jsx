import React from 'react'
import Box from '@mui/material/Box'
import ModelSelect from '../../components/ModelSelect'

function AppBar() {
  return (
    <Box
    sx={{
      backgroundColor: 'primary.light',
      width: '100%',
      height: (theme) => theme.trelloCustom.appBarHeight,
      display: 'flex',
      alignItems: 'center'
    }}
  >
    <ModelSelect />
  </Box>
  )
}

export default AppBar