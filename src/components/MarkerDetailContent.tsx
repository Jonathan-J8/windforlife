import { Divider, Typography } from '@mui/material';
import { marker, useMarkerState } from '../stores/marker';

import MarkerDetailInfo from './MarkerDetailInfo';
import MarkerDetailReadings from './MarkerDetailReadings';
import { Box } from '@mui/system';

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

const MarkerDetailContent = () => {
  const { current, prev } = useMarkerState();
  const { id, name, lat, long, weeklyForce, dailyForce, readings } = marker.utils.parse(current);
  const { readings: prevReadings } = marker.utils.parse(prev);

  return (
    <>
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
      </Box>
    </>
  );
};

export default MarkerDetailContent;
