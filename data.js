/* ==========================================================================
   EL REGNE DE FRACTÀRIA · DADES CURRICULARS 6è DE PRIMÀRIA (CATALÀ)
   ========================================================================== */

const HERO_RANKS = [
  { minStars: 0,   name: "🌱 Escuder Novell",         badge: "🌱" },
  { minStars: 10,  name: "🛡️ Guardià de les Parts",    badge: "🛡️" },
  { minStars: 25,  name: "⚔️ Cavaller d'Equivalia",    badge: "⚔️" },
  { minStars: 45,  name: "🧙‍♂️ Mag de l'Alquímia",       badge: "🧙‍♂️" },
  { minStars: 70,  name: "🐉 Mestre de les Runes",     badge: "🐉" },
  { minStars: 100, name: "👑 Gran Arximag de Fractària", badge: "👑" }
];

const KINGDOM_RELICS = [
  {
    id: "relic_shield",
    name: "Escut de les Mil Parts",
    icon: "🛡️",
    module: "identificacio",
    reqText: "Completa 5 missions d'Identificació i Representació",
    minCompleted: 5
  },
  {
    id: "relic_scales",
    name: "Balança d'Or del Drac",
    icon: "⚖️",
    module: "comparacio",
    reqText: "Completa 5 missions de Comparació de Fraccions",
    minCompleted: 5
  },
  {
    id: "relic_mirror",
    name: "Mirall Geminat d'Equivalia",
    icon: "✨",
    module: "equivalencia",
    reqText: "Completa 5 missions d'Equivalències Visuals",
    minCompleted: 5
  },
  {
    id: "relic_orb",
    name: "Orbe de Transformació",
    icon: "🔮",
    module: "transformacio",
    reqText: "Completa 5 missions de Transformació Alquímica",
    minCompleted: 5
  },
  {
    id: "relic_scroll",
    name: "Pergamí dels Savis",
    icon: "📜",
    module: "problemes",
    reqText: "Resoldre 5 Problemes Èpics del Regne",
    minCompleted: 5
  },
  {
    id: "relic_crown",
    name: "Corona de l'Arximag",
    icon: "👑",
    module: "all",
    reqText: "Aconsegueix almenys 45 cristalls estel·lars",
    minStars: 45
  }
];

/* ==========================================================================
   CAPÍTOLS DEL GRIMORI DEL SABER (TEORIA INTERACTIVA I CONCEPTES CLAU)
   ========================================================================== */
const GRIMORI_CHAPTERS = {
  concepte: {
    title: "1️⃣ Què és una Fracció? Les Parts de la Magia",
    ttsText: "Una fracció representa una o més parts iguals d'una unitat sencera. El denominador, el número de sota, indica en quantes parts iguals hem dividit l'escut o la poció. El numerador, el número de dalt, indica quantes d'aquestes parts hem activat o agafat.",
    html: `
      <h3>1️⃣ Què és una Fracció?</h3>
      <p>Al Regne de Fractària, quan repartim una poció màgica o dividim un escut rònic en <strong>parts exactament iguals</strong>, utilitzem una <strong>fracció</strong>.</p>
      
      <div class="grimori-concept-box">
        <p>🔺 <strong>Numerador (número de dalt):</strong> Indica quantes parts <strong>activem, pintem o agafem</strong>.</p>
        <p style="margin-top:0.4rem;">🔻 <strong>Denominador (número de sota):</strong> Indica en quantes <strong>parts iguals</strong> s'ha dividit la unitat sencera.</p>
      </div>

      <p><strong>Exemple màgic:</strong> Si dividim una barra de mana en <strong>4 parts iguals</strong> i n'activem <strong>3</strong>, tenim la fracció <strong>tres quarts (3/4)</strong>.</p>
      
      <div class="grimori-concept-box">
        <p>💡 <strong>Recorda la Llei de l'Equilibri:</strong> Si les parts no són de la mateixa mida, no és una fracció vàlida! Prova de moure els controls del <em>Cristall de Prova en Viu</em> de la dreta per veure com canvien el numerador i el denominador.</p>
      </div>
    `
  },
  tipus: {
    title: "2️⃣ Fraccions Pròpies, Impròpies i Nombres Mixtos",
    ttsText: "Segons si una fracció és més petita, igual o més gran que una unitat sencera, pot ser pròpia, igual a la unitat o impròpia. Les fraccions impròpies passen d'una unitat i es poden escriure com a nombre mixt.",
    html: `
      <h3>2️⃣ Pròpies, Impròpies i Nombres Mixtos</h3>
      <p>Quan comparem el <strong>numerador</strong> amb el <strong>denominador</strong>, descobrim tres tipus d'encanteris:</p>

      <div class="grimori-concept-box">
        <p>🛡️ <strong>Fracció Pròpia (menor que 1 unitat):</strong> El numerador és més petit que el denominador (ex: <strong>3/5</strong>). No arriba a omplir una ampolla sencera.</p>
      </div>

      <div class="grimori-concept-box">
        <p>⚖️ <strong>Fracció Igual a la Unitat (= 1):</strong> El numerador i el denominador són iguals (ex: <strong>4/4 = 1</strong>). És una unitat completa!</p>
      </div>

      <div class="grimori-concept-box">
        <p>🔥 <strong>Fracció Impròpia (major que 1 unitat) i Nombre Mixt:</strong> El numerador és més gran que el denominador (ex: <strong>7/4</strong>). Necessitem més d'una unitat! Com que <strong>4/4</strong> fan <strong>1 unitat sencera</strong> i encara sobren <strong>3/4</strong>, ho podem escriure com el <strong>nombre mixt 1 i 3/4</strong>.</p>
      </div>
    `
  },
  equivalents: {
    title: "3️⃣ El Secret de les Fraccions Equivalents",
    ttsText: "Dues fraccions són equivalents quan representen exactament la mateixa quantitat o superfície, encara que s'escriguin amb números diferents. Per exemple, un mig és equivalent a dos quarts i a quatre vuitens.",
    html: `
      <h3>3️⃣ El Secret de les Fraccions Equivalents</h3>
      <p>Dues o més fraccions són <strong>equivalents</strong> quan representen <strong>exactament la mateixa porció</strong> d'escut o la mateixa quantitat de poció, encara que tinguin números diferents!</p>

      <div class="grimori-concept-box">
        <p>✨ <strong>Mira l'exemple:</strong> <strong>1/2 = 2/4 = 3/6 = 4/8</strong></p>
        <p style="margin-top:0.35rem;">Si parteixes un escut en 2 meitats i n'agafes 1 (<strong>1/2</strong>), tens exactament la mateixa superfície que si el parteixes en 4 quarts i n'agafes 2 (<strong>2/4</strong>)!</p>
      </div>

      <div class="grimori-concept-box">
        <p>🔍 <strong>Truc dels Cavallers (Producte Creuat):</strong> Dues fraccions són equivalents si en multiplicar en creu donen el mateix resultat: a <strong>2/3</strong> i <strong>4/6</strong>, es compleix que <strong>2 × 6 = 12</strong> i <strong>3 × 4 = 12</strong>.</p>
      </div>
    `
  },
  transformar: {
    title: "4️⃣ Transformació: Amplificar i Simplificar",
    ttsText: "Podem transformar una fracció en una altra d'equivalent de dues maneres: amplificant, que és multiplicar numerador i denominador pel mateix nombre, o simplificant, que és dividir numerador i denominador pel mateix divisor fins a obtenir la fracció irreductible.",
    html: `
      <h3>4️⃣ Transformació: Amplificar i Simplificar</h3>
      <p>A la Forja d'Alquímia podem transformar qualsevol fracció en una altra d'equivalent amb dos encanteris:</p>

      <div class="grimori-concept-box">
        <p>⚡ <strong>Amplificar (Raig Multiplicador):</strong> Multipliquem el numerador i el denominador pel <strong>mateix nombre</strong> (× 2, × 3, × 4...). Visualment, cada peça es parteix en trossos més petits!</p>
        <p style="margin-top:0.4rem;">Exemple: <strong>2/3</strong> &rarr; <em>(multipliquem dalt i baix × 2)</em> &rarr; <strong>4/6</strong></p>
      </div>

      <div class="grimori-concept-box">
        <p>🗡️ <strong>Simplificar (Espasa Divisora):</strong> Dividim el numerador i el denominador pel <strong>mateix divisor comú</strong> (÷ 2, ÷ 3, ÷ 5...). Visualment, agrupem peces petites en peces més grans!</p>
        <p style="margin-top:0.4rem;">Exemple: <strong>6/8</strong> &rarr; <em>(dividim dalt i baix ÷ 2)</em> &rarr; <strong>3/4</strong>. Com que 3 i 4 ja no es poden dividir més pel mateix nombre, <strong>3/4</strong> és la <strong>fracció irreductible</strong>!</p>
      </div>
    `
  }
};

/* ==========================================================================
   75 MISSIONS INTERACTIVES (5 MÒDULS × 3 NIVELLS × 5 REPTES)
   ========================================================================== */
const CHALLENGES_DATA = {

  /* ------------------------------------------------------------------------
     MÒDUL 1: IDENTIFICACIÓ I REPRESENTACIÓ DE FRACCIONS
     ------------------------------------------------------------------------ */
  identificacio: {
    1: [
      {
        id: "id_1_1",
        title: "L'Escut de les Quatre Torres",
        lore: "El mestre ferrer necessita activar l'energia rúnica de l'escut.",
        instruction: "Representa al tauler la fracció <strong>3/4</strong> (tres quarts): assegura't que la figura tingui <strong>4 parts iguals</strong> i fes clic per activar-ne <strong>3</strong>. Després escriu la fracció a sota.",
        type: "build_and_write",
        defaultShape: "circle",
        initNum: 0,
        initDen: 4,
        maxUnits: 1,
        targetNum: 3,
        targetDen: 4,
        requireExactParts: true,
        hints: [
          "El número de sota (denominador = 4) indica que l'escut ha d'estar dividit en 4 parts iguals.",
          "Fes clic directament sobre 3 sectors de l'escut circular perquè s'il·luminin.",
          "Escriu 3 al numerador (dalt) i 4 al denominador (sota) i prem Comprova!"
        ]
      },
      {
        id: "id_1_2",
        title: "La Poció dels Cinc Elements",
        lore: "L'alquimista Elara prepara un elixir de resistència per al viatge.",
        instruction: "Divideix la barra de poció en <strong>5 parts iguals</strong> i omple'n <strong>2 parts</strong> per representar <strong>2/5</strong> (dos cinquens). Escriu també els números a la casella de fracció.",
        type: "build_and_write",
        defaultShape: "bar",
        initNum: 0,
        initDen: 4,
        maxUnits: 1,
        targetNum: 2,
        targetDen: 5,
        requireExactParts: true,
        hints: [
          "La fracció 2/5 té denominador 5 i numerador 2.",
          "Prem el botó '+' de 'Parts per unitat' fins a tenir 5 divisions, i fes clic a 2 trossos de la barra.",
          "A la casella simbòlica, escriu 2 a dalt i 5 a sota."
        ]
      },
      {
        id: "id_1_3",
        title: "Lectura del Cristall Ancestral",
        lore: "Has trobat una tauleta de cristall ja activada a les ruïnes d'Equivalia.",
        instruction: "Observa la figura del tauler (no cal modificar-ne les peces) i <strong>identifica quina fracció representa</strong> escrivint el numerador i el denominador correctes.",
        type: "identify_locked",
        defaultShape: "grid",
        initNum: 5,
        initDen: 8,
        lockedBoard: true,
        maxUnits: 1,
        targetNum: 5,
        targetDen: 8,
        requireExactParts: true,
        hints: [
          "Compta primer en quantes caselles iguals en total està dividida la tauleta (denominador).",
          "Ara compta quantes caselles estan il·luminades amb màgia (numerador).",
          "Hi ha 5 caselles activades d'un total de 8: escriu 5 a dalt i 8 a sota (5/8)."
        ]
      },
      {
        id: "id_1_4",
        title: "Les Sis Runes del Portal",
        lore: "El portal del bosc s'obre quan s'activen quatre sisenes parts del seu anell.",
        instruction: "Configura l'escut en <strong>6 parts iguals</strong> i activa'n <strong>4</strong> per formar la fracció <strong>4/6</strong>. Escriu-la a la casella simbòlica.",
        type: "build_and_write",
        defaultShape: "circle",
        initNum: 1,
        initDen: 3,
        maxUnits: 1,
        targetNum: 4,
        targetDen: 6,
        requireExactParts: true,
        hints: [
          "Quatre sisens s'escriu amb un 4 al numerador i un 6 al denominador.",
          "Fes servir el botó '+' de 'Parts (Denominador)' per passar de 3 a 6 parts, i pinta'n 4.",
          "Escriu 4 a dalt i 6 a sota (4/6)."
        ]
      },
      {
        id: "id_1_5",
        title: "El Sender de les Deu Llambordes",
        lore: "Un explorador ha recorregut set desenes parts del pont penjant.",
        instruction: "A la recta numèrica o barra, representa la fracció <strong>7/10</strong> (set desens): divideix la unitat en <strong>10 parts</strong> i activa'n <strong>7</strong>.",
        type: "build_and_write",
        defaultShape: "line",
        initNum: 0,
        initDen: 10,
        maxUnits: 1,
        targetNum: 7,
        targetDen: 10,
        requireExactParts: true,
        hints: [
          "La recta ja està dividida en 10 trams iguals entre el 0 i l'1.",
          "Fes clic a 7 trams (o prem '+' a Parts activades fins a 7) perquè l'heroi avanci fins a 7/10.",
          "Escriu 7 al numerador i 10 al denominador."
        ]
      }
    ],
    2: [
      {
        id: "id_2_1",
        title: "El Còdex de l'Arquera",
        lore: "L'arquera Lyra ha encertat gairebé totes les dianes de l'entrenament.",
        instruction: "Observa la figura bloquejada del tauler i escriu quina fracció representa. Fixa't bé en el total de parts!",
        type: "identify_locked",
        defaultShape: "circle",
        initNum: 5,
        initDen: 6,
        lockedBoard: true,
        maxUnits: 1,
        targetNum: 5,
        targetDen: 6,
        requireExactParts: true,
        hints: [
          "Compta tots els sectors de l'escut circular, tant els pintats com els buits.",
          "En total hi ha 6 sectors iguals i 5 estan activats.",
          "Escriu 5 al numerador i 6 al denominador (5/6)."
        ]
      },
      {
        id: "id_2_2",
        title: "La Unitat Completa de Mana",
        lore: "Per invocar el drac guardià cal una ampolla de mana plena fins a dalt.",
        instruction: "Divideix la figura en <strong>8 parts iguals</strong> i activa totes les parts necessàries per obtenir <strong>1 unitat sencera (8/8)</strong>.",
        type: "build_and_write",
        defaultShape: "bar",
        initNum: 3,
        initDen: 8,
        maxUnits: 1,
        targetNum: 8,
        targetDen: 8,
        requireExactParts: true,
        hints: [
          "Quan una fracció és igual a 1 unitat sencera, el numerador i el denominador són iguals.",
          "Activa les 8 parts de la barra de 8 divisions.",
          "Escriu 8/8 a la casella de resposta."
        ]
      },
      {
        id: "id_2_3",
        title: "Els Dotze Cristalls de Llum",
        lore: "La cambra subterrània s'il·lumina amb set dotzenes parts d'energia solar.",
        instruction: "Construeix al tauler la fracció <strong>7/12</strong> (set dotzens): ajusta el denominador a <strong>12 parts</strong> i activa'n <strong>7</strong>.",
        type: "build_and_write",
        defaultShape: "grid",
        initNum: 0,
        initDen: 6,
        maxUnits: 1,
        targetNum: 7,
        targetDen: 12,
        requireExactParts: true,
        hints: [
          "Augmenta el nombre de parts per unitat fins a 12.",
          "Fes clic sobre 7 cristalls de la tauleta de 12.",
          "Escriu 7 al numerador i 12 al denominador."
        ]
      },
      {
        id: "id_2_4",
        title: "El Rellotge de les Nou Llunes",
        lore: "Falten cinc novenes parts de la nit perquè surti el sol a Fractària. Quantes novenes parts ja han passat?",
        instruction: "Si la nit té <strong>9 parts iguals</strong> i en falten 5 per acabar, representa i escriu la fracció de nit que <strong>ja ha passat (4/9)</strong>.",
        type: "build_and_write",
        defaultShape: "circle",
        initNum: 0,
        initDen: 9,
        maxUnits: 1,
        targetNum: 4,
        targetDen: 9,
        requireExactParts: true,
        hints: [
          "Si el total és 9/9 i falten 5/9, ja han passat 9 - 5 = 4 parts.",
          "Pinta 4 sectors de l'escut de 9 parts.",
          "Escriu la fracció 4/9."
        ]
      },
      {
        id: "id_2_5",
        title: "Fita a la Recta del Bosc",
        lore: "Un senyal màgic brilla en un punt exacte entre el 0 i l'1.",
        instruction: "Observa la recta numèrica bloquejada i escriu quina fracció assenyala el marcador lluminós.",
        type: "identify_locked",
        defaultShape: "line",
        initNum: 3,
        initDen: 8,
        lockedBoard: true,
        maxUnits: 1,
        targetNum: 3,
        targetDen: 8,
        requireExactParts: true,
        hints: [
          "Compta en quants trams iguals està dividit el camí entre el 0 i l'1.",
          "Hi ha 8 trams en total i hi ha 3 trams il·luminats des del 0.",
          "La fracció és 3/8."
        ]
      }
    ],
    3: [
      {
        id: "id_3_1",
        title: "Més d'un Escut: Fracció Impròpia (5/4)",
        lore: "En el rang d'Arximag, l'energia supera una unitat sencera!",
        instruction: "Representa la fracció impròpia <strong>5/4</strong> (cinc quarts), que equival al nombre mixt <strong>1 i 1/4</strong>. Tens <strong>2 unitats</strong> dividides en 4 parts cadascuna: activa <strong>5 parts en total</strong> i escriu la fracció impròpia <strong>5/4</strong>.",
        type: "build_and_write",
        defaultShape: "circle",
        initNum: 0,
        initDen: 4,
        maxUnits: 2,
        targetNum: 5,
        targetDen: 4,
        requireExactParts: true,
        hints: [
          "Com que el numerador (5) és més gran que el denominador (4), necessitem més d'un escut sencer!",
          "Omple les 4 parts del primer escut (4/4 = 1 unitat) i 1 part del segon escut (en total 5 parts pintades).",
          "Escriu 5 al numerador i 4 al denominador (5/4)."
        ]
      },
      {
        id: "id_3_2",
        title: "Les Dues Ampolles i Mitja (5/2)",
        lore: "El drac de foc necessita dues ampolles senceres i mitja de poció refrigerant.",
        instruction: "Representa el nombre mixt <strong>2 i 1/2</strong> com a fracció impròpia: divideix cada unitat en <strong>2 parts (meitats)</strong>, activa <strong>5 meitats en total</strong> i escriu la fracció impròpia <strong>5/2</strong>.",
        type: "build_and_write",
        defaultShape: "bar",
        initNum: 0,
        initDen: 2,
        maxUnits: 3,
        targetNum: 5,
        targetDen: 2,
        requireExactParts: true,
        hints: [
          "Cada unitat sencera té 2 meitats (2/2). Dues unitats senceres són 4 meitats (4/2).",
          "Si hi afegim 1 meitat més, tenim 5 meitats en total!",
          "Activa 5 peces de mida 1/2 i escriu 5/2."
        ]
      },
      {
        id: "id_3_3",
        title: "Identifica la Reserva de Cristalls",
        lore: "Al magatzem reial hi ha més d'una caixa plena de cristalls de terços.",
        instruction: "Observa les 3 unitats del tauler (dividides en terços) i escriu la <strong>fracció impròpia</strong> total de parts activades.",
        type: "identify_locked",
        defaultShape: "grid",
        initNum: 7,
        initDen: 3,
        lockedBoard: true,
        maxUnits: 3,
        targetNum: 7,
        targetDen: 3,
        requireExactParts: true,
        hints: [
          "El denominador és el nombre de parts d'UNA sola unitat (cada caixa té 3 parts, per tant el denominador és 3, no 9!).",
          "Compta quantes parts estan activades en total sumant les 3 caixes: 3 + 3 + 1 = 7 terços.",
          "Escriu 7 al numerador i 3 al denominador (7/3)."
        ]
      },
      {
        id: "id_3_4",
        title: "Un Escut i Cinc Sisens (11/6)",
        lore: "Transforma visualment el nombre mixt 1 i 5/6 en una fracció impròpia.",
        instruction: "Divideix les unitats en <strong>6 parts (sisens)</strong> i pinta <strong>1 unitat sencera més 5 sisens</strong> per obtenir <strong>11/6</strong>.",
        type: "build_and_write",
        defaultShape: "circle",
        initNum: 6,
        initDen: 6,
        maxUnits: 2,
        targetNum: 11,
        targetDen: 6,
        requireExactParts: true,
        hints: [
          "1 unitat sencera dividida en sisens són 6/6.",
          "Si a 6/6 hi afegim 5/6 més, tenim 6 + 5 = 11 sisens.",
          "Activa 11 sectors en total i escriu 11/6."
        ]
      },
      {
        id: "id_3_5",
        title: "Nou Quarts a la Forja (9/4)",
        lore: "Representa el poder de 2 escuts sencers i 1 quart addicional.",
        instruction: "Amb les unitats dividides en <strong>4 parts (quarts)</strong>, activa <strong>9 quarts (9/4)</strong> en total i escriu la fracció impròpia.",
        type: "build_and_write",
        defaultShape: "bar",
        initNum: 0,
        initDen: 4,
        maxUnits: 3,
        targetNum: 9,
        targetDen: 4,
        requireExactParts: true,
        hints: [
          "2 unitats senceres de 4 quarts són 8 quarts (4 + 4 = 8).",
          "Activa 1 quart més a la tercera unitat per arribar a 9 quarts.",
          "Escriu 9 al numerador i 4 al denominador (9/4)."
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------------
     MÒDUL 2: COMPARACIÓ DE FRACCIONS
     ------------------------------------------------------------------------ */
  comparacio: {
    1: [
      {
        id: "comp_1_1",
        title: "Duel de Cinquens",
        lore: "Dos escuders comparen la càrrega de les seves barres de mana.",
        instruction: "Representa <strong>3/5</strong> a l'esquerra i <strong>4/5</strong> a la dreta, i tria el símbol correcte (<strong>&lt;</strong>, <strong>=</strong> o <strong>&gt;</strong>).",
        type: "compare_two",
        defaultShape: "bar",
        leftNum: 3, leftDen: 5,
        rightNum: 4, rightDen: 5,
        lockFractions: false,
        correctSymbol: "<",
        hints: [
          "Totes dues fraccions tenen el mateix denominador (5 parts iguals).",
          "Quan el denominador és igual, és més gran la fracció que té més parts activades (numerador més gran).",
          "3/5 és més petit que 4/5: selecciona el símbol '<'."
        ]
      },
      {
        id: "comp_1_2",
        title: "Els Escuts dels Vuitens",
        lore: "Compara l'escut del Cavaller Blau (5/8) amb el del Cavaller Verd (3/8).",
        instruction: "Observa o construeix <strong>5/8</strong> a l'esquerra i <strong>3/8</strong> a la dreta, i selecciona quin símbol les relaciona (<strong>&lt;</strong>, <strong>=</strong> o <strong>&gt;</strong>).",
        type: "compare_two",
        defaultShape: "circle",
        leftNum: 5, leftDen: 8,
        rightNum: 3, rightDen: 8,
        lockFractions: false,
        correctSymbol: ">",
        hints: [
          "Tots dos escuts estan dividits en 8 sectors iguals.",
          "5 sectors pintats ocupen més superfície que 3 sectors.",
          "Per tant, 5/8 > 3/8 (selecciona '>')."
        ]
      },
      {
        id: "comp_1_3",
        title: "Igualtat al Santuari",
        lore: "Dues esteles rúniques brillen amb la mateixa proporció.",
        instruction: "Compara <strong>4/6</strong> a l'esquerra i <strong>4/6</strong> a la dreta. Quin símbol correspon?",
        type: "compare_two",
        defaultShape: "grid",
        leftNum: 4, leftDen: 6,
        rightNum: 4, rightDen: 6,
        lockFractions: false,
        correctSymbol: "=",
        hints: [
          "Mira la barra d'ompliment de tots dos panells.",
          "Tenen exactament el mateix numerador i denominador.",
          "Selecciona el símbol '='."
        ]
      },
      {
        id: "comp_1_4",
        title: "Cursa als Desens",
        lore: "Qui ha arribat més lluny pel Sender dels Cristalls?",
        instruction: "Compara <strong>7/10</strong> a l'esquerra amb <strong>9/10</strong> a la dreta i tria el símbol correcte.",
        type: "compare_two",
        defaultShape: "line",
        leftNum: 7, leftDen: 10,
        rightNum: 9, rightDen: 10,
        lockFractions: false,
        correctSymbol: "<",
        hints: [
          "A la recta numèrica, 9/10 està més a prop de l'1 que 7/10.",
          "7 desenes parts és menys que 9 desenes parts.",
          "Tria el símbol '<' (7/10 < 9/10)."
        ]
      },
      {
        id: "comp_1_5",
        title: "L'Ampolla Sencera contra Cinc Sisens",
        lore: "Una poció té 6/6 i l'altra té 5/6.",
        instruction: "Compara <strong>6/6</strong> (esquerra) amb <strong>5/6</strong> (dreta) i selecciona el símbol adequat.",
        type: "compare_two",
        defaultShape: "bar",
        leftNum: 6, leftDen: 6,
        rightNum: 5, rightDen: 6,
        lockFractions: false,
        correctSymbol: ">",
        hints: [
          "6/6 és la unitat sencera (100% plena), mentre que a 5/6 li falta un sisè.",
          "6/6 és més gran que 5/6.",
          "Selecciona el símbol '>'."
        ]
      }
    ],
    2: [
      {
        id: "comp_2_1",
        title: "El Parany del Mateix Numerador (1/3 vs 1/5)",
        lore: "Si repartim el mateix pastís màgic entre més convidats, cada tros serà més gran o més petit?",
        instruction: "Compara <strong>1/3</strong> (esquerra) amb <strong>1/5</strong> (dreta). Fixa't en la mida de cada peça al tauler i tria <strong>&lt;</strong>, <strong>=</strong> o <strong>&gt;</strong>!",
        type: "compare_two",
        defaultShape: "bar",
        leftNum: 1, leftDen: 3,
        rightNum: 1, rightDen: 5,
        lockFractions: false,
        correctSymbol: ">",
        hints: [
          "Atenció! Quan el numerador és igual (1 peça a cada banda), ens hem de fixar en la mida de les peces.",
          "Dividir en 3 parts dóna trossos MÉS GRANS que dividir en 5 parts.",
          "Per tant, 1/3 és més gran que 1/5 (tria '>')."
        ]
      },
      {
        id: "comp_2_2",
        title: "Tres Quarts contra Tres Vuitens",
        lore: "Compara dues fraccions que tenen el mateix numerador (3).",
        instruction: "Observa al tauler <strong>3/4</strong> (esquerra) i <strong>3/8</strong> (dreta) i selecciona el símbol de comparació correcte.",
        type: "compare_two",
        defaultShape: "circle",
        leftNum: 3, leftDen: 4,
        rightNum: 3, rightDen: 8,
        lockFractions: false,
        correctSymbol: ">",
        hints: [
          "En tots dos escuts hem agafat 3 peces, però els quarts són el doble de grans que els vuitens!",
          "Mira com 3/4 passa de la meitat de l'escut i 3/8 no arriba a la meitat.",
          "Selecciona '>' perquè 3/4 > 3/8."
        ]
      },
      {
        id: "comp_2_3",
        title: "Dos Sisens contra Dos Terços",
        lore: "No et deixis enganyar pel 6!",
        instruction: "Compara <strong>2/6</strong> (esquerra) amb <strong>2/3</strong> (dreta) mirant les barres del tauler.",
        type: "compare_two",
        defaultShape: "bar",
        leftNum: 2, leftDen: 6,
        rightNum: 2, rightDen: 3,
        lockFractions: false,
        correctSymbol: "<",
        hints: [
          "Totes dues tenen numerador 2, però els sisens són parts més petites que els terços.",
          "Visualment, 2/6 és només 1/3, que és menor que 2/3.",
          "Selecciona '<' (2/6 < 2/3)."
        ]
      },
      {
        id: "comp_2_4",
        title: "Quatre Cinquens contra Quatre Desens",
        lore: "Compara l'energia dels cristalls del nord i del sud.",
        instruction: "Compara <strong>4/5</strong> (esquerra) amb <strong>4/10</strong> (dreta) i tria el símbol màgic.",
        type: "compare_two",
        defaultShape: "grid",
        leftNum: 4, leftDen: 5,
        rightNum: 4, rightDen: 10,
        lockFractions: false,
        correctSymbol: ">",
        hints: [
          "Com que el numerador és 4 a totes dues, la que té el denominador més petit (5) té peces el doble de grans.",
          "4/5 equival a 8/10, que és el doble que 4/10.",
          "Selecciona '>' (4/5 > 4/10)."
        ]
      },
      {
        id: "comp_2_5",
        title: "Cinc Vuitens contra Cinc Sisens",
        lore: "Dues pocions tenen 5 parts activades, però d'ampolles dividides diferent.",
        instruction: "Compara <strong>5/8</strong> (esquerra) amb <strong>5/6</strong> (dreta).",
        type: "compare_two",
        defaultShape: "circle",
        leftNum: 5, leftDen: 8,
        rightNum: 5, rightDen: 6,
        lockFractions: false,
        correctSymbol: "<",
        hints: [
          "Els vuitens són més petits que els sisens.",
          "A 5/6 només li falta un sisè per omplir l'escut, mentre que a 5/8 li falten tres vuitens.",
          "Selecciona '<' (5/8 < 5/6)."
        ]
      }
    ],
    3: [
      {
        id: "comp_3_1",
        title: "El Truc de la Meitat (3/5 vs 3/8)",
        lore: "Els Arximags utilitzen la meitat (1/2) com a punt de referència!",
        instruction: "Compara <strong>3/5</strong> (esquerra) amb <strong>2/6</strong> (dreta) observant quina supera la meitat de la barra.",
        type: "compare_two",
        defaultShape: "bar",
        leftNum: 3, leftDen: 5,
        rightNum: 2, rightDen: 6,
        lockFractions: false,
        correctSymbol: ">",
        hints: [
          "Pensa en la meitat: la meitat de 5 és 2,5, així que 3/5 és MÉS gran que la meitat (60%).",
          "En canvi, la meitat de 6 és 3, així que 2/6 és MENYS de la meitat.",
          "Per tant, 3/5 > 2/6 (selecciona '>')."
        ]
      },
      {
        id: "comp_3_2",
        title: "Equivalència Oculta en el Duel (2/4 vs 4/8)",
        lore: "Mira amb atenció l'àrea pintada dels dos escuts!",
        instruction: "Compara <strong>2/4</strong> (esquerra) amb <strong>4/8</strong> (dreta) i tria el símbol que les relaciona.",
        type: "compare_two",
        defaultShape: "circle",
        leftNum: 2, leftDen: 4,
        rightNum: 4, rightDen: 8,
        lockFractions: false,
        correctSymbol: "=",
        hints: [
          "2 de 4 parts és exactament la meitat de l'escut (50%).",
          "4 de 8 parts també és exactament la meitat de l'escut (50%)!",
          "Són fraccions equivalents! Selecciona '='."
        ]
      },
      {
        id: "comp_3_3",
        title: "Dos Terços contra Tres Quarts",
        lore: "Un clàssic repte de 6è de Primària amb diferent numerador i denominador.",
        instruction: "Compara visualment <strong>2/3</strong> (esquerra) i <strong>3/4</strong> (dreta). Pots fins i tot transformar-les mentalment a dotzens (8/12 i 9/12)!",
        type: "compare_two",
        defaultShape: "bar",
        leftNum: 2, leftDen: 3,
        rightNum: 3, rightDen: 4,
        lockFractions: false,
        correctSymbol: "<",
        hints: [
          "Si convertim totes dues a dotzens: 2/3 = 8/12 i 3/4 = 9/12.",
          "També pots mirar la barra de percentatge: 2/3 és 66,7% i 3/4 és 75%.",
          "2/3 és menor que 3/4: selecciona '<'."
        ]
      },
      {
        id: "comp_3_4",
        title: "Cinc Sisens contra Set Dotzens",
        lore: "Transforma els sisens en dotzens per comparar-los amb precisió!",
        instruction: "Compara <strong>5/6</strong> (esquerra) amb <strong>7/12</strong> (dreta).",
        type: "compare_two",
        defaultShape: "grid",
        leftNum: 5, leftDen: 6,
        rightNum: 7, rightDen: 12,
        lockFractions: false,
        correctSymbol: ">",
        hints: [
          "Si multipliquem 5/6 per 2 (amplifiquem), obtenim 10/12.",
          "Compara ara 10/12 amb 7/12: 10 dotzens és més gran que 7 dotzens!",
          "Selecciona '>' (5/6 > 7/12)."
        ]
      },
      {
        id: "comp_3_5",
        title: "Duel de Titans: Fracció Pròpia vs Impròpia (7/8 vs 5/4)",
        lore: "Una fracció no arriba a la unitat i l'altra la supera!",
        instruction: "Compara <strong>7/8</strong> (esquerra) amb <strong>5/4</strong> (dreta).",
        type: "compare_two",
        defaultShape: "bar",
        leftNum: 7, leftDen: 8,
        rightNum: 5, rightDen: 4,
        maxUnits: 2,
        lockFractions: false,
        correctSymbol: "<",
        hints: [
          "7/8 és una fracció pròpia (menor que 1 unitat sencera).",
          "5/4 és una fracció impròpia (major que 1 unitat sencera: 1 i 1/4).",
          "Qualsevol fracció menor que 1 és més petita que una fracció major que 1! Tria '<'."
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------------
     MÒDUL 3: EQUIVALÈNCIES VISUALS (MIRALL GEMINAT)
     ------------------------------------------------------------------------ */
  equivalencia: {
    1: [
      {
        id: "eq_1_1",
        title: "El Mirall de la Meitat (1/2 = ?/4)",
        lore: "Al Mirall d'Equivalia, les dues figures han de tenir exactament la mateixa superfície il·luminada.",
        instruction: "A l'esquerra tens <strong>1/2</strong>. A la figura de la dreta (dividida en <strong>4 parts</strong>), fes clic als sectors necessaris i escriu la fracció equivalent amb denominador <strong>4</strong>.",
        type: "equivalence_mirror",
        defaultShape: "circle",
        baseNum: 1, baseDen: 2,
        initRightNum: 0, initRightDen: 4,
        targetDen: 4,
        targetNum: 2,
        hints: [
          "Mira la meitat pintada a l'escut de l'esquerra (1/2).",
          "Quants quarts (de l'escut de 4 parts de la dreta) necessites pintar per cobrir exactament la mateixa meitat?",
          "Pinta 2 quarts i escriu 2/4 a la casella de resposta!"
        ]
      },
      {
        id: "eq_1_2",
        title: "L'Eco dels Terços (1/3 = ?/6)",
        lore: "Cada terç es divideix en dos sisens dins del mirall màgic.",
        instruction: "A l'esquerra tens <strong>1/3</strong>. A la barra de la dreta (dividida en <strong>6 parts</strong>), activa les peces necessàries perquè ocupin el mateix que <strong>1/3</strong> i escriu la fracció equivalent.",
        type: "equivalence_mirror",
        defaultShape: "bar",
        baseNum: 1, baseDen: 3,
        initRightNum: 0, initRightDen: 6,
        targetDen: 6,
        targetNum: 2,
        hints: [
          "Si la barra té 6 parts en lloc de 3 (el doble de parts), necessitaràs activar el doble de peces.",
          "Activa 2 peces de la barra de 6 parts i veuràs que totes dues barres tenen un 33,3%.",
          "Escriu 2/6 a la casella simbòlica."
        ]
      },
      {
        id: "eq_1_3",
        title: "Dos Terços en Sisens (2/3 = ?/6)",
        lore: "Iguala el poder de les dues barres rúniques.",
        instruction: "Troba i representa a la dreta la fracció equivalent a <strong>2/3</strong> que tingui denominador <strong>6</strong>.",
        type: "equivalence_mirror",
        defaultShape: "bar",
        baseNum: 2, baseDen: 3,
        initRightNum: 1, initRightDen: 6,
        targetDen: 6,
        targetNum: 4,
        hints: [
          "Per passar de denominador 3 a denominador 6 hem multiplicat per 2.",
          "Pinta 4 sisens a la dreta per igualar l'amplada de 2/3.",
          "Escriu la fracció 4/6."
        ]
      },
      {
        id: "eq_1_4",
        title: "Tres Quarts en Vuitens (3/4 = ?/8)",
        lore: "L'escut d'or es reflecteix en vuit sectors iguals.",
        instruction: "Representa a la dreta i escriu la fracció equivalent a <strong>3/4</strong> amb denominador <strong>8</strong>.",
        type: "equivalence_mirror",
        defaultShape: "circle",
        baseNum: 3, baseDen: 4,
        initRightNum: 0, initRightDen: 8,
        targetDen: 8,
        targetNum: 6,
        hints: [
          "Cada quart equival a 2 vuitens.",
          "Per tant, 3 quarts equivalen a 3 × 2 = 6 vuitens.",
          "Activa 6 sectors a l'escut de la dreta i escriu 6/8."
        ]
      },
      {
        id: "eq_1_5",
        title: "Cristalls Cinquens i Desens (2/5 = ?/10)",
        lore: "Duplica les divisions de la tauleta de cristall.",
        instruction: "Troba la fracció equivalent a <strong>2/5</strong> amb denominador <strong>10</strong> activant els cristalls del panell dret.",
        type: "equivalence_mirror",
        defaultShape: "grid",
        baseNum: 2, baseDen: 5,
        initRightNum: 0, initRightDen: 10,
        targetDen: 10,
        targetNum: 4,
        hints: [
          "2 cinquens són el 40% de la tauleta.",
          "En una tauleta de 10 cristalls, el 40% són 4 cristalls.",
          "Activa 4 cristalls i escriu 4/10."
        ]
      }
    ],
    2: [
      {
        id: "eq_2_1",
        title: "La Triple Partició (2/3 = ?/9)",
        lore: "Aquesta vegada tu també has d'ajustar el nombre de parts de la figura dreta!",
        instruction: "A l'esquerra tens <strong>2/3</strong>. A la figura de la dreta, ajusta el denominador a <strong>9 parts</strong>, activa els sectors equivalents i escriu la fracció resultant.",
        type: "equivalence_mirror",
        defaultShape: "circle",
        baseNum: 2, baseDen: 3,
        initRightNum: 0, initRightDen: 3,
        targetDen: 9,
        targetNum: 6,
        hints: [
          "Primer puja les 'Parts (Denominador)' del panell dret fins a 9.",
          "Com que 9 és el triple de 3 (3 × 3 = 9), el numerador també serà el triple: 2 × 3 = 6.",
          "Activa 6 novens i escriu 6/9."
        ]
      },
      {
        id: "eq_2_2",
        title: "De Quarts a Dotzens (3/4 = ?/12)",
        lore: "Transforma els quarts en dotzens dins del laboratori.",
        instruction: "Divideix la figura de la dreta en <strong>12 parts</strong> i pinta la fracció equivalent a <strong>3/4</strong>.",
        type: "equivalence_mirror",
        defaultShape: "grid",
        baseNum: 3, baseDen: 4,
        initRightNum: 0, initRightDen: 4,
        targetDen: 12,
        targetNum: 9,
        hints: [
          "Ajusta les parts per unitat de la dreta a 12.",
          "Per passar de 4 a 12 multipliquem per 3. Multiplica també el numerador: 3 × 3 = 9.",
          "Pinta 9 cristalls de 12 i escriu 9/12."
        ]
      },
      {
        id: "eq_2_3",
        title: "Agrupant Peces: De Sisens a Terços (4/6 = ?/3)",
        lore: "També podem fer el camí invers: fer menys parts però més grans!",
        instruction: "A l'esquerra tens <strong>4/6</strong>. Ajusta la figura de la dreta a <strong>3 parts (terços)</strong> i pinta la fracció equivalent.",
        type: "equivalence_mirror",
        defaultShape: "bar",
        baseNum: 4, baseDen: 6,
        initRightNum: 0, initRightDen: 6,
        targetDen: 3,
        targetNum: 2,
        hints: [
          "Redueix el denominador de la figura dreta a 3 parts.",
          "Si dividim el nombre de parts entre 2 (6 ÷ 2 = 3), agrupem les peces de dues en dues: 4 ÷ 2 = 2.",
          "Activa 2 terços i escriu 2/3."
        ]
      },
      {
        id: "eq_2_4",
        title: "De Desens a Cinquens (6/10 = ?/5)",
        lore: "Simplifica visualment l'energia del sender.",
        instruction: "Troba i representa al panell dret la fracció amb denominador <strong>5</strong> que és equivalent a <strong>6/10</strong>.",
        type: "equivalence_mirror",
        defaultShape: "line",
        baseNum: 6, baseDen: 10,
        initRightNum: 0, initRightDen: 10,
        targetDen: 5,
        targetNum: 3,
        hints: [
          "Canvia les divisions de la dreta de 10 a 5.",
          "6/10 ocupa el 60% del camí. En quants cinquens tens també el 60%?",
          "En 3 cinquens! Activa 3/5 i escriu-ho."
        ]
      },
      {
        id: "eq_2_5",
        title: "La Meitat en Dotzens (1/2 = ?/12)",
        lore: "El rellotge solar de Fractària té 12 hores.",
        instruction: "Representa a la dreta quants dotzens (denominador <strong>12</strong>) equivalen a <strong>1/2</strong>.",
        type: "equivalence_mirror",
        defaultShape: "circle",
        baseNum: 1, baseDen: 2,
        initRightNum: 0, initRightDen: 6,
        targetDen: 12,
        targetNum: 6,
        hints: [
          "Posa 12 parts al panell dret.",
          "La meitat de 12 és 6.",
          "Pinta 6 sectors de 12 i escriu 6/12."
        ]
      }
    ],
    3: [
      {
        id: "eq_3_1",
        title: "L'Enigma dels Vuitens i Dotzens (6/8 = ?/12)",
        lore: "Un repte d'Arximag: passa per la fracció irreductible (3/4) per descobrir quants dotzens són 6/8!",
        instruction: "A l'esquerra tens <strong>6/8</strong> (que és el 75%). Troba i representa a la dreta la fracció equivalent que té denominador <strong>12</strong>!",
        type: "equivalence_mirror",
        defaultShape: "bar",
        baseNum: 6, baseDen: 8,
        initRightNum: 0, initRightDen: 12,
        targetDen: 12,
        targetNum: 9,
        hints: [
          "Observa que 6/8 simplificat entre 2 és 3/4 (el 75% de la barra).",
          "Ara transforma 3/4 a dotzens multiplicant per 3: 3 × 3 = 9 i 4 × 3 = 12.",
          "Activa 9 peces de 12 i escriu 9/12!"
        ]
      },
      {
        id: "eq_3_2",
        title: "Harmonia entre Sisens i Novens (4/6 = ?/9)",
        lore: "Fes que totes dues figures brillin amb el mateix percentatge d'energia.",
        instruction: "A l'esquerra hi ha <strong>4/6</strong>. Representa i escriu la fracció equivalent amb denominador <strong>9</strong>.",
        type: "equivalence_mirror",
        defaultShape: "circle",
        baseNum: 4, baseDen: 6,
        initRightNum: 0, initRightDen: 9,
        targetDen: 9,
        targetNum: 6,
        hints: [
          "4/6 és equivalent a 2/3.",
          "Si transformem 2/3 a novens (multiplicant per 3), obtenim 6/9.",
          "Pinta 6 sectors de 9 i escriu 6/9."
        ]
      },
      {
        id: "eq_3_3",
        title: "Equivalència d'una Fracció Impròpia (3/2 = ?/4)",
        lore: "Les fraccions majors que 1 també tenen equivalents!",
        instruction: "A l'esquerra tens <strong>3/2</strong> (1 unitat i mitja). A la dreta, amb les unitats dividides en <strong>4 parts (quarts)</strong>, activa els quarts equivalents i escriu la fracció amb denominador <strong>4</strong>.",
        type: "equivalence_mirror",
        defaultShape: "bar",
        baseNum: 3, baseDen: 2,
        initRightNum: 0, initRightDen: 4,
        maxUnits: 2,
        targetDen: 4,
        targetNum: 6,
        hints: [
          "Cada meitat (1/2) equival a 2 quarts (2/4).",
          "Com que tenim 3 meitats, en quarts seran 3 × 2 = 6 quarts.",
          "Activa 6 quarts (1 unitat sencera de 4/4 + 2/4 més) i escriu 6/4."
        ]
      },
      {
        id: "eq_3_4",
        title: "De Dotzens a Quarts (8/12 = ?/3)",
        lore: "Troba la fracció irreductible amb denominador 3.",
        instruction: "A l'esquerra tens <strong>8/12</strong>. Ajusta la dreta a <strong>3 parts</strong> i representa la fracció equivalent.",
        type: "equivalence_mirror",
        defaultShape: "grid",
        baseNum: 8, baseDen: 12,
        initRightNum: 0, initRightDen: 6,
        targetDen: 3,
        targetNum: 2,
        hints: [
          "Ajusta el denominador de la dreta a 3.",
          "8 i 12 es poden dividir entre 4: 8 ÷ 4 = 2 i 12 ÷ 4 = 3.",
          "Activa 2 terços i escriu 2/3."
        ]
      },
      {
        id: "eq_3_5",
        title: "El Cristall de Cinc Sisens (5/6 = ?/12)",
        lore: "Última prova del Mirall d'Equivalia!",
        instruction: "Construeix a la dreta la fracció amb denominador <strong>12</strong> equivalent a <strong>5/6</strong>.",
        type: "equivalence_mirror",
        defaultShape: "grid",
        baseNum: 5, baseDen: 6,
        initRightNum: 0, initRightDen: 6,
        targetDen: 12,
        targetNum: 10,
        hints: [
          "Passa el denominador del panell dret de 6 a 12 (el doble).",
          "Multiplica també el numerador per 2: 5 × 2 = 10.",
          "Activa 10 cristalls de 12 i escriu 10/12."
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------------
     MÒDUL 4: TRANSFORMACIÓ ALQUÍMICA (AMPLIFICAR, SIMPLIFICAR I NOMBRES MIXTOS)
     ------------------------------------------------------------------------ */
  transformacio: {
    1: [
      {
        id: "tr_1_1",
        title: "El Raig Multiplicador (× 2)",
        lore: "Aplica l'encanteri d'amplificació per partir cada terç en dues parts iguals!",
        instruction: "Amplifica la fracció <strong>2/3 multiplicant per 2</strong> (prem el botó màgic <strong>⚡ Amplifica ×2</strong> al tauler per veure com es transforma la figura) i escriu la fracció resultant.",
        type: "alchemy_transform",
        defaultShape: "bar",
        baseNum: 2, baseDen: 3,
        initRightNum: 2, initRightDen: 3,
        targetNum: 4, targetDen: 6,
        requireExactParts: true,
        hints: [
          "Amplificar per 2 vol dir multiplicar tant el numerador com el denominador per 2.",
          "Prem el botó '⚡ Amplifica ×2' a sota de la figura de la dreta.",
          "2 × 2 = 4 i 3 × 2 = 6. Escriu 4/6!"
        ]
      },
      {
        id: "tr_1_2",
        title: "Amplificació Triple (× 3)",
        lore: "Multiplica per 3 les divisions de l'escut de quart.",
        instruction: "Transforma la fracció <strong>1/4 amplificant-la per 3 (× 3)</strong> al tauler i escriu la fracció equivalent obtinguda.",
        type: "alchemy_transform",
        defaultShape: "circle",
        baseNum: 1, baseDen: 4,
        initRightNum: 1, initRightDen: 4,
        targetNum: 3, targetDen: 12,
        requireExactParts: true,
        hints: [
          "Prem el botó '⚡ Amplifica ×3' per partir cada quart en 3 parts iguals.",
          "1 × 3 = 3 al numerador i 4 × 3 = 12 al denominador.",
          "Escriu la fracció 3/12."
        ]
      },
      {
        id: "tr_1_3",
        title: "Duplicant els Cinquens (× 2)",
        lore: "Fes que els 3 cinquens es converteixin en desens.",
        instruction: "Amplifica <strong>3/5 per 2 (× 2)</strong> utilitzant l'encanteri del tauler i escriu la fracció transformada.",
        type: "alchemy_transform",
        defaultShape: "grid",
        baseNum: 3, baseDen: 5,
        initRightNum: 3, initRightDen: 5,
        targetNum: 6, targetDen: 10,
        requireExactParts: true,
        hints: [
          "Multiplica numerador i denominador per 2: (3 × 2) / (5 × 2).",
          "Prem '⚡ Amplifica ×2' per veure com els 3/5 es transformen en 6/10.",
          "Escriu 6/10 a la resposta."
        ]
      },
      {
        id: "tr_1_4",
        title: "Amplificació per 4 (1/3 × 4)",
        lore: "Converteix els terços en dotzens amb un sol encanteri.",
        instruction: "Transforma <strong>1/3 amplificant per 4 (× 4)</strong> i escriu la fracció obtinguda.",
        type: "alchemy_transform",
        defaultShape: "bar",
        baseNum: 1, baseDen: 3,
        initRightNum: 1, initRightDen: 3,
        targetNum: 4, targetDen: 12,
        requireExactParts: true,
        hints: [
          "Prem '⚡ Amplifica ×4' o ajusta a 12 parts i 4 activades.",
          "1 × 4 = 4 i 3 × 4 = 12.",
          "Escriu 4/12."
        ]
      },
      {
        id: "tr_1_5",
        title: "De Quarts a Vuitens (3/4 × 2)",
        lore: "Consolida el domini del Raig Multiplicador.",
        instruction: "Amplifica <strong>3/4 per 2 (× 2)</strong> al tauler i escriu la nova fracció.",
        type: "alchemy_transform",
        defaultShape: "circle",
        baseNum: 3, baseDen: 4,
        initRightNum: 3, initRightDen: 4,
        targetNum: 6, targetDen: 8,
        requireExactParts: true,
        hints: [
          "Prem '⚡ Amplifica ×2' sobre la figura de 3/4.",
          "3 × 2 = 6 i 4 × 2 = 8.",
          "Escriu 6/8."
        ]
      }
    ],
    2: [
      {
        id: "tr_2_1",
        title: "L'Espasa Divisora: Simplifica 4/8",
        lore: "Simplificar consisteix a agrupar parts dividint numerador i denominador pel mateix divisor fins a la fracció irreductible!",
        instruction: "Simplifica <strong>4/8</strong> fins a obtenir la seva <strong>fracció irreductible</strong> utilitzant els botons <strong>🗡️ Simplifica</strong> i escriu-la.",
        type: "alchemy_transform",
        defaultShape: "circle",
        baseNum: 4, baseDen: 8,
        initRightNum: 4, initRightDen: 8,
        targetNum: 1, targetDen: 2,
        requireExactParts: true,
        hints: [
          "4 i 8 es poden dividir tots dos entre 4 (o dues vegades entre 2).",
          "Prem '🗡️ Simplifica ÷4' (o '÷2' dues vegades) per agrupar els sectors.",
          "4 ÷ 4 = 1 i 8 ÷ 4 = 2. La fracció irreductible és 1/2!"
        ]
      },
      {
        id: "tr_2_2",
        title: "Simplificació entre 3 (6/9)",
        lore: "Redueix la runa de 6/9 a la seva forma més pura.",
        instruction: "Simplifica <strong>6/9</strong> dividint numerador i denominador entre <strong>3 (÷ 3)</strong> fins a la fracció irreductible.",
        type: "alchemy_transform",
        defaultShape: "bar",
        baseNum: 6, baseDen: 9,
        initRightNum: 6, initRightDen: 9,
        targetNum: 2, targetDen: 3,
        requireExactParts: true,
        hints: [
          "Tant 6 com 9 són múltiples de 3.",
          "Prem '🗡️ Simplifica ÷3' al tauler: 6 ÷ 3 = 2 i 9 ÷ 3 = 3.",
          "Escriu la fracció irreductible 2/3."
        ]
      },
      {
        id: "tr_2_3",
        title: "Purificació dels Dotzens (8/12)",
        lore: "Busca el màxim divisor comú de 8 i 12 per trobar la fracció irreductible!",
        instruction: "Simplifica <strong>8/12</strong> completament fins a la seva <strong>fracció irreductible</strong>.",
        type: "alchemy_transform",
        defaultShape: "grid",
        baseNum: 8, baseDen: 12,
        initRightNum: 8, initRightDen: 12,
        targetNum: 2, targetDen: 3,
        requireExactParts: true,
        hints: [
          "Si divideixes entre 2 obtens 4/6, però 4 i 6 encara es poden dividir entre 2 una altra vegada!",
          "8 ÷ 4 = 2 i 12 ÷ 4 = 3.",
          "La fracció irreductible és 2/3."
        ]
      },
      {
        id: "tr_2_4",
        title: "Simplificació entre 5 (5/10)",
        lore: "Agrupa les 10 parts del camí de 5 en 5.",
        instruction: "Simplifica la fracció <strong>5/10</strong> fins a la fracció irreductible.",
        type: "alchemy_transform",
        defaultShape: "line",
        baseNum: 5, baseDen: 10,
        initRightNum: 5, initRightDen: 10,
        targetNum: 1, targetDen: 2,
        requireExactParts: true,
        hints: [
          "5 i 10 són divisibles entre 5.",
          "Prem '🗡️ Simplifica ÷5': 5 ÷ 5 = 1 i 10 ÷ 5 = 2.",
          "Escriu 1/2."
        ]
      },
      {
        id: "tr_2_5",
        title: "L'Escut Irreductible (9/12)",
        lore: "Simplifica 9/12 per revelar els quarts ocults.",
        instruction: "Simplifica <strong>9/12</strong> fins a obtenir la seva <strong>fracció irreductible</strong>.",
        type: "alchemy_transform",
        defaultShape: "circle",
        baseNum: 9, baseDen: 12,
        initRightNum: 9, initRightDen: 12,
        targetNum: 3, targetDen: 4,
        requireExactParts: true,
        hints: [
          "9 i 12 es poden dividir entre 3.",
          "Prem '🗡️ Simplifica ÷3': 9 ÷ 3 = 3 i 12 ÷ 3 = 4.",
          "Escriu 3/4."
        ]
      }
    ],
    3: [
      {
        id: "tr_3_1",
        title: "De Fracció Impròpia a Nombre Mixt (7/4)",
        lore: "Converteix els 7 quarts en unitats senceres i la fracció restant!",
        instruction: "Al tauler tens representada la fracció impròpia <strong>7/4</strong>. Escriu a les caselles de sota a quin <strong>Nombre Mixt</strong> correspon (quantes unitats senceres i quina fracció pròpia sobra).",
        type: "mixed_conversion",
        defaultShape: "circle",
        initNum: 7, initDen: 4,
        maxUnits: 2,
        lockedBoard: false,
        targetWhole: 1,
        targetNum: 3,
        targetDen: 4,
        hints: [
          "Observa els escuts de 4 parts: amb 7 quarts s'omple 1 escut sencer (4/4 = 1).",
          "Quants quarts queden pintats al segon escut? 7 - 4 = 3 quarts.",
          "Escriu 1 a la casella gran d'unitats senceres, i 3/4 a la fracció (1 i 3/4)."
        ]
      },
      {
        id: "tr_3_2",
        title: "Transforma 8/3 en Nombre Mixt",
        lore: "Quantes barres senceres de 3 terços podem omplir amb 8 terços?",
        instruction: "Representa <strong>8/3</strong> (8 parts en unitats de 3 divisions) i escriu el seu <strong>Nombre Mixt</strong> (unitats senceres + fracció).",
        type: "mixed_conversion",
        defaultShape: "bar",
        initNum: 8, initDen: 3,
        maxUnits: 3,
        lockedBoard: false,
        targetWhole: 2,
        targetNum: 2,
        targetDen: 3,
        hints: [
          "Cada unitat sencera té 3 terços. Amb 8 terços omplim 2 unitats senceres (6/3 = 2).",
          " A la tercera barra queden 8 - 6 = 2 terços.",
          "Escriu 2 unitats senceres i 2/3."
        ]
      },
      {
        id: "tr_3_3",
        title: "De Nombre Mixt (2 i 1/4) a Fracció Impròpia",
        lore: "Fes ara la transformació inversa: passa de nombre mixt a fracció impròpia!",
        instruction: "Transforma el nombre mixt <strong>2 i 1/4</strong> en una sola <strong>fracció impròpia</strong>: activa les peces corresponents al tauler i escriu el numerador i denominador totals.",
        type: "build_and_write",
        defaultShape: "circle",
        initNum: 5, initDen: 4,
        maxUnits: 3,
        targetNum: 9,
        targetDen: 4,
        requireExactParts: true,
        hints: [
          "2 unitats senceres dividides en quarts són 2 × 4 = 8 quarts.",
          "Si hi sumem el quart addicional (1/4), tenim 8 + 1 = 9 quarts.",
          "Activa 9 sectors de quart al tauler i escriu 9/4."
        ]
      },
      {
        id: "tr_3_4",
        title: "Simplificació d'una Fracció Impròpia (6/4)",
        lore: "Una fracció impròpia també es pot simplificar amb l'Espasa Divisora!",
        instruction: "Simplifica la fracció impròpia <strong>6/4 dividint entre 2 (÷ 2)</strong> fins a la seva fracció irreductible.",
        type: "alchemy_transform",
        defaultShape: "bar",
        baseNum: 6, baseDen: 4,
        initRightNum: 6, initRightDen: 4,
        maxUnits: 2,
        targetNum: 3, targetDen: 2,
        requireExactParts: true,
        hints: [
          "Tant 6 com 4 són nombres parells (divisibles entre 2).",
          "Prem '🗡️ Simplifica ÷2': 6 ÷ 2 = 3 i 4 ÷ 2 = 2.",
          "Escriu la fracció irreductible 3/2."
        ]
      },
      {
        id: "tr_3_5",
        title: "Reducció a Comú Denominador (2/3 i 1/4 a dotzens)",
        lore: "Per sumar o comparar terços i quarts, els Arximags els transformen al denominador comú 12!",
        instruction: "Transforma la fracció <strong>2/3</strong> en una d'equivalent amb denominador <strong>12</strong> amplificant-la al tauler.",
        type: "alchemy_transform",
        defaultShape: "grid",
        baseNum: 2, baseDen: 3,
        initRightNum: 2, initRightDen: 3,
        targetNum: 8, targetDen: 12,
        requireExactParts: true,
        hints: [
          "Per passar de denominador 3 a denominador 12 cal multiplicar per 4.",
          "Prem '⚡ Amplifica ×4': 2 × 4 = 8 i 3 × 4 = 12.",
          "Escriu 8/12."
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------------
     MÒDUL 5: PROBLEMES ÈPICS DEL REGNE
     ------------------------------------------------------------------------ */
  problemes: {
    1: [
      {
        id: "prob_1_1",
        title: "El Banquet de la Taverna Daurada",
        lore: "La companyia d'aventurers recupera forces després de travessar les muntanyes.",
        instruction: "Un pastís èpic d'energia s'ha dividit en <strong>8 parts iguals</strong>. El guerrer Bruk se n'ha menjat <strong>3 parts</strong> i la maga Lyra se n'ha menjat <strong>2 parts</strong>. <strong>Quina fracció del pastís s'han menjat en total?</strong> Representa-la al tauler i escriu la fracció.",
        type: "problem_fraction",
        defaultShape: "circle",
        initNum: 0, initDen: 8,
        maxUnits: 1,
        targetNum: 5, targetDen: 8,
        requireExactParts: false,
        hints: [
          "Dades: el pastís té 8 parts iguals (denominador = 8). En Bruk n'agafa 3/8 i na Lyra 2/8.",
          "Representació: activa 3 sectors a l'escut de 8 parts i després activa'n 2 més.",
          "Operació: 3/8 + 2/8 = 5/8. Escriu 5 al numerador i 8 al denominador."
        ]
      },
      {
        id: "prob_1_2",
        title: "La Poció de Mana Restant",
        lore: "Abans del combat contra el Gòlem de Pedra, revises les teves reserves.",
        instruction: "Tenies una ampolla de mana plena (<strong>6/6</strong>). Has utilitzat <strong>4/6</strong> per crear un escut protector. <strong>Quina fracció de l'ampolla et queda encara?</strong> Representa-la al tauler i escriu-la.",
        type: "problem_fraction",
        defaultShape: "bar",
        initNum: 6, initDen: 6,
        maxUnits: 1,
        targetNum: 2, targetDen: 6,
        requireExactParts: false,
        hints: [
          "Dades: comences amb l'ampolla plena (6/6) i en gastes 4/6.",
          "Representació: a la barra de 6 parts plenes, fes clic a 4 peces per desactivar les que has gastat.",
          "Operació: 6/6 - 4/6 = 2/6 (o la seva equivalent simplificada 1/3)."
        ]
      },
      {
        id: "prob_1_3",
        title: "El Cofre de les 20 Monedes d'Or (Fracció d'una quantitat)",
        lore: "El rei d'Equivalia recompensa el teu gremi per protegir la frontera.",
        instruction: "En un cofre hi ha <strong>20 monedes d'or</strong>. Et corresponen les <strong>3/4 parts</strong> del cofre. <strong>Quantes monedes d'or rebràs?</strong> (Pots representar 3/4 al tauler per ajudar-te i escriure el nombre exacte de monedes).",
        type: "problem_number",
        defaultShape: "bar",
        initNum: 3, initDen: 4,
        totalQuantity: 20,
        unitLabel: "monedes d'or",
        targetNumber: 15,
        suggestedNum: 3, suggestedDen: 4,
        hints: [
          "Per calcular 3/4 de 20 monedes, primer dividim les 20 monedes en 4 parts iguals (denominador).",
          "Cada quart (1/4) té 20 ÷ 4 = 5 monedes d'or.",
          "Com que n'agafem 3 quarts (numerador = 3), multipliquem: 3 × 5 = 15 monedes d'or!"
        ]
      },
      {
        id: "prob_1_4",
        title: "La Muralla dels Cristalls",
        lore: "Els constructors reparen els blocs màgics de la muralla nord.",
        instruction: "La muralla està formada per <strong>10 trams iguals</strong>. Al matí n'han reparat <strong>4/10</strong> i a la tarda <strong>3/10</strong> més. <strong>Quina fracció de la muralla falta encara per reparar?</strong>",
        type: "problem_fraction",
        defaultShape: "grid",
        initNum: 0, initDen: 10,
        maxUnits: 1,
        targetNum: 3, targetDen: 10,
        requireExactParts: false,
        hints: [
          "Atenció a la pregunta: demana quina fracció FALTA per reparar!",
          "Ja s'han reparat 4/10 + 3/10 = 7/10 de la muralla.",
          "Si el total és 10/10, falten per reparar 10/10 - 7/10 = 3/10."
        ]
      },
      {
        id: "prob_1_5",
        title: "Els Guerrers de l'Esquadró",
        lore: "L'esquadró d'exploradors es prepara per entrar al Bosc de Cristall.",
        instruction: "En un grup de <strong>15 aventurers</strong>, les <strong>2/5 parts</strong> són mags. <strong>Quants mags hi ha en el grup?</strong>",
        type: "problem_number",
        defaultShape: "bar",
        initNum: 2, initDen: 5,
        totalQuantity: 15,
        unitLabel: "mags",
        targetNumber: 6,
        suggestedNum: 2, suggestedDen: 5,
        hints: [
          "Hem de calcular 2/5 de 15 aventurers. Divideix 15 en 5 grups iguals (denominador = 5).",
          "15 ÷ 5 = 3 aventurers a cada cinquè (1/5).",
          "Com que 2/5 són mags, 2 × 3 = 6 mags!"
        ]
      }
    ],
    2: [
      {
        id: "prob_2_1",
        title: "La Mescla de Pocions (Suma amb Equivalència)",
        lore: "En un calder barreges dues pocions amb denominadors diferents!",
        instruction: "En un calder hi poses <strong>1/2 litre</strong> d'aigua d'estrelles i <strong>1/4 de litre</strong> d'essència de bosc. <strong>Quina fracció de litre hi ha en total al calder?</strong> (Transforma 1/2 a quarts al tauler per sumar-los!).",
        type: "problem_fraction",
        defaultShape: "bar",
        initNum: 1, initDen: 4,
        maxUnits: 1,
        targetNum: 3, targetDen: 4,
        requireExactParts: false,
        hints: [
          "No podem sumar directament meitats (1/2) i quarts (1/4) sense tenir peces de la mateixa mida.",
          "Recorda que 1/2 és equivalent a 2/4!",
          "Si ajuntem 2/4 + 1/4 obtenim 3/4 de litre."
        ]
      },
      {
        id: "prob_2_2",
        title: "Les Pàgines del Grimori Antic",
        lore: "Estàs estudiant els encanteris del llibre sagrat de la biblioteca.",
        instruction: "El Grimori té <strong>24 pàgines</strong>. Ja n'has llegit les <strong>5/6 parts</strong>. <strong>Quantes pàgines has llegit ja?</strong>",
        type: "problem_number",
        defaultShape: "grid",
        initNum: 5, initDen: 6,
        totalQuantity: 24,
        unitLabel: "pàgines llegides",
        targetNumber: 20,
        suggestedNum: 5, suggestedDen: 6,
        hints: [
          "Calcula 5/6 de 24 pàgines: divideix les 24 pàgines en 6 parts iguals.",
          "Cada sisè (1/6) equival a 24 ÷ 6 = 4 pàgines.",
          "5 sisens són 5 × 4 = 20 pàgines llegides."
        ]
      },
      {
        id: "prob_2_3",
        title: "El Viatge cap a la Ciutadella (El que queda!)",
        lore: "Llegeix molt bé la pregunta abans de llançar l'encanteri!",
        instruction: "El camí fins a la Ciutadella fa <strong>30 quilòmetres</strong>. El teu cavall alà ja ha recorregut les <strong>3/5 parts</strong> del trajecte. <strong>Quants quilòmetres FALTEN encara per arribar?</strong>",
        type: "problem_number",
        defaultShape: "line",
        initNum: 2, initDen: 5,
        totalQuantity: 30,
        unitLabel: "km que falten",
        targetNumber: 12,
        suggestedNum: 2, suggestedDen: 5,
        hints: [
          "Si ja has recorregut 3/5 del camí, vol dir que et FALTEN 2/5 del camí per arribar!",
          "1/5 de 30 km són 30 ÷ 5 = 6 km.",
          "Els 2/5 que falten són 2 × 6 = 12 km (o bé 30 - 18 = 12 km)."
        ]
      },
      {
        id: "prob_2_4",
        title: "L'Aliança dels Dos Regnes",
        lore: "El Regne del Nord i el Regne del Sud uneixen els seus cristalls.",
        instruction: "El Regne del Nord aporta <strong>1/3</strong> de l'energia del portal i el Regne del Sud n'aporta <strong>2/6</strong>. <strong>Quina fracció total d'energia tenen entre tots dos?</strong> (Pots expressar-la en sisens o simplificada en terços).",
        type: "problem_fraction",
        defaultShape: "circle",
        initNum: 0, initDen: 6,
        maxUnits: 1,
        targetNum: 2, targetDen: 3,
        requireExactParts: false,
        hints: [
          "Transforma 1/3 a sisens: 1/3 és equivalent a 2/6.",
          "Ara suma l'energia dels dos regnes: 2/6 + 2/6 = 4/6.",
          "Pots escriure 4/6 o la seva fracció irreductible 2/3 (totes dues són vàlides!)."
        ]
      },
      {
        id: "prob_2_5",
        title: "Qui Té Més Cristalls?",
        lore: "Compara dues fraccions d'una mateixa quantitat.",
        instruction: "D'una mina de <strong>36 gemmes</strong>, la maga n'obté <strong>1/3</strong> i el ferrer n'obté <strong>1/4</strong>. <strong>Quantes gemmes obtenen en total entre la maga i el ferrer?</strong>",
        type: "problem_number",
        defaultShape: "grid",
        initNum: 7, initDen: 12,
        totalQuantity: 36,
        unitLabel: "gemmes en total",
        targetNumber: 21,
        suggestedNum: 7, suggestedDen: 12,
        hints: [
          "Calcula primer les gemmes de la maga: 1/3 de 36 = 36 ÷ 3 = 12 gemmes.",
          "Calcula ara les gemmes del ferrer: 1/4 de 36 = 36 ÷ 4 = 9 gemmes.",
          "Suma-les: 12 + 9 = 21 gemmes en total!"
        ]
      }
    ],
    3: [
      {
        id: "prob_3_1",
        title: "Les Reserves de l'Expedició (Més d'una unitat!)",
        lore: "Tres grups d'exploradors necessiten racions de pa èlfic.",
        instruction: "Cada grup d'exploradors necessita <strong>3/4 de barra</strong> de pa èlfic. Si hi ha <strong>3 grups</strong>, <strong>quina fracció impròpia de barres necessiten en total?</strong> Representa-la al tauler i escriu la fracció.",
        type: "problem_fraction",
        defaultShape: "bar",
        initNum: 3, initDen: 4,
        maxUnits: 3,
        targetNum: 9, targetDen: 4,
        requireExactParts: false,
        hints: [
          "Són 3 grups i cada grup consumeix 3/4: hem de sumar 3/4 + 3/4 + 3/4 (o fer 3 × 3/4).",
          "Activa 9 quarts en total repartits en les 3 barres del tauler (2 barres senceres i 1/4).",
          "Escriu la fracció impròpia 9/4."
        ]
      },
      {
        id: "prob_3_2",
        title: "El Tresor de les TresProves",
        lore: "Un problema multipas digne d'un Gran Arximag!",
        instruction: "Un tresor té <strong>60 monedes de platí</strong>. El primer guardià es queda <strong>1/3</strong> del tresor, i el segon guardià es queda <strong>2/5</strong> del mateix tresor de 60 monedes. <strong>Quantes monedes queden per al tercer guardià?</strong>",
        type: "problem_number",
        defaultShape: "grid",
        initNum: 4, initDen: 12,
        totalQuantity: 60,
        unitLabel: "monedes restants",
        targetNumber: 16,
        suggestedNum: 4, suggestedDen: 12,
        hints: [
          "1r guardià: 1/3 de 60 = 60 ÷ 3 = 20 monedes.",
          "2n guardià: 2/5 de 60 = (60 ÷ 5) × 2 = 12 × 2 = 24 monedes.",
          "Entre els dos primers s'emporten 20 + 24 = 44 monedes. Al tercer li queden 60 - 44 = 16 monedes!"
        ]
      },
      {
        id: "prob_3_3",
        title: "L'Elixir dels Dotze Ingredients",
        lore: "Suma fraccions amb diferent denominador transformant-les a dotzens.",
        instruction: "Una recepta màgica porta <strong>1/3</strong> de pols d'or, <strong>1/4</strong> d'aigua lunar i la resta és nèctar de flors. <strong>Quina fracció de la recepta és nèctar de flors?</strong> (Transforma a denominador <strong>12</strong>!).",
        type: "problem_fraction",
        defaultShape: "grid",
        initNum: 0, initDen: 12,
        maxUnits: 1,
        targetNum: 5, targetDen: 12,
        requireExactParts: false,
        hints: [
          "Passa 1/3 i 1/4 a dotzens: 1/3 = 4/12 (pols d'or) i 1/4 = 3/12 (aigua lunar).",
          "Entre tots dos ingredients sumen 4/12 + 3/12 = 7/12 de la recepta.",
          "Fins a completar tota la recepta (12/12), el nèctar de flors és 12/12 - 7/12 = 5/12!"
        ]
      },
      {
        id: "prob_3_4",
        title: "Les Ampolles de Curació del Drac",
        lore: "Reparteix una fracció impròpia d'elixir.",
        instruction: "Has preparat <strong>2 litres i mig (5/2 litres)</strong> d'elixir i els vols posar en ampolletes petites d'<strong>1/4 de litre</strong> cadascuna. <strong>Quantes ampolletes d'1/4 de litre podràs omplir?</strong> (Usa el tauler en quarts!).",
        type: "problem_number",
        defaultShape: "bar",
        initNum: 10, initDen: 4,
        maxUnits: 3,
        totalQuantity: 10,
        unitLabel: "ampolletes d'1/4 L",
        targetNumber: 10,
        suggestedNum: 10, suggestedDen: 4,
        hints: [
          "Cada litre sencer té 4 quarts (4 ampolletes d'1/4 L).",
          "2 litres sencers són 2 × 4 = 8 quarts, i mig litre (1/2) són 2 quarts més.",
          "En total, 5/2 equival a 10/4, així que ompliràs 10 ampolletes!"
        ]
      },
      {
        id: "prob_3_5",
        title: "La Corona de l'Arximag",
        lore: "L'última gran missió del Regne de Fractària!",
        instruction: "Per forjar la Corona de l'Arximag calen <strong>48 cristalls estel·lars</strong>. Ja n'has encastat les <strong>3/8 parts</strong> al matí i <strong>1/4 part</strong> a la tarda. <strong>Quants cristalls estel·lars has encastat en total?</strong>",
        type: "problem_number",
        defaultShape: "circle",
        initNum: 5, initDen: 8,
        totalQuantity: 48,
        unitLabel: "cristalls encastats",
        targetNumber: 30,
        suggestedNum: 5, suggestedDen: 8,
        hints: [
          "Al matí: 3/8 de 48 = (48 ÷ 8) × 3 = 6 × 3 = 18 cristalls.",
          "A la tarda: 1/4 de 48 = 48 ÷ 4 = 12 cristalls (o bé suma 3/8 + 2/8 = 5/8 de 48).",
          "En total has encastat 18 + 12 = 30 cristalls estel·lars!"
        ]
      }
    ]
  }
};
