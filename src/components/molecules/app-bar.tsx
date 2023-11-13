import {
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
  Typography
} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { openSidebar } from '../../store/common.slice';

const AppBar = () => {
  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.common.title);

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => dispatch(openSidebar())}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
