import React from 'react';
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
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
    <div className="w-full flex justify-between items-center px-4 py-2 bg-white">
      {/* Full-width Search Input */}
      <div className="flex items-center bg-gray-100 px-4  rounded-full w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-1.85z" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="ml-2 w-full py-2 bg-transparent outline-none text-sm text-gray-700"
          />
        </div>

      {/* Avatar Dropdown */}
      <IconButton onClick={handleAvatarClick} size="small" sx={{ ml: 2 }}>
        <Avatar alt="User Avatar" src="/path-to-avatar.jpg" />
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
        <MenuItem onClick={() => handleNavigation('account')}>My account</MenuItem>
        <MenuItem onClick={() => handleNavigation('logout')}>Sign out</MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
