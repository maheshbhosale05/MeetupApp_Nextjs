import React, { useEffect, useState } from "react";

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

const HomePage = (props) => {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    // fetch data from an API or database
    setMeetups(DUMMY_MEETUPS);
  }, []);
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from an API or database
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API or database
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  };
}

export default HomePage;
