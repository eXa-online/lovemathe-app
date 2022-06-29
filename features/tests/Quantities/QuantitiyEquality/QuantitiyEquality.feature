# language: de
  Funktionalität Mengen vergleichen
    Um festzustellen, ob Kinder Probleme beim Erkennen von Mengen haben
    möchte ich als Tester
    ein Spiel haben in dem die Kinder Mengen auf Gleichheit überprüfen
    Szenario Mengen Gleichheit
      Gegeben sei das Mengenvergleichsspiel mit folgenden Parametern
        | Level  | Anzahl A | Größe A  | Solution  |
        | 1      | 2        | 1        | false     |
        | 2      | 2        | 2        | true      |
        | 3      | 3        | 4        | false     |
        | 4      | 1        | 3        | false     |
        | 5      | 5        | 1        | true      |
        | 6      | 5        | 1        | false     |
      Wenn das Kind die richtige Entscheidung trifft
      Dann hat es den Level geschafft
