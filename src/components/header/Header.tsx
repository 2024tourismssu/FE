import * as React from 'react'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import ImageComponent from '../image/Image.tsx'
import Logo from '@assets/images/Logo_v2.png'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KakaoShare from '../share/KakaoShare.tsx'
import { useNavigate } from 'react-router-dom'

const pages = [
   { label: '축제', path: '/festival' },
   { label: '공연/행사', path: '/concert' },
   { label: '문화시설', path: '/facility' },
   { label: '팝업 스토어', path: '/popup' },
]

function Header() {
   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
   const navigate = useNavigate()

   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget)
   }

   const handleCloseNavMenu = () => {
      setAnchorElNav(null)
   }

   const handleNavigation = (path: string) => {
      navigate(path)
      handleCloseNavMenu() // 모바일 메뉴를 닫기 위해
   }

   return (
      <AppBar
         sx={{
            backgroundColor: 'white',
            color: 'black',

            height: '13%',
            display: 'flex',
            justifyContent: 'center',
         }}
      >
         <Container maxWidth={false} sx={{ width: '70%' }}>
            <Toolbar disableGutters>
               <ImageComponent src={Logo} sx={{ width: '150px', height: '75px', cursor: 'pointer' }} onClick={() => handleNavigation('/')} />
               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', marginLeft: '1rem' } }}>
                  {pages.map((page, index) => (
                     <React.Fragment key={page.label}>
                        <Button
                           onClick={() => handleNavigation(page.path)}
                           sx={{
                              my: 2,
                              color: 'black',
                              fontWeight: 600,
                              display: 'block',
                              margin: 1.3,
                              padding: 1,
                              width: page.label === '팝업 스토어' ? '120px' : '90px',
                              height: '45px',
                              backgroundColor: 'rgba(98, 180, 134, 0.23)',
                           }}
                        >
                           {page.label}
                        </Button>
                        {index === 2 && (
                           <Box
                              sx={{
                                 width: '2px',
                                 height: '35px',
                                 backgroundColor: '#1E781E',
                                 margin: '0 8px',
                                 alignSelf: 'center',
                              }}
                           />
                        )}
                     </React.Fragment>
                  ))}
               </Box>

               <KakaoShare />

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
                        <MenuItem key={page.label} onClick={() => handleNavigation(page.path)}>
                           <Typography textAlign="center">{page.label}</Typography>
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
