import * as React from 'react'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import ImageComponent from './Image.tsx'
import Logo from '../assets/images/Logo.png'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const pages = ['축제', '공연', '행사', '문화시설', '팝업 스토어']

const Search = styled('div')(({ theme }) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: '#E3DFDF',
   marginLeft: '1rem',
   marginRight: '1rem',
   width: '50%',
   [theme.breakpoints.up('md')]: {
      width: '30%',
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
      <AppBar sx={{ backgroundColor: 'white', color: 'black', border: '1px solid black' }}>
         <Container maxWidth={false} sx={{ width: '70%' }}>
            <Toolbar disableGutters>
               <ImageComponent src={Logo} sx={{ width: '100px', height: '50px' }} />

               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page, index) => (
                     <React.Fragment key={page}>
                        <Button
                           onClick={handleCloseNavMenu}
                           sx={{
                              my: 2,
                              color: 'black',
                              display: 'block',
                              margin: 1,
                              padding: 1,
                              border: 'solid 1px black',
                           }}
                        >
                           {page}
                        </Button>
                        {index === 3 && (
                           <Typography
                              sx={{
                                 color: 'black',
                                 display: 'flex',
                                 alignItems: 'center',
                                 padding: '0 8px',
                              }}
                           >
                              |
                           </Typography>
                        )}
                     </React.Fragment>
                  ))}
               </Box>

               <Search>
                  <SearchIconWrapper>
                     <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
               </Search>

               <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu}>
                     <MenuIcon />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={handleCloseNavMenu}
                     sx={{
                        display: { xs: 'block', md: 'none' },
                     }}
                  >
                     {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                           <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                     ))}
                  </Menu>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   )
}

export default Header
