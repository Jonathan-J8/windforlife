import { Close } from '@mui/icons-material';
import { Divider, IconButton, Paper, Slide, Typography } from '@mui/material';

import isMobile from '../utils/isMobile';
import { marker, useMarkerAction, useMarkerState } from '../stores/marker';

import MarkerDetailInfo from './MarkerDetailInfo';
import MarkerDetailReading from './MarkerDetailReading';
import style from './style.module.css';

const MarkerDetail = () => {
  const { show, current } = useMarkerState();
  const { id, name, lat, long, weeklyForce, dailyForce, readings } = marker.utils.parse(current);

  const dispatch = useMarkerAction();
  const onClose = () => dispatch({ type: marker.actions.HIDE });

  return (
    <Slide in={show} direction={isMobile() ? 'up' : 'right'}>
      <Paper
        aria-live="assertive"
        className={isMobile() ? style.markerDetailMobile : style.markerDetailDesktop}
        elevation={2}
        sx={{
          zIndex: 1000,
          position: 'absolute',
          minHeight: '100px',
          borderRadius: '20px',
        }}>
        <IconButton sx={{ position: 'absolute', right: 0, top: 0 }} aria-label="close marker detail" onClick={onClose}>
          <Close />
        </IconButton>
        <br />
        <ul className={style.markerDetailInnerContainer}>
          <MarkerDetailInfo>
            <Typography variant="body1" component="h2" sx={{ flexGrow: 1, marginBottom: '10px' }}>
              {name}
            </Typography>
          </MarkerDetailInfo>
          <li>
            <Divider />
          </li>
          <MarkerDetailInfo primary="Latitude" secondary={lat} />
          <MarkerDetailInfo primary="Longitude" secondary={long} />
          <MarkerDetailInfo primary="Weekly average" secondary={`${weeklyForce} kn`} />
          <MarkerDetailInfo primary="Daily average" secondary={`${dailyForce} kn`} />
          <li>
            <Divider />
          </li>
          {readings.map((item) => (
            <MarkerDetailReading key={id + item.timestamp.toString()} {...item} />
          ))}
        </ul>
      </Paper>
    </Slide>
  );
};

export default MarkerDetail;
