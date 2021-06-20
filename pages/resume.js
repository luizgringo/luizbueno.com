import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Custom404() {
  const router = useRouter()

  useEffect(() => {
    router.replace("https://resume.io/r/J3fOKEJPI")
  })

  return null
}
