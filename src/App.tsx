import { useRef, useEffect } from 'react'
import './App.css'

function App() {

    const oneRef = useRef<HTMLDivElement>(null)
    const twoRef = useRef<HTMLDivElement>(null)
    const threeRef = useRef<HTMLDivElement>(null)
    const fourRef = useRef<HTMLDivElement>(null)

    const scrollToOne = () => {
        if (oneRef.current) oneRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToTwo = () => {
        if (twoRef.current) twoRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToThree = () => {
        if (threeRef.current) threeRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToFour = () => {
        if (fourRef.current) fourRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    
    const scrollToBottom = () => { 
        if (fourRef.current) fourRef.current.scrollIntoView({ behavior: 'instant' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [])

    return (
        <>
            <div className="container">
                <section className='one' ref={oneRef}>
                    <h1>one</h1>
                    <button onClick={scrollToTwo}>Previous</button>
                </section>
                <section className='two' ref={twoRef}>
                    <h1>two</h1>
                    <button onClick={scrollToOne}>Next</button>
                    <button onClick={scrollToThree}>Previous</button>
                </section>
                <section className='three' ref={threeRef}>
                    <h1>three</h1>
                    <button onClick={scrollToTwo}>Next</button>
                    <button onClick={scrollToFour}>Previous</button>
                </section>
                <section className='four' ref={fourRef}>
                    <h1>four</h1>
                    <button onClick={scrollToThree}>Next</button>
                </section>
            </div>
        </>
    )
}

export default App
