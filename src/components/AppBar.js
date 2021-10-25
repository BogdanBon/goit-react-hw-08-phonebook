import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth';
import s from '../styles/AppBar.module.css';

export default function MainAppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar
      position="static"
      className={s.header}
      sx={{
        backgroundColor: 'rgba(25, 179, 210, 0.8)',
        transition: 'all 0.4s ease 0s',
        flexDirection: 'row',
        '&:hover': {
          backgroundColor: 'rgba(25, 179, 210, 1)',
          transition: 'all 0.4s ease 0s',
        },
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
}
