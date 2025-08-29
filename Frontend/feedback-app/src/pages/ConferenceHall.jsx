import React, {useState} from "react";
import RangeInput from "../components/RangeInput";
import Radio from "../components/Radio";
import InputText from "../components/InputText";
import Button from "../components/Button";
import Outlinebutton from "../components/Outlinebutton";
import ScrollToTop from "../components/ScrollToTop";
import RadioButtons from "../components/RadioButtons";

function ConferenceHall() {
  const initialFormData= {
    overallExperience: "",
    booking: "",
    rateCleanliness: "",
    staffProffessionalism: "",
    meet_expectation: "",
    meet_expectation_reason: "",
    adequateEquipment: "",
    adequateEquipment_reason: "",
    cleanRestroom: "",
    cleanRestroom_reason: "",
    improvement: "",
    likely_to_recommend: "2"
  };

  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Conference Hall Feedback:", formData);
    setFormData(initialFormData);
  };

  return (
    <div className="flex flex-col justify-center items-center mx-20">
      <ScrollToTop />
      <h2 className="text-center font-medium my-12 text-4xl text-[#3B027D]">
        Conference Hall
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl w-full max-w-[100%]"
      >
        <RadioButtons
          label="How would you rate your overall experience with our conference hall?"
          name="overallExperience"
          options={["Poor", "Fair", "Good", "Very Good", "Excellent"]}
          selectedValue={formData.overallExperience}
          onChange={handleChange}
        />

        <Radio
          label="Did our venue meet your expectations for your event?"
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
          label="How easy was it to book our venue?"
          name="booking"
          options={["Very Difficult", "Difficult", "Neutral", "Easy", "Very Easy"]}
          selectedValue={formData.booking}
          onChange={handleChange}
        />

        <RadioButtons
          label="How would you rate the cleanliness and general upkeep of the hall?"
          name="rateCleanliness"
          options={["Poor", "Fair", "Good", "Very Good", "Excellent"]}
          selectedValue={formData.rateCleanliness}
          onChange={handleChange}
        />

        <Radio
          label="Was the audio-visual equipment (screen, microphones, sound system) functional and adequate for your needs?"
          name="adequateEquipment"
          leftText="Yes"
          rightText="No"
          value={formData.adequateEquipment}
          onChange={handleChange}
        />

        <InputText
          label="If No, please tell us why"
          type="text"
          name="adequateEquipment_reason"
          placeholder="Type here"
          value={formData.adequateEquipment_reason}
          onChange={handleChange}
        />

        <Radio
          label="Were the restroom facilities clean and easily accessible?"
          name="cleanRestroom"
          leftText="Yes"
          rightText="No"
          value={formData.cleanRestroom}
          onChange={handleChange}
        />

        <InputText
          label="If No, please tell us why"
          type="text"
          name="cleanRestroom_reason"
          placeholder="Type here"
          value={formData.cleanRestroom_reason}
          onChange={handleChange}
        />

        <RadioButtons
          label="How would you rate the professionalism and helpfulness of our staff?"
          name="staffProffessionalism"
          options={["Very Poor", "Poor", "Neutral", "Good", "Excellent"]}
          selectedValue={formData.staffProffessionalism}
          onChange={handleChange}
        />

        <RangeInput
          label="How likely are you to recommend our conference hall to others?"
          leftText="Not Likely"
          rightText="Extremely Likely"
          value={formData.likely_to_recommend}
          onChange={handleChange}
          name="likely_to_recommend"
        />

        <label className='text-xl font-normal'>
          Is there anything we could do to significantly improve our service?
          <textarea
            name="improvement"
            placeholder="Type here"
            rows="4"
            value={formData.improvement}
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
  );
}

export default ConferenceHall;