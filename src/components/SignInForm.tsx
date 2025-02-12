import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

import signInFormValidation, {SignInFormValidation} from "../validations/signInForm.validation.ts";

import Input from "./ui/Input/Input.tsx";
import Button from "./ui/Button/Button.tsx";
import Card from "./ui/Card/Card.tsx";

function SignInForm() {
  const {
    register,
    formState,
    handleSubmit
  } = useForm<SignInFormValidation>(
    {
      resolver: zodResolver(signInFormValidation),
      defaultValues: {
        password: '',
        email: '',
      }
    }
  )

  return(
    <Card className="w-100">
      <h1 className='font-bold mb-10 text-center text-2xl'>Welcome back</h1>

      <form
        onSubmit={handleSubmit((d) => console.log(d))}
        className='flex flex-col gap-2'
      >
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

        <Button
          type='submit'
          label="Log In"
          palette='secondary'
        />
      </form>
    </Card>
  )
}

export default SignInForm
