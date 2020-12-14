import React, { useState } from 'react';

const AboutContent = ({}) => {
  return (
    <section className="about-content-section mt-40 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="dirt_heading">
              <h2>About</h2>
            </div>
            <div className="row about-img">
              <div className="col-sm-4">
                <img src="/assets/images/img1.jpg" alt="" />
              </div>
              <div className="col-sm-4">
                <img src="/assets/images/img8.jpg" alt="" />
              </div>
              <div className="col-sm-4">
                <img src="/assets/images/img4.jpg" alt="" />
              </div>
            </div>
            <p>&nbsp;</p>
            <h3>Our Mission</h3>
            <p>
              Our mission is to facilitate communication using an easy-to-use
              tool, between people who have dirt and people who need dirt in the
              same geographic region. &nbsp;
            </p>
            <p>
              Founded in 2002, this site was designed to meet the needs of both
              the construction industry and the general public.&nbsp;
            </p>
            <p>&nbsp;</p>
            <h3>Why register with us?</h3>
            <p>
              In order to post your available dirt and have your contact
              information accessible to members who require dirt, you must first{' '}
              <a href="../register">register</a> an account. As a guest, you can
              browse our site. However, we will not provide you with contact
              information of our regostered clients who have dirt until you have
              registered.
            </p>
            <p>
              For questions and concerns regarding our privacy policy and how
              your information will be used, please read our{' '}
              <a href="../terms_of_use">terms of use</a> page.&nbsp;
            </p>
            <p>&nbsp;</p>
            <h3>Is there a fee?</h3>
            <p>
              <em>There are NO fees for members who are looking for dirt.</em>
            </p>
            <p>
              For members who are looking to get rid of their dirt, view our low
              -fees-.
            </p>
            <p>&nbsp;</p>
            <h3>Get your DIRT here!</h3>
            <p>
              Whether you are looking for one load of dirt or 1000 loads, we can
              help you find what you're looking for. Our easy-to-use and
              extensive client database can match you with members who have just
              what you need. We have designed this platform as a tool to
              conveniently match members who need dirt with those needing to get
              rid of it. &nbsp;
            </p>
            <p>
              Below are some tips to consider before you start looking for dirt:
            </p>
            <ol>
              <li>
                Check to see if your property requires a permit for clean fill
                at City Hall
              </li>
              <li>
                Verify the credentials and details of any company you deal with
              </li>
              <li>Inspect all loads of incoming fill</li>
              <li>
                Record details of all transporters bringing fill onto your
                property
              </li>
              <li>
                Take precautions to avoid risking fines or costly cleanups
              </li>
              <li>
                Bulking factor: remember to allow an approximate 20% increase in
                soil volume after excavation
              </li>
            </ol>
            <p>&nbsp;</p>
            <h3>How it all Works</h3>
            <p>
              <strong>
                You must be a{' '}
                <a href="https://www.cleanfill.net/register">registered</a>{' '}
                member in order to have full access to our listings.
              </strong>{' '}
              Registration is required in order for members to have access to
              your contact information when they have a cut or fill that matches
              what you are looking for.
            </p>
            <p>
              <strong>
                Please note: only other registered members can access your
                contact information.
              </strong>{' '}
              This helps prevent spammers from gaining access to the contact
              information provided to us by our registered members.
            </p>
            <p>
              Once you have registered, you can immediately use your login
              information sign into your account and post your advertisement, or
              specify your search in the{' '}
              <a href="https://www.cleanfill.net/search/have">have fill</a> or{' '}
              <a href="https://www.cleanfill.net/search/need">need fill</a>{' '}
              listings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
