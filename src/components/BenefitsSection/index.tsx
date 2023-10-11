import BenefitOne from './BenefitOne'
import BenefitTwo from './BenefitTwo'

function BenefitsSection() {
  return (
    <>
      <div className="w-full pt-5 md:pt-0 bg-main-color causas" id="vantagens">
        <BenefitOne />
        <BenefitTwo />
      </div>
    </>
  )
}

export default BenefitsSection
