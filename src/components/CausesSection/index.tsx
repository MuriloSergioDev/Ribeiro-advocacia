import { raleway } from '@/app/fonts'
import { useInView } from 'react-intersection-observer'

function CausesSection() {
  const [ref, inView] = useInView({ threshold: 0, triggerOnce: true })
  const causas = [
    'DIVÓRCIO',
    'PENSÃO',
    'CONTRATO DE UNIÃO ESTÁVEL',
    'PACTO ANTENUPCIAL',
    'PENSÃO ALIMENTÍCIA',
    'PLANEJAMENTO MATRIMONIAL',
    'GUARDA DE FILHOS',
    'LITÍGIO',
  ]
  return (
    <>
      <div className="w-full px-10 py-14 bg-secundary-color causas" id="causas">
        <div
          ref={ref}
          className={`flex flex-col justify-center items-center gap-14 opacity-0 [animation-fill-mode:backwards] ${
            inView ? 'animate-revealfromtop opacity-100' : ''
          }`}
        >
          <h2
            className={`font-black uppercase text-2xl 2xl:text-4xl before:mr-2 ${raleway.className}`}
          >
            Causas
          </h2>
          <div className="w-full xl:w-1/2 h-full flex flex-row flex-grow flex-wrap justify-center items-center gap-10">
            {causas.map((causa, index) => {
              return (
                <div
                  className="flex flex-col justify-center items-center text-center border-2 p-5 w-44 h-44 gap-2"
                  key={index}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                    />
                  </svg>

                  <p className="text-contrast-color">{causa}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default CausesSection
