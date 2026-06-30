import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { connectToDatabase } from "../../utils/apiConnection";
import { ObjectId } from "mongodb";

const MeetupDetailsPage = (props) => {
  const meetup = props.meetupData;

  return <MeetupDetail meetup={meetup} />;
};

export async function getStaticPaths() {
  // fetch all meetups from an API or database
  const meetupsId = await connectToDatabase(async (meetupsCollection) => {
    const data = await meetupsCollection.find({}, { _id: 1 }).toArray();
    return data.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    }));
  });
  return {
    paths: meetupsId,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  // fetch data for a single meetup
  const meetupData = await connectToDatabase(async (meetupsCollection) => {
    const data = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });
    return {
      id: data._id.toString(),
      title: data.title,
      image: data.image,
      address: data.address,
      description: data.description,
    };
  });
  return {
    props: {
      meetupData: meetupData,
    },
  };
}

export default MeetupDetailsPage;
