import React, {useState} from "react";
import DropdownSeclect from "../components/DropdownSeclect";
import RangeInput from "../components/RangeInput";
import Checkbox from "../components/Checkbox";
import InputText from "../components/InputText";
import Button from "../components/Button";
import Outlinebutton from "../components/Outlinebutton";
import ToggleButton from "../components/ToggleButton";
import ScrollToTop from "../components/ScrollToTop";

function Trainingfbform() {
  return (
    <div className='mx-20'>
       <ScrollToTop/>
      <h2 className="text-center font-medium my-12 text-3xl text-[#3B027D]">
        Training Feedback
      </h2> 
      <form action="">
        <DropdownSeclect
        label="Course"
        name="course"
        options={["Web Development", "Product Design", "Data Analysis", "Cyber Security"]}
        />
        
        <InputText
        label="Intructor's Name"
        type="text"
        placeholder="John Doe"
        />

        <RangeInput
        text="How would you rate our training?"
        leftText="Poor"
        rightText="Excellent"
        />

        <InputText
        label="What was the most valuable aspect of the training for you?"
        type="text"
        placeholder="Type here"
        />

        <InputText
        label="What was the least valuable aspect of the training for you?"
        type="text"
        placeholder="Type here"
        />

        <Checkbox 
        text="Did the training provide you with new skills or knowledge?"
        name="feedback"
        leftText="Yes"
        rightText="No"
        />

        <RangeInput
        text="How would you rate the instructor's knowledge of the course?"
        leftText="Poor"
        rightText="Excellent"
        />

        <RangeInput
        text="How would you rate the instructor's teaching methods and overall mannerism?"
        leftText="Poor"
        rightText="Excellent"
        />

        <Checkbox 
        text="Was the training duration appropriate for the content covered?"
        name="feedback"
        leftText="Yes"
        rightText="No"
        />

        <Checkbox 
        text="If No, would you prefer it to be longer or shorter?"
        name="feedback"
        leftText="Longer"
        rightText="Shorter"
        />

        <RangeInput
        text="How would you rate the training environment (e.g Internet access, comfort etc.)?"
        leftText="Poor"
        rightText="Excellent"
        />

        <RangeInput
        text="How likely are you to recommend this training to a friend?"
        leftText="Not likely"
        rightText="Extremely likely"
        />

        <label htmlFor="feedback" className="block text-xl my-4 font-normal">
            Do you have any other comments or suggestions for improving this training or future trainings?
        </label>
        <textarea
            name="feedback"
            id="feedback"
            placeholder="Type here"
            className="min-w-full min-h-30 block m-auto rounded border border-black p-5">
        </textarea>

        <div className='flex justify-center mt-6'>
          <Button
          type="button"
          text="Submit"
          className="bg-[#3B027D] hover:bg-[hsl(268,97%,35%)]  gap-2.5 py-2.5"
          />
        </div>
      </form>

      <div className='flex justify-center mt-6'>
        <Outlinebutton text="Back to Home" to="/" />
      </div>
    </div>
  )
}

export default Trainingfbform