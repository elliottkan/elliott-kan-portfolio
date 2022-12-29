import { useState, useEffect } from "react"

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState<number[]>([0, 0])
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(c => [position, c[0]])
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return {
    position: scrollPosition[0],
    direction: scrollPosition[1] - scrollPosition[0],
  }
}
