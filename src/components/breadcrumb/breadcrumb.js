import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

const Breadcrumbs = ({ crumbs, crumbLabel, parentSiteUrl }) => {
  return (
    <div className="breadcrumb-container">
      <div className="mx-6 mb-3 breadcrumb">
        <a href={parentSiteUrl}>SSW Consulting</a>
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
  parentSiteUrl: PropTypes.string,
};

export default Breadcrumbs;
