import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    margin: 10,
    padding: theme.spacing(3),
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
  },
  button: {
    background: '#431192',
    color: 'white',
  },
}));

export default useStyles;
