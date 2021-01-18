import { useState, useEffect } from 'react';
import { projectStorage, dbFirestore, timestamp } from '../../firebase/config';

export async function addTask(data, projectTitle) {
  const createdAt = timestamp();
  const title = data.task;
  await dbFirestore
    .collection('projects')
    .doc(projectTitle)
    .collection('tasks')
    .doc(title)
    .set({ data, createdAt })
    .then(console.log('task created'));
}

export async function addProjectsDB(data) {
  const createdAt = timestamp();
  const title = data.title;

  await dbFirestore.collection('projects').doc(title).set({ data, createdAt });
  console.log('project created');
}

export function useStorage(file, data) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  console.log(data);
  const taskTitle = data.taskTitle;
  const projectTitle = data.projectTitle;
  const title = data ? data.projectTitle : 'no extra info';
  const prueba = data.otraInfo;

  useEffect(() => {
    //references
    //The .ref method is telling the storage that the reference to the file has the name passed

    const fileType = file.type;
    const storageRef = file.name
      ? projectStorage.ref(file.name)
      : projectStorage.ref().child(`audios/${file.size}`);
    //To interact with the DB a collection is created
    const collectionRef = dbFirestore
      .collection('projects')
      .doc(projectTitle)
      .collection('tasks')
      .doc(taskTitle);
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
        collectionRef.update({ url, createdAt, fileType, title, prueba });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
}
