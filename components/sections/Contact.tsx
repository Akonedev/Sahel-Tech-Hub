"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, Phone, Mail, Clock, Send, MessageCircle, 
  Facebook, Twitter, Linkedin, Instagram 
} from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    details: ["Zone du Sahel", "Afrique de l'Ouest"],
  },
  {
    icon: Phone,
    title: "Téléphone",
    details: ["+XXX XX XX XX XX", "+XXX XX XX XX XX"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@saheltechhub.com", "support@saheltechhub.com"],
  },
  {
    icon: Clock,
    title: "Horaires",
    details: ["Lun - Ven: 8h - 18h", "Sam: 9h - 13h"],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#F5F5DC] to-[#DEB887]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4" variant="outline">Contact</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Parlons de Votre <span className="text-primary">Projet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Notre équipe est prête à vous accompagner dans votre transformation digitale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nom complet</label>
                      <Input placeholder="Votre nom" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="votre@email.com" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Téléphone</label>
                      <Input placeholder="+XXX XX XX XX XX" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Société</label>
                      <Input placeholder="Nom de votre entreprise" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Service souhaité</label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option>Développement Web</option>
                      <option>Application Mobile</option>
                      <option>E-Commerce</option>
                      <option>ERP/CRM</option>
                      <option>Formation</option>
                      <option>Incubateur</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Décrivez votre projet ou vos besoins..."
                      rows={6}
                    />
                  </div>

                  <Button size="lg" className="w-full bg-gradient-to-r from-primary to-blue-600">
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">{info.title}</h4>
                        {info.details.map((detail) => (
                          <p key={detail} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <Card className="bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20">
              <CardContent className="p-6">
                <MessageCircle className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-bold mb-2">Chat en Direct</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Discutez avec notre équipe pour des réponses rapides
                </p>
                <Button variant="outline" className="w-full">
                  Démarrer le chat
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold mb-4">Suivez-nous</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
