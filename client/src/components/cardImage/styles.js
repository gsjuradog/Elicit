import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    maxWidth: '100%',
  },
  media: {
    height: '110%',
  },

  fiCardContent: {
    color: '#ffffff',
    backgroundColor: 'rgba(0,0,0,.24)',
    textOverflow: 'elipsis',
  },
  fiCardContentTextSecondary: {
    color: 'rgba(255,255,255,0.78)',
  },
});
export default useStyles;
