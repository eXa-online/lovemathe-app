# language: de
  Funktionalität Mengen ergänzen
    Um festzustellen, ob Kinder Probleme beim Erkennen von Mengen haben
    möchte ich als Tester
    ein Spiel haben in dem die Kinder Mengen vergleichen und ergänzen
    Szenario Mengen ergänzen
      Gegeben sei das Mengenvergleichsspiel mit folgenden Parametern
        | Level | Anzahl A | Anzahl B | Solution |
        | 1     | 1        | 2        | A        |
        | 2     | 5        | 4        | B        |
        | 3     | 3        | 4        | A        |
        | 4     | 6        | 5        | B        |
        | 5     | 5        | 6        | A        |
        | 6     | 1        | 0        | B        |
      Wenn das Kind die richtige Entscheidung trifft
      Dann hat es den Level geschafft