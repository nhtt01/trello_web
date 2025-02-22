import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tooltip from '@mui/material/Tooltip'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import AddCardIcon from '@mui/icons-material/AddCard'
import Button from '@mui/material/Button'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import ListCards from './ListCards/ListCards'
function Column() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <Box sx={{
            minWidth: '300px',
            maxWidth: '300px',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
            ml: 2,
            borderRadius: '6px',
            height: 'fit-content',
            maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(5)})`
        }}>
            <Box sx={{
                height:(theme) => theme.trelloCustom.columnHeaderHeight,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Typography variant='h6' sx={{
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '1rem'
                }}>
                    Column Title
                </Typography>
                <Box>
                    <Tooltip title="More option">
                        <ExpandMoreIcon
                            sx={{ color: 'text.primary', cursor: 'pointer' }}
                            id='basic-column-dropdown'
                            aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        />
                    </Tooltip>
                    <Menu
                        id='basic-menu-column-dropdown'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-column-dropdown'
                        }}
                    >
                        <MenuItem>
                            <ListItemIcon>
                                <AddCardIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Add new card</ListItemText>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}> </Typography>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <ContentCut fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Cut</ListItemText>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}> </Typography>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <ContentCopy fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Copy</ListItemText>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}> </Typography>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <ContentPaste fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Paste</ListItemText>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}> </Typography>
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon> <DeleteForeverIcon fontSize="small" /> </ListItemIcon>
                            <ListItemText>Remove this column</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon> <Cloud fontSize="small" /> </ListItemIcon>
                            <ListItemText>Archive this column</ListItemText>
                        </MenuItem>
                    </Menu>
                </Box>
            </Box>
           

           {/* Show List card */}
                        <ListCards />


            <Box sx={{
                height: (theme) => theme.trelloCustom.columnfooterHeight,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Button startIcon={<AddCardIcon />}>Add new card</Button>
                <Tooltip title="Drag to move">
                    <DragHandleIcon sx={{ cursor: 'pointer' }} />
                </Tooltip>
            </Box>
        </Box>
    )
}

export default Column