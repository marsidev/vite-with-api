import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import vercelLogo from './assets/vercel.svg'
import './styles/App.css'

interface ApiResponse {
  hello: string
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

function App() {
  const [count, setCount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<ApiResponse>()
  const [loading2, setLoading2] = useState<boolean>(false)
  const [data2, setData2] = useState<ApiResponse>()

  const fetchData = async () => {
    setLoading(true)
    const data = await fetcher('/api/hello')
    setData(data)
    setLoading(false)
  }

  const fetchData2 = async () => {
    const id = Math.floor(Math.random() * 100) + 1
    setLoading2(true)
    const data = await fetcher(`/api/user/${id}`)
    setData2(data)
    setLoading2(false)
  }

  return (
    <>
      <main className='App'>
        <header>
          <h1>Hello Vite + React + Vercel!</h1>
          <nav>
            <a href='https://vitejs.dev' target='_blank'>
              <img src={viteLogo} className='logo' alt='Vite logo' />
            </a>
            <a href='https://reactjs.org' target='_blank'>
              <img src={reactLogo} className='logo react' alt='React logo' />
            </a>
            <a href='https://vercel.com' target='_blank'>
              <img src={vercelLogo} className='logo vercel' alt='Vercel logo' />
            </a>
          </nav>
        </header>

        <section className='card'>
          <button type='button' onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </section>

        <section className='card'>
          <button type='button' onClick={fetchData}>
            GET /api/hello
          </button>

          <p>
            {loading && 'fetching...'}
            {data && !loading && <code>{JSON.stringify(data)}</code>}
          </p>
        </section>

        <section className='card'>
          <button type='button' onClick={fetchData2}>
            GET /api/user/[randomId]
          </button>

          <p>
            {loading2 && 'fetching...'}
            {data2 && !loading2 && <code>{JSON.stringify(data2)}</code>}
          </p>
        </section>

        <section className='card'>
          <a href='/api/avatar' target='_blank'>
            Open avatar
          </a>
        </section>

        <section className='card'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </section>
      </main>

      <footer className='read-the-docs'>
        Click on the logos to learn more
      </footer>
    </>
  )
}

export default App
