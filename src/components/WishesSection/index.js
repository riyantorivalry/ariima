import React from 'react'
import { object } from 'prop-types'
import WishesContainer from './WishesContainer'
import WishesForm from './WishesForm'

export default function WishesSection({guestName}) {
    return (
        <div id="fh5co-testimonial">
          <div className="container">
            <div className="row">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                  <h2 className="main-font">Ucapan</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <WishesForm guestName={guestName}/>
                </div>
              </div>
              <br/> <br/> <br/>
              <div className="row">
                <div className="col-md-12">
                  <WishesContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

WishesSection.propTypes = {
  guestName: object.isRequired,
};