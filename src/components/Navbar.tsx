import { AppBar, Button, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  const navigate = () => (window.location.href = '/');
  return (
    <AppBar color="transparent" role="navigation">
      <Toolbar>
        <Button aria-label="Navigate to homepage" onClick={navigate}>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            Windforlife
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
