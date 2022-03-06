import React, { Fragment, useState } from "react";
import FloatingMusic from "../components/FloatingMusic";
import FooterSection from "../components/FooterSection";
import GreetingSection from "../components/GreetingSection";
import MainLayout from "../components/MainLayout";
import WelcomeSection from "../components/WelcomeSection";
import getQueryValue from "../helper/getQueryValue";
import { object } from 'prop-types';
import WeddingSection from "../components/WeddingSection";
import HealthProtocolSection from "../components/HealthProtocolSection";
import LocationSection from "../components/LocationSection";
import WishesSection from "../components/WishesSection";

export default function Home({ location }) {
  const guestName = decodeURIComponent(getQueryValue(location, 'to') || '');
  const isInvitation = getQueryValue(location, 'type') === 'invitation';
  // const firstName = guestName.replace(/ .*/, '');
  const isAnonymousGuest = guestName === '' && !isInvitation;

  const [showDetailContent, setShowDetailContent] = useState(false);

  const handleClickDetail = () => {
    setShowDetailContent(true);
  };

  const renderDetailContent =()=>{
    if(!showDetailContent) return null;

    return(
      <Fragment>
        <GreetingSection isInvitation = {isInvitation}/>
        <WeddingSection 
        isInvitation={isInvitation}
        isAnonymousGuest={isAnonymousGuest}/>
        {isInvitation && <HealthProtocolSection />}
        {isInvitation && <LocationSection />}
        <WishesSection guestName={guestName}/>
        <FooterSection isInvitation = {isInvitation}/>
      </Fragment>
    )
  }
  return (
    <MainLayout>
      <WelcomeSection
        guestName={guestName}
        isAnonymousGuest={isAnonymousGuest}
        isInvitation={isInvitation}
        location={location}
        onClickDetail={handleClickDetail}
      />
      {renderDetailContent()}
      <FloatingMusic/>
    </MainLayout>
  )
}

Home.propTypes = {
  location: object.isRequired,
};
