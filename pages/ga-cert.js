import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Custom404() {
  const router = useRouter()

  useEffect(() => {
    router.replace("https://analytics.google.com/analytics/academy/certificate/fKBv9cxlQVmSoj-PBDzU8Q")
  })

  return null
}
