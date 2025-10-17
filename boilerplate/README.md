# RAG Boilerplate - React + TypeScript + Vite + TailwindCSS

Gotowy boilerplate do szybkiego rozpoczęcia pracy z React i TypeScript, skonfigurowany zgodnie z wytycznymi RAG.

## 🚀 Szybki start

### Wymagania
- Node.js (LTS) - zalecana wersja 18+
- npm lub yarn

### Instalacja i uruchomienie

1. **Przejdź do folderu boilerplate:**
   ```bash
   cd RAG/boilerplate
   ```

2. **Zainstaluj zależności:**
   ```bash
   npm install
   ```

3. **Uruchom serwer deweloperski:**
   ```bash
   npm run dev
   ```

4. **Otwórz przeglądarkę:**
   Aplikacja będzie dostępna pod adresem `http://localhost:5173`

## 📁 Struktura projektu

```
src/
├── components/          # Komponenty React
│   └── Layout.tsx      # Główny layout aplikacji
├── pages/              # Strony aplikacji
│   └── HomePage.tsx    # Strona główna
├── hooks/              # Custom hooks
│   └── index.ts        # Eksportowane hooks
├── utils/              # Funkcje pomocnicze
│   └── index.ts        # Eksportowane utilities
├── types/              # Definicje typów TypeScript
│   └── index.ts        # Główne typy
├── assets/             # Zasoby statyczne
├── App.tsx             # Główny komponent aplikacji
├── main.tsx            # Punkt wejścia aplikacji
└── index.css           # Style globalne z TailwindCSS
```

## 🎨 Dostępne komponenty i style

### Klasy CSS
- `.btn-primary` - Przycisk główny (niebieski)
- `.btn-secondary` - Przycisk pomocniczy (szary)
- `.input-field` - Pole input z focus states
- `.card` - Karta z cieniem i obramowaniem

### Kolory
- **Primary**: Niebieska paleta (primary-50 do primary-900)
- **Secondary**: Szara paleta (secondary-50 do secondary-900)

### Fonty
- **Inter** - Główny font aplikacji

## 🛠 Dostępne skrypty

```bash
npm run dev          # Uruchom serwer deweloperski
npm run build        # Zbuduj aplikację do produkcji
npm run preview      # Podgląd zbudowanej aplikacji
npm run lint         # Sprawdź kod ESLint
npm run lint:fix     # Napraw błędy ESLint automatycznie
npm run type-check   # Sprawdź typy TypeScript
npm run clean        # Wyczyść cache i build
```

## 📦 Zainstalowane biblioteki

### Główne zależności
- **React 19** - Biblioteka UI
- **TypeScript** - Typowanie statyczne
- **Vite** - Build tool i dev server
- **TailwindCSS** - Framework CSS
- **React Router** - Routing
- **Lucide React** - Ikony

### Dev dependencies
- **ESLint** - Linter
- **PostCSS** - Przetwarzanie CSS
- **Autoprefixer** - Automatyczne prefiksy CSS

## 🎯 Jak używać

1. **Dodaj nowe strony** w folderze `src/pages/`
2. **Utwórz komponenty** w folderze `src/components/`
3. **Dodaj routing** w `src/App.tsx`
4. **Użyj gotowych klas CSS** lub stwórz własne z TailwindCSS
5. **Dodaj typy** w `src/types/index.ts`
6. **Użyj gotowych hooks** z `src/hooks/index.ts`

## 🔧 Konfiguracja

### TailwindCSS
Konfiguracja w `tailwind.config.js` zawiera:
- Custom kolory (primary, secondary)
- Font Inter
- Responsive breakpoints

### TypeScript
Konfiguracja w `tsconfig.json` zawiera:
- Strict mode
- Path mapping
- React JSX

## 📝 Przykłady użycia

### Przycisk
```tsx
<button className="btn-primary">
  Kliknij mnie
</button>
```

### Pole input
```tsx
<input 
  type="text" 
  placeholder="Wpisz tekst" 
  className="input-field"
/>
```

### Karta
```tsx
<div className="card">
  <h2>Tytuł karty</h2>
  <p>Treść karty</p>
</div>
```

### Custom hook
```tsx
import { useForm } from './hooks';

const { values, setValue, errors } = useForm({
  name: '',
  email: ''
});
```

## 🚀 Gotowy do pracy!

Teraz możesz od razu przejść do generowania ekranów zgodnie z wytycznymi RAG. Wszystko jest skonfigurowane i gotowe do użycia!