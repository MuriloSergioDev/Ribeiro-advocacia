import { useInView } from 'react-intersection-observer'
import BenefitOne from './BenefitOne'
import BenefitTwo from './BenefitTwo'

function BenefitsSection() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  return (
    <>
      <div className="w-full bg-main-color causas" id="vantagens">
        <BenefitOne />
        <BenefitTwo />
      </div>
    </>
  )
}

export default BenefitsSection
