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
    .set({ data, createdAt, projectTitle })
    // eslint-disable-next-line
    .then(console.log('task created'))
    .catch(function (error) {
      // eslint-disable-next-line
      console.error('Error writing document: ', error);
    });
}

export async function addProjectsDB(data) {
  const createdAt = timestamp();
  const title = data.title;

  await dbFirestore
    .collection('projects')
    .doc(title)
    .set({ data, createdAt })
    // eslint-disable-next-line
    .then(console.log('Project created'))
    .catch(function (error) {
      // eslint-disable-next-line
      console.error('Error writing document: ', error);
    });
}

export function useStorage(file, data) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const taskTitle = data.taskTitle;
  const projectTitle = data.projectTitle;
  const title = data ? data.taskTitle : 'no extra info';
  const participant = data.name;

  useEffect(() => {
    //references
    //The .ref method is telling the storage that the reference to the file has the name passed
    let img = 'no image';
    const fileType = file.type;
    const storageRef = file.name
      ? projectStorage.ref(file.name)
      : projectStorage.ref().child(`audios/${file.size}`);
    //To interact with the DB a collection is created
    const collectionRef = dbFirestore
      .collection('projects')
      .doc(projectTitle)
      .collection('tasks')
      .doc(taskTitle)
      .collection('answers')
      .doc(participant);
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
        if (fileType === 'audio/wav') {
          img = url;
        }
        collectionRef.set({ url, createdAt, fileType, title, participant }, { merge: true });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
}

export function useStorageAudio(file, data) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);

  const taskTitle = data.taskTitle;
  const projectTitle = data.projectTitle;
  const title = data ? data.taskTitle : 'no extra info';
  const participant = data.name;

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
      .doc(taskTitle)
      .collection('answers')
      .doc(participant);
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
        const audioUrl = await storageRef.getDownloadURL();
        //storing url of files
        const createdAt = timestamp();

        collectionRef.set({ audioUrl, createdAt, fileType, title, participant }, { merge: true });
        setAudioUrl(audioUrl);
      }
    );
  }, [file]);

  return { progress, audioUrl, error };
}
