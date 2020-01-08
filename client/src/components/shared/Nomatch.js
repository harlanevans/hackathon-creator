import React from 'react';
import { Link } from 'react-router-dom';

const Nomatch = () => (
  <>
    <h1>404 Not Found</h1>
    <Link to='/'>Go Back Home</Link>
  </>
)

export default Nomatch;