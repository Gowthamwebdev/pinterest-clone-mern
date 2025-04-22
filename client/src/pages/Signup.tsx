import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type SignupFormInputs = {
  username: string
  password: string
  email: string
}

const Signup: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormInputs>()
  const navigate = useNavigate()

  const onSubmit = (data: SignupFormInputs) => {
    console.log("User registered:", data)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
      <h2>Sign Up</h2>
      <input placeholder="Username" {...register("username", { required: true })} />
      {errors.username && <span style={styles.error}>Username is required</span>}

      <input type="email" placeholder="Email" {...register("email", { required: true })} />
      {errors.email && <span style={styles.error}>Email is required</span>}

      <input type="password" placeholder="Password" {...register("password", { required: true })} />
      {errors.password && <span style={styles.error}>Password is required</span>}

      <button type="submit">Sign Up</button>
    </form>
  )
}

const styles = {
  form: { display: 'flex', flexDirection: 'column' as const, gap: '10px', maxWidth: '300px', margin: 'auto' },
  error: { color: 'red', fontSize: '12px' }
}

export default Signup
