# language: de
  Funktionalität Mengen ergänzen
    Um festzustellen, ob Kinder Probleme beim Erkennen von Mengen haben
    möchte ich als Tester
    ein Spiel haben in dem die Kinder Mengen vergleichen und reduzieren
    Szenario Mengen vergleichen
      Gegeben sei das Mengenvergleichsspiel mit folgenden Parametern
        | Level  | Anzahl A | Größe A  | Anzahl B  | Größe B | Button 1 | Button 2  | Button 3 |
        | 1      | 1        | 1        | 0         | 0       |  B       | A A       | A        |
        | 2      | 1        | 1        | 3         | 1       |  B       | A A       | A        |
        | 3      | 5        | 1        | 4         | 1       |  B       | A A       | A        |
        | 4      | 3        | 2        | 5         | 1       |  B       | A A       | A        |
        | 5      | 5        | 1        | 7         | 1       |  B       | A A       | A        |
        | 6      | 5        | 2        | 7         | 1       |  B       | A A       | A        |
      Wenn das Kind die richtige Entscheidung trifft
      Dann hat es den Level geschafft
