import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import { Helmet } from 'react-helmet';

const Resume = () => {
  return (
    <section>
      <Helmet>
           <meta charSet="utf-8" />
           <title>Resume | Abdur Rahman</title>
           <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            subject="B.sc in CSE"
            title="Punjab Technical University (Foreign Institute India)"
            date="2019 — 2022"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
          <TimelineItem
            subject="Diploma in Engineering (CSE)"
            title="Gopalganj Polytechnic Institute"
            date="2014 — 2018"
            description="Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis."
          />
          <TimelineItem
            subject="Science "
            title="Idrisia Fazil Madrasah"
            date="2010 — 2013"
            description="Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos."
          />
        </ol>
      </div>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Creative director"
            date="2015 — Present"
            description="Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur."
          />
          <TimelineItem
            title="Web designer"
            date="2010— 2013"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
        </ol>
      </div>
    </section>
  );
};

export default Resume;
