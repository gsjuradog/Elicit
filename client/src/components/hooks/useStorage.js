import { useState, useEffect } from 'react';
import { projectStorage, dbFirestore, timestamp } from '../../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //references
    //The .ref method is telling the storage that the reference to the file has the name passed
    // if (file instanceof Blob) {}
    const storageRef = file.name
      ? projectStorage.ref(file.name)
      : projectStorage.ref().child(`audios/${file.size}`);
    //To interact with the DB a collection is created
    const collectionRef = dbFirestore.collection('testfiles');
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
        //getting the url of file
        const url = await storageRef.getDownloadURL();
        //storing url of files
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
