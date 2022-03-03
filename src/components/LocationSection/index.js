import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '../../constant';
import { styWrapper } from './styles';

function LocationSection() {
    return (
        <Fragment>
          <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                  <h2 className="main-font">Lokasi Walimatul Urs</h2>
                  <p className="sub-title">
                    <a
                      href={GOOGLE_MAPS_LINK}
                      title="Click untuk melihat peta di Google Maps"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#828282' }}
                    >
                      <strong>Kediaman mempelai wanita</strong>
                    </a>{' '}
                    <br />
                    Kadisono RT 16, Trombol, Mondokan <br />
                    Kabupaten Sragen, Jawa Tengah
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.890865703392!2d110.93770881477542!3d-7.366128394684609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x64e47a173addb410!2zN8KwMjEnNTguMSJTIDExMMKwNTYnMjMuNiJF!5e0!3m2!1sen!2sid!4v1646296948350!5m2!1sen!2sid"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    style={{ border: '0' }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                    title="Google Maps"
                  ></iframe>
                </div>
                <br/>
                <div className="col-md-10 col-md-offset-1">
                    <a href="https://goo.gl/maps/fmpARxoZgT2BStBo6" class="btn btn-primary">Gmaps</a>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
    )
}

export default React.memo(LocationSection);
