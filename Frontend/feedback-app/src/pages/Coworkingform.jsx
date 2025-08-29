import React, { useState } from 'react';
import Outlinebutton from '../components/Outlinebutton';
import RadioButtons from '../components/RadioButtons';
import ScrollToTop from '../components/ScrollToTop';

function CoworkingForm () {
   const initialFormData= {
     reason: '',
    cleanliness: 2,
    experience: 2,
    comfort: 2,
    noise: 2,
    professionalism: 2,
    recommendation: 2,
    amenities: '',
    improvement: '',
    overallExperience: ''
  };

  const [form, setForm] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Coworking Space Feedback:", form);
    setForm(initialFormData);
    alert('Thanks for your feedback!');
  };

  return (
    <div className="flex flex-col justify-center items-center mx-20">
     <ScrollToTop />
      <h2 className="text-center font-medium my-12 text-4xl text-[#3B027D]">
        Co-working Space
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl w-full max-w-[100%]"
      >
     

        {/* Reason Dropdown */}
        <label className="block mb-2 font-medium">What is the primary reason you use our co-working space?</label>
        <select
          name="reason"
          value={form.reason}
          onChange={handleChange}
          className="w-full p-2 mb-6 border rounded"
        >
          <option value="" disabled>Select...</option>
          <option value="quiet">Quiet Workspace</option>
          <option value="networking">Networking</option>
          <option value="resources">Access to Resources</option>
          <option value="location">Location</option>
        </select>

        {/* Rating Sliders */}
        {[
          ['experience', 'How would you rate your overall experience in our workspace?'],
          ['cleanliness', 'How would you rate the general cleanliness of the space?'],
          ['comfort', 'How would you rate the comfort and amenities (chairs, internet, etc.) of the workspace?'],
          ['noise', 'How would you rate the noise level in the workspace?'],
          ['professionalism', 'How would you rate the professionalism and helpfulness of our staff?'],
          ['recommendation', 'How likely are you to recommend Netisens to a friend?']
        ].map(([key, label]) => (
          <div key={key} className="mb-6">
            <label className="block mb-1 font-medium">{label}</label>
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>{key === 'recommendation' ? 'Not Likely' : 'Poor'}</span>
              <span>{key === 'recommendation' ? 'Extremely Likely' : 'Excellent'}</span>
            </div >
            <div className="flex items-center gap-2 min-w-[80%]">
              <input
              type="range"
              name={key}
              min="0"
              max="10"
              step="0.5"
              value={form[key]}
              onChange={handleChange}
              className="w-full accent-green-600"
            />
             <span className="font-semibold">{form[key]}</span>
            </div>
            
          </div>
        ))}

        {/* Textareas */}
        <label className="block mb-2 font-medium">Are there any facilities or amenities you wish we had?</label>
        <input
          type="text"
          name="amenities"
          value={form.amenities}
          onChange={handleChange}
          className="w-full p-2 mb-6 border rounded"
        />

           <RadioButtons
                text="How would you rate your overall experience with our coworking space?"
                name="overallExperience"
                options={["Poor", "Fair", "Good"]}
                selectedValue={form.overallExperience}
                onChange={handleChange}
           />

        <label className='text-xl font-normal'>Is there anything we could do to significantly improve our service?</label>
        <textarea
          name="improvement"
          rows="4"
          value={form.improvement}
          onChange={handleChange}
          className="w-full p-2 mb-6 border rounded"
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
          type="submit"
          className="bg-[#3B027D] hover:bg-[hsl(268,97%,35%)] gap-2.5 py-2.5 p-2.5 text-xl font-semibold text-white hover:cursor-pointer  rounded-xl">
          Submit
        </button>
        </div>
        
      </form>
        <div className='flex justify-center mt-6'>
         <Outlinebutton text="Back to Home" to="/" />
        </div>
    </div>
  );
};

export default CoworkingForm;