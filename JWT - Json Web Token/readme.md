# JWT - Json Web Token

In questo docuemento vi presenterò cosa sono i JWT e come possono essere usati in un servizio WEB.

Questa guida prende spunto da [jwt.io](https://jwt.io/)

## Introduzione

I Json Web Token sono uno standard semplice per l'invio sicuro di dati e per verificare l'identità di un utente in applicazioni dove è necessario un protocollo "leggero".

## Come è fatto un JWT

Un possibile JWT può essere:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV.
TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

Questo testo incomprensibile in realtà nasconde una struttura semplice e compatta che incorpora vari dati e una chiave per verificare la loro integrità.

```json
{
    "alg": "HS256",
    "typ": "JWT"
}
{
    "sub": "1234567890",
    "name": "John Doe",
    "admin": true
}
```

## Cosa ci permettono di fare

I JWT hanno reso possibile uno standard semplice, conciso e variabile per il contenimento di dati criptati e/o firmati in formato JSON. Questo si traduce in servizi di aurtenticazione e autorizzazione:

### Stateless sessions