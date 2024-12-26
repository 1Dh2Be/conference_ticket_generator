import webLogo from "./assets/images/logo-mark.svg"

function App() {

  return (
    <div className='bg-bgMobile'>
      <header className=''>
        <div>
          <img src={webLogo} alt="Website logo" />
        </div>
      </header>
      <main>
        <h1 className='text-2xl'>Your Journey to Coding Conf 2025 Starts Here!</h1>
      </main>
    </div>
  )
}

export default App
