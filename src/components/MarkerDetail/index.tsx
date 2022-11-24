import { Collapse, Divider } from '@mui/material';
import { marker, useMarkerAction, useMarkerState } from '../../stores/marker';

import Modal from './Modal';
import Header from './Header';
import List from './List';
import ListItem from './ListItem';
import Reading from './Reading';

const MarkerDetail = () => {
  const dispatch = useMarkerAction();
  const { show, isDefault, current, previous } = useMarkerState();

  const { id, name, lat, long, weeklyForce, dailyForce, readings } = marker.utils.parse(current);
  const { readings: prevReadings } = marker.utils.parse(previous);
  const readingsMerged = marker.utils.mergeReadings({ current: readings, previous: prevReadings });
  const last = readingsMerged.length - 1;
  const directionMerged = last > 0 ? readingsMerged[last].dir : { current: 0, previous: 0 };

  const onExpand = () => {
    if (show) {
      dispatch({ type: marker.actions.HIDE });
      return;
    }
    dispatch({ type: marker.actions.SHOW });
  };

  return (
    <Modal open={!isDefault}>
      <Header title={name} expand={show} direction={directionMerged} onExpand={onExpand} />
      <Collapse in={show} orientation="vertical">
        <List>
          <ListItem>
            <Divider />
          </ListItem>
          <ListItem primary="Latitude" secondary={lat} />
          <ListItem primary="Longitude" secondary={long} />
          <ListItem primary="Weekly average" secondary={`${weeklyForce} kn`} />
          <ListItem primary="Daily average" secondary={`${dailyForce} kn`} />
          <ListItem>
            <Divider />
          </ListItem>
          {readingsMerged.map((item, i) => (
            <ListItem key={`${id}-${i}`}>
              <Reading {...item} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Modal>
  );
};

export default MarkerDetail;
