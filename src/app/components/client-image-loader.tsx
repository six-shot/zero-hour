"use client";

import React from "react";
import GlobalImageLoader from "./global-image-loader";

interface ClientImageLoaderProps {
  children: React.ReactNode;
}

const ClientImageLoader: React.FC<ClientImageLoaderProps> = ({ children }) => {
  return (
    <GlobalImageLoader
      onLoadingComplete={() => console.log("All images loaded!")}
    >
      {children}
    </GlobalImageLoader>
  );
};

export default ClientImageLoader;
