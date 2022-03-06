import React, { Fragment, useState } from 'react';
import { object, string, bool, func } from 'prop-types';
import WeddingImg from '../../assets/images/wedding-logo.png';
import ScrollToDown from './ScrollToDown';
import { styWrapper, styHero, styBackground } from './styles';

const DELAY_TIME = 1500;

export default function WelcomeSection({guestName, isAnonymousGuest, onClickDetail}) {
    const [loading, setLoading] = useState(false);
    const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);

    const handleScrollTo = () =>{
        const element = document.getElementById('fh5co-couple');
        element.scrollIntoView({behavior:'smooth', block:'start', inline: 'nearest'});
    };

    const handleShowDetail=()=>{
        if(loading) return undefined;

        try{
            const myAudio = document.getElementById('myAudio');
            myAudio.play();
        }catch{
            console.error('FAILED_TO_PLAY_MUSIC');
        }


    onClickDetail();

    if(!alreadyDownloadData){
        setLoading(true);

        setTimeout(()=>{
            setLoading(false);
            setAlreadyDownloadData(true);
            handleScrollTo();
        }, DELAY_TIME);
    }else{
        handleScrollTo();
    }
};

const renderGuestSection=()=>{
    if(isAnonymousGuest) return <h2 className="to-dearest-name">Dear Friends,</h2>;

    return (
        <Fragment>
            <h3 className='to-dearest'>To our Dearest</h3>
            <h4 className='to-dearest'>Bapak/Ibu/Saudara/i</h4>
            <h2 className='to-dearest-name'>{guestName}</h2>
        </Fragment>
    );
};

  return (
    <div css={styHero}>
        <header
        id="fh5co-header"
        role="banner"
        className='fh5co-cover'
        css={styBackground}
        data-stellar-background-ratio="0.5"
        >
            <div className="overlay"></div>
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              <img src={WeddingImg} alt="wedding-ima-riyanto" />
              <h4 className="sub-title">The Wedding of</h4>
              <h1 className="title">Ima</h1>
              <h2 className="sub-title">&amp;</h2>
              <h1 className="title">Riyanto</h1>
              <br/>
              {renderGuestSection()}
            </div>
          </div>
          <div className="row">
            <ScrollToDown loading={loading} onClick={handleShowDetail} />
          </div>
        </div>
      </header>
    </div>
  );
}


WelcomeSection.propTypes = {
    guestName: string.isRequired,
    isAnonymousGuest: bool.isRequired,
    location: object.isRequired,
    onClickDetail: func.isRequired,
  };
  