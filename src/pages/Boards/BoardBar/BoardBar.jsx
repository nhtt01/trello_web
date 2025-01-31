import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
function BoardBar() {
  const MERN_STYLE ={
    paddingX: '5px',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    bgcolor: 'transparent',
    '& .MuiSvgIcon-root': {
      color: 'white'
    },
    '&:hover':{
      bgcolor: 'primary.50',
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
        paddingX: 2,
        bgcolor:(theme) => (theme.palette.mode === 'dark' ? '#34495e': '#1976d2')
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
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap:2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color:'white',
            borderColor:'white',
            '&:hover': {
              borderColor:'white'
            }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          total={24}
          sx={{
            gap:'10px',
            '& .MuiAvatar-root':{
              width:34,
              height:34,
              fontSize:16,
              border:'none',
              color:'white',
              cursor:'pointer'
            }
          }}
        >
          <Avatar alt="Remy Sharp" src="https://picsum.photos/300/300" />
          <Avatar alt="Travis Howard" src="https://picsum.photos/300/301" />
          <Avatar alt="Cindy Baker" src="https://picsum.photos/300/302" />
          <Avatar alt="Agnes Walker" src="https://picsum.photos/300/303" />
          <Avatar alt="Trevor Henderson" src="https://picsum.photos/300/303" />
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar