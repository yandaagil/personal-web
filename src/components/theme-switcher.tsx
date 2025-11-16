import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        size='icon'
        variant='ghost'
        className='rounded-full'
        aria-label='Toggle theme'
      >
        <Sun />
      </Button>
    )
  }

  return (
    <Button
      size='icon'
      variant='ghost'
      className='rounded-full'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  )
}

export default ThemeSwitcher