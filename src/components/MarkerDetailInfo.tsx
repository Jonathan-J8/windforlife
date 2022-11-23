import { Typography, Box } from '@mui/material';
import { PropsWithChildren } from 'react';

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

const MarkerDetailInfo = ({ primary, secondary, children }: MarkerDetailInfoProps) => {
  return (
    <Box component="li" sx={{ ...css.li }} tabIndex={0}>
      {children || (
        <>
          <Typography variant="body2" sx={{ ...css.grow }}>
            {primary}
          </Typography>
          <Typography variant="body2">{secondary}</Typography>
        </>
      )}
    </Box>
  );
};

export default MarkerDetailInfo;
