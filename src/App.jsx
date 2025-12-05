import Form from './Form'
import './App.css'

function App() {

  return (
    <div className='principalContainer'>
      <section>
        <picture className='logoRoyal'>
          <img src="/logo-royal.png" alt="logo royal" />
        </picture>
        {/* <h1>Royal Prestige</h1> */}
      </section>
      <Form />
    </div>
  )
}

export default App
