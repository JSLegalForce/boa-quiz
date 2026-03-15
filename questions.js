const ALLE_VRAGEN = [
  // === BEVOEGDHEDEN BOA (~10 vragen) ===
  {
    vraag: "Welk document geeft een BOA de bevoegdheid om handhavend op te treden?",
    opties: [
      "Politiewet",
      "Akte van opsporingsbevoegdheid",
      "Gemeentewet",
      "Wegenverkeerswet"
    ],
    juist: 1,
    uitleg: "De akte van opsporingsbevoegdheid is het officiële document dat een BOA mandateert om opsporingshandelingen te verrichten binnen zijn domein."
  },
  {
    vraag: "Binnen welk domein is een BOA Domein I bevoegd?",
    opties: [
      "Milieu, welzijn en infrastructuur",
      "Openbare ruimte",
      "Onderwijs",
      "Openbaar vervoer"
    ],
    juist: 1,
    uitleg: "BOA Domein I heeft bevoegdheden in de openbare ruimte, zoals parkeren, overlast en APV-handhaving."
  },
  {
    vraag: "Mag een BOA iemand staande houden?",
    opties: [
      "Nee, dat mag alleen de politie",
      "Ja, altijd en overal",
      "Ja, maar alleen binnen zijn bevoegdheidsdomein en bij verdenking van een strafbaar feit",
      "Ja, maar alleen als er een agent bij aanwezig is"
    ],
    juist: 2,
    uitleg: "Een BOA mag staande houden op grond van artikel 5:19 Awb, maar uitsluitend binnen zijn domein en bij een redelijk vermoeden van een strafbaar feit."
  },
  {
    vraag: "Wat moet een BOA altijd bij zich hebben tijdens zijn dienst?",
    opties: [
      "Een wapenstok en handboeien",
      "Zijn legitimatiebewijs (BOA-pas)",
      "Een kopie van het Wetboek van Strafrecht",
      "Een dienstrooster"
    ],
    juist: 1,
    uitleg: "Een BOA is verplicht zijn legitimatiebewijs (de BOA-pas) bij zich te dragen en op verzoek te tonen."
  },
  {
    vraag: "Wat is het verschil tussen een BOA en een politieagent wat betreft bevoegdheden?",
    opties: [
      "Er is geen verschil; beide hebben dezelfde bevoegdheden",
      "Een BOA heeft beperktere bevoegdheden die specifiek zijn voor zijn domein",
      "Een BOA heeft meer bevoegdheden omdat hij lokaal werkt",
      "Een politieagent mag geen boetes uitschrijven"
    ],
    juist: 1,
    uitleg: "Een BOA heeft domeingebonden bevoegdheden. Een politieagent heeft algemene opsporingsbevoegdheid voor alle strafbare feiten."
  },
  {
    vraag: "Welke wet regelt de bevoegdheden van de BOA?",
    opties: [
      "Wet op de Bijzondere Opsporingsdiensten",
      "Wet BOA (Besluit Buitengewoon Opsporingsambtenaar)",
      "Politiewet 2012",
      "Algemene wet bestuursrecht"
    ],
    juist: 1,
    uitleg: "Het Besluit Buitengewoon Opsporingsambtenaar (Besluit BOA) regelt de aanwijzing, de bevoegdheden en de eisen waaraan een BOA moet voldoen."
  },
  {
    vraag: "Wanneer mag een BOA geweld gebruiken?",
    opties: [
      "Nooit; geweld is altijd verboden voor een BOA",
      "Altijd als hij dat nodig acht",
      "Alleen in zelfverdediging en als aan de geweldsinstructie is voldaan",
      "Alleen als de politie toestemming heeft gegeven"
    ],
    juist: 2,
    uitleg: "Een BOA mag alleen geweld gebruiken in overeenstemming met de geweldsinstructie BOA: proportioneel, subsidiair en alleen als andere middelen zijn uitgeput."
  },
  {
    vraag: "Aan wie legt een BOA verantwoording af over zijn handelen?",
    opties: [
      "Uitsluitend aan zijn werkgever",
      "Aan de officier van justitie en zijn toezichthouder",
      "Alleen aan de burgemeester",
      "Aan niemand; hij handelt zelfstandig"
    ],
    juist: 1,
    uitleg: "Een BOA valt onder toezicht van de politie en de officier van justitie. Ook zijn werkgever heeft een toezichthoudende rol."
  },
  {
    vraag: "Wat is een 'mulder-feit'?",
    opties: [
      "Een zwaar misdrijf dat door de BOA wordt opgespoord",
      "Een lichte verkeersovertreding die via de WAHV wordt afgehandeld",
      "Een overtreding van de APV",
      "Een feit dat alleen door de politie mag worden beboet"
    ],
    juist: 1,
    uitleg: "Mulder-feiten zijn lichte verkeersovertredingen die bestuursrechtelijk worden afgehandeld via de Wet administratiefrechtelijke handhaving verkeersvoorschriften (WAHV)."
  },
  {
    vraag: "Mag een BOA een verdachte aanhouden (arresteren)?",
    opties: [
      "Ja, altijd",
      "Nee, nooit",
      "Ja, maar alleen op heterdaad en hij moet de verdachte direct overdragen aan de politie",
      "Ja, maar alleen met schriftelijke toestemming van de officier van justitie"
    ],
    juist: 2,
    uitleg: "Op grond van artikel 53 Sv mag een BOA bij heterdaad aanhouden, maar hij moet de aangehoudene zo snel mogelijk overdragen aan de politie."
  },

  // === APV (~10 vragen) ===
  {
    vraag: "Wat staat er in een Algemene Plaatselijke Verordening (APV)?",
    opties: [
      "Landelijke verkeerswetgeving",
      "Lokale regels van de gemeente over openbare orde en leefomgeving",
      "Regels over rijksbelastingen",
      "Arbeidsrechtelijke bepalingen"
    ],
    juist: 1,
    uitleg: "De APV bevat lokale gemeentelijke regels over onder meer openbare orde, overlast, evenementen en gebruik van de openbare ruimte."
  },
  {
    vraag: "Een groep jongeren heeft zich verzameld zonder vergunning en veroorzaakt overlast. Op welke grond kan een BOA optreden?",
    opties: [
      "Wetboek van Strafrecht artikel 141 (openlijke geweldpleging)",
      "APV-bepaling over samenscholing of het verstoren van de openbare orde",
      "Wegenverkeerswet",
      "Burgerlijk Wetboek"
    ],
    juist: 1,
    uitleg: "De meeste APV's bevatten een verbod op samenscholing of het veroorzaken van overlast in de openbare ruimte, op basis waarvan een BOA kan optreden."
  },
  {
    vraag: "Iemand stookt een vuur op straat zonder vergunning. Wat is de meest waarschijnlijke grondslag voor optreden?",
    opties: [
      "Politiewet",
      "APV-verbod op het stoken van open vuur in de openbare ruimte",
      "Wegenverkeerswet",
      "Vuurwerkbesluit"
    ],
    juist: 1,
    uitleg: "Het stoken van vuur op de openbare weg is in de meeste gemeenten verboden via de APV, tenzij een vergunning is verleend."
  },
  {
    vraag: "Wanneer is een evenement vergunningplichtig volgens de APV?",
    opties: [
      "Altijd, ook voor een verjaardag in een tuin",
      "Nooit; evenementen zijn altijd vrij",
      "Bij bijeenkomsten boven een bepaalde omvang of op de openbare weg, conform de APV-criteria",
      "Alleen als er alcohol wordt geschonken"
    ],
    juist: 2,
    uitleg: "De APV bepaalt per gemeente wanneer een evenementenvergunning vereist is, doorgaans bij een bepaald aantal bezoekers of gebruik van de openbare ruimte."
  },
  {
    vraag: "Wat is de taak van een BOA bij een illegaal geplaatst reclamebord op de openbare weg?",
    opties: [
      "Het bord direct verwijderen",
      "Niets doen; dit is een taak van de gemeente",
      "Constateren, proces-verbaal opmaken en de overtreder aanspreken",
      "De politie bellen om het bord te verwijderen"
    ],
    juist: 2,
    uitleg: "Een BOA constateert de overtreding van de APV, spreekt de overtreder aan en kan een proces-verbaal opmaken. De feitelijke verwijdering is een taak van de gemeente."
  },
  {
    vraag: "Iemand plast tegen een muur in de openbare ruimte. Op welke grondslag treedt een BOA op?",
    opties: [
      "Wetboek van Strafrecht",
      "APV-verbod op openbare urinering (wildplassen)",
      "Wegenverkeerswet",
      "Waterwet"
    ],
    juist: 1,
    uitleg: "Wildplassen is in vrijwel alle gemeenten via de APV verboden als overlastgevend gedrag in de openbare ruimte."
  },
  {
    vraag: "Wat verstaan we onder 'baldadigheid' in de context van de APV?",
    opties: [
      "Het plegen van zware criminaliteit",
      "Moedwillige vernietiging of beschadiging van eigendommen zonder direct nut",
      "Het rijden zonder rijbewijs",
      "Het zonder vergunning houden van een evenement"
    ],
    juist: 1,
    uitleg: "Baldadigheid (ook: vandalisme) is het moedwillig beschadigen of vernielen van eigendommen en is strafbaar via zowel de APV als het Wetboek van Strafrecht."
  },
  {
    vraag: "Mag een BOA iemand verbieden om op een bepaalde plek in de openbare ruimte te verblijven?",
    opties: [
      "Nee, vrijheid van beweging geldt altijd",
      "Ja, altijd naar eigen inzicht",
      "Ja, als de APV of een gebiedsverbod dat mogelijk maakt en er sprake is van overlast",
      "Alleen als de burgemeester persoonlijk toestemming geeft"
    ],
    juist: 2,
    uitleg: "Op basis van APV-bepalingen of een door de burgemeester opgelegd gebiedsverbod kan een BOA iemand verzoeken of verplichten een gebied te verlaten."
  },
  {
    vraag: "Een ondernemer heeft zijn terras uitgebreid buiten de vergunde grenzen. Wat doet de BOA?",
    opties: [
      "Direct de stoelen en tafels verwijderen",
      "Niets, dit is een privaatrechtelijke kwestie",
      "De overtreding constateren en de ondernemer aanspreken op de APV-vergunningsgrens",
      "De politie inschakelen voor arrestatie"
    ],
    juist: 2,
    uitleg: "Het overschrijden van vergunde terrasruimte is een APV-overtreding. De BOA constateert, spreekt aan en kan een proces-verbaal opmaken."
  },
  {
    vraag: "Wat is de betekenis van 'last onder dwangsom' in de handhaving?",
    opties: [
      "Een strafrechtelijke boete die direct wordt geïnd",
      "Een bestuursrechtelijke maatregel waarbij een overtreder een geldbedrag verbeurt als hij de overtreding niet stopt",
      "Een civielrechtelijke schadevergoedingseis",
      "Een waarschuwing zonder financiële gevolgen"
    ],
    juist: 1,
    uitleg: "Een last onder dwangsom is een bestuursrechtelijk handhavingsinstrument: de overtreder moet de overtreding beëindigen op straffe van een te verbeuren geldbedrag."
  },

  // === WAHV / PARKEREN (~8 vragen) ===
  {
    vraag: "Wat is de WAHV?",
    opties: [
      "Wet op de Arbeidsomstandigheden en Handhaving Verkeersvoorschriften",
      "Wet administratiefrechtelijke handhaving verkeersvoorschriften",
      "Wet Algemene Handhaving Verkeersvoorschriften",
      "Wet op de Aanstelling en Handhaving Verkeersboa's"
    ],
    juist: 1,
    uitleg: "De WAHV (Wet Mulder) regelt de bestuursrechtelijke afhandeling van lichte verkeersovertredingen via een administratieve boete in plaats van een strafvervolging."
  },
  {
    vraag: "Iemand parkeert op een gehandicaptenparkeerplaats zonder geldige ontheffing. Wat doet de BOA?",
    opties: [
      "Het voertuig direct wegslepen",
      "Een naheffingsaanslag parkeerbelasting opleggen",
      "Een WAHV-beschikking uitschrijven voor het parkeren op een gereserveerde parkeerplaats",
      "Alleen een mondeling verzoek doen om weg te rijden"
    ],
    juist: 2,
    uitleg: "Parkeren op een gehandicaptenparkeerplaats zonder geldige ontheffing is een WAHV-feit waarvoor de BOA een beschikking (boete) kan uitschrijven."
  },
  {
    vraag: "Wat is een naheffingsaanslag parkeerbelasting?",
    opties: [
      "Een strafrechtelijke boete voor foutparkeren",
      "Een bestuursrechtelijke heffing als niet of onvoldoende parkeergeld is betaald",
      "Een verkeersboete op grond van de WAHV",
      "Een dwangsom wegens herhaald foutparkeren"
    ],
    juist: 1,
    uitleg: "Een naheffingsaanslag is een bestuursrechtelijk middel op grond van de Gemeentewet, opgelegd als onvoldoende parkeerbelasting is voldaan."
  },
  {
    vraag: "Op welke afstand van een kruispunt mag je niet parkeren?",
    opties: [
      "3 meter",
      "5 meter",
      "10 meter",
      "15 meter"
    ],
    juist: 2,
    uitleg: "Op grond van artikel 24 RVV 1990 is parkeren verboden binnen 5 meter van een kruispunt."
  },
  {
    vraag: "Iemand parkeert op het trottoir en belemmert voetgangers. Wat is de juiste actie?",
    opties: [
      "Alleen een waarschuwing geven",
      "Een WAHV-beschikking uitschrijven voor het parkeren op het trottoir",
      "De politie bellen; dit valt buiten het BOA-domein",
      "Het voertuig eigenhandig verplaatsen"
    ],
    juist: 1,
    uitleg: "Parkeren op het trottoir is een WAHV-feit (artikel 10 RVV jo. bijlage 1 WAHV). De BOA schrijft een beschikking uit."
  },
  {
    vraag: "Hoe lang mag een voertuig maximaal op dezelfde plek geparkeerd staan als er geen tijdslimiet is aangegeven?",
    opties: [
      "24 uur",
      "3 dagen",
      "Er is geen wettelijke maximumparkeerduur zonder tijdslimitbord",
      "1 week"
    ],
    juist: 2,
    uitleg: "Zonder een bord dat een parkeerduur aangeeft, is er in de Wegenverkeerswetgeving geen algemene maximumparkeertijd. Gemeenten kunnen dit via de APV regelen."
  },
  {
    vraag: "Wat betekent 'E1' op een verkeersbord?",
    opties: [
      "Parkeren toegestaan",
      "Parkeerverbod (blauw bord met rode rand en diagonale streep)",
      "Stopverbod",
      "Eenrichtingsverkeer"
    ],
    juist: 1,
    uitleg: "Bord E1 geeft een parkeerverbod aan. De BOA kan hier WAHV-beschikkingen uitschrijven voor voertuigen die in strijd met dit bord staan geparkeerd."
  },
  {
    vraag: "Mag een BOA een voertuig laten wegslepen?",
    opties: [
      "Nee, dat mag nooit",
      "Ja, altijd als hij dat wil",
      "Ja, als de gemeente hiervoor een verordening heeft en het voertuig gevaar of ernstige hinder veroorzaakt",
      "Alleen als de eigenaar schriftelijk toestemming geeft"
    ],
    juist: 2,
    uitleg: "Wegslepen is mogelijk op grond van artikel 170 WVW jo. gemeentelijke verordening, bij gevaar of ernstige belemmering van het verkeer."
  },

  // === OPENBARE ORDE (~6 vragen) ===
  {
    vraag: "Wat regelt artikel 2:48 van een model-APV over alcoholgebruik?",
    opties: [
      "Het verbod op alcoholverkoop na 22:00 uur",
      "Het verbod op het nuttigen van alcohol op de openbare weg in aangewezen gebieden",
      "De minimumleeftijd voor alcoholconsumptie",
      "Het verbod op het meenemen van alcohol in het openbaar vervoer"
    ],
    juist: 1,
    uitleg: "Model-APV artikel 2:48 geeft gemeenten de mogelijkheid om alcoholgebruik op de openbare weg in bepaalde gebieden te verbieden ter bescherming van de openbare orde."
  },
  {
    vraag: "Een persoon gedraagt zich agressief op straat en vormt een gevaar. Wat is de eerste stap van de BOA?",
    opties: [
      "Direct overgaan tot aanhouding",
      "Weglopen en de situatie vermijden",
      "De-escaleren, afstand bewaren en direct de politie inschakelen",
      "Een boete uitschrijven wegens verstoring openbare orde"
    ],
    juist: 2,
    uitleg: "Bij agressief gedrag geldt: veiligheid eerst. De BOA de-escaleert, bewaakt afstand en schakelt de politie in. Aanhouding bij gevaar is politietaak."
  },
  {
    vraag: "Wat is 'openbare dronkenschap' in juridische zin?",
    opties: [
      "Het kopen van alcohol terwijl je dronken bent",
      "Zichtbaar dronken zijn op de openbare weg waardoor de openbare orde wordt verstoord",
      "Het drinken van alcohol in een horecagelegenheid",
      "Het rijden onder invloed"
    ],
    juist: 1,
    uitleg: "Openbare dronkenschap (artikel 426 WvSr) betreft het zich in kennelijke staat van dronkenschap bevinden op de openbare weg, waarbij overlast of gevaar ontstaat."
  },
  {
    vraag: "Iemand gooit een blikje op straat. Welke overtreding is dit?",
    opties: [
      "Diefstal",
      "Zwerfafval/zwerfvuil: overtreding van de APV-verbod op het wegwerpen van afval",
      "Vandalisme",
      "Dit is geen overtreding"
    ],
    juist: 1,
    uitleg: "Het gooien van afval op straat is in vrijwel alle gemeenten verboden via de APV. De BOA kan hiervoor een proces-verbaal opmaken."
  },
  {
    vraag: "Wat is een 'gebiedsverbod' en wie kan dit opleggen?",
    opties: [
      "Een verbod om in een gebouw te komen; opgelegd door de eigenaar",
      "Een bestuursrechtelijk verbod om een bepaald gebied te betreden; opgelegd door de burgemeester",
      "Een strafrechtelijk verbod opgelegd door de rechter",
      "Een APV-verbod opgelegd door de BOA zelf"
    ],
    juist: 1,
    uitleg: "Een gebiedsverbod is een ordemaatregel die de burgemeester op grond van artikel 172a Gemeentewet kan opleggen aan personen die de openbare orde verstoren."
  },
  {
    vraag: "Wanneer is sprake van 'huisvredebreuk' en is dit relevant voor een BOA?",
    opties: [
      "Altijd als iemand een gebouw betreedt",
      "Als iemand zonder toestemming een woning of besloten ruimte betreedt; de BOA kan dit constateren maar de opsporing is primair politietaak",
      "Alleen als er geweld bij is gebruikt",
      "Nooit; huisvredebreuk valt buiten het BOA-domein"
    ],
    juist: 1,
    uitleg: "Huisvredebreuk (artikel 138 WvSr) is een misdrijf. Een BOA kan het constateren, maar de opsporing en aanhouding is primair een politietaak."
  },

  // === PRAKTIJKSCENARIO'S (~6 vragen) ===
  {
    vraag: "Je ziet een persoon een fietswrak vastketenen aan een lantaarnpaal. Wat doe je als eerste?",
    opties: [
      "Direct een boete uitschrijven op basis van de APV",
      "De persoon staande houden en vragen om legitimatie",
      "De situatie observeren en fotograferen als bewijs",
      "De persoon vriendelijk aanspreken, uitleggen wat de regels zijn en verzoeken het fietswrak te verwijderen"
    ],
    juist: 3,
    uitleg: "De eerste stap is altijd informeren en een herstelmogelijkheid bieden. Alleen bij weigering of herhaling volgt een formele maatregel."
  },
  {
    vraag: "Je constateert dat iemand zijn hond niet opruimt na een ontlasting. Hoe handel je?",
    opties: [
      "De hond in beslag nemen",
      "De eigenaar aanspreken op de APV-overtreding en zo nodig een boete uitschrijven",
      "Alleen een waarschuwing geven; hondenpoep is niet strafbaar",
      "De politie bellen"
    ],
    juist: 1,
    uitleg: "Het niet opruimen van hondenpoep is in de meeste gemeenten een APV-overtreding. De BOA kan aanspreken en een proces-verbaal opmaken."
  },
  {
    vraag: "Een automobilist vraagt waarom hij een naheffingsaanslag heeft ontvangen. Hoe reageer je?",
    opties: [
      "Je weigert dit te bespreken en wijst hem naar de gemeente",
      "Je legt rustig uit wat de grondslag is, welke regels gelden en hoe hij bezwaar kan maken",
      "Je verklaart de aanslag ongeldig als hij boos wordt",
      "Je belt direct de politie"
    ],
    juist: 1,
    uitleg: "Een BOA dient een burger correct te informeren over de grondslag van een opgelegde maatregel en de bezwaarmogelijkheden. Transparantie is essentieel."
  },
  {
    vraag: "Je wordt door een bewoner gevraagd om op te treden tegen overlast van een buurman. Wat is de juiste aanpak?",
    opties: [
      "Direct bij de buurman aanbellen en hem aanspreken",
      "De bewoner uitleggen dat dit buiten je bevoegdheid valt",
      "De situatie objectief beoordelen, informatie verzamelen en zo nodig optreden op basis van de APV",
      "Meteen een boete uitschrijven op de melding van de bewoner"
    ],
    juist: 2,
    uitleg: "Een BOA handelt objectief en op basis van eigen waarneming. Een melding is aanleiding om te gaan kijken, niet om direct maatregelen te treffen."
  },
  {
    vraag: "Tijdens je ronde zie je dat iemand graffiti spuit op een muur. Wat doe je?",
    opties: [
      "Je spreekt de persoon aan, legitimeert hem zo mogelijk, constateert de overtreding en maakt een proces-verbaal op",
      "Je wacht tot hij klaar is voor je ingrijpt",
      "Je verwijdert de graffiti zelf",
      "Je belt de eigenaar van de muur"
    ],
    juist: 0,
    uitleg: "Graffiti spuiten is vernieling (art. 350 WvSr). De BOA treedt op: spreekt aan, legitimeert zo mogelijk en maakt een proces-verbaal op."
  },
  {
    vraag: "Een bezoeker van een evenement wordt agressief richting jou. Wat doe je?",
    opties: [
      "Je gaat de confrontatie aan om te laten zien wie de baas is",
      "Je negeert het gedrag",
      "Je de-escaleert, vraagt om back-up en schakelt zo nodig de politie in",
      "Je schrijft direct een boete uit voor agressie"
    ],
    juist: 2,
    uitleg: "Eigen veiligheid staat voorop. De BOA de-escaleert, bewaakt afstand, vraagt om collega's of de politie en handelt proportioneel."
  }
];
