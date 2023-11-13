import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { closeSidebar, openSidebar } from '../../store/common.slice';

const SideDrawer = () => {
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const sidebarOpen = useSelector(
    (state: RootState) => state.common.sidebarOpen
  );
  const dispatch = useDispatch();

  return (
    <SwipeableDrawer
      sx={{
        minWidth: '50%'
      }}
      disableBackdropTransition={!iOS}
      anchor={'left'}
      open={sidebarOpen}
      onClose={() => dispatch(closeSidebar())}
      onOpen={() => dispatch(openSidebar())}
    >
      <ul>
        <li>banana</li>
        <li>banana2</li>
      </ul>
    </SwipeableDrawer>
  );
};

export default SideDrawer;
