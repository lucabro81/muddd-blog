---
layout: ../../layouts/BlogPost.astro
title: "Appunti dalla frontiera - Un nuovo inizio"
description: "Il cursore lampeggiante, il comando di movimento, e la descrizione del mondo che ti circonda formarsi una parola alla volta, decretando il tuo destino..."
pubDate: "2025-07-05"
---

_Sono fuggito da quello sfortunato incontro per il rotto della cuffia, ho subito ferite_

```
> health

- 2/10 PF
```

_e dato fondo a tutte le mie scorte di pozioni curative_

```
> inventory

- una spada smussata
- l'ultima fiala di pozione, vuota
```

_le cose si mettono male, ma devo andare avanti._

```
> go n

- Arrivi davanti all'ingresso principale.
Non è quello che ti aspettavi.
Non c'è un ponte levatoio che si abbassa con fragore, non ci sono guardie che controllano,
non c'è movimento di alcun tipo.
I portali che vedi sono semi-aperti, come se fossero stati lasciati aperti per un breve momento
che non si è mai concluso...

```

---

<br>
Il cursore lampeggiante, il comando di movimento, e la descrizione del mondo che ti circonda formarsi una parola alla volta, decretando il tuo destino.<br>Non è niente di nuovo, cose del genere esistono da quando esiste internet, ma cosa può dare può dare una dimensione in più a questo mezzo? E se potesse suggerire una scintilla di coscienza? Un mondo che non sia statico, ma che cambi con il tempo e con gli eventi. <br>Un mondo che ricordi la battaglia di ieri descrivendo oggi le macerie fumanti che ne sono testimonianza. <br>Una storia generata momento per momento, senza che il suo creatore l'abbia prevista.
<br><br>
Sono Luca, scrivo codice, e questo è l'esperimento che ho deciso di mettere in piedi per rispondere a queste domande.
<br><br>

<div is-="title-lined"><h2>L'idea</h2></div>

<br>
Cosa succede se, invece di creare un mondo statico, lo facciamo evolvere nel tempo? Cosa succede se prendiamo un LLM e gli facciamo generare un mondo, delle interazioni, delle azioni, delle scelte, delle decisioni? Tutto in tempo reale?
<br><br>
Risposta onesta? Un sacco di cose sgradevoli, gli esempi non mancano, tra allucinazioni e bias c'è solo l'imbarazzo della scelta. È solo questione di tempo prima che inizi a blaterare insensatezze con una sicurezza invidiabile.
<br><br>
Tuttavia se prendiamo questo LLM, anche uno non particolarmente grande, e lo dotiamo di un training specifico, di un set di dati solido ed esaustivo da cui attingere conoscenza e di un prompt ben ingegnerizzato, allora il risultato cambia. Possiamo ottenere un <strong>Narratore</strong> . Un'entità che decide cosa raccontare, cosa mostrare, cosa nascondere, in modo coerente con il contesto, con le scelte fatte e con le azioni intraprese. Se due giocatori o PNG hanno lottato, per esempio, potremmo ottenere una cosa del genere:

```
> look

- L'aria sa di ozono, bruciature sui muri e mobili carbonizzati:
un scontro tra energie magiche si è appena consumato.

> health

- 2/10 PF

La spalla destra pulsa con dolore: la freccia acida che ti ha colpito poco prima ha lasciato
una brutta ferita che può guarire solo con cure adeguate, devi trovare un guaritore e in fretta!
```

<br>
Quando iniziai a giocare, a muovermi in questo tipo di mondo fatto di parole, non è stato facile. I mondi virtuali, spesso in visuale isometrica, ma anche alcuni che cominciavano ad implementare un 3d convincente, erano già lì. Sollevavano dallo sforzo di dover immaginare tutto: si ammiravano, la risposta era immediata, riempiva gli occhi. Meravigliosi, certo, ma per quanto vivi e pulsanti, non era e non è possibile veramente <strong>viverli</strong>. Sono rinchiusi o, meglio, posti su binari, che per quanto diversificati, sono finiti, limitati.
<br><br>
Il mondo testuale, invece, chiede al giocatore un impegno. Costa fatica mettersi lì e immaginare, e non è detto che si riesca subito a farlo, è necessario dare fiducia a questo processo.
<br><br>
Ed è qui che la nostra idea torna in gioco. Se il Narratore IA che abbiamo costruito ci aiuta a ritagliare su misura un angolo di mondo in base a ciò che è successo prima, quella fatica iniziale viene mitigata. Se tutto risponde in modo sensato e non si avverte più il limite di un mondo statico, allora la fiducia del giocatore viene ripagata all'istante.
<br><br>

**MUDDD** (Multi User Data Driven Dungeon) è questo: il tentativo di fare incontrare questi due mondi. Vedere se un testo ben scritto e dinamicamente generato può rendere un universo testuale più vivo e convincente di qualsiasi grafica, togliere i limiti di un motore grafico e fisico e di assets pregenerati, senza bisogno di GPU ultra performanti. È un esperimento per vedere se questa idea riesce a reggersi sulle sue gambe.
<br><br>

<div is-="title-lined"><h2>Omaggio al Passato</h2></div>

<br>
Nessun esploratore parte senza una mappa, per quanto incompleta. Questa frontiera non nasce dal nulla, ma poggia sulle rovine e sulle fondamenta di mondi che ci hanno preceduto e che hanno formato un modo di narrare. Il mio lavoro vuole essere un omaggio a due grandi scuole di pensiero. Da un lato, la robustezza dei <a href="https://dikumud.com/" target="_blank">DikuMUD</a> e dei loro derivati (credo che il primo in assoluto a cui ho giocato fosse <a href="https://www.clessidra.it/" target="_blank">Clessidra</a>), che hanno definito le meccaniche, il combattimento e la progressione che per decenni sono state la spina dorsale del gioco di ruolo online.
<br>
Dall'altro, l'ambizione di mondi persistenti come <a href="https://uo.com/" target="_blank">Ultima Online</a>, dove le azioni dei giocatori lasciavano cicatrici e creavano storie visibili a tutti. <strong>MUDDD</strong> non cerca di reinventare la ruota delle meccaniche, ma di prendere quel solido telaio e montargli un motore narrativo completamente nuovo, vivo e non prevedibile.
<br><br>

<div is-="title-lined"><h2>Lo Stato dell'Arte</h2></div>

<br>
Una frontiera, per definizione, ha pochi abitanti, ma non sono il primo ad aver piantato una bandiera in queste terre inesplorate. Esistono già progetti notevoli che usano l'IA generativa per creare esperienze testuali, ed è giusto riconoscerli per capire dove si posiziona <strong>MUDDD</strong>.
<br><br>
Il nome più importante è senza dubbio <a href="https://aidungeon.com/" target="_blank">AI Dungeon</a>. È un progetto affascinante che offre una libertà quasi assoluta, permettendo al giocatore di fare letteralmente qualsiasi cosa in un'avventura a giocatore singolo generata al volo, non parlerò ora di quello che non mi convince di quell'approccio, ma è un progetto che ha dato un impulso enorme al mondo della narrazione dinamica. È un simulatore di storie incredibilmente potente, una vera e propria sandbox per l'immaginazione.
<br>
Il mio approccio, tuttavia, si differenzia per tre aspetti fondamentali. <strong>MUDDD</strong> non vuole essere una sandbox, o, per lo meno, non <i>solo</i> una sandbox e non <i>così</i> sandbox, ma un mondo di gioco multiplayer con regole e persistenza.
<br><br>

<ul>
<li><p><strong>MUDDD</strong> ha una struttura di gioco, con statistiche, abilità e obiettivi. Un sistema di eventi e caratteristiche da applicare alle entità del mondo che ne influenzano la resa narrativa. È un gioco di ruolo, non un'improvvisazione.</p></li>

<li><p>Lo scopo di <strong>MUDDD</strong> è quello di creare principalmente un mondo persistente, con un'evoluzione dinamica conseguenza delle scelte fatte dai giocatori, con una granularità (quasi) infinita.</p></li>

<li><p>Sebbene questo progetto permetta anche una narrazione esclusivamente single player, non è il suo scopo principale. L'interazione tra giocatori deve esserci, e l'llm è un motore che la può facilitare.</p></li>
</ul>

Oltre a questo, sono certo esistano altri progetti che hanno seguito questo stesso percorso; non li elencheremo ora, ma potrebbero essere oggetto di altri post e di altre analisi. Comunque questo progetto si ispira a questi tentativi e cerca di applicare questa logica a tutto il tessuto del mondo di gioco e di chi lo abita.
<br><br>

<div is-="title-lined"><h2>Obiettivi</h2></div>

<br>
Questo frontiera crescerà secondo questa bussola:
<br><br>

<ul>
<li><p><strong>Persistenza Narrativa:</strong> Voglio un mondo che ricordi. Se una gilda costruisce un avamposto o un drago rade al suolo un villaggio, le descrizioni testuali di quelle aree devono cambiare per sempre, riflettendo la nuova realtà senza un intervento manuale.</p></li>
  <li><p><strong>Un'IA "al guinzaglio":</strong> sebbene abbia avuto alcune idee in cui l'inaffidabilità di una narrazione basata sulle scelte di un LLM potrebbe avere senso, in linea di massima questo non dovrebbe essere una sorta di dio caotico, ma un Narratore che rispetta il canone, un canovaccio indicatogli in fase di progetto. Sarà vincolato a una lore prestabilita, a regole fisiche e a una "memoria" degli eventi passati, per garantire coerenza e immedesimazione.</p></li>
  <li><p><strong>Dinamismo Collettivo:</strong> Il cuore dell'esperimento, ed è una sfumatura del primo punto, ma è vedere come il mondo si evolve sotto la pressione di una comunità. Le descrizioni di un bosco cambieranno se una gilda di taglialegna inizierà a disboscarlo? Le strade diventeranno più sicure se i giocatori pattuglieranno le rotte commerciali?</p></li>
  <li><p><strong>Focus sul Motore:</strong> Prima ancora che un gioco, <strong>MUDDD</strong> è la costruzione di un motore narrativo. Gran parte di questi "Appunti dalla Frontiera" si concentrerà sulle sfide tecniche, sulle soluzioni trovate e sulle lezioni imparate nel tentativo di dare vita a questa visione.</p></li>
</ul>
<br><br>

<div is-="title-lined"><h2>Conclusioni</h2></div>

<br>

La domanda che potrebbe sorgere, e che mi sono fatto anch'io, è:
<br><br>
"È davvero così necessario?"
<br><br>
Accidenti, no! Certo che non è necessario, nulla è <strong>necessario</strong>, nemmeno il pc da cui sto scrivendo! Non è questa la domanda giusta, quella corretta è:
<br><br>
"Perchè no?"
<br><br>
Ci siamo evoluti per esplorare e comprendere, imparare, conoscere ed applicare, da Ulisse a Carl Sagan. Io voglio vedere fino a dove si arriva e magari lasciare che altri continuino da dove mi sono fermato.
<br><br>
C'è spazio per tutti, e se volete accompagnarmi, per favore fatevi sentire.
<br><br>
A Presto.

<style>

@layer base {
  div[is-~="title-lined"] {
    position: relative;
  }
  div[is-~="title-lined"] > * {
    position: relative;
    margin-left: 1rem;
    display: inline-block;
    background-color: var(--background0);
    padding: 0 0.5rem;
  }
  div[is-~="title-lined"]:before {
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    background: var(--peach);
    top: 50%;
    content: "";
  }
</style>
