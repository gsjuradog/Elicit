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
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#431192',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
}));

export default useStyles;
