import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
}

// Récupération des identifiants depuis .env
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const SendButton: React.FC<SendButtonProps> = ({ formData }) => {
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
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    setIsSending(true);

    try {
      const templateParams = {
        from_name: `${formData.prenom} ${formData.nom}`,
        from_email: 'exerandomizer@gmail.com',
        to_email: formData.email,
        subject: formData.objet,
        message: formData.message,
        telephone: formData.telephone || 'Non fourni'
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      alert('Message envoyé avec succès !');
    } catch (error) {
      console.error(error);
      alert('Erreur lors de l’envoi. Veuillez réessayer.');
    }

    setIsSending(false);
  };

  return (
    <Button
      type="button"
      onClick={handleSend}
      disabled={!isFormValid() || isSending}
      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
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
