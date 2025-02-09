import Button from "./components/ui/Button/Button.tsx";
import Input from "./components/ui/Input/Input.tsx";

function App() {
  return (
    <div className='flex bg-slate-300 items-center justify-center w-full h-screen'>
      <div className='p-4 rounded-md bg-white'>
        <h1 className='font-bold mb-10 text-center text-2xl'>Welcome back</h1>

        <form className='flex flex-col gap-2'>
          <Input
            label="Email"
            placeholder="Email"
            type="email"
            aria-label="Email input"
            required
          />

          <Input
            label="Password"
            type="password"
            aria-label="Password input"
            placeholder="Password"
            required
          />

          <Button
            label="Log In"
            palette='secondary'
          />
        </form>
      </div>
    </div>
  )
}

export default App;
