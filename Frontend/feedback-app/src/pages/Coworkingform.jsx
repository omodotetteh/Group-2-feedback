import React, { useState } from 'react';
import Outlinebutton from '../components/Outlinebutton';
import RadioButtons from '../components/RadioButtons';

const CoworkingForm = () => {
  const [form, setForm] = useState({
    reason: '',
    cleanliness: 3,
    experience: 3,
    comfort: 3,
    noise: 3,
    professionalism: 3,
    recommendation: 3,
    amenities: '',
    improvement: '',
    overallExperience: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Thanks for your feedback!');
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl"
      >
        <h1 className="text-2xl font-bold text-center mb-4">Co-working Space</h1>
        <h2 className="text-purple-700 text-center text-lg font-semibold mb-6">Co-working Space</h2>

        {/* Reason Dropdown */}
        <label className="block mb-2 font-medium">What is the primary reason you use our co-working space?</label>
        <select
          name="reason"
          value={form.reason}
          onChange={handleChange}
          className="w-full p-2 mb-6 border rounded"
        >
          <option value="">Select...</option>
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
            </div>
            <input
              type="range"
              name={key}
              min="0"
              max="10"
              value={form[key]}
              onChange={handleChange}
              className="w-full accent-green-600"
            />
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
                text="How would you rate your overall experience with our conference hall?"
                name="overallExperience"
                options={["Poor", "Fair", "Good"]}
                value={form.overallExperience}
                onChange={handleChange}
                />

        <label className="block mb-2 font-medium">Is there anything we could do to significantly improve our service?</label>
        <textarea
          name="improvement"
          rows="4"
          value={form.improvement}
          onChange={handleChange}
          className="w-full p-2 mb-6 border rounded"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-purple-700 text-white w-full py-2 rounded hover:bg-purple-800 transition"
        >
          Submit
        </button>
      </form>
        <div className='flex justify-center mt-6'>
         <Outlinebutton text="Back to Home" to="/" />
        </div>
    </div>
  );
};

export default CoworkingForm;