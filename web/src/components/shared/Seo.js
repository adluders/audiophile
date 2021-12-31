import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import Icon from "../../images/favicon-32x32.png";

const Seo = ({ title }) => {
  const site = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const metaDesc = site.site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={` ${title} | ${site.site.siteMetadata.title}`}
      meta={[{ name: `description`, content: metaDesc }]}
      link={[
        { rel: "icon", type: "image/png", sizes: "32x32", href: `${Icon}` },
      ]}
    />
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Seo.defaultProps = {
  title: "Title",
};

export default Seo;
