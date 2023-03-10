const obCit = {
    autore: ['Vito', 'E.T.O.', 'T.A.', 'V.F.'],
    frasi: [['Sono quasi in grado di farlo!',
            'Dante… È una cazzata che lo chiedono all\’esame!',
            'Il lupo e l\’uva.',
            'È sfizio il face to face con Franca, mi ride sempre in faccia!',
            'Sctà zzitt meh, tand è sej!',
            'Gennaio: manco un\’assenza.',
            'La mia casa non cadrà mai!',
            'Bambino fino a che ora?',
            'Schopenhauer lo so, penso di padroneggiarlo!',
            'Oggi è pure venerdì, domani è pure sabato!',
            'Il figlio è bravo… È ess che è na zocchl!',
            'Il perigeo di Traiano.',
            'Ma non si dice farabulto?',
            'Non avrò mai freddo!',
            'Cosa ha inventato l\’uomo? La cerniera.',
            'I baffi sono lo strumento di vita migliore del mondo.',
            'Io non mi ammalo mai.',
            'Io non sono nella legalità.',
            'C rmett sul a facc.',
            'Io sono un errore.',
            'Dove cazzo sta il pecche rè',
            'Oltre a vedere scuro non vedo.',
            'L\’asino è solo, non ha parenti.'],

            ['Non voleva perché la situazione non era e non volevano assolutamente.',
            'Qui ci fermiamo qui.',
            'Scusate! Se mi fate… Se no eh! Un po\’ di calma.',
            'Noi le chiamiamo aziende di stato perché sono aziende di stato.',
            'Dicono che è importante eh, per avere un\’idea di dove.',
            'Per protesta protestarono.',
            'Non sono una persona che impongo o che offendo.',
            'Mi dovete fare silenzio!',
            'Da dove queste famiglie? Secondo, soprattutto e naturalmente queste famiglie provenivano e naturalmente risiedevano.',
            'Adesso vi ritiro!',
            'Il suo mestiero era l\’imbianchino.',
            'Che cosa significa? Che noi, 5 anni di prigione… Ma solo pochi mesi!',
            'Togliamo questo mmm se no metto la nota.',
            'Se non venite al secondo quadrimestre io vi presento con eeeeh ve lo dico!',
            'Non voglio sentire!',
            'Tu hai il dovere di stare zitto, io ho il diritto di parlare!',
            'Fiorli!',
            'Riuscì a vincere la vittoria.',
            'Questa repubblica di Salò… quale che cosa aveva fatto?',
            'Mica dico che non dovete parlare, però cerchiamo un po\’ tutti!'],

            ['Mi do alla patata.',
            'Ma cos\’è questa puzza di figa?!',
            'Oggi sono arrabbiata perché ho il culo intostato.',
            'Io dico sempre cose sessate.',
            'Non rispondo per non finire sull\’agendina!',
            'Sono poco decorosa?!?',
            'Il mio culo appoggia sul tavolo!',
            'Sono pelata, sono bianca, vattene!',
            'Ho il braccio potenziato.',
            'Di solito non mi piacciono le cose pelose.',
            'Il tuo culo mi arriva alla schiena.',
            'Dio palle!',
            'Dio cavolo!',
            'Divento vecchia quando mi abbracciate.',
            'Dubito di sì.',
            'Credevo significasse almeno tutto il contrario.',
            '\‘Sto raffreddore mi fa sballa\’ troppo.'],
            
            ['When I went you colour?',
            'Jean Fransisch van Gogh',
            'Don\’t touch my orgoglij!',
            'Non vinco una schedina da quando hanno eletto \‘sto cazzo di papa.',
            'Famfink about your life? Speak about.',
            'All together Bradi God!',
            'What\’s you do you doing?',
            'Ho nutrito la mia penna con succo di arancia, ora questa non risponde più ai miei comandi.',
            'Mi pizzicano i vetrosi',
            'Watering guys.',
            'Mi impicco di fiducia!',
            'Se la mimosa è mia il ciclamino è di tutti!',
            'Crepi il luck!',
            'Antecedente ponde pi.',
            'Cambiando l\’ordine dei professori di fisica il risultato non cambia.',
            'Il metabolismo è migliore a mezzogiorno e mezza.'],

            ['A volte i maialini si scotennano pure!',
            'La parentela è utile solo quando serve.',
            'Le crocchette sono come le ragazze, devi aprirle per vedere cosa c\’è dentro!',
            'State attenti perché è abbastanza facile.',
            'Io interrogo, mica metto la bomba!',
            'Non so mettere il vibratore.', 'Autovalutati', 'Brutto maialone!',
            'Remember the ape maya.',
            'Questi buchi sono tutti uguali!'],

            ]

};



const clickPulsante = document.getElementById('pulsante');
clickPulsante.addEventListener('click', function(event)  {
    const indiceAutore = Math.floor(Math.random()*obCit['autore'].length +1)
    const indice = Math.floor(Math.random()*obCit['frasi'][indiceAutore].length);
    const autore = document.createElement('p');
    const cit = document.createElement('q');
    
    if (event.target.innerText !== 'Nuova citazione') {
        event.target.innerText = 'Nuova citazione';
        let nomeAutore = '';
        const contenuto = document.getElementById('content');
        //const imm = document.createElement('img');
        //imm.setAttribute('src', 'https://github.com/Dario-DC/Imm/blob/main/Echinacea.jpg?raw=true');
        //contenuto.appendChild(imm);
        autore.setAttribute('id', 'autore');
        switch(indiceAutore) {
            case 0:
                nomeAutore = '— Vito';
                break;
            case 1:
                nomeAutore = '— E.T.O.';
                break;
            case 2:
                nomeAutore = '— T.A.';
                break;
            case 3:
                nomeAutore = '— V.F.';
                break;
            case 4:
                nomeAutore = '— cit';
                break;
        }
        autore.innerText = nomeAutore;
        contenuto.insertBefore(autore, contenuto.firstChild);
        cit.setAttribute('id', 'cit');
        cit.innerText = obCit['frasi'][indiceAutore][indice];
        contenuto.insertBefore(cit, contenuto.firstChild);
        
    } else {
        switch(indiceAutore) {
            case 0:
                nomeAutore = '— Vito';
                break;
            case 1:
                nomeAutore = '— E.T.O.';
                break;
            case 2:
                nomeAutore = '— T.A.';
                break;
            case 3:
                nomeAutore = '— V.F.';
                break;
            case 4:
                nomeAutore = '— cit';
                break;
        }
        document.getElementById('autore').innerText = nomeAutore;
        document.getElementById('cit').innerText = obCit['frasi'][indiceAutore][indice];   

    }
    

});