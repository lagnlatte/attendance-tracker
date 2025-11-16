# Aplicație Web pentru Monitorizarea Prezenței

Proiectul dezvoltă o aplicație web completă, de tip **Single Page Application (SPA)**, concepută pentru a simplifica și digitaliza procesul de monitorizare a prezenței la evenimente. Platforma este gândită să fie accesibilă și intuitivă atât pentru **organizatorii de evenimente (OE)**, cât și pentru participanți.
Scopul principal este de a elimina listele de prezență pe hârtie, erorile umane și procesele manuale, înlocuindu-le cu un sistem automat, securizat și în timp real, care permite confirmarea prezenței și generarea de rapoarte la final.

## Obiectivul general al aplicației

Crearea unei platforme web moderne, responsive și scalabilă care să permită:

- Organizarea evenimentelor individuale sau recurente
- Generarea automată a codurilor unice de acces (text sau QR)
- Confirmarea prezenței prin scanare mobilă sau introducere manuală
- Monitorizarea în timp real a participanților
- Exportul datelor (CSV, XLSX)

## Funcționalități cheie ale aplicației

### Pentru organizatorul de evenimente (OE):

- **Crearea grupurilor de evenimente**:  
  OE poate defini un eveniment unic sau o serie recurentă (ex: „Curs Tehnologii Web – în fiecare marți, între 10:30 și 11:50, timp de 14 săptămâni”). La creare, sistemul generează automat toate instanțele individuale ale evenimentului.

- **Generarea codurilor de acces**:  
  Fiecare eveniment primește un cod unic, afișabil sub formă de text sau cod QR. OE poate proiecta codul pe un ecran sau distribui digital.

- **Gestionarea stării evenimentelor**:  
  Evenimentele trec automat prin stările:  
  - `CLOSED` – înainte de ora de începere  
  - `OPEN` – în intervalul orar programat (participanții pot confirma prezența)  
  - `CLOSED` – după încheierea evenimentului

- **Monitorizare în timp real**:  
  OE vede o listă live cu participanții care și-au confirmat prezența, inclusiv numele și ora exactă a confirmării (ex: „Popescu Andrei – 18:03:12”).

- **Export rapoarte**:  
  OE poate descărca lista de prezență:  
  - Pentru un singur eveniment  
  - Pentru un grup de evenimente (ex: toate cele 10 sesiuni ale cursului)

### Pentru participanți:

- **Confirmarea prezenței**:  
  Participantul accesează aplicația în browser și scanează codul QR sau introduce manual codul text.

## Arhitectura tehnică a aplicației

### Front-end

- Dezvoltat cu **React.js**
- Interfață **SPA**
- Design **responsive**, testat pe multiple dispozitive
- Integrare nativă pentru scanare QR

### Back-end

- Implementat în **Node.js** cu framework-ul **Express**
- **API RESTful**, cu rute și răspunsuri JSON standardizate
- Autentificare bazată pe **JWT**
- Logică pentru:  
  - Generarea codurilor unice (UUID sau hash securizat)  
  - Tranziția automată a stărilor evenimentelor  
  - Validarea codurilor introduse  
  - Înregistrarea prezenței cu timestamp

### Bază de date

- **PostgreSQL**
- Acces prin ORM pentru:  
  - Definirea modelelor  
  - Migrații automate  
  - Interogări  
  - Export de date  
  - Generare fișiere CSV  
  - Generare fișiere XLSX  
  - Descărcare directă din browser, cu nume de fișier sugestiv (ex: `Prezenta_Curs_Tehnologii_Web_2025-11-12.xlsx`)

## Flux de utilizare

1. OE se autentifică și creează un grup de evenimente (ex: curs săptămânal).
2. Sistemul generează automat toate instanțele și codurile unice.
3. La ora programată, evenimentul devine `OPEN` (automat).
4. OE afișează codul QR pe proiector sau pe un monitor.
5. Fiecare participant:  
   - Deschide aplicația pe telefon  
   - Scanează QR-ul sau tastează codul  
   - Prezența este confirmată instant
6. OE urmărește lista în timp real.
7. La final, OE exportă raportul complet pentru una sau toate sesiunile.

## Posibile extensii viitoare

- Autentificare cu Google / SSO
- Notificări prin email sau push la deschiderea evenimentului
- Panou de statistici (prezență medie, absențe, grafice)
- Integrare cu Google Calendar sau Microsoft Outlook

## Concluzie

Aplicația reprezintă o soluție practică, modernă și complet funcțională pentru digitalizarea procesului de prezență, eliminând metodele tradiționale. Este construită cu tehnologii actuale, respectă cerințele tehnice și de calitate ale proiectului și oferă o experiență fluidă atât pentru organizatori, cât și pentru participanți.
