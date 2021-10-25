import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import s from './UserMenu.module.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <Typography variant="p" className={s.name} sx={{ m: '15px' }}>
        Have fun, {name}
      </Typography>
      <Button
        type="button"
        sx={{
          backgroundColor: 'salmon',
          color: '#000',
          '&:hover': {
            backgroundColor: '#fff',
          },
        }}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </div>
  );
}
