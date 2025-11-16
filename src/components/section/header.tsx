import ThemeSwitcher from "../theme-switcher"
import { useState, useEffect } from "react"

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formattedDate = currentTime.toLocaleString("en-US", {
    weekday: "long", year: "numeric", month: "short", day: "numeric",
    hour: "2-digit", minute: "2-digit", second: "2-digit"
  })

  return (
    <header>
      <div className="flex justify-between items-start">
        <h1 className="text-base sm:text-lg mb-8">{formattedDate}</h1>
        <ThemeSwitcher />
      </div>
      <div>
        <h2 className="text-lg sm:text-xl">Yanda Agil</h2>
        <h3 className="text-lg sm:text-xl">Software Engineer</h3>
      </div>
    </header>
  )
}

export default Header