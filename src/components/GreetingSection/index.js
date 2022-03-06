import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '../../assets/images/bride.png';
import Groom from '../../assets/images/groom.png';

import { styWrapper } from './styles';

export default function GreetingSection({isInvitation}) {

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Assalamualaikum Wr. Wb</h2>
              <p className="info">
                Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk
                rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan
                keberkahan.
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Ima Kusumawati</h3>
                <p className="parent-name parent-name__top">
                  Putri Bapak Solikin <br />& Ibu Endang Setiyawati
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Riyanto</h3>
                <p className="parent-name">
                  Putra Bapak Kastadi (Alm) <br />& Ibu Sadem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isInvitation ? (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font">Seputar Covid-19</h2>
                <p className="info">
                  Berkaitan dengan kondisi pandemi saat ini, dengan segala kerendahan hati, kami memberlakukan pembatasan jarak dan pembatasan jumlah tamu undangan.
                </p>
                <p className="info">
                  Maka dari itu, kami mohon maaf belum bisa mengundang Bapak/Ibu/Saudara/i untuk hadir 
                  pada hari bahagia kami. Sekiranya do'a dari Bapak/Ibu/Saudara/i sudah lebih dari cukup bagi kami. Semoga kita semua
                  selalu dalam lindungan Allah SWT. Aamiin ya rabbal allamiin..
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

GreetingSection.propTypes = {
  isInvitation: bool.isRequired,
};
