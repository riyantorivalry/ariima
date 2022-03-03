import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../GreetingSection/styles';

function FooterSection({isInvitation}) {
  return (
    <Fragment>
       {isInvitation && (
        <div id="fh5co-couple" className="fh5co-section-white" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font">Terima Kasih</h2>
                <p className="info">
                Merupakan suatu kehormatan dan kebahagiaan apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do’a restu kepada kami.
                </p>
                <p className="main-font">
                <b>“Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. 
                Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”
                (QS. Ar-Ruum : 21)</b>
                </p>
                <p className="info">
                Wassalamu’alaikum warahmatullahi wabarakatuh
                <br /><br />
                Kami yang berbahagia,
                <br />
                </p>
                <h2 className="main-font">
                Ima & Riyanto
                </h2>
                <p className="info">
                <br />
                Kel. Bpk. Solikin & Ibu Endang Setiyawati<br />
                Kel. Bpk. Kastadi (Alm) & Ibu Sadem
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isInvitation && (
        <div id="fh5co-couple" className="fh5co-section-white" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font">Terima Kasih</h2>
                <p className="info">
                  Berdasarkan kondisi saat ini, tanpa mengurangi rasa hormat, diharapkan tetap bisa menjalin silaturahmi
                  melalui media online, bukan dengan kontak fisik secara langsung. <br />
                  Mohon pengertiannya.
                </p>
                <p className="info">
                  Atas segala do'a dan restu saudara/i,
                  <br /> kami ucapkan terima kasih. <br />
                  Wassalamualaikum warahmatullahi wabarakatuh.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
        <footer>
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">Made with ❤ by  <a href="https://github.com/riyantorivalry">@riyantorivalry </a> </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);