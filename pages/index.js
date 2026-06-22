import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://wallpaperaccess.com/full/3824935.jpg",
    address: "Some Address 5, 12345 Oslo, Norway",
    description: "This is a first meetup!"
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://cdn.pixabay.com/photo/2018/09/30/20/49/amsterdam-3714607_1280.jpg",
    address: "Some Address 10, 12345 Amsterdam, Netherlands",
    description: "This is a second meetup!"
  }
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
