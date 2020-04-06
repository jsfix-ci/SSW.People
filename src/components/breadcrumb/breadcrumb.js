import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

const mainSiteUrl = process.env.SITE_URL || 'https://ssw.com.au';

const Breadcrumbs = ({ crumbs, crumbLabel }) => {
  return (
    <div className="breadcrumb-container">
      <div className="mx-6 mb-3 breadcrumb">
        <a href={mainSiteUrl}>SSW Consulting</a>
        <span> &gt; </span>
        <Breadcrumb
          crumbs={crumbs}
          crumbLabel={crumbLabel}
          crumbSeparator=" > "
        />
      </div>
    </div>
  );
};

Breadcrumbs.propTypes = {
  crumbs: PropTypes.array,
  crumbLabel: PropTypes.string,
};

export default Breadcrumbs;
