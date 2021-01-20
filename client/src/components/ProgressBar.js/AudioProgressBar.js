import React, { useEffect } from 'react';

import { useStorageAudio } from '../hooks/useStorage';
import useStyles from './styles';

const AudioProgressBar = ({ setFinished, file, setFile, data }) => {
  //this makes the conection to the useStorage hook
  //wich in turn will store the file that is being given in firestore

  const { audioUrl, progress } = useStorageAudio(file, data);

  //history not being pushed BUG

  useEffect(() => {
    if (audioUrl) {
      setFile(null);
      setFinished({ url: audioUrl, data: data });
    }
  }, [audioUrl]); //this last element is the one that is being observed, at the moment it changes useEfect happens

  //As style is just for one element i prefer to add it here

  const classes = useStyles();

  return <div className={classes.progressBar} style={{ width: progress + '%' }}></div>;
};
export default AudioProgressBar;
