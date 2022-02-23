import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const WellThought = () => (
  <section className="safe-paddings mt-52">
    <div className="container">
      <h2 className="mx-auto max-w-[800px] text-center text-6xl font-normal leading-snug">
        Ensure user comfort with a <span className="text-red">Well-thought</span> product design
      </h2>
      <StaticImage
        className="mt-20 rounded-2xl"
        imgClassName="rounded-2xl"
        src="../well-thought/images/illustration.jpg"
        alt=""
        loading="lazy"
        aria-hidden
      />
    </div>
  </section>
);

export default WellThought;
