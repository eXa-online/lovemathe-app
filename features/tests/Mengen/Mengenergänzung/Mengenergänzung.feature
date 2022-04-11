# language: de
  Funktionalität Mengen ergänzen
    Um festzustellen, ob Kinder Probleme beim Erkennen von Mengen haben
    möchte ich als Tester
    ein Spiel haben in dem die Kinder Mengen vergleichen und ergänzen
    Szenario Mengen ergänzen
      Gegeben sei das Mengenvergleichsspiel mit folgenden Parametern
        | Level  | Anzahl A | Anzahl B  | Solution |
        | 1      | 1        | 0         | B        |
        | 2      | 1        | 2         | A        |
        | 3      | 5        | 4         | B        |
        | 4      | 3        | 4         | A        |
        | 5      | 6        | 5         | B        |
        | 6      | 5        | 6         | A        |
      Wenn das Kind die richtige Entscheidung trifft
      Dann hat es den Level geschafft