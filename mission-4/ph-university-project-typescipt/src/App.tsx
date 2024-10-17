import './App.css'
import UserInfoWithUseReducer from './components/UserInfoWithUseReducer'

function App() {


  return (
    <div className='border p-20 border-green-400'>
    {/* <CounterWithFunctionalComponent/> */}
    {/* <UserInfoWithUseState/> */}
    <UserInfoWithUseReducer/>
  </div>
  )
}

export default App
