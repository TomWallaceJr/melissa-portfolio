"use client";

import { useState, ChangeEvent, FormEvent } from "react";

// Define the form data type
type FormData = {
  name: string;
  email: string;
  message: string;
};

const EmailForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // Handle form field changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement email sending logic here
    console.log(formData);
    alert("Message sent! (placeholder)");
  };

  return (
    <div
      className='flex flex-col items-center justify-center min-h-screen w-full'
      id='contact'>
      <div className='text-center mb-8'>
        <h1 className='font-poppins text-3xl lg:text-5xl font-bold'>
          Contact Me
        </h1>
      </div>
      <div className='container mx-auto p-4 w-full lg:max-w-4xl'>
        <form
          onSubmit={handleSubmit}
          className='w-full mx-auto lg:grid lg:grid-cols-3 lg:gap-4 items-end'>
          <div className='lg:col-span-1 lg:flex lg:flex-col lg:mb-2'>
            <label className='label'>
              <span className='label-text text-lg lg:text-xl'>Name</span>
            </label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Your name'
              className='input input-bordered w-full mb-4 lg:mb-6 text-lg lg:text-xl'
            />

            <label className='label'>
              <span className='label-text text-lg lg:text-xl'>Email</span>
            </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Your email'
              className='input input-bordered w-full mb-4 lg:mb-6 text-lg lg:text-xl'
            />
          </div>

          <div className='lg:col-span-2'>
            <label className='label'>
              <span className='label-text text-lg lg:text-xl'>Message</span>
            </label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Your message'
              className='textarea textarea-bordered w-full h-48 text-lg lg:text-xl'></textarea>
          </div>

          <div className='lg:col-span-3 text-center'>
            <button
              type='submit'
              className='btn btn-primary w-1/2 lg:px-16 lg:py-3 mt-4 lg:mt-6 text-lg lg:text-xl'>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
