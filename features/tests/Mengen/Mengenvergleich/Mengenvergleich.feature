# language: de
  Funktionalität Mengen vergleichen
    Um festzustellen, ob Kinder Probleme beim Erkennen von Mengen haben
    möchte ich als Tester
    ein Spiel haben in dem die Kinder Mengen vergleichen
    Szenario Mengen vergleichen
      Gegeben sei das Mengenvergleichsspiel mit folgenden Parametern
        | Level  | Anzahl A | Größe A  | Anzahl B  | Größe B |
        | 1      | 1        | 1        | 0         | 0       |
        | 2      | 0        | 0        | 2         | 1       |
        | 3      | 3        | 1        | 3         | 1       |
        | 4      | 5        | 1        | 4         | 1       |
        | 5      | 5        | 1        | 5         | 2       |
        | 6      | 7        | 1        | 6         | 2       |
      Wenn das Kind die richtige Entscheidung trifft
      Dann hat es den Level geschafft
