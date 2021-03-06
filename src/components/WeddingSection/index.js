import React, { Fragment } from 'react'
import { bool } from 'prop-types'
import WeddingInfoBox from './WeddingInfoBox'
import CountContainer from './CountContainer'
import { styWrapper } from './styles'

function WeddingSection({isInvitation, isAnonymousGuest}) {
    const renderGuestInfo = () =>{
        return (
            <Fragment>
                <div className='col-md-8 col-md-offset-4'>
                    <WeddingInfoBox 
                    title = "Akad Nikah" 
                    time= "10.00 WIB" 
                    date="Selasa, 22 Maret 2022"
                    description="Kadisono RT 16, Trombol, Mondokan <br />
                    Kabupaten Sragen, Jawa Tengah"/>
                </div>
            </Fragment>
        )
    }
  return (
    <Fragment>
        <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
              <h2 className="main-font main-font__wedding">{`${isInvitation ? 'Akad Nikah dan Walimatul Urs' : 'Akad Nikah'}`}</h2>
              <span className="sub-title sub-title__wedding">Insha Allah akan diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row">
            {!isInvitation && renderGuestInfo()}
            {isInvitation && (
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Akad Nikah"
                  time="10.00 - 10.30 WIB "
                  date="Selasa, 22 Maret 2022"
                  description="Kediaman mempelai wanita"
                />
                <WeddingInfoBox
                  title="Walimatul 'Ursy"
                  time="10.30 - 12.00 WIB"
                  date="Selasa, 22 Maret 2022"
                  description="Kediaman mempelai wanita"
                />
              </div>
            )}            
          </div>
          <div className="row">
          <br/><br/><br/>
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <CountContainer/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
WeddingSection.propTypes = {
    isInvitation: bool.isRequired,
    isAnonymousGuest: bool.isRequired,
  };
  
  export default React.memo(WeddingSection);