---
layout: ../../layouts/BlogPost.astro
title: "Appunti dalla frontiera - Un nuovo inizio"
description: "placeholder"
pubDate: "2025-07-05"
---

<!-- In un'era di grafica fotorealistica e mondi aperti da miliardi di dollari, perché tornare a un'interfaccia puramente testuale?

La risposta è semplice: **perché ora possiamo creare mondi che respirano davvero.** -->

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
I portali che vedi sono semi-aperti, come se fossero stati lasciati aperto per un breve momento
che non si è mai conlcuso...

```

---

<br>
Il cursore lampeggiante, il comando di movimento, e la descrizione del mondo che ti circonda formarsi una parola alla volta, decretando il tuo destino.<br>Non è niente di nuovo, cose del genere esistono da quando esiste internet, ma cosa può dare può dare una dimensione in più a questo mezzo? E se potesse suggerire una scintilla di coscienza? Un mondo che non sia statico, ma che cambi con il tempo e con gli eventi. <br>Un mondo che ricordi la battaglia di ieri descrivendo oggi le macerie fumanti che ne sono testimonianza. <br>Una storia generata momento per momento, senza che il suo creatore l'abbia prevista.
<br><br>
Sono Luca, scrivo codice, e questo è l'esperimento che ho deciso di mettere in piedi per rispondere a queste domande.
<br><br>

## L'idea

<br>
Cosa succede se, invece di creare un mondo statico, lo facciamo evolvere nel tempo? Cosa succede se prendiamo un LLM e gli facciamo generare un mondo, delle interazioni, delle azioni, delle scelte, delle decisioni? Tutto in tempo reale?
<br><br>
Risposta onesta? Un sacco di cose sgradevoli, gli esempi non mancano, tra allucinazioni e bias c'è solo l'imbarazzo della scelta. È solo questione di tempo prima che inizi a blaterare insensatezze con una sicurezza invidiabile.
<br><br>
Tuttavia se prendiamo questo LLM, anche uno non particolarmente grande, e lo dotiamo di un training specifico, di un set di dati solido ed esaustivo da cui attingere conoscenza e di un prompt ben ingegnerizzato, allora il risultato cambia. Possimo ottenere un **Narratore**. Un'entità che decide cosa raccontare, cosa mostrare, cosa nascondere, in modo coerente con il contesto, con le scelte fatte e con le azioni intraprese.
<br><br>
Quando iniziai a giocare, a muovermi in questo tipo di mondo fatto di parole, non è stato facile. I mondi virtuali, spesso in visuale isometrica ma anche alcuni con un 3d convincente, erano già lì. Sollevavano dallo sforzo di dover immaginare tutto: si ammiravano, la risposta era ed è immedita, riepire gli occhi. Meravigliosi, certo, ma per quanto vivi e pulsanti, non è possibile veramente **viverli**. Sono rinchiusi o, meglio, posti su binari, che per quanto diversificati, sono finiti, limitati.
<br><br>
Il mondo testuale, invece, chiede al giocatore un impegno. Costa fatica mettersi lì e immaginare, e non è detto che si riesca subito a farlo, è necessario dare fiducia a questo processo.
<br><br>
Ed è qui che la nostra idea torna in gioco. Se il Narratore IA che abbiamo costruito ci aiuta a ritagliare su misura un angolo di mondo in base a ciò che è successo prima, quella fatica iniziale viene mitigata. Se tutto risponde in modo sensato e non si avverte più il limite di un mondo statico, allora la fiducia del giocatore viene ripagata all'istante.
<br><br>
**MUDDD (Multi User Data Driven Dungeon)** è questo: il tentativo di fare incontrare questi due mondi. Vedere se un testo ben scritto e dinamicamente generato può rendere un universo testuale più vivo e convincente di qualsiasi grafica, togliere i limiti di un motore grafico e fisico e di assets pregenerati, senza bisogno di GPU ultra performanti. È un esperimento per vedere se questa idea riesce a reggersi sulle sue gambe.
<style>
	pre {
		padding: 1rem;
    margin: 1rem 0;
	}
</style>
