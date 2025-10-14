## 📘 Dokument: Wytyczne dla generowania promptów UI

### Cel
Ten dokument opisuje sposób, w jaki RAG powinien generować **prompty opisujące komponenty interfejsu użytkownika (UI)** w sposób spójny, zrozumiały i użyteczny dla narzędzi generujących kod front-endowy lub projekty wizualne (np. w Figma, React, Tailwind CSS itp.).

---

### 🎯 Główna zasada
RAG **nie generuje gotowego kodu CSS/HTML/React**, lecz **opisuje komponent UI w języku naturalnym**, w taki sposób, by inny model lub system mógł na jego podstawie wygenerować projekt interfejsu.

Opis powinien zawierać **intencję, strukturę, styl i zachowanie** komponentu.

---

### 🧱 Struktura odpowiedzi RAG

Każdy prompt UI powinien być zbudowany z następujących sekcji:

#### 1. **Nazwa komponentu**
Krótka, jednoznaczna nazwa, np.  
> "Primary Button", "Search Bar", "Card – User Profile", "Navigation Sidebar".

#### 2. **Cel i kontekst użycia**
Opis, **do czego służy komponent** i **w jakim kontekście** będzie używany, np.:  
> „Ten przycisk służy jako główna akcja w formularzu logowania.”  
> „Karta prezentuje podstawowe dane użytkownika wraz ze zdjęciem profilowym.”

#### 3. **Specyfikacja stylu i układu**
Szczegółowy opis wizualny i strukturalny komponentu w języku naturalnym:
- układ (`flex`, `grid`, pozycjonowanie),
- odstępy (`padding`, `margin`, `gap`),
- kolory (`background`, `text`, `border`),
- typografia (`font-size`, `font-weight`),
- wymiary (wysokość, szerokość, proporcje),
- zaokrąglenia, cienie, stany interakcji.

> Przykład:
> - Układ: flex poziomy, wyśrodkowany  
> - Kolor tła: #186BDC  
> - Kolor tekstu: biały  
> - Promień rogów: 8px  
> - Efekt hover: delikatne rozjaśnienie koloru tła  

#### 4. **Zachowanie i interakcje**
Opis reakcji komponentu na działania użytkownika:
- stany (hover, active, focus, disabled),
- animacje,
- możliwe akcje (np. otwarcie modala, wysłanie formularza),
- dostępność (aria-label, focus states itp.).

#### 5. **Przykład użycia**
Krótki opis kontekstu, w którym komponent się pojawia:
> „Używany w nagłówku strony do wywoływania panelu logowania.”  
> „Wyświetlany w liście produktów w sklepie.”

---

### 🧩 Przykład pełnej odpowiedzi RAG

#### Komponent: **Primary Button**

**Cel:**  
Służy do wykonywania głównej akcji w interfejsie, np. „Zapisz”, „Wyślij”, „Potwierdź”.

**Styl i układ:**  
- Flex poziomy, wyśrodkowany  
- Padding: 12px góra/dół, 24px boki  
- Szerokość: 93px, wysokość: 48px  
- Kolor tła: #186BDC  
- Kolor tekstu: biały  
- Promień rogów: 8px  
- Odstęp między ikoną a tekstem: 10px  

**Zachowanie:**  
- Hover: jaśniejszy odcień tła (#1E75E6)  
- Active: ciemniejszy odcień (#155BBE)  
- Disabled: szary kolor (#B0B0B0), brak cienia  
- Fokus: delikatna obwódka koloru akcentu (#6AA9FF)

**Przykład użycia:**  
> Główny przycisk akcji w formularzu rejestracyjnym lub modalu potwierdzenia.

---

### 🧠 Dodatkowe wytyczne dla RAG

1. **Zawsze opisuj intencję i funkcję komponentu, nie tylko wygląd.**  
   → To pozwala modelom generującym UI dopasować styl do kontekstu.

2. **Stosuj język opisowy, nie techniczny, jeśli użytkownik nie prosi o kod.**

3. **Używaj spójnych kategorii kolorów i nazw stylów:**  
   - Primary / Secondary / Tertiary  
   - Accent / Neutral / Background  
   - Success / Warning / Error  

4. **Uwzględniaj dostępność (a11y)** – np. kontrast, widoczny focus, alt text.

5. **Uwzględniaj systemy projektowe**, jeśli są znane (np. Material Design, Tailwind, Asseco Design System).

6. **Nie generuj zbyt ogólnych promptów.**  
   Opis powinien umożliwiać dokładne odtworzenie wizualne komponentu.

---

### 📑 Format końcowy promptu

RAG powinien zwracać opis w następującym formacie:

```
### [Nazwa komponentu]

**Cel:**
...

**Styl i układ:**
...

**Zachowanie:**
...

**Przykład użycia:**
...
```
