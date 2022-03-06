import React, { useState, useEffect, useCallback } from 'react';

import WishesItem from './WishesItem';
import { styButtonWrapper } from './styles';
import firebase from './firebase'
import 'firebase/compat/firestore'

const INTERVAL_SLIDE = 30000;

function WishesContainer() {
  const [active, setActive] = useState(0);
  const [pauseSlide, setPauseSlide] = useState(false);

  const useWishesData=()=>{
    const [wishes, setWishes] = useState([]);
    useEffect(()=>{
      const unsubscribe = 
      firebase
      .firestore()
      .collection("guest")
      .onSnapshot(snapshoot => {
        const listWishes = snapshoot.docs.map(doc =>({
          name : doc.name,
          ...doc.data()
        }));
        setWishes(listWishes)
      });
      return () => unsubscribe();
    },[]);
    return wishes;
  }

  const totalWishes = useWishesData().length || 0;

  const handleSetActive = (isNext = true) => {
    if(isNaN(active)) {
      setActive(0);
    }

    if (isNext) {
      if (active === totalWishes - 1) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    } else {
      if (active === 0) {
        setActive(totalWishes - 1);
      } else {
        setActive(active - 1);
      }
    }

    setPauseSlide(true);

    setTimeout(() => {
      setPauseSlide(false);
    }, INTERVAL_SLIDE);
  };

  const handleSetNext = useCallback(() => {
    if (active === totalWishes - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  }, [active]);

  const useRenderWishlist = () => {
    const wishes = useWishesData();

    return wishes.map((w, index) => <WishesItem key={index} name={w.name} wishes={w.wishes} isActive={index === active}/>);
  };

  /** Side effect to autoscroll */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseSlide) {
        handleSetNext();
      } else {
        clearInterval(interval);
      }
    }, INTERVAL_SLIDE);

    return () => clearInterval(interval);
  }, [handleSetNext, pauseSlide]);

  return (
    <div className="wrap-testimony">
      {useRenderWishlist()}
      <div css={styButtonWrapper}>
        <button className="btn btn-sm button-nav" onClick={() => handleSetActive(false)}>{`< Sebelumnya`}</button>
        <button className="btn btn-sm button-nav" onClick={() => handleSetActive(true)}>{`Selanjutnya >`}</button>
      </div>
    </div>
  )

}

export default React.memo(WishesContainer);
