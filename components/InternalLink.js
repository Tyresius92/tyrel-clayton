import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const InternalLink = ({ href, children }) => (
  <Link href={href}>
    <a>{children}</a>
  </Link>
);

InternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InternalLink;
