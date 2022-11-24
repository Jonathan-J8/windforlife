import { Typography, IconButton, Box } from '@mui/material';
import { ChevronLeft, ChevronRight, ExpandLess, ExpandMore } from '@mui/icons-material';

import isMobile from '../../utils/isMobile';

const css = {
  container: {
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'primary.main',
    gap: '1rem',
  },
  title: {
    flexGrow: 1,
    color: 'primary.contrastText',
  },
  fab: {
    backgroundColor: 'primary.contrastText',
    transition: 'transform 0.3s ease',
  },
};

interface Props {
  title: string;
  expand: boolean;
  onExpand: () => void;
}

// const IconMobile = ({ expand }: { expand: boolean }) => {
//   return expand ? <ExpandMore /> : <ExpandLess />;
// };
// const IconDesktop = ({ expand }: { expand: boolean }) => {
//   return expand ? <ChevronRight /> : <ChevronLeft />;
// };

const Header = ({ title, expand, onExpand }: Props) => {
  return (
    <Box sx={{ ...css.container }}>
      <Typography sx={{ ...css.title }} component="h2" variant="body1">
        {title}
      </Typography>

      <IconButton
        sx={{
          ...css.fab,
          '&:hover': {
            backgroundColor: 'primary.contrastText',
            transform: 'scale(1.1)',
          },
        }}
        onClick={onExpand}
        aria-label="close marker detail"
        title="close marker detail"
        color="primary"
        size="small">
        {expand ? <ExpandLess /> : <ExpandMore />}
        {/* {isMobile() ? <IconMobile expand={expand} /> : <IconDesktop expand={expand} />} */}
      </IconButton>
    </Box>
  );
};

export default Header;
