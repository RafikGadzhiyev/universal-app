import z from 'zod'

const signInFormValidation = z.object(
  {
    email: z.string().email("Enter a valid email"),
    password: z.string().min(1, "Enter a password")
  }
)

type SignInFormValidation = z.infer<typeof signInFormValidation>

export type {
  SignInFormValidation,
}

export default signInFormValidation
