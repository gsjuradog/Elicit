import { useState, useEffect } from 'react';
import { projectStorage } from '../../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //references
    //The .ref method is telling the storage that the reference to the file has the name passed

    const storageRef = projectStorage.ref(file.name);
    //this one is async & takes a snapshot in time of the upload at that moment
    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        //percentage of upload
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        //getting the url of image
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
