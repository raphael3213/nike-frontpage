import React from "react";
import Button from "./Button";

function Subscribe() {
  return (
    <section
      id="contact-us"
      className="max-container  flex justify-between items-center max-lg:flex-col max-xl:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md  max-xl:max-w-md font-palanquin font-bold ">
        Sign Up for <span className="text-coral-red">Updates</span> and
        Newsletter
      </h3>
      <div className="lg:max-w-[60%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Subscribe" />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
