import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import auth from '../../firebase/firebase.config';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Register = () => {
  const [registerError, setRegisterError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] =useState(false)
  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const accepted = e.target.terms.checked
    const password = e.target.password.value;
    console.log(email, password ,accepted);
    setRegisterError(''),
      setSuccess('');
    if (password.length < 6) {
      setRegisterError('Password should be at least 6 characters or longer ')
      return;
    }
    else if(!/[A-Z]/.test(password)){
      setRegisterError('password should have at least one uppercase character.')
      return;
    }
    else if (!accepted) {
      setRegisterError('Please accept out terms and condition');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
       .then(result => {
         console.log(result.user)
         setSuccess('user create a successful')
      })
        .catch(error => {
          console.error(error)
          setRegisterError(error.message)
      })
  };

  return (
    <div>
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl ">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-full py-2 px-4"
            placeholder="Enter your E-mail "
            type="email"
            name="email"
            required
            id=""
          />
          <br />
          <div className='mb-4 relative'>
            <input
            className="w-full py-2 px-4"
            placeholder="Enter your Password"
            type={showPassword ?"text" : "password"}
            name="password"
            required
            id=""
          />
          <span className='absolute top-3 right-2' onClick={() => setShowPassword(!showPassword)}>
            {
              showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }
          </span>
          <br />
          </div>
          <div className='mb-2'>
            <input type="checkbox" name="" id="terms" />
         
          <label className='ml-2' htmlFor="terms">Accept out <a href="">terms and condition</a></label>
          </div>
           <br />
          <input
            className=" btn btn-secondary mb-4 w-3/4"
            type="submit"
            value="Register"
          />
        </form>
        {

          registerError && <p className='text-red-500'>{registerError}</p>
        }
        {
          success && <p className='text-green-500'>{ success}</p>
        }
      </div>
    </div>
  );
};

export default Register;
