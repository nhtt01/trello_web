import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
function BoardBar() {
  const MERN_STYLE ={
    paddingX: '5px',
    color: 'primary.main',
    border: 'none',
    borderRadius: '4px',
    bgcolor: 'white',
    '& .MuiSvgIcon-root': {
      color: 'primary.main'
    },
    '&:hover':{
      bgcolor: 'primary.main',
      color: '#fff',
      '.MuiSvgIcon-root': {
        color: '#fff'
      }
    }
  }
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        gap: 2,
        overflow:'auto',
        borderTop: '1px solid #00bfa5',
        paddingX: 2
      }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap:2 }}>
        <Chip
          sx={MERN_STYLE}
          icon={<DashboardIcon />}
          label="TanTai Dashboard"
          clickable
        />
        <Chip
          sx={MERN_STYLE}
          icon={<VpnLockIcon />}
          label="Public/Private workspace"
          clickable
        />
        <Chip
          sx={MERN_STYLE}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
        />
        <Chip
          sx={MERN_STYLE}
          icon={<DashboardIcon />}
          label="TanTai Dashboard"
          clickable
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap:2 }}> </Box>
    </Box>
  )
}

export default BoardBar