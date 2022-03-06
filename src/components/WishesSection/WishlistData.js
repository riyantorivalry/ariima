import { useEffect, useState } from 'react'
import firebase from './firebase'
import 'firebase/compat/firestore'

  const WishlistData = ()=>{
    const [wishes, setWishes] = useState([]);
    useEffect(()=>{
      const unsubscribe = 
      firebase
      .firestore()
      .collection("wishes")
      .onSnapshot(snapshoot => {
        const listWishes = snapshoot.docs.map(doc =>({
          name : doc.name,
          wishes : doc.wishes,
        }));
        setWishes(listWishes)
      });
      return ()=> unsubscribe();
    },[]);
    return wishes
  }

export default WishlistData;

