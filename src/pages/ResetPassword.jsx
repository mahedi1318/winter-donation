import { useForm } from "react-hook-form";
import UseAuth from "../hook/UseAuth";

const ResetPassword = () => {

  const {resetPassword} = UseAuth()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    try {
      resetPassword(data?.email).then(()=>{
        console.log("password reset")
      }).catch((err)=>{
        console.log(err.message)
      })
    } catch (error) {
      console.log(error)
    }
    
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen container">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Forgot Password!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" className="input w-full outline-0" placeholder="Email" {...register("email")} />              
                  <button className="btn bg-[#1a685b] text-white mt-4">Reset Password</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword