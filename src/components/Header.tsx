import * as React from 'react'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import MenuItem from '@mui/material/MenuItem'
import { alpha, styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'

const pages = ['축제', '공연', '행사', '문화시설']

const Search = styled('div')(({ theme }) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginLeft: 0,
   width: '40%',
   [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
   },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   width: '100%',
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('md')]: {
         width: '12ch',
         '&:focus': {
            width: '20ch',
         },
      },
   },
}))

function Header() {
   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget)
   }

   const handleCloseNavMenu = () => {
      setAnchorElNav(null)
   }

   return (
      <AppBar position="static">
         <Container maxWidth={false} sx={{ width: '85%' }}>
            <Toolbar disableGutters>
               <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                     mr: 2,
                     display: { xs: 'none', md: 'flex' },
                     fontFamily: 'monospace',
                     fontWeight: 700,
                     letterSpacing: '.3rem',
                     color: 'inherit',
                     textDecoration: 'none',
                  }}
               >
                  LOGO
               </Typography>

               <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                     <MenuIcon />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={handleCloseNavMenu}
                     sx={{
                        display: { xs: 'block', md: 'none' }, // change from 'sm' to 'md' for 768px breakpoint
                     }}
                  >
                     {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                           <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                     ))}
                  </Menu>
               </Box>

               <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                     mr: 2,
                     display: { xs: 'flex', md: 'none' },
                     flexGrow: 1,
                     fontFamily: 'monospace',
                     fontWeight: 700,
                     letterSpacing: '.3rem',
                     color: 'inherit',
                     textDecoration: 'none',
                  }}
               >
                  LOGO
               </Typography>
               <Box
                  sx={{
                     flexGrow: 1,
                     display: { xs: 'none', md: 'flex' },
                  }}
               >
                  {pages.map((page) => (
                     <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block', backgroundColor: 'black', margin: 1 }}>
                        {page}
                     </Button>
                  ))}
               </Box>
               <Search>
                  <SearchIconWrapper>
                     <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
               </Search>
               <Button sx={{ my: 2, color: 'white', display: 'block', backgroundColor: 'black', margin: 1 }}>팝업 스토어</Button>
            </Toolbar>
         </Container>
      </AppBar>
   )
}

export default Header
