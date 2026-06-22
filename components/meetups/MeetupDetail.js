import React from "react";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  const { image, title, address, description } = props.meetup;
  return (
    <section className={classes.meetupDetail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
