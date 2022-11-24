import type { PropsWithChildren } from 'react';
import { Typography, Box } from '@mui/material';

const css = {
  li: {
    display: 'inline-flex',
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
};

interface MarkerDetailInfoProps extends PropsWithChildren {
  primary?: string;
  secondary?: string;
}

const MarkerDetailItem = ({ primary, secondary, children }: MarkerDetailInfoProps) => {
  return (
    <Box component="li" sx={{ ...css.li }} tabIndex={0}>
      {children || (
        <>
          <Typography sx={{ ...css.grow }} variant="body2">
            {primary}
          </Typography>
          <Typography variant="body2">{secondary}</Typography>
        </>
      )}
    </Box>
  );
};

export default MarkerDetailItem;
