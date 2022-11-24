import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { marker, useMarkerState } from '../../stores/marker';

import MarkerDetailItem from './MarkerDetailItem';
import MarkerDetailReadings from './MarkerDetailReadings';

const css = {
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
  },
};

const MarkerDetailList = () => {
  const { current, prev } = useMarkerState();
  const { id, name, lat, long, weeklyForce, dailyForce, readings } = marker.utils.parse(current);
  const { readings: prevReadings } = marker.utils.parse(prev);

  return (
    <>
      <br />
      <Box sx={{ ...css.ul }} component="ul">
        <MarkerDetailItem>
          <Typography sx={{ ...css.title }} component="h2" variant="body1">
            {name}
          </Typography>
        </MarkerDetailItem>
        <li>
          <Divider />
        </li>
        <MarkerDetailItem primary="Latitude" secondary={lat} />
        <MarkerDetailItem primary="Longitude" secondary={long} />
        <MarkerDetailItem primary="Weekly average" secondary={`${weeklyForce} kn`} />
        <MarkerDetailItem primary="Daily average" secondary={`${dailyForce} kn`} />
        <li>
          <Divider />
        </li>
        <MarkerDetailReadings currentList={readings} markerId={id} previousList={prevReadings} />
      </Box>
    </>
  );
};

export default MarkerDetailList;
