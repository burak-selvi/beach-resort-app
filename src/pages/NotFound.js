import React from 'react';
import { Link } from "react-router-dom";
import { Hero, Banner } from '../components';

export default function NotFound() {
  return (
    <Hero>
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  )
}
