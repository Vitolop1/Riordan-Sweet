(function () {
    var email = 'riordanrugby8@gmail.com';
    var copyButtons = [
        document.getElementById('copyEmail'),
        document.getElementById('copyEmailSecondary')
    ];
    var savePdf = document.getElementById('savePdf');
    var langButtons = Array.from(document.querySelectorAll('.lang-button'));
    var storageKey = 'rugbyProfileLang';
    var activeLanguage = 'en';

    var getTexts = function (selector) {
        return Array.from(document.querySelectorAll(selector)).map(function (element) {
            return element.textContent.trim();
        });
    };
    var setTexts = function (selector, values) {
        Array.from(document.querySelectorAll(selector)).forEach(function (element, index) {
            if (typeof values[index] === 'string') {
                element.textContent = values[index];
            }
        });
    };
    var setText = function (selector, value) {
        var element = document.querySelector(selector);
        if (element && typeof value === 'string') {
            element.textContent = value;
        }
    };

    var base = {
        brandMeta: document.querySelector('.brand-meta').textContent.trim(),
        nav: getTexts('.nav-links a'),
        eyebrow: document.querySelector('.eyebrow').textContent.trim(),
        heroLead: document.querySelector('.hero-lead').textContent.trim(),
        heroTags: getTexts('.hero-meta .tag'),
        heroButtons: [document.querySelector('.action-row a:nth-of-type(1)').textContent.trim(), document.querySelector('.action-row a:nth-of-type(2)').textContent.trim(), document.getElementById('copyEmail').textContent.trim(), document.getElementById('savePdf').textContent.trim()],
        heroStatLabels: getTexts('.hero-stat-label'),
        captionLabels: getTexts('.caption-label'),
        captionTexts: getTexts('.caption-text'),
        sectionKickers: getTexts('.section-kicker'),
        sectionTitles: getTexts('.section-title'),
        sectionHints: getTexts('.section-hint'),
        metricLabels: getTexts('.metric-label'),
        metricCopy: getTexts('.metric-copy'),
        lede: document.querySelector('.lede-card p').textContent.trim(),
        bulletTitles: getTexts('.bullet-card h3'),
        bulletItems: getTexts('.bullet-card li'),
        timelineCopy: getTexts('.timeline-card p'),
        honoursCopy: document.querySelector('.honours-copy p').textContent.trim(),
        filmNotes: document.querySelector('.film-notes').textContent.trim(),
        referenceHeadings: getTexts('.reference-card h3'),
        contactHeading: document.querySelector('.contact-card h3').textContent.trim(),
        contactButton: document.querySelector('.contact-actions .button-primary').textContent.trim(),
        contactCopyButton: document.querySelector('.contact-actions .button-ghost').textContent.trim(),
        footer: getTexts('.status-text'),
        toast: 'Email copied'
    };

    var translations = {
        es: {
            brandMeta: 'Back Row | 6 / 7 / 8 | Belmont Abbey College',
            nav: ['Perfil', 'Experiencia', 'Video', 'Contacto'],
            eyebrow: 'USA U18 | Pasaporte de NZ | Perfil Recruiting',
            heroLead: 'Forward de tercera linea con experiencia internacional en juveniles, base universitaria y un perfil fisico muy fuerte en el contacto.',
            heroTags: ['Blindside Flanker', 'Openside Flanker', 'No. 8', 'Belmont Abbey College'],
            heroButtons: ['Ver Highlights', 'Email a Riordan', 'Copiar Email', 'Guardar en PDF'],
            heroStatLabels: ['Bronco', 'Bench', 'Broad Jump', 'Tamano'],
            captionLabels: ['Perfil', 'Valor en Cancha'],
            captionTexts: ['Forward de USA / Nueva Zelanda con experiencia en USA U18 y antecedentes en Belmont Abbey First XV.', 'Trabajo en el contacto, presion en el breakdown, valor en lineout y motor alto durante todo el partido.'],
            sectionKickers: ['Perfil', 'Experiencia y Logros', 'Video y Referencias', 'Contacto'],
            sectionTitles: ['Perfil Claro Para Coaches', 'Trayectoria Representativa', 'Ver el Juego y Llamar', 'Contacto Directo'],
            sectionHints: ['Lo esencial para un coach: identidad, medidas, roles y perfil de juego.', 'Seleccion nacional juvenil, college rugby y exposicion en entorno profesional.', 'Primero el video; despues referencias concretas de coaches que lo entrenaron.', 'Simple y directo para coaches, clubes y recruiting.'],
            metricLabels: ['Fecha de Nacimiento', 'Nacionalidad', 'Altura / Peso', 'Posiciones Principales', 'Programa Actual', 'Contacto'],
            metricCopy: ['21 anos', 'Pasaporte de Nueva Zelanda', '6 foot 2 inches / 215 lbs', 'Roles de tercera linea con valor en lineout', 'Titular del First XV en NCR Division I', 'riordanrugby8@gmail.com'],
            lede: 'Riordan ofrece un perfil recruiting compacto: tamano para la tercera linea, condicion fisica comprobada, identidad fuerte en el contacto y experiencia en rugby internacional juvenil, college rugby y pruebas profesionales.',
            bulletTitles: ['Estilo de Juego', 'Breakdown y Defensa', 'Marcadores Atleticos', 'Valor en Set Piece'],
            bulletItems: ['Carrier fisico que gana metros post-contacto.', 'Base de lucha que aporta control corporal y tackle leverage.', 'Link player util con offload y tip-on.', 'Rapido del tackle al contest con buena postura de jackal.', 'Alto work rate para doblar y repetir esfuerzos.', 'Presencia confiable en colisiones y limpieza de rucks.', 'Bronco: 4:47', 'Broad jump: 2.73 metros', 'Bench press: 161 kg / 355 lbs', 'Opcion movil en el lineout como saltador.', 'Lifter tecnico y fisico.', 'Comodo en blindside, openside y No. 8.'],
            timelineCopy: ['Seleccionado para el plantel masculino antes de salir por lesion.', 'Invitado a prueba en un entorno profesional de rugby league en el Reino Unido.', 'Representante internacional en la gira torneo por Paises Bajos.', 'Titular del First XV compitiendo en NCR Division I.'],
            honoursCopy: 'El perfil de Riordan combina seleccion juvenil nacional, produccion en college y exposicion de prueba a alto nivel, dandole a un coach un jugador que ya estuvo en contextos exigentes.',
            filmNotes: 'El video muestra el trabajo de Riordan en el contacto, la presion defensiva, la presencia en el breakdown y su impacto como carrier en roles de tercera linea.',
            referenceHeadings: ['Referencia 01', 'Referencia 02'],
            contactHeading: 'Contacto',
            contactButton: 'Iniciar Conversacion',
            contactCopyButton: 'Copiar Email',
            footer: ['Riordan Sweet rugby recruiting profile pensado para coaches, contacto directo y mejor lectura en desktop y mobile.', 'Copyright 2026 Riordan Sweet'],
            toast: 'Email copiado'
        },
        fr: {
            nav: ['Profil', 'Experience', 'Video', 'Contact'], eyebrow: 'USA U18 | Passeport NZ | Profil Recruiting', heroLead: 'Troisieme ligne avec experience internationale en categories jeunes, base universitaire et gros impact physique dans le contact.', heroButtons: ['Voir les Highlights', 'Envoyer un Email', 'Copier l\'Email', 'Enregistrer en PDF'],
            sectionKickers: ['Profil', 'Experience et Distinctions', 'Video et References', 'Contact'], sectionTitles: ['Profil Clair Pour les Coaches', 'Parcours Representatif', 'Voir le Jeu et Appeler', 'Contact Direct'], sectionHints: ['L\'essentiel pour un coach : identite, mensurations, roles et style de jeu.', 'Selection nationale jeune, college rugby et exposition professionnelle.', 'D\'abord la video, puis des references courtes de coaches qui l\'ont entraine.', 'Simple et direct pour coaches, clubs et recrutement.'],
            metricLabels: ['Date de Naissance', 'Nationalite', 'Taille / Poids', 'Postes Principaux', 'Programme Actuel', 'Contact'], metricCopy: ['21 ans', 'Titulaire d\'un passeport neo-zelandais', '6 foot 2 inches / 215 lbs', 'Roles de troisieme ligne avec valeur en touche', 'Titulaire en First XV en NCR Division I', 'riordanrugby8@gmail.com'], lede: 'Riordan offre un profil de recrutement compact : gabarit de troisieme ligne, condition physique prouvee, identite forte dans le contact et experience en rugby international jeune, college rugby et essai professionnel.', bulletTitles: ['Style de Jeu', 'Breakdown et Defense', 'Marqueurs Athletiques', 'Valeur en Set Piece'], timelineCopy: ['Selectionne pour le groupe masculin avant de se retirer sur blessure.', 'Invite a un essai dans un environnement professionnel de rugby league au Royaume-Uni.', 'Representant international lors du tournoi aux Pays-Bas.', 'Titulaire du First XV en NCR Division I.'], honoursCopy: 'Le profil de Riordan combine selection nationale jeune, production universitaire et exposition a haut niveau, donnant aux coaches un joueur deja habitue aux environnements exigeants.', filmNotes: 'La video montre le travail de Riordan dans le contact, la pression defensive, la presence au breakdown et son impact en troisieme ligne.', referenceHeadings: ['Reference 01', 'Reference 02'], contactHeading: 'Contact', contactButton: 'Demarrer la Conversation', contactCopyButton: 'Copier l\'Email', footer: ['Profil recruiting de Riordan Sweet pense pour une lecture rapide, un contact direct et une bonne presentation mobile.', 'Copyright 2026 Riordan Sweet'], toast: 'Email copie'
        },
        it: {
            nav: ['Profilo', 'Esperienza', 'Video', 'Contatto'], eyebrow: 'USA U18 | Passaporto NZ | Profilo Recruiting', heroLead: 'Terza linea con esperienza internazionale giovanile, base universitaria e forte impatto fisico nel contatto.', heroButtons: ['Guarda Highlights', 'Email a Riordan', 'Copia Email', 'Salva in PDF'],
            sectionKickers: ['Profilo', 'Esperienza e Riconoscimenti', 'Video e Referenze', 'Contatto'], sectionTitles: ['Profilo Chiaro Per i Coach', 'Percorso Rappresentativo', 'Guarda il Gioco e Chiama', 'Contatto Diretto'], sectionHints: ['L\'essenziale per un coach: identita, misure, ruoli e stile di gioco.', 'Selezione nazionale giovanile, college rugby ed esposizione professionale.', 'Prima il video, poi referenze concrete di coach che lo hanno allenato.', 'Semplice e diretto per coach, club e recruiting.'],
            metricLabels: ['Data di Nascita', 'Nazionalita', 'Altezza / Peso', 'Ruoli Principali', 'Programma Attuale', 'Contatto'], metricCopy: ['21 anni', 'Passaporto neozelandese', '6 foot 2 inches / 215 lbs', 'Ruoli di terza linea con valore in touche', 'Titolare del First XV in NCR Division I', 'riordanrugby8@gmail.com'], lede: 'Riordan offre un profilo recruiting compatto: taglia da terza linea, condizione fisica dimostrata, identita forte nel contatto ed esperienza in rugby internazionale giovanile, college rugby e prove professionali.', bulletTitles: ['Stile di Gioco', 'Breakdown e Difesa', 'Marker Atletici', 'Valore in Set Piece'], timelineCopy: ['Selezionato per la squadra senior prima di uscire per infortunio.', 'Invitato a una prova in un ambiente professionale di rugby league nel Regno Unito.', 'Rappresentante internazionale nel torneo nei Paesi Bassi.', 'Titolare del First XV in NCR Division I.'], honoursCopy: 'Il profilo di Riordan unisce selezione nazionale giovanile, produzione universitaria ed esposizione ad alto livello, offrendo ai coach un giocatore gia abituato a contesti esigenti.', filmNotes: 'Il video mostra il lavoro di Riordan nel contatto, la pressione difensiva, la presenza nel breakdown e il suo impatto come carrier nei ruoli di terza linea.', referenceHeadings: ['Referenza 01', 'Referenza 02'], contactHeading: 'Contatto', contactButton: 'Inizia Conversazione', contactCopyButton: 'Copia Email', footer: ['Profilo recruiting di Riordan Sweet pensato per lettura rapida, contatto diretto e buona resa su desktop e mobile.', 'Copyright 2026 Riordan Sweet'], toast: 'Email copiato'
        }
    };

    function setCopiedState(button) {
        if (!button) {
            return;
        }
        var originalText = button.textContent;
        button.textContent = (translations[activeLanguage] || base).toast;
        window.setTimeout(function () {
            button.textContent = originalText;
        }, 1800);
    }

    function fallbackCopy(button) {
        var tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        setCopiedState(button);
    }

    function copyEmail(button) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).then(function () {
                setCopiedState(button);
            }).catch(function () {
                fallbackCopy(button);
            });
            return;
        }
        fallbackCopy(button);
    }

    function applyLanguage(language) {
        activeLanguage = language;
        var pack = language === 'en' ? base : Object.assign({}, base, translations[language] || {});
        document.documentElement.lang = language;
        setText('.brand-meta', pack.brandMeta);
        setTexts('.nav-links a', pack.nav);
        setText('.eyebrow', pack.eyebrow);
        setText('.hero-lead', pack.heroLead);
        setTexts('.action-row > *', pack.heroButtons);
        setTexts('.hero-stat-label', pack.heroStatLabels);
        setTexts('.caption-label', pack.captionLabels);
        setTexts('.caption-text', pack.captionTexts);
        setTexts('.section-kicker', pack.sectionKickers);
        setTexts('.section-title', pack.sectionTitles);
        setTexts('.section-hint', pack.sectionHints);
        setTexts('.metric-label', pack.metricLabels);
        setTexts('.metric-copy', pack.metricCopy);
        setText('.lede-card p', pack.lede);
        setTexts('.bullet-card h3', pack.bulletTitles);
        setTexts('.bullet-card li', pack.bulletItems);
        setTexts('.timeline-card p', pack.timelineCopy);
        setText('.honours-copy p', pack.honoursCopy);
        setText('.film-notes', pack.filmNotes);
        setTexts('.reference-card h3', pack.referenceHeadings);
        setText('.contact-card h3', pack.contactHeading);
        setText('.contact-actions .button-primary', pack.contactButton);
        setText('.contact-actions .button-ghost', pack.contactCopyButton);
        setTexts('.status-text', pack.footer);
        langButtons.forEach(function (button) {
            button.classList.toggle('is-active', button.dataset.lang === language);
        });
    }

    copyButtons.forEach(function (button) {
        if (!button) {
            return;
        }
        button.addEventListener('click', function () {
            copyEmail(button);
        });
    });

    if (savePdf) {
        savePdf.addEventListener('click', function () {
            window.print();
        });
    }

    langButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var nextLanguage = button.dataset.lang || 'en';
            window.localStorage.setItem(storageKey, nextLanguage);
            applyLanguage(nextLanguage);
        });
    });

    var savedLanguage = window.localStorage.getItem(storageKey);
    var browserLanguage = (navigator.language || 'en').slice(0, 2).toLowerCase();
    applyLanguage(translations[savedLanguage] ? savedLanguage : (translations[browserLanguage] ? browserLanguage : 'en'));
}());
