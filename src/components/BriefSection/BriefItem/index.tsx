import Image from 'next/image'

interface BriefItemProps {
  name: string
  picture: string
  message: string
  rate: Array<number>
}

function BriefItem({ name, picture, message, rate }: BriefItemProps) {
  return (
    <>
      <div
        className={`text-secundary-color w-full max-w-lg h-72 rounded-xl bg-main-color flex flex-col items-center gap-10 py-10 px-16 justify-center md:px-20 `}
      >
        <div className="w-full flex gap-8 items-center justify-start">
          <div className={`relative w-16 h-16 rounded-xl`}>
            <Image
              src={picture}
              alt="logo"
              fill
              style={{ objectFit: 'cover' }}
              loading="lazy"
              className="rounded-xl"
            />
          </div>
          <h4 className="capitalize">{name}</h4>
        </div>
        <div>
          <p>{message}</p>
        </div>
        <div className="flex text-contrast-color">
          {rate.map((value, index) => {
            return (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default BriefItem
