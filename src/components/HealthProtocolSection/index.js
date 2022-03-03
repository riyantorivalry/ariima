import React from 'react';
import IconMask from '../../assets/images/face-mask.png';
import IconSocialDistancing from '../../assets/images/distance.png';
import IconWash from '../../assets/images/hand-wash.png';
import SectionBox from './SectionBox';

export default function HealthProtocolSection() {
  return (
    <div id="fh5co-couple">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
          <h2 className="main-font">Protokol Kesehatan</h2>
          <p className="info" style={{ marginBottom: '-16px' }}>
            Mengingat kondisi Pandemi Covid-19 saat ini, kami menghimbau Bapak/Ibu/Saudara/i tamu undangan senantiasa memperhatikan protokol kesehatan sebagai upaya pencegahan terhadap penyebaran virus Covid-19.
          </p>
        </div>
      </div>
      {/* BOX INFO */}
      <div className="row">
        <div className="col-md-12">
          <SectionBox icon={IconMask} text="Memakai masker" />
          <SectionBox icon={IconSocialDistancing} text="Jaga jarak" />
          <SectionBox icon={IconWash} text="Cuci tangan" />
        </div>
      </div>
    </div>
  </div>
  )
}
