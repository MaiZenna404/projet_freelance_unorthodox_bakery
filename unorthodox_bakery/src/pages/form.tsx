import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
        <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-gray-900">
                            CONTACTEZ-NOUS
                        </CardTitle>
                        <p className="text-gray-600">
                            Nous serions ravis de vous entendre. Envoyez-nous un message !
                        </p>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {/* Nom et Prénom */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="nom" className="text-sm font-medium text-gray-700">
                                        Nom *
                                    </Label>
                                    <Input
                                        id="nom"
                                        type="text"
                                        value={formData.nom}
                                        onChange={(e) => handleInputChange('nom', e.target.value)}
                                        className="bg-gray-50/50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="prenom" className="text-sm font-medium text-gray-700">
                                        Prénom *
                                    </Label>
                                    <Input
                                        id="prenom"
                                        type="text"
                                        value={formData.prenom}
                                        onChange={(e) => handleInputChange('prenom', e.target.value)}
                                        className="bg-gray-50/50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email et Téléphone */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                        Email *
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className="bg-gray-50/50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="telephone" className="text-sm font-medium text-gray-700">
                                        Téléphone fixe ou portable
                                    </Label>
                                    <Input
                                        id="telephone"
                                        type="tel"
                                        value={formData.telephone}
                                        onChange={(e) => handleInputChange('telephone', e.target.value)}
                                        className="bg-gray-50/50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                                    />
                                </div>
                            </div>

                            
                            <div className="space-y-2 ">
                                <Label htmlFor="objet" className="text-sm font-medium text-gray-700">
                                    Objet *
                                </Label>
                                <Select
                                    value={formData.objet}
                                    onValueChange={(value) => handleInputChange('objet', value)}
                                >
                                    <SelectTrigger className="!bg-white border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 text-gray-900 hover:bg-gray-50">
                                        <SelectValue placeholder="Sélectionnez un objet" className="text-gray-500" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white border-gray-200">
                                        <SelectItem value="commande" className="text-gray-900 hover:bg-emerald-50 focus:bg-emerald-50">
                                            Commande spéciale
                                        </SelectItem>
                                        <SelectItem value="evenement" className="text-gray-900 hover:bg-emerald-50 focus:bg-emerald-50">
                                            Événement privé
                                        </SelectItem>
                                        <SelectItem value="partenariat" className="text-gray-900 hover:bg-emerald-50 focus:bg-emerald-50">
                                            Partenariat
                                        </SelectItem>
                                        <SelectItem value="feedback" className="text-gray-900 hover:bg-emerald-50 focus:bg-emerald-50">
                                            Retour d'expérience
                                        </SelectItem>
                                        <SelectItem value="reclamation" className="text-gray-900 hover:bg-emerald-50 focus:bg-emerald-50">
                                            Réclamation
                                        </SelectItem>
                                        <SelectItem value="autre" className="text-gray-900 hover:bg-emerald-50 focus:bg-emerald-50">
                                            Autre
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                                    Votre message *
                                </Label>
                                <Textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                    className="bg-gray-50/50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 min-h-[120px] resize-none"
                                    placeholder="Décrivez votre demande en détail..."
                                    required
                                />
                            </div>

                            {/* Checkbox de consentement */}
                            <div className="flex items-start space-x-3">
                                <Checkbox
                                    id="accepteTraitement"
                                    checked={formData.accepteTraitement}
                                    onChange={(e) => handleInputChange('accepteTraitement', e.target.checked)}
                                    className="mt-1"
                                />

                                <Label
                                    htmlFor="accepteTraitement"
                                    className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                                >
                                    En envoyant ce formulaire, vous acceptez le traitement de vos données personnelles pour recevoir une réponse à votre demande. *
                                </Label>
                            </div>

                            {/* Bouton d'envoi - Hover corrigé */}
                            <Button
                                type="submit"
                                onClick={handleSubmit}
                                disabled={!isFormValid || isSubmitting}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-600"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Envoi en cours...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center space-x-2">
                                        <Send className="w-4 h-4" />
                                        <span>ENVOYER MA DEMANDE</span>
                                    </div>
                                )}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default ContactForm;