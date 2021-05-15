import React, { useContext, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { signOut } from '../../utils/signOut';
import { AuthContext } from './../../Auth';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useStyles } from './Navbar.styles';
import logo from '../../assets/images/logo_white.png';
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';


const NavbarUI = () => {
  const { currentUser } = useContext(AuthContext);
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [MenuMobile, setMenuMobile] = useState(false);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenMobileMenu = () => {
    setMenuMobile(true);
  };

  const handleCloseMobileMenu = () => {
    setMenuMobile(false);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClick={handleMenuClose}
    >
      <MenuItem
        onClick={() => history.push('/account')}
      >
        Mi cuenta
      </MenuItem>
      <MenuItem
        onClick={signOut}
      >
        Cerrar Sesion
      </MenuItem>
    </Menu>
  );

  const list = () => (
    <div role="presentation" onClick={handleCloseMobileMenu}>
      <List>
        <ListItem button key={'dashboard'} onClick={() => history.push('/')}>
          <ListItemText primary={'DASHBOARD'} />
        </ListItem>
        <ListItem
          button
          key={'gestion'}
          onClick={() => history.push('/gestion')}
        >
          <ListItemText primary={'GESTION DE USUARIOS'} />
        </ListItem>
        <ListItem button key={'search'} onClick={() => history.push('/search')}>
          <ListItemText primary={'BUSQUEDA DE COMPROBANTES'} />
        </ListItem>
        <ListItem button key={'report'} onClick={() => history.push('/report')}>
          <ListItemText primary={'REPORTES'} />
        </ListItem>
        <ListItem
          button
          key={'account'}
          onClick={() => history.push('/account')}
        >
          <ListItemText primary={'CUENTA'} />
        </ListItem>
        <ListItem button key={'logout'} onClick={signOut}>
          <ListItemText primary={'CERRAR SESION'} />
        </ListItem>
      </List>
    </div>
  );

  const renderMobileMenu = (
    <Drawer anchor={'left'} open={MenuMobile} onClose={handleCloseMobileMenu}>
      {list('left')}
    </Drawer>
  );

  return (
    <div className={classes.grow}>
      {!!currentUser && (
      <AppBar position="static" style={{ background: '#ffffff' }}>
        <Toolbar>
          <img src={logo} alt="Logo Bizlinks" style={{ width: '40px' }} />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button onClick={() => history.push('/')}>
              <Typography color="primary" variant="button">
                Inicio
              </Typography>
            </Button>
            <Button onClick={() => history.push('/update')}>
              <Typography color="primary" variant="button">
                GESTION DE USUARIOS
              </Typography>
            </Button>
            <Button onClick={() => history.push('/search')}>
              <Typography color="primary" variant="button">
                BUSQUEDA DE COMPROBANTES
              </Typography>
            </Button>
            <Button onClick={() => history.push('/report')}>
              <Typography color="primary" variant="button">
                REPORTES
              </Typography>
            </Button>
            <IconButton
              edge="end"
              aria-label="Cuenta del usuario actual"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle color="primary" />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={handleOpenMobileMenu}
            >
              <MenuIcon color="primary" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      )}  
      {renderMobileMenu}
      {renderMenu}    
    </div>
  );
};

export default NavbarUI;
