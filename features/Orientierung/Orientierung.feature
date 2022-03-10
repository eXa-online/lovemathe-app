# language: de
Funktionalität Orintierung im Raum
  Um festzustellen, ob Kinder Probleme bei der Orientierung im Raum haben
  möchte ich als Tester
  ein Spiel haben in dem die Kinder Objekte aufgrund ihrer Position im Raum identifizieren müssen
  # ein Puzzle mit einem Regal, das Gegenstände enthält die Button sind dann die Gegenstände. Es wird angesagt auf welchen Gegenstand geklickt werden muss.
  Szenario Orintierung im Raum
    Gegeben sei das Orientierungsspiel mit folgenden Parametern
      | Level  | Gegenstand   | Psoition     |
      | 1      | Eimer        | oben mitte   |
      | 2      | Brille       | unten links  |
      | 3      | Leiter       | unten rechtw |
      | 4      | Hut          | oben links   |
      | 5      | Glas         | unten mitte  |
      | 6      | Korb         | oben rechts  |
    Wenn das Kind die richtige Entscheidung trifft
    Dann hat es den Level geschafft