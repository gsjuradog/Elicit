import { makeStyles } from '@material-ui/core/styles';
// colors = ["431192","2ec4b6","84828f","0c090d","e9d985"]
const AppStyles = makeStyles((theme) => ({
  heading: {
    color: '#fafafa',
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));
export default AppStyles;
