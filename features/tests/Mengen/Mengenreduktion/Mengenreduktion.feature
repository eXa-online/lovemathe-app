# language: de
  Funktionalität Mengen ergänzen
    Um festzustellen, ob Kinder Probleme beim Erkennen von Mengen haben
    möchte ich als Tester
    ein Spiel haben in dem die Kinder Mengen vergleichen und reduzieren
    Szenario Mengen reduzieren
      Gegeben sei das Mengenvergleichsspiel mit folgenden Parametern
        | Level  | Anzahl A | Anzahl B  | Solution   |
        | 1      | 1        | 0         | A          |
        | 2      | 2        | 1         | A          |
        | 3      | 4        | 5         | B          |
        | 4      | 5        | 4         | A          |
        | 5      | 5        | 6         | B          |
        | 6      | 6        | 5         | A          |
      Wenn das Kind die richtige Entscheidung trifft
      Dann hat es den Level geschafft
