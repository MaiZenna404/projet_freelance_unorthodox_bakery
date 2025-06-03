import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        objet: '',
        message: '',
        accepteTraitement: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulation d'envoi
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Données du formulaire:', formData);
        alert('Votre message a été envoyé avec succès !');

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

        setIsSubmitting(false);
    };

    const isFormValid = formData.nom && formData.prenom && formData.email &&
        formData.objet && formData.message && formData.accepteTraitement;

    return (
        <section className="min-h-screen py-6 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-6 text-center border-b-2 border-emerald-200 pb-4">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                        CONTACTEZ-NOUS
                    </h1>
                    <p className="text-base text-gray-600 font-medium">
                        Nous serions ravis de vous entendre. Envoyez-nous un message !
                    </p>
                </div>

                <div className="space-y-4">
                    {/* Nom et Prénom */}
                    <div className="grid md:grid-cols-2 gap-4 p-4 border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="space-y-1">
                            <Label htmlFor="nom" className="text-sm font-semibold text-gray-800 flex items-center">
                                Nom <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <Input
                                id="nom"
                                type="text"
                                value={formData.nom}
                                onChange={(e) => handleInputChange('nom', e.target.value)}
                                className="border-2 border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-lg h-10 text-gray-800 font-medium shadow-sm hover:border-gray-400 transition-colors duration-200 text-sm px-4"
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="prenom" className="text-sm font-semibold text-gray-800 flex items-center">
                                Prénom <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <Input
                                id="prenom"
                                type="text"
                                value={formData.prenom}
                                onChange={(e) => handleInputChange('prenom', e.target.value)}
                                className="border-2 border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-lg h-10 text-gray-800 font-medium shadow-sm hover:border-gray-400 transition-colors duration-200 text-sm px-4"
                                required
                            />
                        </div>
                    </div>

                    {/* Email et Téléphone */}
                    <div className="grid md:grid-cols-2 gap-4 p-4 border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="space-y-1">
                            <Label htmlFor="email" className="text-sm font-semibold text-gray-800 flex items-center">
                                Email <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="border-2 border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-lg h-10 text-gray-800 font-medium shadow-sm hover:border-gray-400 transition-colors duration-200 text-sm px-4"
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="telephone" className="text-sm font-semibold text-gray-800">
                                Téléphone fixe ou portable
                            </Label>
                            <Input
                                id="telephone"
                                type="tel"
                                value={formData.telephone}
                                onChange={(e) => handleInputChange('telephone', e.target.value)}
                                className="border-2 border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-lg h-10 text-gray-800 font-medium shadow-sm hover:border-gray-400 transition-colors duration-200 text-sm px-4"
                            />
                        </div>
                    </div>

                    {/* Objet et Message sur la même ligne */}
                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Objet */}
                        <div className="p-4 border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="space-y-1">
                                <Label htmlFor="objet" className="text-sm font-semibold text-gray-800 flex items-center">
                                    Objet <span className="text-red-500 ml-1">*</span>
                                </Label>
                                <Select
                                    value={formData.objet}
                                    onValueChange={(value) => handleInputChange('objet', value)}
                                >
                                    <SelectTrigger className="border-2 border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-gray-800 hover:border-gray-400 rounded-lg h-10 font-medium shadow-sm transition-colors duration-200 text-sm px-4">
                                        <SelectValue placeholder="Sélectionnez un objet" className="text-gray-500" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white border-2 border-gray-200 rounded-lg shadow-lg">
                                        <SelectItem value="commande" className="text-gray-900 hover:bg-emerald-50 focus:bg-emerald-100 rounded-md mx-1 my-1">
                                            Commande
                                        </SelectItem>
                                        <SelectItem value="partenariat" className="text-gray-900 hover:bg-emerald-50 focus:bg-emerald-100 rounded-md mx-1 my-1">
                                            Partenariat Commercial
                                        </SelectItem>
                                        <SelectItem value="presse" className="text-gray-900 hover:bg-emerald-50 focus:bg-emerald-100 rounded-md mx-1 my-1">
                                            Presse, média & collaborations
                                        </SelectItem>
                                        <SelectItem value="immobilier" className="text-gray-900 hover:bg-emerald-50 focus:bg-emerald-100 rounded-md mx-1 my-1">
                                            Immobilier & développement d'enseigne
                                        </SelectItem>
                                        <SelectItem value="recrutement" className="text-gray-900 hover:bg-emerald-50 focus:bg-emerald-100 rounded-md mx-1 my-1">
                                            Recrutement
                                        </SelectItem>
                                        <SelectItem value="autre" className="text-gray-900 hover:bg-emerald-50 focus:bg-emerald-100 rounded-md mx-1 my-1">
                                            Autre
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="p-4 border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="space-y-1">
                                <Label htmlFor="message" className="text-sm font-semibold text-gray-800 flex items-center">
                                    Votre message <span className="text-red-500 ml-1">*</span>
                                </Label>
                                <Textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                    className="border-2 border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 min-h-[80px] resize-none rounded-lg text-gray-800 font-medium shadow-sm hover:border-gray-400 transition-colors duration-200 text-sm p-3"
                                    placeholder="Décrivez votre demande en détail..."
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Checkbox de consentement et bouton sur la même ligne */}
                    <div className="grid md:grid-cols-2 gap-4 items-end">
                        <div className="p-4 border-2 border-gray-200 rounded-lg shadow-sm">
                            <div className="flex items-start space-x-3">
                                <Checkbox
                                    id="accepteTraitement"
                                    checked={formData.accepteTraitement}
                                    onChange={(e) => handleInputChange('accepteTraitement', e.target.checked)}
                                    className="mt-1"
                                />
                                <Label
                                    htmlFor="accepteTraitement"
                                    className="text-sm text-gray-700 leading-relaxed cursor-pointer font-medium"
                                >
                                    En envoyant ce formulaire, vous acceptez le traitement de vos données personnelles pour recevoir une réponse à votre demande. <span className="text-red-500">*</span>
                                </Label>
                            </div>
                        </div>

                        {/* Bouton d'envoi */}
                        <div className="p-4">
                            <Button
                                type="submit"
                                disabled={!isFormValid || isSubmitting}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-600 border-2 border-emerald-700 hover:border-emerald-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:shadow-lg text-sm"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span className="text-sm">Envoi en cours...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center space-x-2">
                                        <Send className="w-4 h-4" />
                                        <span className="text-sm tracking-wide">ENVOYER MA DEMANDE</span>
                                    </div>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;