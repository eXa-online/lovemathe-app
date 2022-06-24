# language: de
Funktionalität Gegenstände in Zahlenfolgen einordnen
  Um festzustellen, ob Kinder Probleme mit der Zahlenseriation haben
  möchte ich als Tester
  ein Spiel haben in dem die Kinder Gegenstände in Lücken, der entsprechenden Zahlenfolge, einordnen müssen
  # Lösung in From von Eimern mit 1..6 Löchern
  # Buttons mit Eimern von denen einer in der Reihe fehlt
  Szenario CompleteSeriation
    Gegeben sei das Seriationsspiel mit mit folgenden Parametern
      | Level | Anordnung/Bild       | Zahlenfolge (Eimer)  | Buttons (Eimer) | Lösung |
      | 1     | wie Würfelbilder     | 1, 2, 4, 5, 6        | 2, 3, 5         | 3      |
      | 2     | wie Würfelbilder     | 1, 2, 3, 4, 6        | 2, 3, 5         | 5      |
      | 3     | wie Würfelbilder     | 5, 6, 1, 3, 4        | 2, 3, 5         | 2      |
      | 4     | Löcher durcheinander | 1, 2, 4, 5, 6        | 2, 3, 5         | 3      |
      | 5     | Löcher durcheinander | 1, 2, 3, 4, 6        | 2, 3, 5         | 5      |
      | 6     | Löcher durcheinander | 5, 6, 1, 3, 4        | 2, 3, 5         | 2      |
    Wenn das Kind die richtige Entscheidung trifft
    Dann hat es den Level geschafft