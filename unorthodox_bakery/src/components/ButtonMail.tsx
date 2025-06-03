import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("Envoi en cours...")

    emailjs
      .sendForm(
        "service_seik5vm",   // 🔁 Remplace par ton vrai service ID
        "template_4zcvhh9",  // 🔁 Remplace par ton vrai template ID
        formRef.current,
        "5H98nGIkXqmRFmcpm"    // 🔁 Remplace par ta vraie clé publique
      )
      .then(() => {
        setStatus("Email envoyé avec succès ✅")
        formRef.current.reset()
      })
      .catch(() => {
        setStatus("Erreur lors de l'envoi ❌")
      })
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4">Unorthodox Bakery</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="to_email"
          placeholder="Votre adresse e-mail"
          required
          className="border rounded-md p-2"
        />
        <textarea
          name="message"
          placeholder="Votre message"
          required
          rows={5}
          className="border rounded-md p-2"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition"
        >
          Envoyer
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
    </div>
  )
}
