import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';


export const NavBar = ({ drawerWidth }) => {
  return (
      <AppBar
          position='fixed'
          sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth }px` }
           }}
      >
          <Toolbar>
              <IconButton
                  color='inherit'
                  sx={{ mr: 2, display: { sm: 'none' } }}
              >
                  <MenuOutlined/>
              </IconButton>

              <Grid
                  container
                  direction={'row'}
                  justifyContent='space-between'
                  alignItems='center'
              >
                  <Typography
                      variant='h6'
                      noWrap
                      component='divs'
                  >JournalApp</Typography>
                  <IconButton color='error'>
                      <LogoutOutlined/>
                  </IconButton>
              </Grid>
          </Toolbar>
    </AppBar>
  )
}
