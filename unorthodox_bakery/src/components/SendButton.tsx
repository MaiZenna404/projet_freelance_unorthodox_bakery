import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

// Types pour le formulaire
interface FormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  objet: string;
  message: string;
  accepteTraitement: boolean;
}

// Props attendues
interface SendButtonProps {
  formData: FormData;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

// Récupération des identifiants depuis .env
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const CUSTOMER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CUSTOMER;
const ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Email sur lequel le message sera envoyé (à changer une fois le projet terminé)
const mailTo: string = "mai.than.222@gmail.com";

const SendButton: React.FC<SendButtonProps> = ({
  formData,
  type = "button",
  disabled = false,
  className = "",
  onClick,
}) => {
  const [isSending, setIsSending] = useState(false);

  const isFormValid = (): boolean => {
    return (
      !!formData.nom.trim() &&
      !!formData.prenom.trim() &&
      !!formData.email.trim() &&
      !!formData.objet.trim() &&
      !!formData.message.trim() &&
      formData.accepteTraitement
    );
  };

  const handleSend = async () => {
    if (!isFormValid()) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setIsSending(true);

    try {
      const templateParams = {
        to_name: "Unorthodox Bakery", // Your business name
        to_email: mailTo, // Your business email
        from_name: `${formData.prenom} ${formData.nom}`,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.objet,
        message: formData.message.replace(/\n/g, "<br>"), // Convert newlines to HTML breaks
        telephone: formData.telephone || "Non fourni",
      };

      // First send admin notification
      await emailjs.send(
        SERVICE_ID,
        ADMIN_TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      // Then send customer confirmation
      const customerParams = {
        to_name: `${formData.prenom}`, // Just first name for personalization
        to_email: formData.email,
        from_name: "Unorthodox Bakery",
        from_email: mailTo, // Use a business email
        subject: "Votre message a bien été reçu - Unorthodox Bakery",
        objet: formData.objet, // Add this to show in template
        message: formData.message.substring(0, 50) + "...", // First part of their message
      };
      await emailjs.send(
        SERVICE_ID,
        CUSTOMER_TEMPLATE_ID,
        customerParams,
        PUBLIC_KEY
      );

      toast("✅ Votre message a été envoyé avec succès !", {
        duration: 4000,
        position: "bottom-right",
        style: {
          background: "#399385",
          /* rounded corner */
          borderRadius: "8px",
          fontSize: "14px",
          color: "white", // Dark text for better contrast
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("❗Erreur lors de l’envoi. Veuillez réessayer.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#dc2626", // Red background for error
          color: "white",
        },
      });
    }

    setIsSending(false);
  };

  return (
    <Button
      type={type}
      disabled={disabled || !isFormValid() || isSending}
      onClick={onClick || handleSend}
      className={`${className} w-full bg-[#53ae9f] hover:bg-[#399385] text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed text-sm`}
    >
      {isSending ? (
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>Envoi...</span>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <Send className="w-4 h-4" />
          <span>ENVOYER MA DEMANDE</span>
        </div>
      )}
    </Button>
  );
};

export default SendButton;
