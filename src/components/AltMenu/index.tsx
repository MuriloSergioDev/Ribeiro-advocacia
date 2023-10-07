import { useMenu } from '@/hooks/useMenu'

function AltMenu() {
  const { activeStick, handleToggleMenu } = useMenu()
  return (
    <>
      <button
        onClick={() => {
          handleToggleMenu()
        }}
        className={`${activeStick ? 'hidden' : ''}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>
    </>
  )
}

export default AltMenu
