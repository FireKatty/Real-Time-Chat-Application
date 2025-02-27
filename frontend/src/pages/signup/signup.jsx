import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"

const signup = () => {
   const [inputs, setInputs] = useState({
    fullName:"",
    userName:"",
    password:"",
    confirmPassword:"",
    gender:""
   });

   const handleCheckboxChange = (gender)=>{
    setInputs({...inputs,gender})
   }

   const {loading,signup} = useSignup()

   const handleSubmit =async(e)=>{
    e.preventDefault();
    await signup(inputs)

   }

  return (
    <div className="flex flex-col items-center justify-center mid-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-grey-300">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
        <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text" placeholder="Enter fullname" className="w-full input input-boarded h-10"  
              value={inputs.fullName} 
              onChange={(e)=> setInputs({...inputs,fullName:e.target.value})} 
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className="w-full input input-boarded h-10" 
              value={inputs.userName}
              onChange={(e)=> setInputs({...inputs, userName:e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-boarded h-10" 
              value={inputs.password}
              onChange={(e)=> setInputs({...inputs, password:e.target.value})}  
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-boarded h-10"
              value={inputs.confirmPassword}
              onChange={(e)=> setInputs({...inputs, confirmPassword:e.target.value})}
            />
          </div>

          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender} />

          <Link to={"/login"} href="" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" >
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700"
            disabled = {loading}
            > 
            {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default signup




// import GenderCheckbox from "./GenderCheckbox"

// const signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center mid-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-grey-300">
//           SignUp
//           <span className="text-blue-500"> ChatApp</span>
//         </h1>

//         <form>
//         <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input type="text" placeholder="Enter fullname" className="w-full input input-boarded h-10" />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input type="text" placeholder="Enter Username" className="w-full input input-boarded h-10" />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input type="password" placeholder="Enter Password" className="w-full input input-boarded h-10" />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input type="password" placeholder="Enter Password" className="w-full input input-boarded h-10" />
//           </div>

//           <GenderCheckbox/>

//           <a href="" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" >
//             Already have an account?
//           </a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2">Sign Up</button>
//           </div>
//         </form>

//       </div>
      
//     </div>
//   )
// }

// export default signup
