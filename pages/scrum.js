import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Custom404() {
  const router = useRouter()

  useEffect(() => {
    router.replace("https://www.credly.com/badges/6e801485-b19d-47e9-adaa-89caa7b25571")
  })

  return null
}
