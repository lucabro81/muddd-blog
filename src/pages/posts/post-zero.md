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

## L'idea

Cosa succede se, invece di creare un mondo statico, lo facciamo evolvere nel tempo? Cosa succede se prendiamo un LLM e gli facciamo generare un mondo, delle interazioni, delle azioni, delle scelte, delle decisioni? Tutto in tempo reale?
<br><br>
Bhe un sacco di cose sgradevoli, gli esempi non mancano, tra allucinazioni e bias c'è solo l'imbarazzo della scelta, è solo questione di tempo, e la sicurezza con cui finirà per blaterare insensatezze sarà semplicemente invidiabile.
<br><br>
Tuttavia se prendiamo questo LLM, magari non particolarmente dotato in termini di parametri, costruiamo un apportuno training, gli forniamo un solido ed esaustivo set di dati, da cui attingere conoscenza, e un buon prompt, possiamo ottenere un risultato che non è affatto da scartare. Possimo ottenere un narratore, che decide cosa raccontare, cosa mostrare, cosa nascondere, cosa sottolineare, in modo coerente con il contesto, con le scelte fatte, con le azioni intraprese.

<style>
	pre {
		padding: 1rem;
    margin: 1rem 0;
	}
</style>
