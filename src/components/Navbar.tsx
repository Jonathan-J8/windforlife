import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Air } from '@mui/icons-material';

const Navbar = () => {
  const navigate = () => (window.location.href = '/');
  return (
    <AppBar color="transparent" role="navigation" sx={{ boxShadow: 'none' }}>
      <Toolbar>
        <Button aria-label="Navigate to homepage" onClick={navigate}>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            Windforlife &nbsp;
          </Typography>
          <Air />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
