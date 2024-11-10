import React,{useState} from 'react'
import { useFormik } from 'formik'
import {sginup} from '../schemas'

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirm_password: '',
}
const LoginSignup = () => {
  const [currentState,setCurrentState] = useState('SignUp')

  const {values,touched,handleBlur,handleChange,handleSubmit,errors} = useFormik({
    initialValues: initialValues,
    validationSchema:sginup,
    onSubmit:(values,action)=>
    {
        console.log(values)
        alert(JSON.stringify(values))
        action.resetForm();
    }
});

  return (
    <div>
        <section className='w-full h-[100vh] flex justify-center items-center overflow-hidden'>
        <iframe width="100%" height="100%" className='absolute inset-0' src="https://satellites.pro/Google_plan/Rahim_Yar_Khan_map" frameborder="0"></iframe> <iframe width="100%" height="100%" className='absolute inset-0' src="https://satellites.pro/Google_plan/Rahim_Yar_Khan_map" frameborder="0"></iframe>

          <form onSubmit={handleSubmit} action="" className='w-[30%] absolute bottom-0 right-12 mx-auto border-2 border-black bg-white p-8'>
            <h1 className='text-3xl font-bold mb-6'>{currentState}</h1>
            <div className='flex flex-col gap-4'>
            {currentState === 'Login' ? '':
            <div className='w-[100%]'>
            <input className='h-12 w-full pl-4 border border-black outline-none' type="text" name='name' id='name' placeholder='Ur Name' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
            {errors.name&&touched.name ? (<p className='text-red-500 text-sm py-0'>{errors.name}</p>):""}
            </div>
            }

            <input className='h-12 pl-4 border border-black outline-none' type="email" placeholder='Ur Email' name='email' id='email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
            {errors.email&&touched.email ? (<p className='text-red-500 text-sm py-0 mt-[-1rem]'>{errors.email}</p>):""}

            <input className='h-12 pl-4 border border-black outline-none' type="password" placeholder='Ur Password' name='password' id='password' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
            {errors.password&&touched.password ? (<p className='text-red-500 text-sm py-0 mt-[-1rem]'>{errors.password}</p>):""}

            {currentState === 'Login' ? '':<input className='h-12 pl-4 border border-black outline-none' type="password" ame='confirm_password' id='confirm_password' placeholder='Confirm Password' value={values.confirm_password} onChange={handleChange} onBlur={handleBlur}/>}
            {errors.confirm_password&&touched.confirm_password ? (<p className='text-red-500 text-sm py-0 mt-[-1rem]'>{errors.confirm_password}</p>):""}
            <input className='h-12 w-full pl-4 text-white bg-black outline-none' type="submit" />
            </div>
            <div>
                {
                  currentState === 'Login'?
                  <div className='flex'>
                  <h1 className='inline-block'>Create New Account:</h1>
                    <span onClick={()=>setCurrentState('SignUp')} className='text-red-600 font-bold ml-2 cursor-pointer'>Sign Up here</span>
                    </div>
                  :
                  <div className='flex'><h1>Already have an account ?</h1><span onClick={()=>setCurrentState('Login')} className='text-red-600 font-bold  cursor-pointer'>Login here</span></div>
                }
            </div>
              <div className='flex gap-2 items-center mt-4' >
                <input type="checkbox" name='' id=''/>
                <p>By signing up, you agree to our terms and conditions.</p>
              </div>
          </form>
        </section>  
    </div>
  )
}
// This is for login and signup,in this Formik is Used for data collect and yup is used for validation
export default LoginSignup
