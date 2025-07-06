"use client";

import { Timeline } from "../sub/Timeline";
import { EXPERIENCE } from "../../constants/index";

const Experiences = () => {
  return (
      <section id="expriences" className="w-full">
          
          <Timeline data={EXPERIENCE} />
      </section>
      
  );
};

export default Experiences;