# language: de
Funktionalität Simultanerkennung
  Um festzustellen, ob Kinder Probleme beim simultanen Erfassen von Objekten haben
  möchte ich als Tester
  ein Spiel haben in dem die Kinder Objekte kurz gezeigt bekommen und im Anschluss die Anzahl angeben müssen
  # ein Puzzle mit den Objekten wird über den angegeben Zeitraum gezeigt und anschließend kann an Hand von Würfel-Button die Lösung eingegeben werden
  Szenario Gegenstände abzählen
    Gegeben sei das Simultanerfassungsspiel mit folgenden Parametern
      | Level  | Anzahl   | Zeit im ms |
      | 1      | 2        | 800        |
      | 2      | 5        | 800        |
      | 3      | 1        | 800        |
      | 4      | 3        | 800        |
      | 5      | 6        | 800        |
      | 6      | 2        | 800        |
    Wenn das Kind die richtige Entscheidung trifft
    Dann hat es den Level geschafft