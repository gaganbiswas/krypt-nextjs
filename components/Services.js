import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { BsLightningChargeFill } from "react-icons/bs";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="w-full max-w-md p-3 white-glassmorphism cursor-pointer m-2 hover:shadow-xl flex">
    <div
      className={`mr-4 w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>

    <div className="flex flex-col flex-1 text-white">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p className="text-base font-normal text-gray-200">{subtitle}</p>
    </div>
  </div>
);

function Services() {
  return (
    <section className="py-16 sm:py-20 gradient-bg-services">
      <div className="mx-auto w-11/12 max-w-6xl flex flex-col md:flex-row items-center">
        {/* Left */}
        <div className="flex flex-1 md:mr-10">
          <h1 className="text-center md:text-left text-4xl sm:text-6xl font-bold leading-tight sm:leading-tight text-gradient">
            Services that we <br /> continue to improve
          </h1>
        </div>
        {/* Right */}
        <div className="mt-10 md:mt-0 flex flex-col justify-center items-center">
          <ServiceCard
            color="bg-blue-600"
            title="Security guranteed"
            icon={<BsShieldFillCheck fontSize={20} className="text-white" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our product."
          />
          <ServiceCard
            color="bg-violet-600"
            title="Best exchange rates"
            icon={<CgArrowsExchangeAlt fontSize={20} className="text-white" />}
            subtitle="Get the best exchange rates when transfering ethereum through krypt services. Low gas fees makes it easy."
          />
          <ServiceCard
            color="bg-red-600"
            title="Fastest transactions"
            icon={
              <BsLightningChargeFill fontSize={20} className="text-white" />
            }
            subtitle="Trasaction that takes less time is the best way to save time."
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
