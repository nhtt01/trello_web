import { useState } from 'react'
import Box from '@mui/material/Box'
import ModelSelect from '~/components/ModelSelect/ModelSelect'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
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
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        gap: 2,
        overflow:'auto',
        paddingX: 2,
        bgcolor:(theme)=> (theme.palette.mode === 'dark' ? '#2c3e50': '#1565c0')
      }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap:2 }}>
        <AppsIcon sx={{ color:'white' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap:0.5 }}>
          <SvgIcon component={TrelloIcon} fontSize='small' inheritViewBox sx={{ color:'white' }}/>
          <Typography variant='span' sx={{ fontSize:'1.5rem', fontWeight:'bold', color:'white' }}>Trello</Typography>
        </Box>
        <WorkSpace/>
        <Recent/>
        <Starred/>
        <Templates/>
        <Button
          sx=
            {{
              color: 'white',
              border: 'none',
              '&:hover': { border: 'none' }
            }}
          variant="outlined"
        >
          Create
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap:2 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          size='small'
          type="text"
          value={searchValue}
          onChange={( e ) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }}/>
              </InputAdornment>
            ),
            endAdornment:(
              <CloseIcon
                sx={{
                  color: searchValue ? 'white' : 'transparent',
                  fontSize: 'small',
                  cursor:  searchValue ? 'pointer' : 'default'
                }}
                onClick={() => setSearchValue('')}
              />
            )
          }}
          sx={{
            minWidth: '120px',
            maxWidth: '180px',
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' }
            }
          }}
        />
        <ModelSelect />
        <Tooltip title="Notification">
          <Badge color="warning" variant="dot" sx={{ cursor:'pointer', color:'white' }} >
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor:'pointer', color:'white' }}/>
        </Tooltip>
        <Profile/>
      </Box>
    </Box>
  )
}

export default AppBar
