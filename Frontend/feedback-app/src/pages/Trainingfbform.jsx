import React, {useState} from "react";
import DropdownSeclect from "../components/DropdownSeclect";
import RangeInput from "../components/RangeInput";
import Radio from "../components/Radio";
import InputText from "../components/InputText";
import Button from "../components/Button";
import Outlinebutton from "../components/Outlinebutton";
import ScrollToTop from "../components/ScrollToTop";

function Trainingfbform() {
  const initialFormData= {
          course: "",
          Intructor: "",
          training_rating: "2",
          most_valuable_aspect: "",
          least_valuable_aspect: "",
          new_skill: "",
          intructors_knowledge: "2",
          teaching_method: "2",
          appropriate_duration: "",
          duration_change: "",
          training_environment: "2",
          likely_to_recommend: "2",
          suggest_improvement: "",
        };
      
        const [formData, setFormData] = useState(initialFormData);
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prev) => ({ ...prev, [name]: value }));
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Training Feedback:", formData);
          setFormData(initialFormData);
        };
  return (
    <div  className="flex flex-col justify-center items-center mx-20">
       
       <ScrollToTop/>

      <h2 className="text-center font-medium my-12 text-3xl text-[#3B027D]">
        Training Feedback
      </h2> 

      <form
        className="bg-white p-8 rounded-xl  w-full max-w-[100%]"
        onSubmit={handleSubmit}
      >

        <DropdownSeclect
          label="Course"
          name="course"
          value={formData.course}      
          onChange={handleChange} 
          options={["Web Development", "Product Design", "Data Analysis", "Cyber Security"]}
        />
        
        <InputText
          label="Intructor's Name"
          type="text"
          placeholder="John Doe"
          name="Intructor"
          value={formData.Intructor}
          onChange={handleChange}
        />

        <RangeInput
          label="On a Scale of 1-10 how would you rate our training?"
          leftText="Poor"
          rightText="Excellent"
          value={formData.training_rating}
          onChange={handleChange}
          name="training_rating"
        />

        <InputText
          label="What was the most valuable aspect of the training for you?"
          type="text"
          placeholder="Type here"
          name="most_valuable_aspect"
          value={formData.most_valuable_aspect}
          onChange={handleChange}
        />

        <InputText
          label="What was the least valuable aspect of the training for you?"
          type="text"
          placeholder="Type here"
          name="least_valuable_aspect"
          value={formData.least_valuable_aspect}
          onChange={handleChange}
        />

        <Radio 
          label="Did the training provide you with new skills or knowledge?"
          name="new_skill"
          leftText="Yes"
          rightText="No"
          value={formData.new_skill}
          onChange={handleChange}
        />

        <RangeInput
          label="How would you rate the instructor's knowledge of the course?"
          leftText="Poor"
          rightText="Excellent"
          value={formData.intructors_knowledge}
          onChange={handleChange}
          name="intructors_knowledge"
        />

        <RangeInput
          label="How would you rate the instructor's teaching methods and overall mannerism?"
          leftText="Poor"
          rightText="Excellent"
          value={formData.teaching_method}
          onChange={handleChange}
          name="teaching_method"
        />

        <Radio 
          label="Was the training duration appropriate for the content covered?"
          name="appropriate_duration"
          leftText="Yes"
          rightText="No"
          value={formData.appropriate_duration}
          onChange={handleChange}
        />

        <Radio 
          label="If No, would you prefer it to be longer or shorter?"
          name="duration_change"
          leftText="Longer"
          rightText="Shorter"
          value={formData.duration_change}
          onChange={handleChange}
        />

        <RangeInput
          label="How would you rate the training environment (e.g Internet access, comfort etc.)?"
          leftText="Poor"
          rightText="Excellent"
          value={formData.training_environment}
          onChange={handleChange}
          name="training_environment"
        />

        <RangeInput
          label="How likely are you to recommend this training to a friend?"
          leftText="Not likely"
          rightText="Extremely likely"
          value={formData.likely_to_recommend}
          onChange={handleChange}
          name="likely_to_recommend"
        />

        <label htmlFor="feedback" className='text-xl font-normal'>
            Do you have any other comments or suggestions for improving this training or future trainings?
        </label>
        <textarea
            name="suggest_improvement"
            id="suggest_improvement"
            placeholder="Type here"
            className="min-w-full min-h-30 block m-auto rounded border border-black p-5"
            value={formData.suggest_improvement}
            onChange={handleChange}
        ></textarea>

        <div className="flex justify-center mt-6">
          <Button
            type="submit"
            text="Submit"
            className="bg-[#3B027D] hover:bg-[#1B9407] gap-2.5 py-2.5 w-72 min-h-12"
          />
        </div>

      </form>

        <div className="flex justify-center mt-6">
          <Outlinebutton 
           className=" w-72 mb-24"
           text="Back to Home" 
           to="/" />
        </div>
    </div>
  )
}

export default Trainingfbform