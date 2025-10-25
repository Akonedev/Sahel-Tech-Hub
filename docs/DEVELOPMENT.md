# Guide de Développement - Sahel Tech Hub

## 🎯 Bonnes Pratiques

### Architecture du Projet

```
sahel-tech-hub/
├── app/                      # App Router Next.js
│   ├── (routes)/            # Routes organisées
│   ├── api/                 # API routes
│   ├── layout.tsx           # Layout racine
│   ├── page.tsx             # Page d'accueil
│   └── globals.css          # Styles globaux
│
├── components/              # Composants React
│   ├── layout/             # Layout (Header, Footer)
│   ├── sections/           # Sections de pages
│   ├── ui/                 # Composants UI (Shadcn)
│   └── shared/             # Composants partagés
│
├── lib/                    # Utilitaires & helpers
│   ├── utils.ts           # Fonctions utilitaires
│   ├── api.ts             # Client API
│   └── constants.ts       # Constantes
│
├── hooks/                  # Custom React hooks
├── types/                  # Types TypeScript
├── public/                 # Assets statiques
└── styles/                 # Styles additionnels
```

## 📝 Conventions de Code

### Naming Conventions

```typescript
// Composants: PascalCase
export default function Hero() {}
export function UserProfile() {}

// Fichiers composants: PascalCase.tsx
Hero.tsx
UserProfile.tsx

// Hooks: camelCase avec préfixe 'use'
export function useAuth() {}
export function useLocalStorage() {}

// Utils: camelCase
export function formatDate() {}
export function validateEmail() {}

// Constants: UPPER_SNAKE_CASE
export const API_BASE_URL = "https://api.example.com";
export const MAX_ITEMS = 100;

// Types/Interfaces: PascalCase
interface UserData {}
type ServiceType = "web" | "mobile";
```

### Structure des Composants

```typescript
"use client"; // Si client component

import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { PropsType } from "@/types";

// 1. Types/Interfaces
interface ComponentProps {
  title: string;
  onAction?: () => void;
}

// 2. Composant principal
export default function Component({ title, onAction }: ComponentProps) {
  // 3. Hooks
  const [state, setState] = useState(false);
  
  // 4. Fonctions helpers
  const handleClick = () => {
    setState(true);
    onAction?.();
  };
  
  // 5. JSX
  return (
    <div className="container">
      <h1>{title}</h1>
      <Button onClick={handleClick}>Action</Button>
    </div>
  );
}
```

## 🎨 Styling avec Tailwind

### Bonnes Pratiques

```typescript
// ✅ BON: Classes organisées et lisibles
<div className="flex items-center justify-between p-4 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">

// ❌ MAUVAIS: Trop de classes sur une ligne
<div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">

// ✅ SOLUTION: Extraire dans un composant ou utiliser cn()
import { cn } from "@/lib/utils";

const cardStyles = cn(
  "flex items-center justify-between p-4 rounded-lg",
  "bg-gradient-to-r from-blue-500 to-purple-600",
  "hover:from-blue-600 hover:to-purple-700",
  "transform hover:scale-105 transition-all duration-300",
  "shadow-lg hover:shadow-xl"
);

<div className={cardStyles}>
```

### Responsive Design

```typescript
// Mobile-first approach
<div className="
  grid grid-cols-1       // Mobile: 1 colonne
  md:grid-cols-2         // Tablette: 2 colonnes
  lg:grid-cols-3         // Desktop: 3 colonnes
  gap-4 md:gap-6 lg:gap-8
">
```

## ⚡ Performance

### Optimisation des Images

```typescript
import Image from "next/image";

// ✅ BON
<Image
  src="/hero.jpg"
  alt="Description"
  width={1920}
  height={1080}
  priority // Pour les images above the fold
  placeholder="blur"
/>

// ❌ ÉVITER
<img src="/hero.jpg" alt="Description" />
```

### Code Splitting

```typescript
// Lazy loading des composants
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <p>Chargement...</p>,
  ssr: false // Si pas besoin de SSR
});
```

### Memoization

```typescript
import { useMemo, useCallback } from "react";

function Component({ items }) {
  // Mémoriser les calculs coûteux
  const expensiveCalculation = useMemo(() => {
    return items.reduce((acc, item) => acc + item.value, 0);
  }, [items]);
  
  // Mémoriser les callbacks
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);
  
  return <div>{expensiveCalculation}</div>;
}
```

## 🔒 Sécurité

### Validation des Données

```typescript
// Utiliser Zod pour la validation
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(8, "Minimum 8 caractères"),
  age: z.number().min(18).max(120),
});

type FormData = z.infer<typeof formSchema>;
```

### Sanitization

```typescript
// Ne jamais faire confiance aux données utilisateur
import DOMPurify from "isomorphic-dompurify";

const cleanHTML = DOMPurify.sanitize(userInput);
```

## 🧪 Testing

### Tests Unitaires

```typescript
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
  
  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    screen.getByText("Click me").click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 📦 State Management

### Server State (React Query)

```typescript
"use client";

import { useQuery } from "@tanstack/react-query";

function UserList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("/api/users");
      return res.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  
  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error.message}</div>;
  
  return <ul>{data.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
}
```

### Client State (Zustand)

```typescript
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartStore {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  clear: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => ({ 
        items: [...state.items, item] 
      })),
      removeItem: (id) => set((state) => ({ 
        items: state.items.filter(i => i.id !== id) 
      })),
      clear: () => set({ items: [] }),
    }),
    { name: "cart-storage" }
  )
);
```

## 🌐 Internationalisation

```typescript
// app/[locale]/layout.tsx
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });
  
  if (!["fr", "en"].includes(locale)) {
    notFound();
  }
  
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
```

## 🔄 API Routes

```typescript
// app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = userSchema.parse(body);
    
    // Logique métier
    const user = await createUser(validatedData);
    
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
```

## 📊 Analytics & Monitoring

```typescript
// lib/analytics.ts
export const trackEvent = (
  name: string,
  properties?: Record<string, any>
) => {
  if (typeof window !== "undefined") {
    // Google Analytics
    window.gtag?.("event", name, properties);
    
    // Custom analytics
    fetch("/api/analytics", {
      method: "POST",
      body: JSON.stringify({ name, properties }),
    });
  }
};

// Utilisation
import { trackEvent } from "@/lib/analytics";

function Component() {
  const handleClick = () => {
    trackEvent("button_click", {
      button_name: "cta_hero",
      page: "/",
    });
  };
  
  return <Button onClick={handleClick}>CTA</Button>;
}
```

## 🚀 Build & Déploiement

### Scripts Utiles

```json
{
  "scripts": {
    "dev": "next dev -p 34500",
    "build": "next build",
    "start": "next start -p 34500",
    "lint": "eslint",
    "lint:fix": "eslint --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write .",
    "test": "jest",
    "test:watch": "jest --watch",
    "analyze": "ANALYZE=true next build"
  }
}
```

### Pre-commit Hooks

```bash
# .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
npm run type-check
npm test
```

## 📚 Documentation du Code

```typescript
/**
 * Formate une date selon le format français
 * @param date - Date à formater
 * @param options - Options de formatage Intl
 * @returns Date formatée en français
 * @example
 * formatDate(new Date(), { dateStyle: "long" })
 * // "15 janvier 2024"
 */
export function formatDate(
  date: Date,
  options?: Intl.DateTimeFormatOptions
): string {
  return new Intl.DateTimeFormat("fr-FR", options).format(date);
}
```

## 🔧 Configuration Recommandée

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### .eslintrc.json

```json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

## 🎓 Ressources d'Apprentissage

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)

## 🤝 Contribution

Avant de contribuer:
1. Lire ce guide
2. Suivre les conventions
3. Tester localement
4. Créer une PR descriptive

---

**Maintenu par l'équipe Sahel Tech Hub**
