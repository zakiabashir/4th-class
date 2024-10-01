'use client';


const ContactSection = () => {

  return (
    <section id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 relative z-10 ' >
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
      <div className='z-10'>
        <h1 className='text-xl font-bold text-white my-2' >Lets Connect</h1>
        <br></br>
        <p className='text-blue mb-8 max-w-md gap-2' marginright-80>
          I am currently looking for new opportunities, my inbox is always open. 
          Whenever you have a question, or just want to say hi, 
          I will try my best to get back to you!
        </p>
        <br></br>
        
      </div>
      <div>
        <form className='flex flex-col' >
          <div className='mb-6'>
            <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>
              Your Email
            </label>
            <input
              name='email'
              type='email'
              id='email'
              required
              placeholder='Your email'
              className='bg-gray-500 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
              Subject
            </label>
            <input
              name='subject'
              type='text'
              id='subject'
              required
              placeholder='Just saying hi'
              className='bg-gray-500 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              className='bg-gray-500 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder="Let's talk about..."
            />
          </div>
          <button type='submit' className='bg-gray-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full '>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;