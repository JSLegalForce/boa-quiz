// Quiz configuratie
const CONFIG = {
  aantalVragen: 10,
  slagingsdrempel: 0.70 // 70%
};

// Quiz state
let huidigeSessieVragen = [];
let huidigVraagIndex = 0;
let score = 0;
let beantwoord = false;

// DOM elementen
const schermStart = document.getElementById('scherm-start');
const schermVraag = document.getElementById('scherm-vraag');
const schermEinde = document.getElementById('scherm-einde');

const voortgangsTekst = document.getElementById('voortgang-tekst');
const voortgangsBalk = document.getElementById('voortgang-balk');
const vraagTekst = document.getElementById('vraag-tekst');
const optiesContainer = document.getElementById('opties-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackTekst = document.getElementById('feedback-tekst');
const btnVolgende = document.getElementById('btn-volgende');

const eindScore = document.getElementById('eind-score');
const eindPercentage = document.getElementById('eind-percentage');
const eindBeoordeling = document.getElementById('eind-beoordeling');
const eindBeoordelingTekst = document.getElementById('eind-beoordeling-tekst');

// Shuffle array (Fisher-Yates)
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz() {
  huidigeSessieVragen = shuffle(ALLE_VRAGEN).slice(0, CONFIG.aantalVragen);
  huidigVraagIndex = 0;
  score = 0;

  schermStart.classList.remove('actief');
  schermEinde.classList.remove('actief');
  schermVraag.classList.add('actief');

  toonVraag();
}

function toonVraag() {
  beantwoord = false;
  feedbackContainer.classList.remove('actief');
  btnVolgende.classList.remove('actief');

  const vraag = huidigeSessieVragen[huidigVraagIndex];
  const totaal = huidigeSessieVragen.length;
  const huidig = huidigVraagIndex + 1;

  // Voortgang
  voortgangsTekst.textContent = `Vraag ${huidig} van ${totaal}`;
  const pct = ((huidig - 1) / totaal) * 100;
  voortgangsBalk.style.width = pct + '%';

  // Vraag
  vraagTekst.textContent = vraag.vraag;

  // Opties
  optiesContainer.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  vraag.opties.forEach((optie, i) => {
    const btn = document.createElement('button');
    btn.className = 'optie-knop';
    btn.innerHTML = `<span class="optie-letter">${letters[i]}</span><span class="optie-tekst">${optie}</span>`;
    btn.addEventListener('click', () => verwerkAntwoord(i, btn));
    optiesContainer.appendChild(btn);
  });
}

function verwerkAntwoord(gekozenIndex, gekliktBtn) {
  if (beantwoord) return;
  beantwoord = true;

  const vraag = huidigeSessieVragen[huidigVraagIndex];
  const knoppen = optiesContainer.querySelectorAll('.optie-knop');
  const juist = vraag.juist === gekozenIndex;

  // Disable alle knoppen
  knoppen.forEach(k => k.disabled = true);

  // Markeer juist/fout
  knoppen[vraag.juist].classList.add('juist');
  if (!juist) {
    gekliktBtn.classList.add('fout');
  } else {
    score++;
  }

  // Feedback
  feedbackTekst.textContent = vraag.uitleg;
  feedbackContainer.classList.remove('juist', 'fout');
  feedbackContainer.classList.add(juist ? 'juist' : 'fout');
  feedbackContainer.classList.add('actief');
  btnVolgende.classList.add('actief');

  // Voortgangsbalk updaten
  const pct = ((huidigVraagIndex + 1) / huidigeSessieVragen.length) * 100;
  voortgangsBalk.style.width = pct + '%';
}

function volgendeVraag() {
  huidigVraagIndex++;
  if (huidigVraagIndex >= huidigeSessieVragen.length) {
    toonEinde();
  } else {
    toonVraag();
  }
}

function toonEinde() {
  schermVraag.classList.remove('actief');
  schermEinde.classList.add('actief');

  const totaal = huidigeSessieVragen.length;
  const percentage = score / totaal;
  const geslaagd = percentage >= CONFIG.slagingsdrempel;

  eindScore.textContent = `${score} van de ${totaal} vragen goed`;
  eindPercentage.textContent = `${Math.round(percentage * 100)}%`;

  eindBeoordeling.className = 'beoordeling ' + (geslaagd ? 'geslaagd' : 'gezakt');
  eindBeoordeling.textContent = geslaagd ? '✓ Geslaagd' : '✗ Niet geslaagd';
  eindBeoordelingTekst.textContent = geslaagd
    ? 'Gefeliciteerd! Je hebt de quiz met goed gevolg afgerond.'
    : `Je hebt minimaal ${Math.round(CONFIG.slagingsdrempel * 100)}% nodig om te slagen. Probeer het opnieuw!`;
}

function herstart() {
  schermEinde.classList.remove('actief');
  schermStart.classList.add('actief');
}

// Event listeners
document.getElementById('btn-start').addEventListener('click', startQuiz);
document.getElementById('btn-volgende').addEventListener('click', volgendeVraag);
document.getElementById('btn-herstart').addEventListener('click', herstart);
