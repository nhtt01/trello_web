import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards() {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: '0 5px',
        m: '0 5px',
        maxHeight: (theme) => `calc(
${theme.trelloCustom.boardContentHeight} - 
${theme.spacing(5)} -
${theme.trelloCustom.columnHeaderHeight} -
${theme.trelloCustom.columnfooterHeight})`,
        overflowX: 'hidden',
        overflowY: 'auto',
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ced0da'
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#bfc2cf'
        }
    }}>
     <Card/>
     <Card temporaryHideMedia />
       
    </Box>
  )
}

export default ListCards