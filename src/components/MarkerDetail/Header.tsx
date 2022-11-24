import { Typography, IconButton, Box } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import isMobile from '../../utils/isMobile';

const css = {
  container: {
    position: 'relative',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    background: `linear-gradient(
      var(--direction),
      var(--color1),
      var(--color2)
    )`,
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
  direction: number;
  onExpand: () => void;
}

const IconMobile = ({ expand }: { expand: boolean }) => (expand ? <ExpandMore /> : <ExpandLess />);
const IconDesktop = ({ expand }: { expand: boolean }) => (expand ? <ExpandLess /> : <ExpandMore />);

const Header = ({ title, expand, direction, onExpand }: Props) => {
  return (
    <Box
      component="div"
      sx={{
        ...css.container,
        '--color1': (theme) => theme.palette.primary.dark,
        '--color2': (theme) => theme.palette.primary.light,
        '--direction': `${direction}deg`,
      }}>
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
        {/* {expand ? <ExpandLess /> : <ExpandMore />} */}
        {isMobile() ? <IconMobile expand={expand} /> : <IconDesktop expand={expand} />}
      </IconButton>
    </Box>
  );
};

export default Header;
