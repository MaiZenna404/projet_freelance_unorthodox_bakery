import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
// import { Send } from 'lucide-react';
import SendButton from '@/components/SendButton';
import { toast } from "sonner";

// Interface TypeScript pour les données du formulaire
interface FormData {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    objet: string;
    message: string;
    accepteTraitement: boolean;
}

// Interface pour les données collectées avec métadonnées
interface CollectedData extends FormData {
    timestamp: string;
    id: number;
}

// Interface pour le résultat d'envoi
interface SendResult {
    success: boolean;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        objet: '',
        message: '',
        accepteTraitement: false
    });

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [collectedData, setCollectedData] = useState<CollectedData | null>(null);

    const handleInputChange = (field: keyof FormData, value: string | boolean): void => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Fonction pour récupérer et stocker les données
    const collectFormData = (): CollectedData => {
        const dataToCollect: CollectedData = {
            ...formData,
            timestamp: new Date().toISOString(),
            id: Date.now()
        };
        
        setCollectedData(dataToCollect);
        console.log('Données collectées:', dataToCollect);
        return dataToCollect;
    };

    // Fonction séparée pour envoyer les données
    const sendData = async (data: CollectedData): Promise<SendResult> => {
        console.log('Envoi des données:', data);
        
        try {
            // Ici vous pourrez implémenter votre logique d'envoi
            // Exemple avec fetch:
            /*
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            
            if (!response.ok) {
                throw new Error('Erreur réseau');
            }
            
            const result = await response.json();
            return { success: true, message: 'Données envoyées avec succès' };
            */
            
            // Simulation pour l'instant
            await new Promise(resolve => setTimeout(resolve, 2000));
            return { success: true, message: 'Données envoyées avec succès' };
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
            return { success: false, message: 'Erreur lors de l\'envoi' };
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // 1. Récupérer les données
            const collectedFormData = collectFormData();
            
            // 2. Envoyer les données avec votre méthode
            const result = await sendData(collectedFormData);
            
          if (result.success) {
            console.log('Données envoyées avec succès:', collectedFormData);
            
                // Afficher un toast/notif de succès
            toast('Votre message a été envoyé avec succès !', {
              duration: 4000,
              position: 'top-center',
              style: {
                background: '#b6e4d9',
                color: 'white'
              },
            });
                
                // Reset du formulaire
                setFormData({
                    nom: '',
                    prenom: '',
                    email: '',
                    telephone: '',
                    objet: '',
                    message: '',
                    accepteTraitement: false
                });
                setCollectedData(null);
            } else {
                alert('Erreur lors de l\'envoi: ' + result.message);
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Une erreur est survenue');
        }
        finally {
            
            // Réinitialiser l'état de soumission
            setIsSubmitting(false);
        }

        
    };

    const isFormValid: boolean = !!(
        formData.nom && 
        formData.prenom && 
        formData.email &&
        formData.objet && 
        formData.message && 
        formData.accepteTraitement
    );

    return (
      <section id="contacts" className="min-h-screen py-6 px-4 pt-[5%]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 text-center border-b-2 border-emerald-200 pb-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
              CONTACTEZ-NOUS
            </h1>
            <p className="text-base text-gray-600 font-medium">
              Nous serions ravis de vous entendre. Envoyez-nous un message !
            </p>
          </div>

          {/* Affichage des données collectées pour debug */}
          {collectedData && (
            <div className="mb-4 p-4 bg-gray-100 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Dernières données collectées:
              </h3>
              <pre className="text-xs text-gray-600 overflow-x-auto">
                {JSON.stringify(collectedData, null, 2)}
              </pre>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nom et Prénom */}
            <div className="grid md:grid-cols-2 gap-4 p-4 border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="space-y-1">
                <Label
                  htmlFor="nom"
                  className="text-base font-semibold text-gray-800 flex items-center"
                >
                  Nom <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  id="nom"
                  type="text"
                  value={formData.nom}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("nom", e.target.value)
                  }
                  className="border-2 border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-lg h-10 text-gray-800 font-medium shadow-sm hover:border-gray-400 transition-colors duration-200 text-sm px-4"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label
                  htmlFor="prenom"
                  className="text-base font-semibold text-gray-800 flex items-center"
                >
                  Prénom <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  id="prenom"
                  type="text"
                  value={formData.prenom}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("prenom", e.target.value)
                  }
                  className="border-2 border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-lg h-10 text-gray-800 font-medium shadow-sm hover:border-gray-400 transition-colors duration-200 text-sm px-4"
                  required
                />
              </div>
            </div>

            {/* Email et Téléphone */}
            <div className="grid md:grid-cols-2 gap-4 p-4 border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="space-y-1">
                <Label
                  htmlFor="email"
                  className="text-base font-semibold text-gray-800 flex items-center h-6" // Changed from text-sm to text-base
                >
                  Email <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("email", e.target.value)
                  }
                  className="border-2 border-gray-300 focus:border-[#b6e4d9] focus:ring-2 focus:ring-[#b6e4d9]/30 rounded-lg h-10 text-gray-800 font-medium shadow-sm hover:border-gray-400 transition-colors duration-200 text-sm px-4"
                  required
                  placeholder='jean.dupont@gmail.com'
                />
              </div>
              <div className="space-y-1">
                <Label
                  htmlFor="telephone"
                  className="text-base font-semibold text-gray-800 flex items-center h-6" // Made consistent with email label
                >
                  Téléphone fixe ou portable{" "}
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  id="telephone"
                  type="tel"
                  value={formData.telephone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("telephone", e.target.value)
                  }
                  className="border-2 border-gray-300 focus:border-[#b6e4d9] focus:ring-2 focus:ring-[#b6e4d9]/30 rounded-lg h-10 text-gray-800 font-medium shadow-sm hover:border-gray-400 transition-colors duration-200 text-sm px-4"
                  required
                />
              </div>
            </div>

            {/* Objet et Message sur la même ligne */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Objet */}
              <div className="p-4 border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="space-y-1">
                  <Label
                    htmlFor="objet"
                    className="text-base font-semibold text-gray-800 flex items-center"
                  >
                    Objet <span className="text-red-500 ml-1 mb-1">*</span>
                  </Label>
                  <Select
                    value={formData.objet}
                    onValueChange={(value: string) =>
                      handleInputChange("objet", value)
                    }
                  >
                    <SelectTrigger className="border-2 border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-gray-800 hover:border-gray-400 rounded-lg h-10 font-medium shadow-sm transition-colors duration-200 text-sm px-4">
                      <SelectValue
                        placeholder="Sélectionnez un objet"
                        className="text-gray-500"
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-2 border-gray-200 rounded-lg shadow-lg">
                      <SelectItem
                        value="Commande"
                        className="text-gray-900 hover:bg-emerald-50 focus:bg-emerald-100 rounded-md mx-1 my-1"
                      >
                        Commande
                      </SelectItem>
                      <SelectItem
                        value="Partenariat Commercial"
                        className="text-gray-900 hover:bg-emerald-50 focus:bg-emerald-100 rounded-md mx-1 my-1"
                      >
                        Partenariat Commercial
                      </SelectItem>
                      <SelectItem
                        value="Presse, média & collaborations"
                        className="text-gray-900 hover:bg-emerald-50 focus:bg-emerald-100 rounded-md mx-1 my-1"
                      >
                        Presse, média & collaborations
                      </SelectItem>
                      <SelectItem
                        value="Immobilier & développement d'enseigne"
                        className="text-gray-900 hover:bg-emerald-50 focus:bg-emerald-100 rounded-md mx-1 my-1"
                      >
                        Immobilier & développement d'enseigne
                      </SelectItem>
                      <SelectItem
                        value="Recrutement"
                        className="text-gray-900 hover:bg-emerald-50 focus:bg-emerald-100 rounded-md mx-1 my-1"
                      >
                        Recrutement
                      </SelectItem>
                      <SelectItem
                        value="Autre"
                        className="text-gray-900 hover:bg-emerald-50 focus:bg-emerald-100 rounded-md mx-1 my-1"
                      >
                        Autre
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="p-4 border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="space-y-1">
                  <Label
                    htmlFor="message"
                    className="text-base font-semibold text-gray-800 flex items-center"
                  >
                    Votre message <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="border-2 border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 min-h-[80px] resize-none rounded-lg text-gray-800 font-medium shadow-sm hover:border-gray-400 transition-colors duration-200 text-sm p-3"
                    placeholder="Décrivez votre demande en détail..."
                    required
                  />
                </div>
              </div>
            </div>

            {/* Checkbox de consentement et bouton d'envoi */}
            <div className="grid md:grid-cols-2 gap-4 items-end">
              <div className="p-4 border-2 border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="accepteTraitement"
                    checked={formData.accepteTraitement}
                    onChange={(e) =>
                      handleInputChange("accepteTraitement", e.target.checked)
                    }
                    className="mt-1"
                  />
                  <Label
                    htmlFor="accepteTraitement"
                    className="text-base text-gray-700 leading-relaxed cursor-pointer font-medium"
                  >
                    En envoyant ce formulaire, vous acceptez le traitement de
                    vos données personnelles pour recevoir une réponse à votre
                    demande. <span className="text-red-500">*</span>
                  </Label>
                </div>
              </div>

              {/* Bouton d'envoi */}
              <div className="p-4">
                <SendButton
                  formData={formData}
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-[#b6e4d9] hover:bg-[#b6e4d9]/90 text-white font-medium py-2 px-4 rounded-lg shadow-sm transition-colors duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                </SendButton>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
};

export default ContactForm;