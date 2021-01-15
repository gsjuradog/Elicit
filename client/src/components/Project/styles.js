import { makeStyles } from '@material-ui/core/styles';
// colors = ["431192","2ec4b6","84828f","0c090d","e9d985"]
const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardSmall: {
    height: '85%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardMediaSmall: {
    paddingTop: '45%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardContentSmall: {
    flexGrow: 0.1,
    textoverflow: 'ellipsis',
  },
}));
export default useStyles;
