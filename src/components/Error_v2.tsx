//One line error message with basic style

import React from "react";

interface Error_v2Face {
  message?: string;
  className?: string;
}

function Error_v2({ className, message }: Error_v2Face) {
  return (
    <p className={`text-gray-500 ${className}`}>
      {message || "Failed to load resources."}
    </p>
  );
}

export default Error_v2;
