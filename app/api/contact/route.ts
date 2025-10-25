import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Créer le dossier data s'il n'existe pas
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Créer un fichier de contacts
    const contactsFile = path.join(dataDir, 'contacts.json');
    let contacts = [];

    // Lire les contacts existants
    if (fs.existsSync(contactsFile)) {
      const fileContent = fs.readFileSync(contactsFile, 'utf-8');
      contacts = JSON.parse(fileContent);
    }

    // Ajouter le nouveau contact
    const newContact = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      date: new Date().toISOString(),
      read: false,
    };

    contacts.push(newContact);

    // Sauvegarder dans le fichier
    fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));

    // Log dans la console serveur
    console.log('📧 Nouveau message de contact:');
    console.log(`Nom: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Sujet: ${subject}`);
    console.log(`Message: ${message}`);
    console.log('---');

    return NextResponse.json({
      success: true,
      message: 'Message envoyé avec succès! Nous vous répondrons bientôt.',
    });
  } catch (error) {
    console.error('Erreur lors de la soumission du formulaire:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
