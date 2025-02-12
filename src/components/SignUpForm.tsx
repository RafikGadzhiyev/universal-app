import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import signUpFormValidation, {SignUpFormValidation} from "../validations/signUpForm.validation.ts";

import Card from "./ui/Card/Card.tsx";
import Input from "./ui/Input/Input.tsx";
import Button from "./ui/Button/Button.tsx";


function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState
  } = useForm<SignUpFormValidation>(
    {
      resolver: zodResolver(signUpFormValidation),
      defaultValues: {
        name: '',
        password: '',
        email: '',
        confirmPassword: '',
      }
    },
  )

  return(
    <Card className="w-100">
      <h1 className='font-bold mb-10 text-center text-2xl'>Welcome, new wizard!</h1>

      <form
        onSubmit={handleSubmit((d) => console.log(d))}
        className='flex flex-col gap-2'
      >
        <Input
          label="Name"
          placeholder="Name"
          aria-label="Name input"
          error={formState.errors.name?.message}
          {...register('name')}
        />

        <Input
          label="Email"
          placeholder="Email"
          type="email"
          aria-label="Email input"
          error={formState.errors.email?.message}
          {...register('email')}
        />

        <Input
          label="Password"
          type="password"
          aria-label="Password input"
          placeholder="Password"
          error={formState.errors.password?.message}
          {...register('password')}
        />

        <Input
          label="Confirm password"
          type="password"
          aria-label="Password confirmation input"
          placeholder="Confirm password"
          error={formState.errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />

        <Button
          type='submit'
          label="Log In"
          palette='secondary'
        />
      </form>
    </Card>
  )
}

export default SignUpForm
