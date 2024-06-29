<<<<<<< HEAD
import React, { ReactElement, Suspense } from 'react';

import { BrowserRouter as Router, Route , Routes, Navigate} from 'react-router-dom';
import { Spinner } from './components/ui/spinner';
import { useAtomsDevtools } from 'jotai-devtools';
import { Provider } from 'jotai';
const MainCard = React.lazy(() => import('./components/MainCard'));
const Quiz = React.lazy(() => import('./components/Quiz'));
const Results = React.lazy(() => import('./components/Results'));

// const AtomsDevtools = ({ children }: { children: ReactElement }) => {
//   useAtomsDevtools("ONE!T");
//   return children;
// };

function App() {
  return (
    <div className="App h-svh flex flex-col justify-between">
      <header className="bg-black flex justify-center min-h-[5svh] align-middle">
        <h2 className='text-white text-3xl font-Bayon'> One!t </h2>
      </header>
      <main className='max-h-[90svh] flex w-svw justify-center mb-3 mt-3'>
        <div className='flex justify-center w-[80%] '>
        {/* <AtomsDevtools> */}
          <Suspense fallback={<Spinner size="large" />}>
          {/* <Provider> */}
            <Router>
                <Routes>
                    <Route path="/quiz/:chatID" element={<Quiz/>} />
                    <Route path="/result/:chatID" element={<Results/>} />
                    <Route path="/" element={<MainCard/>}/>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
          {/* </Provider> */}
          </Suspense>
        {/* </AtomsDevtools> */}
        </div>
      </main>
      <footer className='bg-slate-100 text-xs justify-evenly flex flex-col font-light items-center min-h-[5svh]'>
        <p>Created by Team.CLOV3R</p>
        {/* <p>Powerd by chatGPT</p> */}
      </footer>
    </div>
  );
}

export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> 48b1866 ([set] initial set up with style library)
