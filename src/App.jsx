import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  return (
    <div className='w-screen min-h-screen overflow-hidden flex flex-col bg-gradient-to-r from-blue-800 to-indigo-900'>
        <h1 className='text-white uppercase rounded-md font-bold text-xl bg-black mt-[25px] p-2 ml-[25px] mr-[25px] text-center'>Random GIFS</h1>
        <div className='flex flex-col w-full items-center gap-6 mt-10 mb-10'>
          <Random/>
          <Tag/>
        </div>


    </div>
  )
}

export default App
