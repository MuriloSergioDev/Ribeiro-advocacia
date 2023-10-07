import { useMenu } from '@/hooks/useMenu'
import { Carousel } from 'flowbite-react'
import BriefItem from './BriefItem'
import './style.css'

function BriefSection() {
  const { clients } = useMenu()
  return (
    <>
      <div
        className="w-full h-96 bg-secundary-color p-5 gap-10 flex items-center justify-center causas"
        id="sobre"
      >
        <Carousel className="flex items-center justify-center max-w-lg carousel">
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
