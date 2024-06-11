import React from 'react'
import Layout from '../layout'
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <Layout>
                 <div className='pt-20 w-full flex justify-center'>
                         <div className='w-1/2 flex justify-center'>
                               <div className='flex flex-col w-full items-center space-y-3 w-3/5'>
                                        <div className='flex flex-col items-center space-y-4 w-full'>
                                            <h5 className='text-2xl font-semibold '>Log in to Account</h5>
                                            <h5 className=' font-light text-slate-500'>Keep enjoying your stay here.</h5>
                                            <button className='flex items-center border  w-full justify-center space-x-3 py-3 rounded-lg'>
                                                <FcGoogle />
                                                <h5 className='font-semibold'>Log in with Google</h5>
                                            </button>
                                        </div>

                                        <div className='flex flex-col w-full space-y-3 py-4'>
                                        {[{
                                            label:"Email"},{label:"Password"},   ]?.map((field)=>{
                                                return(
                                            <div className='flex flex-col space-y-3 w-full'>
                                                {/* <label>{field?.label}</label> */}
                                                <input className='py-2.5 px-4 border rounded-xl text-sm' placeholder={field?.label}/>
                                            </div>
                                                    )

                                                })
                                                }

                                           <button className='flex items-center border bg-blue-300 text-white w-full justify-center space-x-3 py-3 rounded-lg'>
                                           Log in
                                            </button>

                                            <div className='flex flex-col  w-full items-center space-y-4'>
                                            <h5 className='font-semibold text-sm text-blue-300'>
                                                 Reset password
                                                </h5>

                                                <h5 className='font-semibold text-sm'>
                                                    No account?  <span className='text-blue-300'>Create one</span>
                                                </h5>

                                            </div>

             

                                        </div>
                                  

                               </div>

                         </div>

                 </div>

    </Layout>

  )
}
