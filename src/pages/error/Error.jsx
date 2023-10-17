import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div>
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <div className="flex justify-center mt-3">
          <Link to={"/"}>
            <button className="btn">Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
