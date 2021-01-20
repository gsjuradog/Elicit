import { makeStyles } from '@material-ui/core/styles';
// colors = ["431192","2ec4b6","84828f","0c090d","e9d985"]
const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  cardGrid: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  card: {
    height: '100%',
    width: '50%',
    maxWidth: '600px',
    minWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    margin: '16px auto',
  },
  cardMedia: {
    paddingTop: '90%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));
export default useStyles;
