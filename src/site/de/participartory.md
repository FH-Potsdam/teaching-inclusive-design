---
title: Partizipatives Design
eleventyNavigation:
  title: Partizipativ
  key: de_participatory
  order: 2
  parent: de
locale: de
layout: default
---

{% from "../_includes/parts/macros.njk" import h2, definition, video, img, referenceEntry %}

{{h2('', true)}}

{{h2('Interview', false, 'video')}}

{{video("https://fhpcloud.fh-potsdam.de/s/oTZ8zp2TEsJLkET/download/rights.mp4", "/images/thumbnails/inclusive.jpg", "inclusive", translations.subtitles[locale], locale)}}

{{h2('Katta Spiel', false, 'bio')}}

[Katta Spiel](https://informatics.tuwien.ac.at/people/katta-spiel) ist Assistenzprofessor:in an der Fakultät für Informatik der TU Wien im Bereich Mensch-Computer-Interaktion. Ihre Forschung ist im Bereich Visual Computing and Human-Centered Technology verankert und fokussiert sich auf Critical Access—die Untersuchung marginalisierter Perspektiven auf Emboddied Computing. Dabei verbinden sie interdisziplinäre Ansätze aus den Gender Studies, Disability Studies, Kulturwissenschaften und dem Partizipativen Design, um Technologien zu entwickeln, die die vielfältigen Lebensrealitäten ihrer Nutzer:innen widerspiegeln.

Gemeinsam mit Ihren Kolleg:innen erforscht und entwickelt sie innovative Methoden, Designs und technologische Artefakte. Ihre Arbeit schlägt eine Brücke zwischen Wissenschaft und Praxis und fördert inklusive und gerechte Ansätze im Technologiedesign. *Partizipatives Design* spielt bei Ihrer Forschung eine zentrale Rolle. Spiel untersucht dabei besonders, wie Technologien die Selbstbestimmung von behinderten Personen fördern können, anstatt lediglich darauf abzuzielen, Behinderungen zu "korrigieren". Ein Beispiel hierfür ist das Projekt [ACCESSTECH](https://informatics.tuwien.ac.at/news/2470), das einen Paradigmenwechsel im Umgang mit Behinderungen und Technologien anstrebt.

Das aktuelle Projekt von Katta Spiel, [Experiencing Access with Interactive Technologies](https://tiss.tuwien.ac.at/fpl/project/index.xhtml?id=2246166) (2024–2029), gefördert von der Europäischen Kommission, untersucht, wie interaktive Systeme den Zugang für diverse Bevölkerungsgruppen neu gestalten und verbessern können.

{{h2('In der Praxis', false, 'lightning')}}

Partizipatives Design (auch bekannt als "Co-Design") ist ein Ansatz, bei dem Endnutzer:innen aktiv in den Designprozess einbezogen werden. Ziel ist es, Produkte, Dienstleistungen oder Systeme zu entwickeln, die den tatsächlichen Bedürfnissen und Wünschen der Menschen entsprechen, die sie nutzen. Durch Workshops, Interviews, Prototyping und andere kollaborative Methoden tragen die Nutzer:innen aktiv zu Konzepten, Gestaltung und Evaluierung bei. Dies fördert nicht nur eine höhere Akzeptanz der Ergebnisse, sondern bringt auch vielfältige Perspektiven in den Prozess ein.  

Im Feld des **Inklusiven Designs**, das darauf abzielt, Lösungen zu schaffen, die für möglichst viele Menschen zugänglich und nutzbar sind, nimmt das Partizipative Design eine Schlüsselrolle ein. Indem unterschiedliche Zielgruppen – insbesondere Menschen mit Behinderungen oder anderen spezifischen Bedürfnissen – von Anfang an einbezogen werden, können Barrieren im Designprozess frühzeitig identifiziert und abgebaut werden. Dadurch wird sichergestellt, dass die entwickelten Lösungen tatsächlich inklusiv und universell einsetzbar sind.  

Partizipatives Design ist somit nicht nur ein methodischer Ansatz, sondern auch ein ethisches Bekenntnis zu Gleichberechtigung und Vielfalt in der Gestaltung.

> Wenn ihr partizipativ arbeitet, respektiert die Menschen die ihr einbezieht, respektiert ihre Zeit und findet Wege sie für Ihre Aufwände zu entschädigen.

### Partizipatives und User-centred Design

Sowohl Partizipatives Design (PD) als auch User-Centered Design (UCD) setzen den Menschen ins Zentrum des Gestaltungsprozesses. Beide Ansätze streben danach, Produkte oder Systeme zu entwickeln, die die tatsächlichen Bedürfnisse und Anforderungen der Nutzer:innen berücksichtigen. Trotz dieser Gemeinsamkeiten gibt es deutliche Unterschiede in der Herangehensweise und den Rollen, die Nutzer:innen zugeschrieben werden:

#### Überschneidungen

- *Nutzerzentrierung*: Beide Ansätze legen großen Wert darauf, dass die Lösungen den Bedürfnissen und Zielen der Nutzer entsprechen. Feedback-Schleifen sind in beiden Konzepten essenziell.
- *Fokus auf Kontext und Usability*: Sowohl PD als auch UCD berücksichtigen die Nutzungskontexte und setzen auf iterative Prozesse, um die Gebrauchstauglichkeit zu maximieren.
- *Verwendung ähnlicher Methoden*: Methoden wie Interviews, Beobachtungen oder Prototyping kommen in beiden Ansätzen vor.

#### Unterschiede

- *Rolle der Nutzer:innen*:
  - **Partizipatives Design**: Nutzer:innen werden als gleichberechtigte Partner:innen und Mitgestalter:innen betrachtet. Sie nehmen aktiv an der Ideenentwicklung und Entscheidungsfindung teil.
  - **User-Centered Design**: Nutzer:innen werden vor allem als Informationsquelle betrachtet. Sie geben Feedback oder beantworten Fragen, aber die Designer:innen behalten die Kontrolle über den Prozess und die Entscheidungen.
- *Grad der Beteiligung*:
  - **Partizipatives Design**: strebt eine aktive Kollaboration an, bei der Nutzer:innen und Designer:innen gemeinsam neue Lösungen entwickeln.
  - **User-Centered Design**: ist stärker expert:innenengetrieben, wobei Designer:innen auf Basis der gesammelten Nutzer:innendaten eigenständig Entscheidungen treffen.
- *Ethische Perspektive*:
  - **Partizipatives Design**: ist häufig normativ motiviert und hat eine demokratische Komponente. Ziel ist es, die Stimmen von marginalisierten Gruppen stärker einzubinden und Machtasymmetrien abzubauen.
  - **User-Centered Design**: verfolgt primär funktionale und kommerzielle Ziele, mit Fokus auf die Verbesserung der Usability und Nutzer:innenerfahrung.

### Dilemmata des Partizipativen und Inklusiven Designs

Partizipatives Design (PD) sieht sich mit einem zentralen Dilemma konfrontiert: Einerseits verfolgt es das Ziel, möglichst viele – insbesondere marginalisierte – Gruppen in den Designprozess einzubeziehen, um ihre spezifischen Bedürfnisse und Perspektiven zu berücksichtigen. Andererseits ist es praktisch kaum möglich, alle Gruppen gleichermaßen zu integrieren. Die Vielfalt an Lebensrealitäten, die durch soziale, kulturelle und physische Unterschiede geprägt ist, übersteigt die Kapazitäten vieler Projekte. Hinzu kommt, dass Menschen aus marginalisierten Gruppen oft andere Prioritäten haben: Sie kämpfen möglicherweise mit strukturellen Herausforderungen, wie fehlendem Zugang zu Ressourcen, Zeitdruck oder sozialer Exklusion, und können nicht regelmäßig an langwierigen Forschungs- und Designprozessen teilnehmen.

Dieses Dilemma birgt das Risiko, dass wichtige Stimmen ungehört bleiben und die partizipative Gestaltung trotz ihrer inklusiven Intention exkludierend wirken kann. Es stellt Designer:innen vor die Aufgabe, einen Balanceakt zwischen Repräsentation und Praktikabilität zu finden, ohne dabei Gruppen zu überfordern oder zu vereinnahmen.

Ein weiteres grundlegendes Dilemma betrifft das Inklusive Design, wie es von Katta Spiel in ihrem Interview skizziert wird. Der Ansatz, dass „alles für alle“ gestaltet sein muss, trägt einen normativen Gedanken in sich: Er impliziert, dass alle Menschen ein Produkt oder System auf die gleiche Weise nutzen sollen. Dieser Anspruch vernachlässigt jedoch, dass unterschiedliche Menschen oft komplett unterschiedliche Zugänge und Modalitäten benötigen, die ihren tatsächlichen Wünschen und Bedürfnissen entsprechen. Während Inklusives Design häufig darauf abzielt, universelle Lösungen zu schaffen, die niemanden ausschließen, wird die Vielfalt menschlicher Lebensrealitäten und Präferenzen in einem solchen Ansatz nicht vollständig berücksichtigt. Ein alternativer Ansatz wäre, nicht eine einheitliche Lösung für alle anzustreben, sondern flexible und differenzierte Zugänge (Access) zu schaffen – Zugänge, die spezifisch darauf ausgerichtet sind, die unterschiedlichen Bedürfnisse und Wünsche der Nutzer:innen anzuerkennen und zu respektieren.

Access kann für verschiedene Gruppen sehr unterschiedlich aussehen: Für manche bedeutet es barrierefreie Architektur, für andere sprachliche Übersetzungen oder adaptive Technologien. Ziel ist es, ein flexibles System zu schaffen, das nicht universelle Gleichheit, sondern individuelle Gerechtigkeit fördert.

Diese Überlegungen werfen grundlegende Fragen zur Ethik und Praxis des Designs auf. Sie fordern dazu auf, starre Ideale wie „alles für alle“ zu hinterfragen und stattdessen vielfältige, kontextspezifische Lösungen zu entwickeln. Designer:innen müssen lernen, mit der Komplexität dieser Dilemmata umzugehen – und akzeptieren, dass vollständige Inklusion zwar ein Ideal bleibt, das jedoch durch pragmatische und differenzierte Ansätze näherungsweise realisiert werden kann.


{{h2('Projekte', false, 'star')}}

Liste mit verwandten INCOM Projekten

{{h2('Referenzen', false, 'bookmark')}}

### TBC