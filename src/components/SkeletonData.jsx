import React from "react";
import CardSkeleton from "./CardSkeleton";
import "../assets/css/components/SkeletonData.css";

const SkeletonData = () => {
  return (
    <section className="grid cards-grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </section>
  );
};

export default SkeletonData;
