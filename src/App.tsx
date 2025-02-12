import SignInForm from "./components/SignInForm.tsx";
import SignUpForm from "./components/SignUpForm.tsx";

function App() {
  return (
    <div className='flex bg-slate-300 items-center justify-center w-full h-screen'>
      <SignInForm/>
      {/*<SignUpForm/>*/}
    </div>
  )
}

export default App;
