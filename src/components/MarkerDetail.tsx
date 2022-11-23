import { Close } from '@mui/icons-material';
import { Divider, IconButton, Paper, Slide, Typography } from '@mui/material';

import isMobile from '../utils/isMobile';
import { marker, useMarkerAction, useMarkerState } from '../stores/marker';

import MarkerDetailInfo from './MarkerDetailInfo';
import MarkerDetailReadings from './MarkerDetailReadings';
import style from './style.module.css';
import { Box } from '@mui/system';

const css = {
  paper: {
    zIndex: 1000,
    position: 'absolute',
    minHeight: '100px',
    borderRadius: '20px',
  },
  ul: {
    listStyleType: 'none',
    marginBlockStart: '0',
    marginBlockEnd: '0',
    marginInlineStart: '0',
    marginInlineEnd: '0',
    paddingInlineStart: '0',
    padding: '0 1rem 1rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  title: {
    flexGrow: 1,
    marginBottom: '10px',
  },
};

const MarkerDetail = () => {
  const { show, current, prev } = useMarkerState();
  const { id, name, lat, long, weeklyForce, dailyForce, readings } = marker.utils.parse(current);
  const { readings: prevReadings } = marker.utils.parse(prev);

  const dispatch = useMarkerAction();
  const onClose = () => dispatch({ type: marker.actions.HIDE });

  return (
    <Slide in={show} direction={isMobile() ? 'up' : 'right'}>
      <Paper
        aria-live="assertive"
        className={isMobile() ? style.markerDetailMobile : style.markerDetailDesktop}
        elevation={2}
        sx={{ ...css.paper }}>
        <IconButton sx={{ position: 'absolute', right: 0, top: 0 }} aria-label="close marker detail" onClick={onClose}>
          <Close />
        </IconButton>
        <br />

        <Box component="ul" sx={{ ...css.ul }}>
          <MarkerDetailInfo>
            <Typography variant="body1" component="h2" sx={{ ...css.title }}>
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
          <MarkerDetailReadings markerId={id} currentList={readings} previousList={prevReadings} />
          {/* // {readings.map((item, i) => (
          //   <MarkerDetailReading key={id + item.timestamp.toString()} {...item} prevDir={prevReadings[i]?.dir || 0} />
          // ))} */}
        </Box>
      </Paper>
    </Slide>
  );
};

export default MarkerDetail;
