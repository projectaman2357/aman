import React from "react";
import "./Achievement.css";
import certificate1 from "../../assets/images/certificate1.png";
import certificate2 from "../../assets/images/certificate2.png";
import certificate3 from "../../assets/images/certificate3.png";
import certificate4 from "../../assets/images/certificate4.png";
import certificate5 from "../../assets/images/certificate5.png";
import certificate6 from "../../assets/images/certificate6.png";
import certificate7 from "../../assets/images/certificate7.png";
import certificate8 from "../../assets/images/certificate8.png";
import certificate9 from "../../assets/images/certificate9.png";
import certificate10 from "../../assets/images/certificate10.png";
import certificate11 from "../../assets/images/certificate11.png";
import certificate12 from "../../assets/images/certificate12.png";
import certificate13 from "../../assets/images/certificate13.png";

import friend1 from "../../assets/images/friend1.jpg";
import friend2 from "../../assets/images/friend2.jpg";
import friend3 from "../../assets/images/friend3.jpg";
import friend4 from "../../assets/images/friend4.jpg";
import friend5 from "../../assets/images/friend5.jpg";
import friend6 from "../../assets/images/friend6.jpg";
import friend7 from "../../assets/images/friend7.jpg";
import friend8 from "../../assets/images/friend8.jpg";
import friend9 from "../../assets/images/friend9.jpg";
import friend10 from "../../assets/images/friend10.jpg";
import friend11 from "../../assets/images/friend11.jpg";
import friend12 from "../../assets/images/friend12.jpg";
import friend13 from "../../assets/images/friend13.jpg";
import friend14 from "../../assets/images/friend14.jpg";
import friend15 from "../../assets/images/friend15.jpg";
import friend16 from "../../assets/images/friend16.jpg";
import friend17 from "../../assets/images/friend17.jpg";
import friend18 from "../../assets/images/friend18.jpg";
import friend19 from "../../assets/images/friend19.jpg";
import friend20 from "../../assets/images/friend20.jpg";
import friend21 from "../../assets/images/friend21.jpg";
import friend22 from "../../assets/images/friend22.jpg";
import friend23 from "../../assets/images/friend23.jpg";
import friend24 from "../../assets/images/friend24.jpg";
// import friend21 from "../../assets/images/friend21.jpg";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";

const Achievement = () => {
  const certificates = [
    {
      src: certificate1,
      date: "18th April 2024",
      link: "https://www.linkedin.com/in/aman-tiwari-91b869225/",
    },
    {
      src: certificate2,
      date: "18th June 2024",
      link: "https://www.linkedin.com/in/aman-tiwari-91b869225/",
    },
    {
      src: certificate3,
      date: "8th December 2021",
      link: "https://www.linkedin.com/in/aman-tiwari-91b869225/",
    },
    {
      src: certificate4,
      date: "6th December 2023",
      link: "https://www.linkedin.com/in/aman-tiwari-91b869225/",
    },
    {
      src: certificate5,
      date: "21th August 2024",
      link: "https://www.linkedin.com/posts/aman-tiwari-91b869225_i-am-thrilled-to-share-that-i-have-completed-activity-7232364618700967940-aAy_?utm_source=social_share_sheet&utm_medium=member_desktop_web",
    },
    {
      src: certificate6,
      date: "1st January 2023",
      link: "https://www.linkedin.com/in/aman-tiwari-91b869225/",
    },
    {
      src: certificate7,
      date: "3rd January 2023",
      link: "https://www.linkedin.com/in/aman-tiwari-91b869225/",
    },
    {
      src: certificate8,
      date: "12th January 2023",
      link: "https://www.linkedin.com/in/aman-tiwari-91b869225/",
    },
    {
      src: certificate9,
      date: "30th April 2023",
      link: "https://www.linkedin.com/in/aman-tiwari-91b869225/",
    },
    {
      src: certificate10,
      date: "18th june 2024",
      link: "https://www.linkedin.com/in/aman-tiwari-91b869225/",
    },
    {
      src: certificate11,
      date: "27th september 2023",
      link: "https://www.linkedin.com/in/aman-tiwari-91b869225/",
    },
    {
      src: certificate12,
      date: "30th April 2023",
      link: "https://www.linkedin.com/in/aman-tiwari-91b869225/",
    },
    {
      src: certificate13,
      date: "30th April 2023",
      link: "https://www.linkedin.com/in/aman-tiwari-91b869225/",
    },
    // Add the rest of the certificates...
  ];

  const friends = [
    { src: friend1, name: "Certificate of varience essence of east india presentaion"},
    { src: friend2, name: "completed internship in dfir-digital forensic incidence respons" },
    { src: friend3, name: "designing digital climate clock" },
    { src: friend4, name: "participated in movement for cleaning " },
    { src: friend5, name: "idea presentaion" },
    { src: friend6, name: "dital climated clock achieving certificate" },
    { src: friend7, name: "meet with alumni" },
    { src: friend8, name: "alumni meet" },
    { src: friend9, name: "sih 2023" },
    { src: friend10, name: "celebrating digital climated clock" },
    { src: friend11, name: "celebrating digital climated clock" },
    { src: friend12, name: "meet with alumni" },
    { src: friend13, name: "visite expo" },
    { src: friend14, name: "idea presentaion" },
    { src: friend15, name: "idea presentaion" },
    { src: friend16, name: "idea presentaion" },
    { src: friend17, name: "Young india running competion" },
    { src: friend18, name: "Speaker at iimt cse department" },
    { src: friend19, name: "Speaker at iimt cse department" },
    { src: friend20, name: "speaker at iimt cse department"},
    { src: friend21, name: "enjoying aajtak debate"},
    { src: friend22, name: "industrial visite"},
    { src: friend23, name: "visiting expo tradeshow with college friends"},
    { src: friend24, name: "participating movement of cleaning"},

    // Add more friends if needed...
  ];

  return (
    <div className="achievement-container">
      <div className="achievement-header">
        <h2 className="achievement-heading">Achievements</h2>
        <img
          src={theme_pattern}
          alt="Pattern background"
          className="theme-pattern"
        />
      </div>
      {/* Certificate Section */}
      <div className="marquee-container">
        <div className="marquee">
          {certificates.map((certificate, index) => (
            <div key={index} className="image-container">
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View details of Achievement ${index + 1}`}
              >
                <img
                  src={certificate.src}
                  alt={`Achievement ${index + 1}`}
                  className="scroll-image"
                />
              </a>
              <p className="achievement-date">{certificate.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Friends Section */}
      <div className="friends-section">
        <h3 className="friends-heading">Great Memories</h3>
        <div className="friends-container">
          {friends.map((friend, index) => (
            <div key={index} className="friend-card">
              <img
                src={friend.src}
                alt={friend.name}
                className="friend-image"
              />
              <p className="friend-name">{friend.name}</p>
            </div>
          ))}
        </div>
       </div>
       <div className="memories">
  <a
    href="https://linkedin.com/in/aman-tiwari-91b869225/"
    target="_blank"
    rel="noopener noreferrer"
    className="memories-link"
  >
    <p>See more</p>
    <img src={arrow_icon} alt="Arrow icon" />
  </a>
</div>
</div>
  );
};

export default Achievement;
