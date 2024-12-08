import Box from '@mui/material/Box'
import ModelSelect from '~/components/ModelSelect'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloIcon } from '~/assets/trello-icon.svg'
import Typography from '@mui/material/Typography'
import WorkSpace from './Menus/WorkSpace'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profile'
function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap:2 }}>
        <AppsIcon sx={{ color:'primary.main' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap:0.5 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox fontSize="small" sx={{ color:'primary.main' }}/>
          <Typography variant='span' sx={{ fontSize:'1.5rem', fontWeight:'bold', color:'primary.main' }}>Trello</Typography>
        </Box>
        <WorkSpace/>
        <Recent/>
        <Starred/>
        <Templates/>
        <Button variant="outlined">Create</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap:2 }}>
        <TextField id="outlined-search" label="Search..." size='small' type="search" />
        <ModelSelect />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor:'pointer' }} >
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor:'pointer' }}/>
        </Tooltip>
        <Profile/>
      </Box>
    </Box>
  )
}

export default AppBar
