# language: de
Funktionalität Gegenstände abzählen
  Um festzustellen, ob Kinder Probleme beim Abzählen von Gegenständen haben
  möchte ich als Tester
  ein Spiel haben in dem die Kinder Gegenstände abzählen und das Ergebnis festlegen können
  # Lösung in From von 6 Würfeln 1..6
  Szenario Gegenstände abzählen
    Gegeben sei das Mengenvergleichsspiel mit folgenden Parametern
      | Level  | Anzahl A | Größe A  | Anzahl B  | Größe B |
      | 1      | 1        | 1        | 0         | 0       |
      | 2      | 3        | 1        | 0         | 0       |
      | 3      | 5        | 1        | 0         | 0       |
      | 4      | 2        | 1        | 1         | 1       |
      | 5      | 3        | 1        | 2         | 1       |
      | 6      | 4        | 1        | 3         | 2       |
    Wenn das Kind die richtige Entscheidung trifft
    Dann hat es den Level geschafft