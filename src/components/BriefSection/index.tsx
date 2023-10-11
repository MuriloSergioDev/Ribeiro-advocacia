import { useMenu } from '@/hooks/useMenu'
import { Carousel } from 'flowbite-react'
import { useInView } from 'react-intersection-observer'
import BriefItem from './BriefItem'
import './style.css'

function BriefSection() {
  const { clients } = useMenu()
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  return (
    <>
      <div
        className="w-full h-96 bg-secundary-color p-5 gap-10 flex items-center justify-center causas"
        id="sobre"
        ref={ref}
      >
        <Carousel
          className={`flex items-center justify-center max-w-lg carousel opacity-0 [animation-fill-mode:backwards] ${
            inView ? 'animate-revealfromtop opacity-100' : ''
          }`}
        >
          {clients.map((client, index) => {
            return (
              <BriefItem
                key={index}
                name={client.name}
                message={client.message}
                picture={client.picture}
                rate={client.rate}
              />
            )
          })}
        </Carousel>
      </div>
    </>
  )
}

export default BriefSection
