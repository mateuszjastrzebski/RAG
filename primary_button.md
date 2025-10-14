Opis komponentu UI – Button (Primary)

Ten przycisk ma służyć jako główny przycisk akcji (Primary Button) w interfejsie. Powinien być wizualnie wyróżniony i stosowany do najważniejszych działań, takich jak „Zapisz”, „Wyślij”, „Potwierdź” itp.

Specyfikacja stylu:
Układ: flex (poziomy, wyśrodkowany)
flex-direction: row
justify-content: center
align-items: center
padding: 12px (góra/dół) × 24px (boki)
Odstęp między elementami (np. ikoną i tekstem): 10px
Wymiary: szerokość 93px, wysokość 48px
Kolor tła: #186BDC (niebieski, kolor akcentu)
Promień zaokrąglenia rogów: 8px
Brak obramowania (border: none)
Tekst przycisku powinien być wyśrodkowany zarówno pionowo, jak i poziomo.
Domyślnie przycisk nie rozciąga się (flex-grow: 0).

Zachowanie:
Na hover kolor tła może się lekko rozjaśniać (np. #1E75E6), aby wskazać interakcję.
Na kliknięcie – delikatne przyciemnienie (#155BBE) dla efektu naciśnięcia.
Po kliknięciu przycisk może uruchamiać akcję zdefiniowaną w logice aplikacji.

Przykład zastosowania:
Przycisk powinien wyglądać nowocześnie, być czytelny i kontrastowy względem tła. Używaj go do głównych akcji w widoku, np. formularzy, modali czy ekranów potwierdzeń.
