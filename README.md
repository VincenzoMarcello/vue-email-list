## TRACCIA

Attraverso l'apposita API di Boolean

- https://flynn.boolean.careers/exercises/api/random/mail

generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

## Bonus

Far comparire gli indirizzi email solamente quando sono stati tutti generati.

## SVOLGIMENTO

- faccio un metodo che prende la mail random dall'API per 10 volte
  e la pusha in un array vuoto creato
- faccio un v-for nell'html che stampa a schermo ogni email generata
- faccio un v-show che mostra le email solo se sono state tutte generate
