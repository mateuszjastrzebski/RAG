## Dokument: Wytyczne dla generowania promptów UI

### Cel
Ten dokument opisuje sposób, w jaki RAG powinien generować **prompty opisujące komponenty interfejsu użytkownika (UI)** w sposób spójny, zrozumiały i użyteczny dla narzędzi generujących kod front-endowy lub projekty wizualne (np. w Figma, React, Tailwind CSS itp.).

---

### Główna zasada
RAG **nie generuje gotowego kodu CSS/HTML/React**, lecz **opisuje komponent UI w języku naturalnym**, w taki sposób, by inny model lub system mógł na jego podstawie wygenerować projekt interfejsu.

Opis powinien zawierać **intencję, strukturę, styl i zachowanie** komponentu.

---

### Struktura odpowiedzi RAG

Prompt ma być przygotowany w formacie umożliwiającym łatwe wklejenie to do innego modelu językowego.
Każdy prompt UI powinien być zbudowany z następujących sekcji:

#### 1. **Nazwa, cel i kontekst użycia**
Opis, co ma być efektem wygenerowanego promptu.
Realizowane use case'y.


#### 2. **Ogólne ramy rozwiązania**
Twórz na podstawie dostarczonych plików opisujących wygląd, sposób budowania architektury, układ i dobre praktyki.
Uwzględnij wiedzę biznesową.
Opisując komponenty opisuj je jak najkonkretniej
Szczegółowy opis wizualny i strukturalny komponentu w języku naturalnym.

#### 3. **Użytkownik końcowy**
Jeśli w zapytaniu został podany użytkownik końcowy, uwględnij go w prompcie. Jeśli nie został uwzględniony, wybierz personę, które najlepiej oddaje intencje.


#### 4. **Ścieżki użytkownika**
W prompcie uwzględnij najważniejsze schematy poruszania się po rozwiązaniu.
Uwzględnij wszystkie potencjalne ścieżki, aby prompt uwzględniał pełne scenariusze


#### 5. **Projekt ekranów**
W prompcie uwzględnij jakie ekrany będą wchodzić w skład ścieżek użytkownika.
Wypisz dokładnie ich strukturę i architekturę, najważniejsze akcje itp


#### 6. **Zachowanie i interakcje**
Każdy z ekranów rozpisz na wykorzystane komponenty z design systemu.
Każdy generowany w prompcie komponent ma posiadać opis wszystkich stanów.
Wybieraj komponenty najpierw z design systemu dostarczoną w pliku.
Jeśli nie ma gotowych komponenetów, generuj własne w oparciu o wytyczny stylistyczne


### 📑 Format końcowy promptu

RAG powinien zwracać opis w następującym formacie:

**Nazwa, cel i kontekst użycia**
...

**Ogólne ramy rozwiązania**
...

**Użytkownik końcowy**
...

**Ścieżki użytkownika**
...

**Projekt ekranów**
...

**Zachowanie i interakcje**
...
```
