import React, {useState} from "react";
import RadioButtons from '../components/RadioButtons'
import ScrollToTop from '../components/ScrollToTop'
import InputText from '../components/InputText'
import Radio from "../components/Radio";
import RangeInput from "../components/RangeInput";
import Button from "../components/Button";
import Outlinebutton from "../components/Outlinebutton";

function BusinessSolutions() {
    const initialFormData= {
        consultation: "",
        meet_expectation: "",
        meet_expectation_reason: "",
        improvement: "",
        timeline_budget: "",
        communication: "",
        trained: "",
        satisfaction: "",
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
        console.log("Business Solution Feedback:", formData);
        setFormData(initialFormData);
      };
  return (
    <div className="flex flex-col justify-center items-center mx-20">
      <ScrollToTop />
      <h2 className="text-center font-medium my-12 text-4xl text-[#3B027D]">
        Business Solutions
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl w-full max-w-[100%]"
      >
        <RadioButtons
          label="How would you rate your initial consultation experience with our team?"
          name="consultation"
          options={["Poor", "Fair", "Good", "Very Good", "Excellent"]}
          selectedValue={formData.consultation}
          onChange={handleChange}
        />

        <Radio
          label="Did we clearly understand your business needs and challenges? "
          name="meet_expectation"
          leftText="Yes"
          rightText="No"
          value={formData.meet_expectation}
          onChange={handleChange}
        />

        <InputText
          label="If No, please tell us why"
          type="text"
          name="meet_expectation_reason"
          placeholder="Type here"
          value={formData.meet_expectation_reason}
          onChange={handleChange}
        />

        <RadioButtons
          label="Has the solution provided helped to improve your business processes, efficiency, and profitability?"
          name="improvement"
          className='flex-col'
          options={["Significantly improved", "Moderately improved", "Slightly improved", "No change", "Made things worse"]}
          selectedValue={formData.improvement}
          onChange={handleChange}
        />

         <RadioButtons
          label="Was the solution delivered within the agreed-upon timeline and budget?"
          name="timeline_budget"
          className='flex-col'
          options={["Yes, both", "Timeline met, budget exceeded", "Budget met, timeline exceeded", "No change", "No"]}
          selectedValue={formData.timeline_budget}
          onChange={handleChange}
        />

         <RadioButtons
          label="How would you rate the quality of communication and support you received throughout the project (including post-implementation)?"
          name="communication"
          options={["Poor", "Fair", "Good", "Very Good", "Excellent"]}
          selectedValue={formData.communication}
          onChange={handleChange}
        />

        <RadioButtons
          label="Do you feel adequately trained on how to use the solution provided?"
          name="trained"
          options={["Yes, Completely", "Yes, Mostly", "No, not enough"]}
          selectedValue={formData.trained}
          onChange={handleChange}
        />

        <RadioButtons
          label="How would you rate your overall satisfaction with our services as a tech solution provider?"
          name="satisfaction"
          options={["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very satisfied"]}
          selectedValue={formData.satisfaction}
          onChange={handleChange}
        />

        <RangeInput
          label="How likely are you to  choose us for future tech solutions or recommend us to others?"
          leftText="Not Likely"
          rightText="Extremely Likely"
          value={formData.likely_to_recommend}
          onChange={handleChange}
          name="likely_to_recommend"
        />

        <label className='text-xl font-normal'>
          Is there anything we could do to significantly improve our service?
          <textarea
            name="suggest_improvement"
            placeholder="Type here"
            rows="4"
            value={formData.suggest_improvement}
            onChange={handleChange}
            className="w-full p-2 mb-6 border rounded"
          ></textarea>
        </label>

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

export default BusinessSolutions