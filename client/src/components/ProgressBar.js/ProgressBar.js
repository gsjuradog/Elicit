import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useStorage from '../hooks/useStorage';
// add later setFile
const ProgressBar = ({ file, setFile }) => {
  //this makes the conection to the useStorage hook
  //wich in turn will store the file that is being given in firestore
  const { url, progress } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url]); //this last element is the one that is being observed, at the moment it changes useEfect happens

  //As style is just for one element i prefer to add it here
  const useStyles = makeStyles(() => ({
    progressBar: {
      height: '5px',
      background: '#e9d985',
      marginTop: '20px',
    },
  }));

  const classes = useStyles();

  return <div className={classes.progressBar} style={{ width: progress + '%' }}></div>;
};
export default ProgressBar;
