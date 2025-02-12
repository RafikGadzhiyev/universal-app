import z from 'zod';

const signUpFormValidation = z.object(
  {
    name: z.string().min(5).max(18),
    email: z.string().email(),
    password: z.string().min(8).max(20),
    confirmPassword: z.string().min(8).max(20)
  }
)
  .refine(
    (validationCheck) => validationCheck.confirmPassword === validationCheck.password,
    {
      message: 'Password mismatch',
      path: [ 'confirmPassword' ]
    },
  )

type SignUpFormValidation = z.infer<typeof signUpFormValidation>

export type {
  SignUpFormValidation
}

export default signUpFormValidation
