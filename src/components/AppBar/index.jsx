import Box from '@mui/material/Box'
import ModelSelect from '~/components/ModelSelect'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloIcon } from '~/assets/trello-icon.svg'
import Typography from '@mui/material/Typography'
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
      <Box>
        <AppsIcon sx={{ color:'primary.main' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <SvgIcon component={TrelloIcon} inheritViewBox sx={{ color:'primary.main' }}/>
          <Typography variant='span'>Trello</Typography>
        </Box>
      </Box>
      <ModelSelect />
    </Box>
  )
}

export default AppBar
