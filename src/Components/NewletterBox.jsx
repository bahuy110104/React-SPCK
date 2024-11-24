

const NewletterBox = () => {

    const onSubmitHandler = (event)=> {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subcribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>Lorem Ipsum is simply dummy text of the  printing abd typesetting industry.</p>

      <form onSubmit={onSubmitHandler}  className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your Email' required/>
        <button type='submit' className='bg-black text-white text-sx px-10 py-4'> SUBCRISE</button>
      </form>
    </div>
  )
}

export default NewletterBox
