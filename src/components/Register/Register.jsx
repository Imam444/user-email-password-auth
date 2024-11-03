import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import auth from '../../firebase/firebase.config';
import { useState } from 'react';
const Register = () => {
  const [registerError, setRegisterError] = useState('')
  const [success, setSuccess] =useState('')
  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setRegisterError(''),
      setSuccess('');
    if (password.length < 6) {
      setRegisterError('Password should be at least 6 characters ')
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
            className="mb-4 w-3/4 py-2 px-4"
            placeholder="Enter your E-mail "
            type="email"
            name="email"
            required
            id=""
          />
          <br />
          <input
            className="mb-4 w-3/4 py-2 px-4"
            placeholder="Enter your Password"
            type="password"
            name="password"
            required
            id=""
          />
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
