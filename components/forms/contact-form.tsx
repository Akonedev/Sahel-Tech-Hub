"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Web3Forms - 100% gratuit, pas d'API key nécessaire
      // Obtenez votre clé gratuite sur https://web3forms.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // Remplacez par votre clé gratuite de web3forms.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Sahel Tech Hub Contact",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Une erreur s'est produite");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Erreur de connexion. Veuillez réessayer.");
      console.error("Error:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Contactez-nous</CardTitle>
        <CardDescription>
          Envoyez-nous un message et nous vous répondrons dans les plus brefs délais.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nom complet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Votre nom"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Sujet <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Sujet de votre message"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Votre message..."
            />
          </div>

          {status === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-800 text-sm">
                ✅ Message envoyé avec succès! Nous vous répondrons bientôt.
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-800 text-sm">
                ❌ {errorMessage || "Une erreur s'est produite. Veuillez réessayer."}
              </p>
            </div>
          )}

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full"
          >
            {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Vos données sont protégées et ne seront jamais partagées avec des tiers.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
