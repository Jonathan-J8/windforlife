import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import style from './style.module.css';

interface MarkerDetailInfoProps extends PropsWithChildren {
  primary?: string;
  secondary?: string;
}

const MarkerDetailInfo = ({ primary, secondary, children }: MarkerDetailInfoProps) => {
  return (
    <li className={style.markerDetailInfo}>
      {children || (
        <>
          <Typography variant="body2" sx={{ flexGrow: 1 }}>
            {primary}
          </Typography>
          <Typography variant="body2">{secondary}</Typography>
        </>
      )}
    </li>
  );
};

export default MarkerDetailInfo;
