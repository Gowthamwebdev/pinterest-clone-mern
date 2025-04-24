import { Button, Typography } from '@mui/material'
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
      <Typography textAlign="left">
      <h1 className="text-xs font-normal">Username</h1>
      <input placeholder="Username" {...register("username", { required: true })} />
      {errors.username && <span style={styles.error}>Username is required</span>}
      </Typography>
      <Typography textAlign="left">
        <h1 className="text-xs font-normal">Email Address</h1>
      <input type="email" placeholder="Email" {...register("email", { required: true })} />
      {errors.email && <span style={styles.error}>Email is required</span>}
      </Typography>
      <Typography textAlign="left">
      <h1 className="text-xs font-normal">password</h1>
      <input type="password" placeholder="Password" {...register("password", { required: true })} />
      {errors.password && <span style={styles.error}>Password is required</span>}
      </Typography>
    </form>
  )
}

const styles = {
  form: { display: 'flex', flexDirection: 'column' as const, gap: '10px', maxWidth: '300px', margin: 'auto' },
  error: { color: 'red', fontSize: '12px' }
}

export default Signup