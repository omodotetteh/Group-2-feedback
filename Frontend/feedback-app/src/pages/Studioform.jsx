import React, {useState} from "react";
import DropdownSeclect from "../components/DropdownSeclect";
import RangeInput from "../components/RangeInput";
import Radio from "../components/Radio";
import InputText from "../components/InputText";
import Button from "../components/Button";
import Outlinebutton from "../components/Outlinebutton";
import ScrollToTop from "../components/ScrollToTop";

function Studioform() {
  const initialFormData= {
        service: "",
        overall_experience: "2",
        easy_to_book: "",
        easy_to_book_reason: "",
        comfort: "2",
        suitable_equipment: "",
        suitable_equipment_reason: "",
        service_quality: "2",
        staff_professionalism: "2",
        likely_to_reuse: "2",
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
        console.log("Studio Feedback:", formData);
        setFormData(initialFormData);
      };
  return (
    
    <div className="flex flex-col justify-center items-center mx-20">
      
      <ScrollToTop/>

      <h2 className="text-center font-medium my-12 text-3xl text-[#3B027D]">
        Studio
      </h2>
      
      <form
      className="bg-white p-8 rounded-xl  w-full max-w-[100%]"
      onSubmit={handleSubmit}
      >

      <DropdownSeclect
        label="Service"
        name="service"
        value={formData.service}      
        onChange={handleChange}         
        options={["Photography", "Podcast", "Videography", "Panel Session"]}
      />

       <RangeInput
          label="How would you rate your overall experience at our studio?"
          leftText="Poor"
          rightText="Excellent"
          value={formData.overall_experience}
          onChange={handleChange}
          name="overall_experience"
       />
      
      <Radio
          label="Was it easy to book your session or service? "
          name="easy_to_book"
          leftText="Yes"
          rightText="No"
          value={formData.easy_to_book}
          onChange={handleChange}
        />
     
      <InputText
          label="If No, please tell us why"
          type="text"
          name="easy_to_book_reason"
          placeholder="Type here"
          value={formData.easy_to_book_reason}
          onChange={handleChange}
        />
      
      <RangeInput
          label="How would you rate the comfort and atmosphere of the studio?"
          leftText="Poor"
          rightText="Excellent"
          value={formData.comfort}
          onChange={handleChange}
          name="comfort"
       />
      
      <Radio
          label="Was the equipment provided (e.g cameras, microphones, lighting, etc.) in good working condition and suitable for your needs?"
          name="suitable_equipment"
          leftText="Yes"
          rightText="No"
          value={formData.suitable_equipment}
          onChange={handleChange}
      />

      <InputText
          label="If No, please tell us why"
          type="text"
          name="suitable_equipment_reason"
          placeholder="Type here"
          value={formData.suitable_equipment_reason}
          onChange={handleChange}
        />
      
      <RangeInput
          label="How would you rate the quality of service (picture, videos etc.) you received?"
          leftText="Poor"
          rightText="Excellent"
          value={formData.service_quality}
          onChange={handleChange}
          name="service_quality"
       />

      <RangeInput
          label="How would you rate the professionalism and helpfulness of our staff?"
          leftText="Poor"
          rightText="Excellent"
          value={formData.staff_professionalism}
          onChange={handleChange}
          name="staff_professionalism"
       />
      
       <RangeInput
          label="How likely are you to use our studio services again in the future?"
          leftText="Not Likely"
          rightText="Extremely Likely"
          value={formData.likely_to_reuse}
          onChange={handleChange}
          name="likely_to_reuse"
       />
      
      <RangeInput
          label="How likely are you to recommend our studio to others?"
          leftText="Not Likely"
          rightText="Extremely Likely"
          value={formData.likely_to_recommend}
          onChange={handleChange}
          name="likely_to_recommend"
       />

      <label className='text-xl font-normal'>
          Do you have any other comments or suggestions for improving this service?
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
    
  );
}

export default Studioform;
