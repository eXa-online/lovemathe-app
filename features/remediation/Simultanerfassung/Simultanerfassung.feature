# language: de
Funktionalität Simultanerkennung Trainign Vorschule
  Um meine Fähigkeiten in der Simultanerfassung zu verbessern
  möchte ich als Kind
  ein Spiel haben mit dem ich trainieren kann meine Fähigkeiten in der Simultanerfassung zu verbessern
  # ein Puzzle mit den Objekten wird über den angegeben Zeitraum gezeigt und anschließend kann an Hand von Würfel-Button die Lösung eingegeben werden
  # Es werden zufällig 1 bis 6 Objekte für einen bestimmten Zeitraum angezigt
  # Wird 4x nacheinander kein Fehler gemacht ist der Level erreicht und es wird der nächste Level frei geschaltet
  # Nach 15 Fehlversuchen wird der Level abgebrochen und das Spiel beendet
  Szenario Gegenstände abzählen
    Gegeben sei das Simultanerfassungsspiel mit folgenden Parametern
      | Level  | Zeit im ms |
      | 1      | 3000       |
      | 2      | 2400       |
      | 3      | 2000       |
      | 4      | 1600       |
      | 5      | 1200       |
      | 6      | 800        |
    Wenn das Kind 4x nacheinander richtig gelöst hat
    Dann hat es den Level geschafft