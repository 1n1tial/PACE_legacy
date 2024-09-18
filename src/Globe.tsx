import { useRef, useEffect } from 'react'
import Globe, { GlobeMethods } from 'react-globe.gl'
import './App.css'

function GlobeComponent() {

  const globeRef = useRef<GlobeMethods>()

  useEffect(() => {
    if (globeRef.current) {
      const globe = globeRef.current
      globe.controls().autoRotate = true
      globe.controls().autoRotateSpeed = 1
      globe.controls().enableZoom = false
    }
  }, [])
  
  const globeImageUrl = 'https://unpkg.com/three-globe/example/img/earth-night.jpg'

  return (
    <>
      <div className='globe-container'>
        <Globe
          ref={globeRef}
          globeImageUrl={globeImageUrl}
        />
      </div>
    </>
  )
}

export default GlobeComponent
