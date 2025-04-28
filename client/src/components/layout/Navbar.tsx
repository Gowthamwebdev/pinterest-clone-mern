import React from 'react';
import { Avatar, Menu, MenuItem, IconButton, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { useAuthStore } from '../../stores/AuthStore';
import Cookies from 'js-cookie';
import LogoutForm from '../form/LogoutFom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, resetAuth } = useAuthStore();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path: string) => {
    navigate(`/${path}`);
    handleMenuClose();
  };

  return (
    <div className="w-full flex items-center justify-between px-6 py-3 bg-white shadow sticky top-0 z-10">
      
      <div className="flex items-center bg-[#f5f5f5] px-2 py-0.5 rounded-lg flex-grow mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          style={{ width: 20, height: 20, color: "#757575" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-1.85z" />
        </svg>
        <TextField
          placeholder="Search"
          variant="standard"
          InputProps={{
            disableUnderline: true,
            sx: { ml: 1, fontSize: 14 },
          }}
          sx={{ flex: 1 }}
        />
      </div>

      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <IconButton onClick={handleAvatarClick} size="small" sx={{ ml: 2 }}>
              <Avatar alt="User Avatar" src="/path-to-avatar.jpg" />
              <div className="ml-2 text-gray-700 font-semibold">
                <FiChevronDown size={20} />
              </div>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <MenuItem onClick={() => handleNavigation('profile')}>Profile</MenuItem>
              <MenuItem onClick={() => handleNavigation('account')}>My Account</MenuItem>
              <MenuItem onClick={handleMenuClose}><LogoutForm/></MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button
              variant="text"
              sx={{
                color: "black",
                fontWeight: "bold",
                textTransform: 'none',
              }}
              onClick={() => handleNavigation('/signup')}
            >
              Signup
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleNavigation('/login')}
              sx={{
                backgroundColor: '#e60023',
                '&:hover': { backgroundColor: '#ad081b' },
                boxShadow: 'none',
                borderRadius: 200,
                color: 'white',
                py: 1,
                border: 'none',
                fontWeight: 'bold',
                textTransform: 'none',
              }}
            >
              Login
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;