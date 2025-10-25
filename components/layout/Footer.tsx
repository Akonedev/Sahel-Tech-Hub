"use client";

import Link from "next/link";
import { Code2, Mail, Phone, MapPin, ArrowUpRight, Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  services: [
    { label: "Développement Web", href: "#services" },
    { label: "Applications Mobiles", href: "#services" },
    { label: "E-Commerce", href: "#services" },
    { label: "ERP & CRM", href: "#services" },
  ],
  formations: [
    { label: "Programmation", href: "#formations" },
    { label: "Data Science & IA", href: "#formations" },
    { label: "Bases de Données", href: "#formations" },
    { label: "Entreprises", href: "#formations" },
  ],
  entreprise: [
    { label: "À propos", href: "#about" },
    { label: "Incubateur", href: "#incubateur" },
    { label: "Blog", href: "#blog" },
    { label: "Carrières", href: "#careers" },
  ],
};

const socialLinks = [
  { 
    name: "Facebook", 
    icon: Facebook, 
    href: "https://facebook.com/saheltechhub",
    color: "hover:text-blue-600"
  },
  { 
    name: "Twitter", 
    icon: Twitter, 
    href: "https://twitter.com/saheltechhub",
    color: "hover:text-sky-500"
  },
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    href: "https://linkedin.com/company/saheltechhub",
    color: "hover:text-blue-700"
  },
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://instagram.com/saheltechhub",
    color: "hover:text-pink-600"
  },
  { 
    name: "YouTube", 
    icon: Youtube, 
    href: "https://youtube.com/@saheltechhub",
    color: "hover:text-red-600"
  },
  { 
    name: "GitHub", 
    icon: Github, 
    href: "https://github.com/saheltechhub",
    color: "hover:text-gray-900 dark:hover:text-white"
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent/5 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <Code2 className="h-8 w-8 text-primary transition-transform group-hover:rotate-12" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Sahel Tech Hub
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Votre partenaire de confiance pour la transformation digitale en Afrique de l&apos;Ouest.
              Solutions IT complètes et formations professionnelles.
            </p>
            
            {/* Réseaux Sociaux */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3">Suivez-nous</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 border border-border text-muted-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} hover:border-current`}
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Zone du Sahel, Afrique de l&apos;Ouest</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+XXX XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@saheltechhub.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Formations</h3>
            <ul className="space-y-2">
              {footerLinks.formations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.entreprise.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sahel Tech Hub. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Conditions d&apos;utilisation
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
