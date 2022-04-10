# language: de
  Funktionalität Mengen ergänzen
    Um festzustellen, ob Kinder Probleme beim Erkennen von Mengen haben
    möchte ich als Tester
    ein Spiel haben in dem die Kinder Mengen vergleichen und reduzieren
    Szenario Mengen vergleichen
      Gegeben sei das Mengenvergleichsspiel mit folgenden Parametern
        | Level  | Anzahl A | Größe A  | Anzahl B  | Größe B | Button 1 | Button 2  | Button 3 | Solution   |
        | 1      | 1        | 1        | 0         | 0       |  B       | A A       | A        | Button A   |
        | 2      | 3        | 1        | 1         | 1       |  B       | A A       | A        | Button AA  |
        | 3      | 4        | 1        | 5         | 1       |  B       | A A       | A        | Button B   |
        | 4      | 5        | 2        | 3         | 1       |  B       | A A       | A        | Button AA  |
        | 5      | 7        | 1        | 6         | 1       |  B       | A A       | A        | Button A   |
        | 6      | 7        | 2        | 5         | 1       |  B       | A A       | A        | Button AA  |
      Wenn das Kind die richtige Entscheidung trifft
      Dann hat es den Level geschafft
