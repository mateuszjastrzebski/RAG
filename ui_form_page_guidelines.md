# Wytyczne UX/UI: Formularze (Form Pages)
### Kontekst
Ekrany formularzowe w Asseco ABP stanowią jeden z podstawowych typów widoków aplikacji transakcyjnej. Występują w procesach takich jak: składanie wniosków, wykonywanie przelewów, edycja danych, tworzenie celów oszczędnościowych, wiadomości itp. 
Wszystkie bazują na spójnym wzorcu **Form Page Layout**.

---

## 1) Układ ogólny (layout)
Formularz zawsze osadzony jest w **jednokolumnowym układzie centralnym**, z czytelnym marginesem po bokach (ok. 96–120px) oraz pionowym wyrównaniem treści do górnej krawędzi ekranu.

### Struktura:
```
<Header z tytułem>
<FormWrapper>
  <Progress / Tabs (jeśli dotyczy)>
  <FormContent>
    <Section>...</Section>
    <Section>...</Section>
    ...
  </FormContent>
  <FormActions>
    [Primary button]
    [Secondary button]
    [Tertiary text-button / red action]
  </FormActions>
</FormWrapper>
```

### Zasady:
- Formularz nie jest osadzony w karcie (brak borderów wokół całości).
- Formularz wypełnia szerokość **do 960–1040px**.
- Lewa kolumna boczna (nawigacja) jest stała.
- Scroll dotyczy tylko treści formularza, nie całego layoutu.

---

## 2) Nagłówek formularza
### Zawartość:
- **Tytuł formularza** (np. „Wykonaj przelew”, „Wniosek o zmianę limitu”) – H1 / `text-2xl font-semibold`.
- (opcjonalnie) **opis pomocniczy** lub pasek postępu (`Progress bar`) pod tytułem.
- (opcjonalnie) **kontekst procesu** – np. kroki (1/4), breadcrumbs lub zakładki (np. „Zwykły / Walutowy / Własny”).

### Wytyczne:
- Odstęp między tytułem a pierwszą sekcją: **32px**.
- Pasek postępu / zakładki – w poziomie, wyrównane do lewej krawędzi formularza.
- Brak zbędnych ramek i linii – separacja przestrzenią.

---

## 3) Struktura formularza (Form Content)
Formularz dzieli się na logiczne sekcje (np. „Dane osobowe”, „Źródła dochodów”, „Szczegóły”, „Do”, „Z rachunku”).  
Każda sekcja ma:
- **etykietę sekcji** (`H2`, kolor neutral-700, font-semibold),
- **grupę pól (inputów)** w pionie,
- **równą szerokość elementów wejściowych** (min. 320px, max. 640px).

### Zasady układu pól:
- Pola są ułożone **w jednej kolumnie** lub w **dwóch kolumnach po 50%**, w zależności od treści.
- W jednej sekcji można mieszać układy (np. pierwsze 2 pola obok siebie, kolejne w pionie).
- Każdy `input` / `select` wygląda zgodnie z design_system_inputs.md
- Odstęp między polami pionowo: **24px**.
- Odstęp między sekcjami: **48–64px**.
- Checkboxy i opcje (`radio`) umieszczane są zawsze **poniżej** grupy, nie obok.

### Wyrównanie:
- Label i input zawsze w jednej osi pionowej.
- Inputy mają szerokość zgodnei z oczekiwaną wewnątrz długością znaków
- Przy bardzo długich formularzach stosuj podział na bloki z subtelną separacją (`border-t border-neutral-200 mt-12 pt-8`).

---

## 4) Komponenty i zachowania interaktywne
### Inputs
Zgodnie z design_system_inputs.md

### Checkbox / Radio
- Wyrównane do lewej, label po prawej.
- Grupy opcji (radio) mają odstęp 16px między elementami.
- Przy „split payment”, „oszczędzaj kwotę…” — całość grupowana w box z cienką ramką.

### Select (dropdown)
- Styl identyczny jak input.
- Strzałka po prawej (`chevron-down`).
- Maksymalna szerokość: taka jak input (640px).

---

## 5) Grupowanie treści i logika sekcji

| Typ sekcji | Zastosowanie | Zasady |
|-------------|---------------|--------|
| **Informacyjne (np. „Z rachunku”, „Do”, „Szczegóły”)** | Formularze transakcyjne | Sekcje rozdzielone nagłówkiem i odstępem 48px; każda zawiera 3–6 pól |
| **Decyzyjne (np. wybór sposobu realizacji)** | Radio buttony lub przełączniki | Wyraźna etykieta nad grupą |
| **Podsumowujące (np. „Twój cel”, „Sposoby oszczędzania”)** | Opcje z checkboxami, opcjonalne pola | Wyróżnione nagłówkiem sekcji i większym odstępem przed |
| **Zaawansowane / dodatkowe (np. „Dodaj zobowiązania”, „Podziel płatność”)** | Opcjonalne sekcje | Zawijane w `fieldset` lub `Card` z cienką ramką (#E4E8EB), włączane checkboxem |

---

## 6) Odstępy i rytm pionowy
- Między tytułem sekcji a pierwszym polem: **24px**
- Między kolejnymi polami: **24px**
- Między sekcjami: **48–64px**
- Między sekcją a grupą przycisków (actions): **64px**
- Padding boczny formularza: **48px** (desktop)
- Minimalny margines dolny (jeśli długi formularz): **96px**

---

## 7) Przyciski (Form Actions)
Sekcja akcji (przycisków) **zawsze znajduje się na dole formularza**.  
Układ: przyciski w jednej linii, wyśrodkowane w osi X formularza.

### Kolejność:
1. **Primary** – niebieski (`bg-primary-600 hover:bg-primary-700 text-white`)
   - np. „Dalej”, „Akceptuj”, „Wyślij”
2. **Secondary** – konturowy (`border border-neutral-300 text-neutral-700`)
   - np. „Wstecz”, „Zapisz”, „Dodaj do koszyka zleceń”
3. **Tertiary / destructive** – tekstowy czerwony (`text-red-600 hover:text-red-700`)
   - np. „Anuluj wniosek”, „Usuń”, „Odrzuć”

### Zasady:
- Odstęp między przyciskami: **16px**
- Primary ma zawsze **większy wizualny ciężar** (kolor, kontrast).
- Przycisk czerwony (danger) zawsze **ostatni w grupie**.
- Przy bardzo długich formularzach warto dodać sticky footer (np. CTA widoczne przy scrollu).

---

## 8) Stany formularza
### Loading
- Po kliknięciu przycisku primary, przycisk przechodzi w stan ładowania (`spinner` + disabled).
- Pola nieaktywne (`disabled`).
- Brak migotania layoutu.

### Sukces / Błąd
- Po zatwierdzeniu formularza pojawia się ekran podsumowania lub notyfikacja toast (`success` / `error`).
- W przypadku błędu – czerwony opis pod polem, ewentualnie komunikat globalny nad formularzem.

---

## 9) Walidacja i formatowanie
- Walidacja **inline** – aktywowana po blurze lub zmianie wartości.
- Komunikaty krótkie, zaczynające się małą literą (np. „to pole jest wymagane”).
- Dla pól numerycznych – prawidłowe formatowanie (np. `1 000,00 PLN`).
- Data – zawsze z komponentem kalendarza (`datepicker`), z walidacją zakresu.

---

## 10) Typowe układy sekcji

### A) Formularz prosty (np. „Utwórz cel oszczędnościowy”)
- 3–4 sekcje, każda po 2–3 pola
- Sekcje: „Twój cel”, „Szczegóły”, „Sposoby oszczędzania”
- Na końcu: `Akceptuj` + `Anuluj`

### B) Formularz transakcyjny (np. „Wykonaj przelew”)
- Sekcje: „Z rachunku”, „Do”, „Szczegóły”
- Tabbar na górze (Zwykły / Walutowy / Własny / Podatkowy)
- Pole kwoty – wyróżnione, szersze
- Sekcje „split payment” / „VAT” – zwijane opcjonalnie
- Na dole CTA: `Akceptuj` / `Dodaj do koszyka zleceń`

### C) Formularz wieloetapowy (np. „Wniosek o kartę”)
- Kroki (Progress bar lub Steps: np. 1/4)
- Każdy krok = osobny ekran z własnym zestawem pól
- Przycisk `Dalej` / `Wstecz` / `Zakończ`
- W prawym dolnym rogu przycisk „Anuluj wniosek” (zawsze czerwony)

---

## 11) Dodatkowe zalecenia projektowe
- Formularze **nie powinny mieć bocznych kart** — tylko poziome kroki lub proste nagłówki.
- Treść jest **centrowana**, ale nie w 100% symetryczna – label i input wyrównane do lewej.
- Maksymalna liczba pól w jednej sekcji: **6–8**, w dłuższych formularzach – segmentacja.
- Komponenty akcji (`select`, `radio`, `datepicker`) zawsze renderowane inline w sekcji – nigdy w modalu.

---

## 12) Typografia i kolory
| Element | Styl | Kolor |
|----------|------|--------|
| Tytuł formularza | `text-2xl font-semibold` | `#1A1A1A` |
| Etykieta sekcji | `text-base font-semibold` | `#2D3748` |
| Label pola | `text-sm font-medium` | `#4A5568` |
| Tekst pomocniczy | `text-sm` | `#6B7280` |
| Tło formularza | biały (`#FFFFFF`) | |
| Border inputu | `#DDE1E6` | |
| Primary button | `#0066FF` | |
| Secondary border | `#CBD5E0` | |
| Error | `#DC2626` | |

---

## 13) Przykładowe komponenty shadcn/ui używane w implementacji
| Typ pola | Komponent |
|-----------|------------|
| Text input | `<Input />` |
| Select | `<Select />` + `<SelectItem />` |
| Checkbox | `<Checkbox />` |
| Radio group | `<RadioGroup />` |
| Date | `<Popover>` + `<Calendar />` |
| Button | `<Button variant="default" />` / `<Button variant="outline" />` |
| Section title | `<Typography variant="h2" />` |
| Field wrapper | `<FormField>` z `<Label>` i `<FormMessage>` |

---

**Tagi:** `#form`, `#layout`, `#fields`, `#buttons`, `#spacing`, `#UXpatterns`, `#bankingUI`, `#ABP`
