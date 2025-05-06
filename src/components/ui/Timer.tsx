"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

interface CountdownTimerProps {
  days?: number
  endDate?: Date
  onComplete?: () => void
}

export function DiscountTimer({ days = 15, endDate, onComplete }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isExpired, setIsExpired] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showMobileAlert, setShowMobileAlert] = useState(true)
  const [lastDismissedTime, setLastDismissedTime] = useState<number | null>(null)

  useEffect(() => {
    // Set the end date if not provided
    const targetDate = endDate || new Date(Date.now() + days * 24 * 60 * 60 * 1000)

    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Update countdown
    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        setIsExpired(true)
        clearInterval(interval)
        onComplete?.()
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", checkMobile)
    }
  }, [days, endDate, onComplete])

  // Close mobile alert
  const closeMobileAlert = () => {
    setShowMobileAlert(false)
    setLastDismissedTime(Date.now())
  }

  useEffect(() => {
    // Only run this effect on mobile
    if (!isMobile) return

    // Check every second if we need to show the alert again
    const alertInterval = setInterval(() => {
      if (!showMobileAlert && lastDismissedTime) {
        const timeElapsed = Date.now() - lastDismissedTime
        // If 1 minute (60000ms) has passed since dismissal, show the alert again
        if (timeElapsed >= 60000) {
          setShowMobileAlert(true)
        }
      }
    }, 1000)

    return () => clearInterval(alertInterval)
  }, [isMobile, showMobileAlert, lastDismissedTime])

  if (isExpired) {
    return null
  }

  // Mobile alert box
  if (isMobile) {
    return showMobileAlert ? (
      <div
        className={`fixed top-0 left-0 w-full z-50 transform transition-transform duration-500 ${showMobileAlert ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="bg-red-600 text-white p-3 shadow-lg">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span className="font-medium">
                Limited Time Offer: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </span>
            </div>
            <button onClick={closeMobileAlert} className="text-white">
              ✕
            </button>
          </div>
        </div>
      </div>
    ) : null
  }

  // Desktop timer (will be positioned in the header)
  return (
    <div className="hidden md:flex items-center space-x-2 text-white bg-red-600 px-3 py-1 rounded-md">
      <Clock className="h-4 w-4" />
      <span className="font-medium text-sm whitespace-nowrap">
        Sale ends in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </span>
    </div>
  )
}
