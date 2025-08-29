import React, {useState} from 'react'
import ScrollToTop from '../components/ScrollToTop';
import InputText from '../components/InputText';
import Button from '../components/Button';
import Outlinebutton from '../components/Outlinebutton';

function ContactUs() {
    const initialFormData= {
            full_name: "",
            email: "",
            whatsapp_number: "",
            your_message: "",
          };
    
         
          const [formData, setFormData] = useState(initialFormData);
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
          };
      
          const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Contact Us:", formData);
            setFormData(initialFormData);
          };
  return (
    <div className="flex flex-col justify-center items-center mx-20">
        <ScrollToTop/>
        <h2 className="text-center font-medium my-12 text-4xl text-[#3B027D]">
        Contact Us
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl w-full max-w-[100%]"
      >
         <InputText
          label="Full Name"
          type="text"
          name="full_name"
          placeholder="Jane Doe"
          value={formData.full_name}
          onChange={handleChange}
        />

         <InputText
          label="Email"
          type="email"
          name="email"
          placeholder="janedoe@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />

         <InputText
          label="WhatsApp Number"
          type="tel"
          pattern = "[0-9]{11}"
          name="whatsapp_number"
          placeholder="080 123 45678"
          value={formData.whatsapp_number}
          onChange={handleChange}
        />

        <label className="block mb-2 font-medium">
          Your Message
          <textarea
            name="your_message"
            placeholder="Type here"
            rows="4"
            value={formData.your_message}
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

export default ContactUs