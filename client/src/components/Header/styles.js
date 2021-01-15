import { makeStyles } from '@material-ui/core/styles';
// colors = ["431192","2ec4b6","84828f","0c090d","e9d985"]

const useStyles = makeStyles(() => ({
  appBar: {
    // display: 'flex',
    // flexDirection: 'row',
    background: 'linear-gradient(45deg, #431192 30%, #2EC4B6 90%)',
    font: 'Raleway',
  },
  heading: {},

  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #431192 30%, #2EC4B6 90%)',
  },
  title: {
    flexGrow: 1,
    color: '#fafafa',
  },
}));
export default useStyles;
