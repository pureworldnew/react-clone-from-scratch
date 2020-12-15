import React, { useState } from 'react';

const HomeContent = ({}) => {
  const needDirtLists = [];
  const haveDirtLists = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    needDirtLists.push(
      <div className="dirt_block" key={i}>
        <a href="https://www.cleanfill.net/search/need/Paramus/Alberta">
          <h6>Clean Fill</h6>
        </a>
        <p>Alberta, Paramus</p>
        <p>
          <span>Qty: </span>30,000 Yards Please call 201488-4455 ask for Joe or
          George.
        </p>
      </div>
    );
    haveDirtLists.push(
      <div className="dirt_block" key={i}>
        <a href="https://www.cleanfill.net/search/need/Paramus/Alberta">
          <h6>Clean Fill</h6>
        </a>
        <p>Coral Sea Islands, GRACEVILLE</p>
        <p>
          <span>Qty: </span>35 cubic metres Available from GRACEVILLE,
          QUEENSLAND thursday 10th december 2020. Can deliver locally from
          Graceville.
        </p>
      </div>
    );
  }
  return (
    <section className="dirt-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 need_dirt">
            <div className="dirt_heading_custom">
              <img src="/assets/images/need_dirt_bg.png" alt="" />
              <h2>
                People That <span className="green_text">Need Dirt</span>
              </h2>
            </div>
            {needDirtLists}
            <div className="more_dirt_link">
              <a href="/search/need">Search More Need Fill »</a>
            </div>
          </div>
          <div className="col-sm-6 have_dirt">
            <div className="dirt_heading_custom">
              <img src="/assets/images/have_dirt_bg.png" alt="" />
              <h2>
                People That <span className="orange_text">Have Dirt</span>
              </h2>
            </div>
            {haveDirtLists}
            <div className="more_dirt_link">
              <a href="/search/have">Search More Have Fill »</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
