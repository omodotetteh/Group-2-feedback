import React from "react";
import DropdownSelect from "../components/DropdownSelect"
import RangeInput from "../components/RangeInput";
import Checkbox from "../components/Checkbox";
import InputText from "../components/InputText";
import Button from "../components/Button";
import OutlineButton from "../components/OutlineButton";
import ScrollToTop from "../components/ScrollToTop";

function Studioform() {
  return (
    
    <div className="mx-20">
      
      <ScrollToTop/>
      <h2 className="text-center font-medium my-12 text-3xl text-[#3B027D]">
        Studio
      </h2>
      <form >
      <DropdownSelect />
      <RangeInput
        text="How would you rate your overall experience at our studio?"
        leftText="Poor"
        rightText="Excellent"
      />
      <Checkbox />
      <InputText
        label="If No, please tell us why"
        type="text"
        placeholder="Type here"
      />
      <RangeInput
        text="How would you rate the comfort and atmosphere of the studio?"
        leftText="Poor"
        rightText="Excellent"
      />
      <Checkbox />
      <InputText
        label="If No, please tell us why"
        type="text"
        placeholder="Type here"
      />
      <RangeInput
        text="How would you rate the quality of service (picture, videos etc.) you received?"
        leftText="Poor"
        rightText="Excellent"
      />
      <RangeInput
        text="How would you rate the professionalism and helpfulness of our staff?"
        leftText="Poor"
        rightText="Excellent"
      />
      <RangeInput
        text="How likely are you to use our studio services again in the future?"
        leftText="Not Likely"
        rightText="Extremely Likely"
      />
      <RangeInput
        text="How likely are you to recommend our studio to others?"
        leftText="Not Likely"
        rightText="Extremely Likely"
      />

      <label htmlFor="feedback" className="block text-xl my-4 font-normal">
        Do you have any other comments or suggestions for improving this
        service?
      </label>
      <textarea
        name="feedback"
        id="feedback"
        placeholder="Type here"
        className="min-w-full min-h-30 block m-auto rounded border border-black p-5"
      ></textarea>
      
        <div className='flex justify-center mt-6'>
        <Button
          type="button"
          text="Submit"
          className="bg-[#3B027D] hover:bg-[hsl(268,97%,35%)]  gap-2.5 py-2.5"
        />
        </div>
        </form>
        <div className='flex justify-center mt-6'>
        <OutlineButton text="Back to Home" to="/" />
        </div>
      </div>
    
  );
}

export default Studioform;