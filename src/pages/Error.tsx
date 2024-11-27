import React from 'react';
import {Link} from "react-router";

export default function Error() {
  return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1>404</h1>
        <p>에러 입니다.</p>
        <Link to="/">back to Home</Link>
      </div>
  );
}
