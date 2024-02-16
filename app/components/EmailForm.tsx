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
    <div className='flex flex-col items-center justify-center min-h-screen w-full border'>
      <div className='text-center mb-8'>
        <h1 className='text-2xl font-bold'>Email Me</h1>
      </div>
      <div className='container mx-auto p-4 w-full border'>
        <form
          onSubmit={handleSubmit}
          className='form-control w-full max-w-xs border mx-auto'>
          <label className='label'>
            <span className='label-text'>Name</span>
          </label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Your name'
            className='input input-bordered w-full max-w-xs'
          />

          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Your email'
            className='input input-bordered w-full max-w-xs'
          />

          <label className='label'>
            <span className='label-text'>Message</span>
          </label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Your message'
            className='textarea textarea-bordered h-24'></textarea>

          <button type='submit' className='btn btn-primary mt-4'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
