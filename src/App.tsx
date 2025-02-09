import Button from "./components/ui/Button/Button.tsx";

function App() {
  return (
    <div className='flex bg-secondary-500 items-center justify-center w-full h-screen'>
      <div className='p-4 rounded-md bg-primary-500 text-white'>
        <h1 className='font-bold mb-10 text-center text-2xl'>Welcome back</h1>

        <form className='flex flex-col gap-2'>
          <input
            placeholder="Email"
            type="email"
            aria-label="Email input"
            className='placeholder-white rounded-sm px-2 py-1 border outline-none'
            required
          />

          <input
            placeholder="Password"
            type="password"
            aria-label="Password input"
            className='placeholder-white rounded-sm px-2 py-1 border outline-none'
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
