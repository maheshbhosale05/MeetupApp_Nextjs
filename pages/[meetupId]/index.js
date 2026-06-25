import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailsPage = (props) => {
  const meetup = props.meetupData;

  return <MeetupDetail meetup={meetup} />;
};

export async function getStaticPaths() {
  // fetch all meetups from an API or database
  return {
    paths: [
      {
        params: { meetupId: "m1" }
      },
      {
        params: { meetupId: "m2" }
      }
    ],
    fallback: false
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  // fetch data for a single meetup
  return {
    props: {
      meetupData: {
        id: meetupId,
        image: "https://wallpaperaccess.com/full/3824935.jpg",
        title: "A First Meetup",
        address: "Some Address 5, 12345 Oslo, Norway",
        description: "This is a first meetup!"
      }
    }
  };
}

export default MeetupDetailsPage;
