import BenefitOne from './BenefitOne'
import BenefitTwo from './BenefitTwo'

function BenefitsSection() {
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
