import React from 'react';
import { Link } from 'theme-ui';
import useSiteMetadata from '../hooks/use-site-metadata';

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
      </div>
      <div>
        <Link
          aria-label="Link to the blog's GitHub repository"
          href="https://github.com/LekoArts/gatsby-starter-minimal-blog"
          target="_blank"
        >
          Website Details
        </Link>
      </div>
    </footer>
  )
}

export default Footer
