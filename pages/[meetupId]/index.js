import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailsPage = () => {
  const meetup = {
    image: "https://wallpaperaccess.com/full/3824935.jpg",
    title: "A First Meetup",
    address: "Some Address 5, 12345 Oslo, Norway",
    description: "This is a first meetup!"
  };

  return <MeetupDetail meetup={meetup} />;
};

export default MeetupDetailsPage;
