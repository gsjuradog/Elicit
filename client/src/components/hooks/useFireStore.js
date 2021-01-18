import { useState, useEffect } from 'react';
import { dbFirestore } from '../../firebase/config';

export function useFireStore(collection) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    //it is unsub becase it is going to return a function used to unsubscribe from collection

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

//find specific project
