import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
  },
  input: {
    display: 'none',
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
    margin: theme.spacing(1),
  },
}));

export default useStyles;
