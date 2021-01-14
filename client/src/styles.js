import { makeStyles } from '@material-ui/core/styles';
// colors = ["431192","2ec4b6","84828f","0c090d","e9d985"]
const AppStyles = makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(45deg, #431192 30%, #2EC4B6 90%)',
    font: 'Raleway',
  },
  heading: {
    color: '#fafafa',
  },
  image: {
    marginLeft: '15px',
  },
}));
export default AppStyles;
