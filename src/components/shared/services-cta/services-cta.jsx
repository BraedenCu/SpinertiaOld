import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const ServicesCTA = ({ title, linkText, linkUrl }) => (
  <section className="safe-paddings mt-52 bg-gray-2 py-40 lg:mt-44 lg:py-32 md:mt-36 md:py-24 sm:mt-20 sm:py-16">
    <div className="container text-center text-6xl font-normal leading-snug lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl">
      <h2 className="mx-auto max-w-[800px] lg:max-w-[700px] md:max-w-[500px] sm:max-w-[382px] xs:max-w-[300px]">
        {title}
      </h2>
      <Link size="6xl" theme="arrow-red" to={linkUrl}>
        {linkText}
      </Link>
    </div>
  </section>
);

ServicesCTA.propTypes = {
  title: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default ServicesCTA;