import { useEffect, useState } from 'react'

interface UseMediaQueryProps {
  windowWidth?: number
  isDesiredWidth: boolean
}

const DEFAULT_BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

type Breakpoints = keyof typeof DEFAULT_BREAKPOINTS

export default function useMediaQuery(breakpoint: Breakpoints) {
  const [state, setState] = useState<UseMediaQueryProps>({
    windowWidth: typeof window === 'undefined' ? 0 : window.innerWidth,
    isDesiredWidth: false,
  })

  useEffect(() => {
    function resizeHandler() {
      const currentWindowWidth = window.innerWidth

      const isDesiredWidth =
        currentWindowWidth < DEFAULT_BREAKPOINTS[breakpoint]

      setState({ windowWidth: currentWindowWidth, isDesiredWidth })
    }

    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  }, [state.windowWidth, breakpoint])

  return state.isDesiredWidth
}
