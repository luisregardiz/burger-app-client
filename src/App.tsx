import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Turnstile from "react-turnstile"


import { toast, Toaster } from "sonner"
import { useNavigate } from "react-router"

export default function App() {

  const navigate = useNavigate()

  const [cedula, setCedula] = useState("")
  const [token, setToken] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!token) {
      toast("Token no encontrado")
      return
    }
    setCedula("")
    navigate("/burger")
  }


  const onVerify = (token: string) => {
    setToken(token);
  };

  const onExpire = () => {
    setToken(null);
  };

  const SITE_KEY = import.meta.env.VITE_SITE_KEY


  return (
    <div className="container mx-auto">
      <Toaster />
      <div className="flex justify-center items-center h-screen">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle className="text-xl">Acceder a la app</CardTitle>
            <CardDescription>Agrega tu cedula de identidad para iniciar sesión</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" >
            <CardContent>
              <Input placeholder="Cedula" value={cedula} onChange={(e) => setCedula(e.target.value)} />
            </CardContent>
            <div className="px-6">
              <Turnstile sitekey={SITE_KEY} onVerify={onVerify} onExpire={onExpire} />
            </div>
            <CardFooter>
              <Button disabled={!cedula.length || cedula.length < 7 || !token}>Acceder</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}