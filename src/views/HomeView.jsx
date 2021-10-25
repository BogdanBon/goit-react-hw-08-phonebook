import s from '../styles/HomeView.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HomeView = () => (
  <Box className={s.container}>
    <Typography variant="h2" component="div" className={s.title}>
      My phonebook
      <span className={s.text}>
        The best way to have all your contacts listed but not in your head!
      </span>
      <span className={s.text}>
        Cause your head you need to think about your life and get all you want
        from every second of your life.
      </span>
      <span className={s.text}>
        Be strong, be in love and always use your mind 💃🕺
      </span>
    </Typography>
  </Box>
);

export default HomeView;
