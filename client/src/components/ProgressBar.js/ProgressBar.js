import React, { useEffect } from 'react';

import { useStorage } from '../hooks/useStorage';
import useStyles from './styles';

const ProgressBar = ({ setShowAudio, file, setFile, data }) => {
  //this makes the conection to the useStorage hook
  //wich in turn will store the file that is being given in firestore
  const { url, progress } = useStorage(file, data);
  console.log(history);
  //history not being pushed BUG

  useEffect(() => {
    if (url) {
      setFile(null);
      setShowAudio({ url: url, data: data });
    }
  }, [url]); //this last element is the one that is being observed, at the moment it changes useEfect happens

  //As style is just for one element i prefer to add it here

  const classes = useStyles();

  return <div className={classes.progressBar} style={{ width: progress + '%' }}></div>;
};
export default ProgressBar;
