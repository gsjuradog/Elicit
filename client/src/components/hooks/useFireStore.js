import { useState, useEffect } from 'react';
import { dbFirestore } from '../../firebase/config';

export function useFireStore(collection) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    //it is const unsub becase it is going to return a function used to unsubscribe from the collection
    // eslint-disable-next-line

    const unSub = dbFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });

        setDocs(documents);
      });

    return () => {
      //cleanup function
      unSub();
    };
  }, [collection]);

  return { docs };
}
//find tasks
export function useGetTasks(collection, projectTitle) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    //it is const unsub becase it is going to return a function used to unsubscribe from the collection
    // eslint-disable-next-line

    const unSub = dbFirestore
      .collection(collection)
      .doc(projectTitle)
      .collection('tasks')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        console.log('taking snap');
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });

        setTasks(documents);
      });

    return () => {
      //cleanup function
      unSub();
    };
  }, []);

  return { tasks };
}

//find specific project

export function useGetOneProject(title) {
  const [content, setContent] = useState({ data: { title: 'original data' } });
  useEffect(() => {
    // copy what you have in the other file
    dbFirestore
      .collection('projects')
      .doc(title)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          const docData = doc.data();
          // eslint-disable-next-line
          console.log('Document data get one project:', docData);
          setContent(docData);
        } else {
          // doc.data() will be undefined in this case
          // eslint-disable-next-line
          console.log('No such document!');
        }
      })
      .catch(function (error) {
        // eslint-disable-next-line
        console.log('Error getting document:', error);
      });
  }, []);
  return content;
}
