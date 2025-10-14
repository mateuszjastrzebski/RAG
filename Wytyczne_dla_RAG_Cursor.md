## 📘 Dokument: Wytyczne dla generowania promptów UI do narzędzia Cursor

### Cel
Ten dokument określa sposób, w jaki RAG powinien generować **prompty do wykorzystania w narzędziu Cursor**, aby umożliwić modelowi tworzenie **kompletnego kodu interfejsu użytkownika (UI)** wraz z **architekturą informacji** i **strukturą logiczną komponentów**.

Celem nie jest bezpośrednie wygenerowanie kodu przez RAG, ale **przygotowanie opisu**, który umożliwi Cursorowi zrozumienie kontekstu, funkcji i hierarchii elementów interfejsu oraz napisanie spójnego, semantycznego kodu.

---

### 🎯 Główna zasada
RAG **tworzy precyzyjny opis prompta dla Cursor**, który:
1. Zawiera **intencję funkcjonalną** komponentu (co ma robić).  
2. Zawiera **strukturę informacyjną** (jak dane i akcje są zorganizowane).  
3. Zawiera **opis wizualny i UX** (jak ma wyglądać i reagować).  
4. Nie wymaga znajomości technologii – Cursor sam decyduje o użytym frameworku lub bibliotece.

---

### 🧱 Struktura prompta dla Cursor

Każdy prompt powinien zawierać następujące sekcje:

#### 1. **Nazwa komponentu lub widoku**
Krótka i jednoznaczna, np.  
> „Dashboard użytkownika”, „Panel logowania”, „Karta produktu”, „Przycisk akcji”.

#### 2. **Cel i funkcja komponentu**
Opisuje **co komponent robi**, **dla kogo** jest przeznaczony i **dlaczego istnieje**.  
> „Panel służy do przeglądania statystyk użytkownika, z możliwością filtrowania danych.”  
> „Formularz logowania umożliwia wprowadzenie adresu e-mail i hasła oraz przejście do resetu hasła.”

#### 3. **Architektura informacji**
Opisuje **hierarchię, relacje i zależności** pomiędzy elementami interfejsu.  
Powinien obejmować:
- główne sekcje (np. header, body, footer),
- grupy elementów (np. pola formularza, karty, listy),
- sposób prezentacji danych (np. tabele, listy, grafy),
- przepływ informacji (np. dane z API, interakcje między komponentami).

> Przykład:
> - Header zawiera logo, nazwę aplikacji i menu użytkownika.  
> - Body prezentuje listę raportów w formie kart.  
> - Każda karta zawiera nazwę, status i przycisk „Zobacz szczegóły”.  
> - Footer zawiera nawigację paginacyjną.  

#### 4. **Opis wizualny i UX**
Opisuje, jak komponent **powinien wyglądać i reagować**.  
Nie jest to CSS, lecz logiczne wytyczne dla stylu i zachowania:
- typ układu (`flex`, `grid`, `cards`, `list`),
- odstępy, kolory i proporcje,
- hierarchia wizualna (priorytety treści),
- stany interakcji (hover, active, loading, disabled),
- komunikaty błędów i potwierdzenia,
- responsywność i zachowanie w mobilnym widoku.

> Przykład:
> - Układ w kolumnie, z wyrównaniem centralnym.  
> - Kolor przewodni: niebieski (#186BDC).  
> - Główne CTA wyróżnione w prawym dolnym rogu.  
> - Po kliknięciu „Zapisz” pojawia się spinner i komunikat „Zapisano pomyślnie”.

#### 5. **Logika danych i interakcji**
Opis, jak komponent komunikuje się z danymi lub innymi częściami aplikacji:
- dane wejściowe (props, API, formularze),
- dane wyjściowe (emitowane eventy, aktualizacje stanu),
- logika warunkowa (np. ukrywanie elementów po spełnieniu warunku),
- interakcje użytkownika (np. kliknięcia, drag & drop, scroll).

> Przykład:
> - Po wpisaniu tekstu w pole wyszukiwania, wyniki aktualizują się w czasie rzeczywistym.  
> - Po kliknięciu przycisku „Usuń” pojawia się modal z potwierdzeniem.  

#### 6. **Przykład kontekstu użycia**
Krótki opis miejsca, w którym komponent się pojawia, np.:
> „Wykorzystywany w sekcji ‘Zarządzanie użytkownikami’ w aplikacji administracyjnej.”  
> „Wyświetlany jako modal w procesie onboardingu.”

---

### 🧩 Przykład kompletnego prompta dla Cursor

#### Komponent: **Panel logowania**

**Cel:**  
Umożliwia użytkownikowi zalogowanie się do aplikacji przy użyciu e-maila i hasła.  

**Architektura informacji:**  
- Header: tytuł „Zaloguj się”  
- Body: dwa pola tekstowe (email, hasło), checkbox „Zapamiętaj mnie”  
- Footer: dwa przyciski — „Zaloguj się” (primary) i „Zapomniałeś hasła?” (link secondary)  

**Opis wizualny i UX:**  
- Układ: kolumnowy, wyśrodkowany pionowo i poziomo  
- Szerokość: max 400px  
- Kolor tła: biały, cień o lekkim rozmyciu  
- Główny przycisk: niebieski (#186BDC), promień rogów 8px  
- Po błędzie: pole podświetlone na czerwono, komunikat błędu poniżej pola  

**Logika danych i interakcji:**  
- Formularz waliduje poprawność e-maila i długość hasła  
- Po kliknięciu „Zaloguj się” wywoływana jest funkcja `handleLogin()`  
- Jeśli API zwróci błąd, wyświetlany jest komunikat „Nieprawidłowe dane logowania”  
- Jeśli logowanie się powiedzie, następuje przekierowanie do `/dashboard`  

**Kontekst użycia:**  
> Wykorzystywany jako główny ekran wejściowy w aplikacji webowej po uruchomieniu.

---

### 🧠 Dodatkowe wytyczne dla RAG

1. **Zawsze zaczynaj od funkcji, nie od wyglądu.**  
   – Cursor potrzebuje zrozumieć intencję, aby dobrać odpowiednie rozwiązania architektoniczne.

2. **Opisuj strukturę w sposób hierarchiczny.**  
   – Sekcje, grupy, elementy wewnętrzne — zachowaj kolejność logiczną.

3. **Unikaj języka technologicznego, chyba że użytkownik go wymaga.**  
   – Nie wymuszaj frameworków (React, Vue, itp.) — Cursor sam wybiera implementację.

4. **Uwzględniaj przepływ danych i interakcje.**  
   – Pomaga to Cursorowi zaprojektować właściwe hooki, API calls i eventy.

5. **Dla złożonych widoków podawaj także kontekst aplikacji.**  
   – Np. czy komponent działa w panelu admina, aplikacji mobilnej, formularzu onboardingu itp.

6. **Utrzymuj format Markdown.**  
   – Pomaga zachować czytelność i jednoznaczność struktur.

---

### 📑 Format końcowy promptu

Cursor powinien otrzymać opis w tym formacie:

```
### [Nazwa komponentu lub widoku]

**Cel:**
...

**Architektura informacji:**
...

**Opis wizualny i UX:**
...

**Logika danych i interakcji:**
...

**Kontekst użycia:**
...
```
