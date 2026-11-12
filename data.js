/* ==========================================================================
   FRACCIONS AL DIA A DIA · DADES CURRICULARS 6è DE PRIMÀRIA (CATALÀ)
   Temàtica: Situacions quotidianes (Supermercat, Cuina, Compres i Barri)
   ========================================================================== */

const HERO_RANKS = [
  { minStars: 0,   name: "🌱 Comprador/a Novell",          badge: "🌱" },
  { minStars: 10,  name: "🥖 Ajudant de Forn",             badge: "🥖" },
  { minStars: 25,  name: "🛒 Expert/a del Supermercat",    badge: "🛒" },
  { minStars: 45,  name: "👩‍🍳 Xef de les Proporcions",      badge: "👩‍🍳" },
  { minStars: 70,  name: "📊 Encarregat/da del Mercat",    badge: "📊" },
  { minStars: 100, name: "🏆 Mestre/a de les Fraccions",   badge: "🏆" }
];

const KINGDOM_RELICS = [
  {
    id: "relic_shield",
    name: "Insígnia de la Pizzeria",
    icon: "🍕",
    module: "identificacio",
    reqText: "Completa 5 exercicis d'Identificació i Representació",
    minCompleted: 5
  },
  {
    id: "relic_scales",
    name: "Bàscula d'Or del Mercat",
    icon: "⚖️",
    module: "comparacio",
    reqText: "Completa 5 exercicis de Comparació de Fraccions",
    minCompleted: 5
  },
  {
    id: "relic_mirror",
    name: "Rajola de les Equivalències",
    icon: "🍫",
    module: "equivalencia",
    reqText: "Completa 5 exercicis d'Equivalències Visuals",
    minCompleted: 5
  },
  {
    id: "relic_orb",
    name: "Mestre/a del Tall Exacte",
    icon: "🔪",
    module: "transformacio",
    reqText: "Completa 5 exercicis de Transformació (Amplificar i Simplificar)",
    minCompleted: 5
  },
  {
    id: "relic_scroll",
    name: "Carretó d'Or del Supermercat",
    icon: "🛒",
    module: "problemes",
    reqText: "Resoldre 5 Problemes de Fraccions al Supermercat",
    minCompleted: 5
  },
  {
    id: "relic_solver",
    name: "Estratega de Problemes",
    icon: "🧠",
    module: "resolucio_problemes",
    reqText: "Resoldre 5 Problemes d'Operacions (fora de fraccions)",
    minCompleted: 5
  },
  {
    id: "relic_crown",
    name: "Trofeu de les Matemàtiques Quotidianes",
    icon: "🏆",
    module: "all",
    reqText: "Aconsegueix almenys 45 estrelles",
    minStars: 45
  }
];

/* ==========================================================================
   CAPÍTOLS DE LA GUIA DEL SABER (TEORIA INTERACTIVA AMB EXEMPLES QUOTIDIANS)
   ========================================================================== */
const GRIMORI_CHAPTERS = {
  concepte: {
    title: "1️⃣ Què és una Fracció? Les Parts del Dia a Dia",
    ttsText: "Una fracció representa una o més parts iguals d'una unitat sencera, com quan tallem una pizza, repartim una rajola de xocolata o comprem mig quilo de fruita al supermercat. El denominador, el número de sota, indica en quantes parts iguals hem dividit la unitat. El numerador, el número de dalt, indica quantes parts agafem o comprem.",
    html: `
      <h3>1️⃣ Què és una Fracció?</h3>
      <p>En la nostra vida quotidiana fem servir <strong>fraccions</strong> constantment: quan comprem <em>mig quilo</em> de maduixes al supermercat, quan repartim una pizza en <em>talls iguals</em> o quan agafem trossos d'una rajola de xocolata.</p>
      
      <div class="grimori-concept-box">
        <p>🔺 <strong>Numerador (número de dalt):</strong> Indica quantes parts <strong>agafem, comprem o pintem</strong>.</p>
        <p style="margin-top:0.4rem;">🔻 <strong>Denominador (número de sota):</strong> Indica en quantes <strong>parts exactament iguals</strong> s'ha dividit la unitat sencera (la pizza, la capsa o el quilo).</p>
      </div>

      <p><strong>Exemple quotidià:</strong> Si una rajola de xocolata està dividida en <strong>4 trossos iguals</strong> i ens en mengem <strong>3</strong>, hem menjat <strong>tres quarts (3/4)</strong> de la rajola.</p>
      
      <div class="grimori-concept-box">
        <p>💡 <strong>Molt important:</strong> Perquè sigui una fracció, totes les parts han de tenir <strong>exactament la mateixa mida</strong>! Mou els controls del <em>Simulador en Viu</em> de la dreta per comprovar-ho.</p>
      </div>
    `
  },
  tipus: {
    title: "2️⃣ Fraccions Pròpies, Impròpies i Nombres Mixtos",
    ttsText: "Segons si comprem menys d'una unitat, exactament una unitat o més d'una unitat sencera, les fraccions poden ser pròpies, iguals a la unitat o impròpies. Les fraccions impròpies es poden expressar com a nombre mixt, per exemple una pizza sencera i tres quarts.",
    html: `
      <h3>2️⃣ Pròpies, Impròpies i Nombres Mixtos</h3>
      <p>Quan anem al forn o al supermercat, podem comprar menys d'una unitat, una unitat sencera o més d'una unitat:</p>

      <div class="grimori-concept-box">
        <p>🍕 <strong>Fracció Pròpia (menor que 1 unitat):</strong> El numerador és més petit que el denominador (ex: <strong>3/5</strong> d'un pastís). No arriba a ser una unitat sencera.</p>
      </div>

      <div class="grimori-concept-box">
        <p>📦 <strong>Fracció Igual a la Unitat (= 1):</strong> El numerador i el denominador són iguals (ex: <strong>6/6 = 1</strong> safata de 6 iogurts sencera).</p>
      </div>

      <div class="grimori-concept-box">
        <p>🛒 <strong>Fracció Impròpia (major que 1 unitat) i Nombre Mixt:</strong> El numerador és més gran que el denominador (ex: <strong>7/4</strong> de pizza). Necessitem més d'una pizza! Com que <strong>4/4</strong> fan <strong>1 pizza sencera</strong> i sobren <strong>3/4</strong>, ho escrivim com el <strong>nombre mixt 1 i 3/4</strong>.</p>
      </div>
    `
  },
  equivalents: {
    title: "3️⃣ Què són les Fraccions Equivalents?",
    ttsText: "Dues fraccions són equivalents quan representen exactament la mateixa quantitat, encara que s'escriguin amb números diferents. Per exemple, comprar mig quilo de formatge és exactament el mateix que comprar dos paquets d'un quart de quilo.",
    html: `
      <h3>3️⃣ Què són les Fraccions Equivalents?</h3>
      <p>Dues o més fraccions són <strong>equivalents</strong> quan representen <strong>exactament la mateixa quantitat</strong> de producte, encara que tinguin números diferents!</p>

      <div class="grimori-concept-box">
        <p>🧀 <strong>Exemple a la xarcuteria:</strong> <strong>1/2 = 2/4 = 3/6 = 4/8</strong></p>
        <p style="margin-top:0.35rem;">Comprar <strong>1/2 formatge</strong> (1 meitat) és exactament la mateixa quantitat que comprar <strong>2/4 de formatge</strong> (2 quarts) o <strong>4/8 de formatge</strong> (4 vuitens)!</p>
      </div>

      <div class="grimori-concept-box">
        <p>🔍 <strong>Truc del producte en creu:</strong> Dues fraccions són equivalents si en multiplicar en creu donen el mateix resultat: a <strong>2/3</strong> i <strong>4/6</strong>, es compleix que <strong>2 × 6 = 12</strong> i <strong>3 × 4 = 12</strong>.</p>
      </div>
    `
  },
  transformar: {
    title: "4️⃣ Transformació: Amplificar i Simplificar",
    ttsText: "Podem transformar una fracció en una altra d'equivalent de dues maneres: amplificant, que és multiplicar numerador i denominador pel mateix nombre, o simplificant, que és dividir numerador i denominador pel mateix divisor fins a obtenir la fracció irreductible.",
    html: `
      <h3>4️⃣ Transformació: Amplificar i Simplificar</h3>
      <p>Podem transformar qualsevol fracció en una altra d'equivalent amb dues operacions:</p>

      <div class="grimori-concept-box">
        <p>🔪 <strong>Amplificar (Partir en trossos més petits):</strong> Multipliquem el numerador i el denominador pel <strong>mateix nombre</strong> (× 2, × 3, × 4...). Si cada tall de pastís el partim per la meitat (× 2), tindrem el doble de talls però ocuparan el mateix!</p>
        <p style="margin-top:0.4rem;">Exemple: <strong>2/3</strong> &rarr; <em>(multipliquem dalt i baix × 2)</em> &rarr; <strong>4/6</strong></p>
      </div>

      <div class="grimori-concept-box">
        <p>📦 <strong>Simplificar (Agrupar en paquets més grans):</strong> Dividim el numerador i el denominador pel <strong>mateix divisor comú</strong> (÷ 2, ÷ 3, ÷ 5...).</p>
        <p style="margin-top:0.4rem;">Exemple: <strong>6/8</strong> &rarr; <em>(dividim dalt i baix ÷ 2)</em> &rarr; <strong>3/4</strong>. Com que 3 i 4 ja no es poden dividir més pel mateix nombre, <strong>3/4</strong> és la <strong>fracció irreductible</strong>!</p>
      </div>
    `
  }
};

/* ==========================================================================
   75 EXERCICIS INTERACTIUS QUOTIDIANS (5 MÒDULS × 3 NIVELLS × 5 REPTES)
   ========================================================================== */
const CHALLENGES_DATA = {

  /* ------------------------------------------------------------------------
     MÒDUL 1: IDENTIFICACIÓ I REPRESENTACIÓ DE FRACCIONS
     ------------------------------------------------------------------------ */
  identificacio: {
    1: [
      {
        id: "id_1_1",
        title: "El Formatge del Mercat",
        lore: "A la parada de formatges venen un formatge rodó tallat en 4 parts iguals.",
        instruction: "Representa al tauler la fracció <strong>3/4</strong> de formatge: assegura't que estigui dividit en <strong>4 parts iguals</strong> i fes clic per seleccionar-ne <strong>3</strong>. Després escriu la fracció a sota.",
        type: "build_and_write",
        defaultShape: "circle",
        initNum: 0,
        initDen: 4,
        maxUnits: 1,
        targetNum: 3,
        targetDen: 4,
        requireExactParts: true,
        hints: [
          "El número de sota (denominador = 4) indica que el formatge està tallat en 4 trossos iguals.",
          "Fes clic directament sobre 3 porcions del formatge rodó per seleccionar-les.",
          "Escriu 3 al numerador (dalt) i 4 al denominador (sota) i prem Comprova!"
        ]
      },
      {
        id: "id_1_2",
        title: "La Barra de Cereals",
        lore: "Per esmorzar tens una barreta energètica de cereals.",
        instruction: "Divideix la barra en <strong>5 parts iguals</strong> i selecciona'n <strong>2 parts</strong> per representar que t'has menjat <strong>2/5</strong> (dos cinquens). Escriu també els números a la casella de fracció.",
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
          "Prem el botó '+' de 'Parts/unitat' fins a tenir 5 divisions, i fes clic a 2 trossos de la barra.",
          "A la casella simbòlica, escriu 2 a dalt i 5 a sota."
        ]
      },
      {
        id: "id_1_3",
        title: "La Capsa de 8 Formatgets",
        lore: "Obres la nevera per mirar quants formatgets queden a la capsa.",
        instruction: "Observa la capsa del tauler (no cal modificar-ne les peces) i <strong>identifica quina fracció de la capsa està plena</strong> escrivint el numerador i el denominador correctes.",
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
          "Compta primer quants espais iguals en total té la capsa (denominador).",
          "Ara compta quantes porcions estan marcades (numerador).",
          "Hi ha 5 porcions d'un total de 8: escriu 5 a dalt i 8 a sota (5/8)."
        ]
      },
      {
        id: "id_1_4",
        title: "La Pizza Familiar de 6 Talls",
        lore: "Per sopar heu demanat una pizza tallada en 6 porcions iguals.",
        instruction: "Configura la pizza en <strong>6 parts iguals</strong> i selecciona'n <strong>4</strong> per representar els <strong>4/6</strong> que us heu menjat. Escriu la fracció a sota.",
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
          "Fes servir el botó '+' de 'Parts/unitat (Denominador)' per passar de 3 a 6 talls, i pinta'n 4.",
          "Escriu 4 a dalt i 6 a sota (4/6)."
        ]
      },
      {
        id: "id_1_5",
        title: "Cinta de Regal a la Papereria",
        lore: "A la papereria del barri compres set desenes parts d'un metre de cinta.",
        instruction: "A la cinta mètrica, representa la fracció <strong>7/10 de metre</strong> (set desens): divideix el metre en <strong>10 parts</strong> i marca'n <strong>7</strong>.",
        type: "build_and_write",
        defaultShape: "line",
        initNum: 0,
        initDen: 10,
        maxUnits: 1,
        targetNum: 7,
        targetDen: 10,
        requireExactParts: true,
        hints: [
          "La cinta mètrica ja està dividida en 10 trams iguals entre el 0 i l'1.",
          "Fes clic al tram 7 (o prem '+' a Peces fins a 7) per marcar 7/10 de metre.",
          "Escriu 7 al numerador i 10 al denominador."
        ]
      }
    ],
    2: [
      {
        id: "id_2_1",
        title: "El Pastís de Poma del Forn",
        lore: "Al taulell del forn queda una part d'un pastís de poma artesanal.",
        instruction: "Observa la figura bloquejada del tauler i escriu quina fracció del pastís queda disponible.",
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
          "Compta tots els talls en què està dividit el pastís, tant els pintats com el buit.",
          "En total hi ha 6 talls iguals i en queden 5.",
          "Escriu 5 al numerador i 6 al denominador (5/6)."
        ]
      },
      {
        id: "id_2_2",
        title: "ElBrics de Suc Sencer",
        lore: "Compres una ampolla de suc d'un litre completament plena.",
        instruction: "Divideix l'envàs en <strong>8 gots iguals</strong> i selecciona totes les parts per obtenir <strong>1 envàs sencer ple (8/8)</strong>.",
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
          "Selecciona les 8 parts de l'envàs de 8 divisions.",
          "Escriu 8/8 a la casella de resposta."
        ]
      },
      {
        id: "id_2_3",
        title: "La Dotzena d'Ous del Supermercat",
        lore: "Després de fer una truita, mires quants ous queden a la safata d'una dotzena.",
        instruction: "Construeix al tauler la fracció <strong>7/12</strong> d'una dotzena d'ous: ajusta el denominador a <strong>12 parts</strong> i marca <strong>7 ous</strong>.",
        type: "build_and_write",
        defaultShape: "grid",
        initNum: 0,
        initDen: 6,
        maxUnits: 1,
        targetNum: 7,
        targetDen: 12,
        requireExactParts: true,
        hints: [
          "Augmenta el nombre de parts per unitat fins a 12 (una dotzena).",
          "Fes clic sobre 7 caselles de la safata de 12.",
          "Escriu 7 al numerador i 12 al denominador."
        ]
      },
      {
        id: "id_2_4",
        title: "La Coca de Forner en 9 Trossos",
        lore: "Una coca s'ha tallat en 9 trossos iguals i encara en queden 5 a la safata. Quina fracció s'ha venut ja?",
        instruction: "Si la coca té <strong>9 trossos iguals</strong> i en queden 5 per vendre, representa i escriu la fracció de coca que <strong>ja s'ha venut (4/9)</strong>.",
        type: "build_and_write",
        defaultShape: "circle",
        initNum: 0,
        initDen: 9,
        maxUnits: 1,
        targetNum: 4,
        targetDen: 9,
        requireExactParts: true,
        hints: [
          "Si el total és 9/9 i queden 5/9, ja s'han venut 9 - 5 = 4 trossos.",
          "Pinta 4 porcions de la figura de 9 parts.",
          "Escriu la fracció 4/9."
        ]
      },
      {
        id: "id_2_5",
        title: "Pesant Fruita a la Bàscula",
        lore: "L'agulla de la bàscula lineal del supermercat marca menys d'un quilo.",
        instruction: "Observa la recta numèrica bloquejada (dividida en vuitens de quilo) i escriu quina fracció de quilo marca.",
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
          "Compta en quants trams iguals està dividit l'espai entre 0 kg i 1 kg.",
          "Hi ha 8 trams en total i hi ha 3 trams marcats des del 0.",
          "La fracció és 3/8."
        ]
      }
    ],
    3: [
      {
        id: "id_3_1",
        title: "Més d'una Pizza: Fracció Impròpia (5/4)",
        lore: "En un berenar d'amics heu menjat més d'una pizza sencera!",
        instruction: "Representa la fracció impròpia <strong>5/4 de pizza</strong> (cinc quarts), que equival a <strong>1 pizza sencera i 1/4</strong>. Tens <strong>2 pizzes</strong> tallades en 4 parts cadascuna: selecciona <strong>5 parts en total</strong> i escriu la fracció impròpia <strong>5/4</strong>.",
        type: "build_and_write",
        defaultShape: "circle",
        initNum: 0,
        initDen: 4,
        maxUnits: 2,
        targetNum: 5,
        targetDen: 4,
        requireExactParts: true,
        hints: [
          "Com que el numerador (5) és més gran que el denominador (4), necessitem més d'una pizza sencera!",
          "Selecciona els 4 quarts de la primera pizza (4/4 = 1 pizza) i 1 quart de la segona pizza (5 quarts en total).",
          "Escriu 5 al numerador i 4 al denominador (5/4)."
        ]
      },
      {
        id: "id_3_2",
        title: "Dues Barres de Pa i Mitja (5/2)",
        lore: "Per fer els entrepans de l'excursió heu comprat dues barres de pa senceres i mitja.",
        instruction: "Representa el nombre mixt <strong>2 i 1/2</strong> com a fracció impròpia: divideix cada barra en <strong>2 parts (meitats)</strong>, selecciona <strong>5 meitats en total</strong> i escriu la fracció impròpia <strong>5/2</strong>.",
        type: "build_and_write",
        defaultShape: "bar",
        initNum: 0,
        initDen: 2,
        maxUnits: 3,
        targetNum: 5,
        targetDen: 2,
        requireExactParts: true,
        hints: [
          "Cada barra sencera té 2 meitats (2/2). Dues barres senceres són 4 meitats (4/2).",
          "Si hi afegim 1 meitat més, tenim 5 meitats en total!",
          "Selecciona 5 peces de mida 1/2 i escriu 5/2."
        ]
      },
      {
        id: "id_3_3",
        title: "Els Packs de 3 Briks de Llet",
        lore: "Al rebost de casa hi ha diversos packs de 3 briks de llet.",
        instruction: "Observa els 3 packs del tauler (cada pack complet té 3 briks) i escriu la <strong>fracció impròpia</strong> total de briks seleccionats.",
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
          "El denominador és el nombre de parts d'UN sol pack (cada pack té 3 unitats, per tant el denominador és 3, no 9!).",
          "Compta quants briks estan marcats en total sumant els 3 packs: 3 + 3 + 1 = 7 terços.",
          "Escriu 7 al numerador i 3 al denominador (7/3)."
        ]
      },
      {
        id: "id_3_4",
        title: "Una Empanada Sencera i Cinc Sisens (11/6)",
        lore: "A la fleca han venut 1 empanada sencera i 5/6 d'una altra.",
        instruction: "Amb les unitats dividides en <strong>6 parts (sisens)</strong>, pinta <strong>1 unitat sencera més 5 sisens</strong> per obtenir <strong>11/6</strong>.",
        type: "build_and_write",
        defaultShape: "circle",
        initNum: 6,
        initDen: 6,
        maxUnits: 2,
        targetNum: 11,
        targetDen: 6,
        requireExactParts: true,
        hints: [
          "1 empanada sencera dividida en sisens són 6/6.",
          "Si a 6/6 hi afegim 5/6 més, tenim 6 + 5 = 11 sisens.",
          "Selecciona 11 porcions en total i escriu 11/6."
        ]
      },
      {
        id: "id_3_5",
        title: "Nou Quarts de Rajola de Xocolata (9/4)",
        lore: "Per fer una fondue de xocolata calen 2 rajoles senceres i 1 quart.",
        instruction: "Amb les rajoles dividides en <strong>4 parts (quarts)</strong>, selecciona <strong>9 quarts (9/4)</strong> en total i escriu la fracció impròpia.",
        type: "build_and_write",
        defaultShape: "bar",
        initNum: 0,
        initDen: 4,
        maxUnits: 3,
        targetNum: 9,
        targetDen: 4,
        requireExactParts: true,
        hints: [
          "2 rajoles senceres de 4 quarts són 8 quarts (4 + 4 = 8).",
          "Selecciona 1 quart més a la tercera rajola per arribar a 9 quarts.",
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
        title: "Comparant Ampolles d'Aigua (3/5 vs 4/5)",
        lore: "Després de la classe d'Educació Física compareu quanta aigua queda a dues cantimplores iguals.",
        instruction: "Representa <strong>3/5</strong> a l'esquerra i <strong>4/5</strong> a la dreta, i tria el símbol correcte (<strong>&lt;</strong>, <strong>=</strong> o <strong>&gt;</strong>).",
        type: "compare_two",
        defaultShape: "bar",
        leftNum: 3, leftDen: 5,
        rightNum: 4, rightDen: 5,
        lockFractions: false,
        correctSymbol: "<",
        hints: [
          "Totes dues cantimplores estan dividides en 5 parts iguals (mateix denominador).",
          "Quan el denominador és igual, té més quantitat la que té més parts plenes (numerador més gran).",
          "3/5 és més petit que 4/5: selecciona el símbol '<'."
        ]
      },
      {
        id: "comp_1_2",
        title: "Dues Pizzes de 8 Talls (5/8 vs 3/8)",
        lore: "A la taula 1 han menjat 5/8 de pizza i a la taula 2 n'han menjat 3/8.",
        instruction: "Observa <strong>5/8</strong> a l'esquerra i <strong>3/8</strong> a la dreta, i selecciona quin símbol les relaciona (<strong>&lt;</strong>, <strong>=</strong> o <strong>&gt;</strong>).",
        type: "compare_two",
        defaultShape: "circle",
        leftNum: 5, leftDen: 8,
        rightNum: 3, rightDen: 8,
        lockFractions: false,
        correctSymbol: ">",
        hints: [
          "Totes dues pizzes estan tallades en 8 porcions iguals.",
          "5 porcions és més quantitat que 3 porcions.",
          "Per tant, 5/8 > 3/8 (selecciona '>')."
        ]
      },
      {
        id: "comp_1_3",
        title: "Dues Safates de 6 Iogurts",
        lore: "Revises dos packs de iogurts a la llista de la compra.",
        instruction: "Compara <strong>4/6</strong> a l'esquerra i <strong>4/6</strong> a la dreta. Quin símbol correspon?",
        type: "compare_two",
        defaultShape: "grid",
        leftNum: 4, leftDen: 6,
        rightNum: 4, rightDen: 6,
        lockFractions: false,
        correctSymbol: "=",
        hints: [
          "Mira la barra de percentatge de tots dos panells.",
          "Tenen exactament el mateix numerador i denominador.",
          "Selecciona el símbol '='."
        ]
      },
      {
        id: "comp_1_4",
        title: "Pesant Ametlles a Granel (7/10 kg vs 9/10 kg)",
        lore: "Al supermercat peses dues bosses d'ametlles en desenes parts de quilo.",
        instruction: "Compara <strong>7/10 de kg</strong> a l'esquerra amb <strong>9/10 de kg</strong> a la dreta i tria el símbol correcte.",
        type: "compare_two",
        defaultShape: "line",
        leftNum: 7, leftDen: 10,
        rightNum: 9, rightDen: 10,
        lockFractions: false,
        correctSymbol: "<",
        hints: [
          "A la bàscula lineal, 9/10 kg (900 g) està més a prop d'1 kg que 7/10 kg (700 g).",
          "7 desenes parts és menys que 9 desenes parts.",
          "Tria el símbol '<' (7/10 < 9/10)."
        ]
      },
      {
        id: "comp_1_5",
        title: "El Brik Sencer contra Cinc Sisens",
        lore: "Un envàs de brou té 6/6 de litre i un altre en té 5/6.",
        instruction: "Compara <strong>6/6</strong> (esquerra) amb <strong>5/6</strong> (dreta) i selecciona el símbol adequat.",
        type: "compare_two",
        defaultShape: "bar",
        leftNum: 6, leftDen: 6,
        rightNum: 5, rightDen: 6,
        lockFractions: false,
        correctSymbol: ">",
        hints: [
          "6/6 és l'envàs sencer (100% ple), mentre que a 5/6 li falta un sisè.",
          "6/6 és més gran que 5/6.",
          "Selecciona el símbol '>'."
        ]
      }
    ],
    2: [
      {
        id: "comp_2_1",
        title: "Mateix Numerador: Qui menja un tall més gran? (1/3 vs 1/5)",
        lore: "Si repartim una truita de patates entre 3 persones o entre 5 persones, quan toca un tros més gran?",
        instruction: "Compara <strong>1/3</strong> (esquerra) amb <strong>1/5</strong> (dreta). Fixa't en la mida de cada porció al tauler i tria <strong>&lt;</strong>, <strong>=</strong> o <strong>&gt;</strong>!",
        type: "compare_two",
        defaultShape: "bar",
        leftNum: 1, leftDen: 3,
        rightNum: 1, rightDen: 5,
        lockFractions: false,
        correctSymbol: ">",
        hints: [
          "Atenció! Quan el numerador és igual (1 tros a cada banda), ens hem de fixar en la mida dels trossos.",
          "Partir en 3 parts dóna trossos MÉS GRANS que partir en 5 parts.",
          "Per tant, 1/3 és més gran que 1/5 (tria '>')."
        ]
      },
      {
        id: "comp_2_2",
        title: "Tres Quarts de Formatge contra Tres Vuitens",
        lore: "Compara dues compres de formatge amb el mateix numerador (3).",
        instruction: "Observa al tauler <strong>3/4</strong> (esquerra) i <strong>3/8</strong> (dreta) i selecciona el símbol de comparació correcte.",
        type: "compare_two",
        defaultShape: "circle",
        leftNum: 3, leftDen: 4,
        rightNum: 3, rightDen: 8,
        lockFractions: false,
        correctSymbol: ">",
        hints: [
          "En tots dos casos agafem 3 talls, però els quarts són el doble de grans que els vuitens!",
          "Mira com 3/4 passa de la meitat del formatge (75%) i 3/8 no arriba a la meitat (37,5%).",
          "Selecciona '>' perquè 3/4 > 3/8."
        ]
      },
      {
        id: "comp_2_3",
        title: "Dues Rajoles de Xocolata (2/6 vs 2/3)",
        lore: "No et deixis enganyar pel 6 del denominador!",
        instruction: "Compara <strong>2/6</strong> de rajola (esquerra) amb <strong>2/3</strong> de rajola (dreta) mirant les barres del tauler.",
        type: "compare_two",
        defaultShape: "bar",
        leftNum: 2, leftDen: 6,
        rightNum: 2, rightDen: 3,
        lockFractions: false,
        correctSymbol: "<",
        hints: [
          "Totes dues tenen numerador 2, però els sisens són trossos més petits que els terços.",
          "Visualment, 2/6 equival només a 1/3, que és menor que 2/3.",
          "Selecciona '<' (2/6 < 2/3)."
        ]
      },
      {
        id: "comp_2_4",
        title: "Safates de Fruita al Súper (4/5 vs 4/10)",
        lore: "Compara dues safates de kiwi del supermercat.",
        instruction: "Compara <strong>4/5</strong> (esquerra) amb <strong>4/10</strong> (dreta) i tria el símbol correcte.",
        type: "compare_two",
        defaultShape: "grid",
        leftNum: 4, leftDen: 5,
        rightNum: 4, rightDen: 10,
        lockFractions: false,
        correctSymbol: ">",
        hints: [
          "Com que el numerador és 4 a totes dues, la que té el denominador més petit (5) té porcions el doble de grans.",
          "4/5 equival a 8/10 (80%), que és el doble que 4/10 (40%).",
          "Selecciona '>' (4/5 > 4/10)."
        ]
      },
      {
        id: "comp_2_5",
        title: "Pastissos d'Aniversari (5/8 vs 5/6)",
        lore: "En quin dels dos pastissos s'ha menjat una fracció més gran?",
        instruction: "Compara <strong>5/8</strong> (esquerra) amb <strong>5/6</strong> (dreta).",
        type: "compare_two",
        defaultShape: "circle",
        leftNum: 5, leftDen: 8,
        rightNum: 5, rightDen: 6,
        lockFractions: false,
        correctSymbol: "<",
        hints: [
          "Els vuitens són més petits que els sisens.",
          "A 5/6 només li falta un sisè per completar el pastís, mentre que a 5/8 li falten tres vuitens.",
          "Selecciona '<' (5/8 < 5/6)."
        ]
      }
    ],
    3: [
      {
        id: "comp_3_1",
        title: "El Truc de la Meitat a la Compra (3/5 vs 2/6)",
        lore: "Quan comprem, comparar amb la meitat (1/2 = 50%) ens ajuda moltíssim!",
        instruction: "Compara <strong>3/5 de quilo</strong> (esquerra) amb <strong>2/6 de quilo</strong> (dreta) observant quina supera el mig quilo.",
        type: "compare_two",
        defaultShape: "bar",
        leftNum: 3, leftDen: 5,
        rightNum: 2, rightDen: 6,
        lockFractions: false,
        correctSymbol: ">",
        hints: [
          "Pensa en la meitat: la meitat de 5 és 2,5, així que 3/5 és MÉS de mig quilo (60%).",
          "En canvi, la meitat de 6 és 3, així que 2/6 és MENYS de mig quilo (33,3%).",
          "Per tant, 3/5 > 2/6 (selecciona '>')."
        ]
      },
      {
        id: "comp_3_2",
        title: "Envàs de Formatge en Quarts o en Vuitens (2/4 vs 4/8)",
        lore: "Mira amb atenció la quantitat de formatge dels dos envasos!",
        instruction: "Compara <strong>2/4</strong> (esquerra) amb <strong>4/8</strong> (dreta) i tria el símbol que les relaciona.",
        type: "compare_two",
        defaultShape: "circle",
        leftNum: 2, leftDen: 4,
        rightNum: 4, rightDen: 8,
        lockFractions: false,
        correctSymbol: "=",
        hints: [
          "2 de 4 parts és exactament la meitat del formatge (50%).",
          "4 de 8 parts també és exactament la meitat del formatge (50%)!",
          "Són fraccions equivalents! Selecciona '='."
        ]
      },
      {
        id: "comp_3_3",
        title: "Dos Terços contra Tres Quarts de Litre",
        lore: "Compara dues gerres de llet amb diferent numerador i denominador.",
        instruction: "Compara visualment <strong>2/3 de litre</strong> (esquerra) i <strong>3/4 de litre</strong> (dreta). Pots passar-les mentalment a dotzens (8/12 i 9/12)!",
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
        title: "Ous de Mitja Dotzena vs Dotzena (5/6 vs 7/12)",
        lore: "Transforma els sisens en dotzens per comparar les dues safates d'ous!",
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
        title: "Menys d'un Quilo vs Més d'un Quilo (7/8 vs 5/4)",
        lore: "Una bossa de taronges no arriba a 1 kg i l'altra supera 1 kg!",
        instruction: "Compara <strong>7/8 de kg</strong> (esquerra) amb <strong>5/4 de kg</strong> (dreta).",
        type: "compare_two",
        defaultShape: "bar",
        leftNum: 7, leftDen: 8,
        rightNum: 5, rightDen: 4,
        maxUnits: 2,
        lockFractions: false,
        correctSymbol: "<",
        hints: [
          "7/8 és una fracció pròpia (menys d'1 quilo sencer).",
          "5/4 és una fracció impròpia (més d'1 quilo sencer: 1 kg i quart).",
          "Qualsevol fracció menor que 1 és més petita que una fracció major que 1! Tria '<'."
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------------
     MÒDUL 3: EQUIVALÈNCIES VISUALS
     ------------------------------------------------------------------------ */
  equivalencia: {
    1: [
      {
        id: "eq_1_1",
        title: "Mitja Pizza en Quarts (1/2 = ?/4)",
        lore: "Dues pizzes tenen la mateixa mida, però una s'ha tallat en 2 meitats i l'altra en 4 quarts.",
        instruction: "A l'esquerra tens <strong>1/2 pizza</strong>. A la pizza de la dreta (tallada en <strong>4 parts</strong>), fes clic als talls necessaris per tenir la mateixa quantitat i escriu la fracció equivalent amb denominador <strong>4</strong>.",
        type: "equivalence_mirror",
        defaultShape: "circle",
        baseNum: 1, baseDen: 2,
        initRightNum: 0, initRightDen: 4,
        targetDen: 4,
        targetNum: 2,
        hints: [
          "Mira la meitat seleccionada a la pizza de l'esquerra (1/2).",
          "Quants quarts (de la pizza de 4 talls de la dreta) necessites agafar per tenir exactament mitja pizza?",
          "Selecciona 2 quarts i escriu 2/4 a la casella de resposta!"
        ]
      },
      {
        id: "eq_1_2",
        title: "La Rajola de Xocolata (1/3 = ?/6)",
        lore: "Cada terç de la rajola està dividit en dues preses més petites.",
        instruction: "A l'esquerra tens <strong>1/3 de rajola</strong>. A la barra de la dreta (dividida en <strong>6 parts</strong>), selecciona les peces necessàries perquè ocupin el mateix que <strong>1/3</strong> i escriu la fracció equivalent.",
        type: "equivalence_mirror",
        defaultShape: "bar",
        baseNum: 1, baseDen: 3,
        initRightNum: 0, initRightDen: 6,
        targetDen: 6,
        targetNum: 2,
        hints: [
          "Si la rajola té 6 trossos en lloc de 3 (el doble de parts), necessitaràs agafar el doble de trossos.",
          "Selecciona 2 peces de la barra de 6 parts i veuràs que totes dues barres tenen un 33,3%.",
          "Escriu 2/6 a la casella simbòlica."
        ]
      },
      {
        id: "eq_1_3",
        title: "Dos Terços de Pa de Pessic en Sisens (2/3 = ?/6)",
        lore: "Reparteix la mateixa quantitat de pa de pessic en talls més petits.",
        instruction: "Troba i representa a la dreta la fracció equivalent a <strong>2/3</strong> que tingui denominador <strong>6</strong>.",
        type: "equivalence_mirror",
        defaultShape: "bar",
        baseNum: 2, baseDen: 3,
        initRightNum: 1, initRightDen: 6,
        targetDen: 6,
        targetNum: 4,
        hints: [
          "Per passar de denominador 3 a denominador 6 hem multiplicat per 2.",
          "Selecciona 4 sisens a la dreta per igualar l'amplada de 2/3.",
          "Escriu la fracció 4/6."
        ]
      },
      {
        id: "eq_1_4",
        title: "Tres Quarts d'Empanada en Vuitens (3/4 = ?/8)",
        lore: "Al forn tallen cada quart d'empanada per la meitat.",
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
          "Selecciona 6 porcions a la figura de la dreta i escriu 6/8."
        ]
      },
      {
        id: "eq_1_5",
        title: "Packs de 5 i de 10 Iogurts (2/5 = ?/10)",
        lore: "Compara el pack petit de 5 unitats amb el pack familiar de 10 unitats.",
        instruction: "Troba la fracció equivalent a <strong>2/5</strong> amb denominador <strong>10</strong> seleccionant les unitats del panell dret.",
        type: "equivalence_mirror",
        defaultShape: "grid",
        baseNum: 2, baseDen: 5,
        initRightNum: 0, initRightDen: 10,
        targetDen: 10,
        targetNum: 4,
        hints: [
          "2 cinquens són el 40% del pack.",
          "En un pack de 10 unitats, el 40% són 4 unitats.",
          "Selecciona 4 caselles i escriu 4/10."
        ]
      }
    ],
    2: [
      {
        id: "eq_2_1",
        title: "Pastís Tallat en 9 Porcions (2/3 = ?/9)",
        lore: "Aquesta vegada tu també has d'ajustar el nombre de talls de la figura dreta!",
        instruction: "A l'esquerra tens <strong>2/3 de pastís</strong>. A la figura de la dreta, ajusta el denominador a <strong>9 parts</strong>, selecciona les porcions equivalents i escriu la fracció resultant.",
        type: "equivalence_mirror",
        defaultShape: "circle",
        baseNum: 2, baseDen: 3,
        initRightNum: 0, initRightDen: 3,
        targetDen: 9,
        targetNum: 6,
        hints: [
          "Primer puja les 'Parts/unitat (Denominador)' del panell dret fins a 9.",
          "Com que 9 és el triple de 3 (3 × 3 = 9), el numerador també serà el triple: 2 × 3 = 6.",
          "Selecciona 6 novens i escriu 6/9."
        ]
      },
      {
        id: "eq_2_2",
        title: "De 4 Caixes a la Dotzena (3/4 = ?/12)",
        lore: "Al supermercat agrupen els productes en caixes de 12 unitats.",
        instruction: "Divideix la safata de la dreta en <strong>12 parts</strong> i selecciona la fracció equivalent a <strong>3/4</strong>.",
        type: "equivalence_mirror",
        defaultShape: "grid",
        baseNum: 3, baseDen: 4,
        initRightNum: 0, initRightDen: 4,
        targetDen: 12,
        targetNum: 9,
        hints: [
          "Ajusta les parts per unitat de la dreta a 12.",
          "Per passar de 4 a 12 multipliquem per 3. Multiplica també el numerador: 3 × 3 = 9.",
          "Selecciona 9 caselles de 12 i escriu 9/12."
        ]
      },
      {
        id: "eq_2_3",
        title: "Agrupant Porcions: De Sisens a Terços (4/6 = ?/3)",
        lore: "També podem fer el camí invers: menys paquets però més grans!",
        instruction: "A l'esquerra tens <strong>4/6 de barra</strong>. Ajusta la figura de la dreta a <strong>3 parts (terços)</strong> i selecciona la fracció equivalent.",
        type: "equivalence_mirror",
        defaultShape: "bar",
        baseNum: 4, baseDen: 6,
        initRightNum: 0, initRightDen: 6,
        targetDen: 3,
        targetNum: 2,
        hints: [
          "Redueix el denominador de la figura dreta a 3 parts.",
          "Si dividim el nombre de parts entre 2 (6 ÷ 2 = 3), agrupem les peces de dues en dues: 4 ÷ 2 = 2.",
          "Selecciona 2 terços i escriu 2/3."
        ]
      },
      {
        id: "eq_2_4",
        title: "De Grams a Cinquens de Quilo (6/10 = ?/5)",
        lore: "600 grams són 6/10 de quilo. Quants cinquens de quilo són?",
        instruction: "Troba i representa al panell dret la fracció amb denominador <strong>5</strong> que és equivalent a <strong>6/10</strong>.",
        type: "equivalence_mirror",
        defaultShape: "line",
        baseNum: 6, baseDen: 10,
        initRightNum: 0, initRightDen: 10,
        targetDen: 5,
        targetNum: 3,
        hints: [
          "Canvia les divisions de la dreta de 10 a 5.",
          "6/10 ocupa el 60% del quilo. En quants cinquens tens també el 60%?",
          "En 3 cinquens! Selecciona 3/5 i escriu-ho."
        ]
      },
      {
        id: "eq_2_5",
        title: "Mitja Dotzena d'Ous (1/2 = ?/12)",
        lore: "Quan demanem mitja dotzena d'ous al mercat, quants ous d'una caixa de 12 són?",
        instruction: "Representa a la dreta quants dotzens (denominador <strong>12</strong>) equivalen a <strong>1/2</strong>.",
        type: "equivalence_mirror",
        defaultShape: "grid",
        baseNum: 1, baseDen: 2,
        initRightNum: 0, initRightDen: 6,
        targetDen: 12,
        targetNum: 6,
        hints: [
          "Posa 12 parts al panell dret.",
          "La meitat de 12 és 6 (mitja dotzena són 6 ous).",
          "Selecciona 6 ous de 12 i escriu 6/12."
        ]
      }
    ],
    3: [
      {
        id: "eq_3_1",
        title: "Equivalència al Supermercat (6/8 = ?/12)",
        lore: "Passa per la fracció irreductible (3/4) per descobrir quants dotzens equivalen a 6/8!",
        instruction: "A l'esquerra tens <strong>6/8</strong> (el 75%). Troba i representa a la dreta la fracció equivalent que té denominador <strong>12</strong>!",
        type: "equivalence_mirror",
        defaultShape: "bar",
        baseNum: 6, baseDen: 8,
        initRightNum: 0, initRightDen: 12,
        targetDen: 12,
        targetNum: 9,
        hints: [
          "Observa que 6/8 simplificat entre 2 és 3/4 (el 75% de l'envàs).",
          "Ara transforma 3/4 a dotzens multiplicant per 3: 3 × 3 = 9 i 4 × 3 = 12.",
          "Selecciona 9 peces de 12 i escriu 9/12!"
        ]
      },
      {
        id: "eq_3_2",
        title: "Repartiment Equitatiu de Pastís (4/6 = ?/9)",
        lore: "Fes que tots dos pastissos tinguin exactament la mateixa porció seleccionada.",
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
          "Selecciona 6 talls de 9 i escriu 6/9."
        ]
      },
      {
        id: "eq_3_3",
        title: "Un Litre i Mig en Quarts de Litre (3/2 = ?/4)",
        lore: "Les ampolles d'1 litre i mig (3/2 L) també es poden mesurar en gots d'1/4 de litre!",
        instruction: "A l'esquerra tens <strong>3/2</strong> (1 unitat i mitja). A la dreta, amb les unitats dividides en <strong>4 parts (quarts)</strong>, selecciona els quarts equivalents i escriu la fracció amb denominador <strong>4</strong>.",
        type: "equivalence_mirror",
        defaultShape: "bar",
        baseNum: 3, baseDen: 2,
        initRightNum: 0, initRightDen: 4,
        maxUnits: 2,
        targetDen: 4,
        targetNum: 6,
        hints: [
          "Cada mig litre (1/2) equival a 2 quarts de litre (2/4).",
          "Com que tenim 3 meitats, en quarts seran 3 × 2 = 6 quarts.",
          "Selecciona 6 quarts (1 unitat sencera de 4/4 + 2/4 més) i escriu 6/4."
        ]
      },
      {
        id: "eq_3_4",
        title: "De Caixa de 12 a Pack de 3 (8/12 = ?/3)",
        lore: "Agrupa les 12 unitats de 4 en 4 per obtenir terços.",
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
          "Selecciona 2 terços i escriu 2/3."
        ]
      },
      {
        id: "eq_3_5",
        title: "De Mitja Dotzena a Dotzena Sencera (5/6 = ?/12)",
        lore: "Últim repte d'equivalències visuals al supermercat!",
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
          "Selecciona 10 unitats de 12 i escriu 10/12."
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------------
     MÒDUL 4: TRANSFORMACIÓ (AMPLIFICAR, SIMPLIFICAR I NOMBRES MIXTOS)
     ------------------------------------------------------------------------ */
  transformacio: {
    1: [
      {
        id: "tr_1_1",
        title: "Partir Porcions per la Meitat (Amplificar × 2)",
        lore: "Al forn parteixen cada terç d'empanada en 2 trossos iguals per fer porcions més petites.",
        instruction: "Amplifica la fracció <strong>2/3 multiplicant per 2</strong> (prem el botó <strong>⚡ Amplifica ×2</strong> al tauler per veure com es transforma) i escriu la fracció resultant.",
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
        title: "Amplificació Triple al Formatge (× 3)",
        lore: "Talla cada quart de formatge en 3 falques iguals.",
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
        title: "Del Pack de 5 al Pack de 10 (× 2)",
        lore: "Converteix els cinquens en desens duplicant les parts.",
        instruction: "Amplifica <strong>3/5 per 2 (× 2)</strong> utilitzant el botó del tauler i escriu la fracció transformada.",
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
        title: "Amplificació per 4 a la Rajola (1/3 × 4)",
        lore: "Cada fila d'1/3 de xocolata té 4 quadradets petits.",
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
        title: "De Quarts a Vuitens de Pizza (3/4 × 2)",
        lore: "Talla els quarts per la meitat perquè hi hagi talls per a tothom.",
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
        title: "Simplifica 4/8 de Pizza",
        lore: "Simplificar consisteix a dividir numerador i denominador pel mateix nombre fins a la fracció irreductible!",
        instruction: "Simplifica <strong>4/8</strong> fins a obtenir la seva <strong>fracció irreductible</strong> utilitzant els botons <strong>🗡️ Simplifica</strong> i escriu-la.",
        type: "alchemy_transform",
        defaultShape: "circle",
        baseNum: 4, baseDen: 8,
        initRightNum: 4, initRightDen: 8,
        targetNum: 1, targetDen: 2,
        requireExactParts: true,
        hints: [
          "4 i 8 es poden dividir tots dos entre 4 (o dues vegades entre 2).",
          "Prem '🗡️ Simplifica ÷4' (o '÷2' dues vegades) per agrupar els talls.",
          "4 ÷ 4 = 1 i 8 ÷ 4 = 2. La fracció irreductible és 1/2 (mitja pizza)!"
        ]
      },
      {
        id: "tr_2_2",
        title: "Simplificació entre 3 (6/9)",
        lore: "Expressa 6/9 d'una barra de torró amb els números més senzills possibles.",
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
        title: "Simplificant la Dotzena d'Ous (8/12)",
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
        title: "500 Grams és Mig Quilo (5/10)",
        lore: "500 g són 5/10 de quilo. Simplifica-ho!",
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
        title: "Simplifica 9/12 de Pastís",
        lore: "Simplifica 9/12 per descobrir quants quarts de pastís són.",
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
        title: "De Fracció Impròpia a Nombre Mixt (7/4 de Pizza)",
        lore: "Converteix els 7 quarts de pizza en pizzes senceres i la fracció sobrant!",
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
          "Observa les pizzes de 4 talls: amb 7 quarts s'omple 1 pizza sencera (4/4 = 1).",
          "Quants quarts queden seleccionats a la segona pizza? 7 - 4 = 3 quarts.",
          "Escriu 1 a la casella gran d'unitats senceres, i 3/4 a la fracció (1 i 3/4)."
        ]
      },
      {
        id: "tr_3_2",
        title: "Transforma 8/3 de Xocolata en Nombre Mixt",
        lore: "Quantes rajoles senceres de 3 terços podem formar amb 8 terços?",
        instruction: "Observa <strong>8/3</strong> (8 parts en barres de 3 divisions) i escriu el seu <strong>Nombre Mixt</strong> (unitats senceres + fracció).",
        type: "mixed_conversion",
        defaultShape: "bar",
        initNum: 8, initDen: 3,
        maxUnits: 3,
        lockedBoard: false,
        targetWhole: 2,
        targetNum: 2,
        targetDen: 3,
        hints: [
          "Cada barra sencera té 3 terços. Amb 8 terços omplim 2 barres senceres (6/3 = 2).",
          "A la tercera barra queden 8 - 6 = 2 terços.",
          "Escriu 2 unitats senceres i 2/3."
        ]
      },
      {
        id: "tr_3_3",
        title: "De Nombre Mixt (2 i 1/4) a Fracció Impròpia",
        lore: "Has comprat 2 formatges sencers i 1/4 de formatge més. Quants quarts tens en total?",
        instruction: "Transforma el nombre mixt <strong>2 i 1/4</strong> en una sola <strong>fracció impròpia</strong>: selecciona les peces corresponents al tauler i escriu el numerador i denominador totals.",
        type: "build_and_write",
        defaultShape: "circle",
        initNum: 5, initDen: 4,
        maxUnits: 3,
        targetNum: 9,
        targetDen: 4,
        requireExactParts: true,
        hints: [
          "2 formatges sencers dividits en quarts són 2 × 4 = 8 quarts.",
          "Si hi sumem el quart addicional (1/4), tenim 8 + 1 = 9 quarts.",
          "Selecciona 9 porcions de quart al tauler i escriu 9/4."
        ]
      },
      {
        id: "tr_3_4",
        title: "Simplificació d'una Fracció Impròpia (6/4 kg)",
        lore: "Has comprat 6 paquets d'1/4 kg de cafè (6/4 kg). Simplifica aquesta fracció!",
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
          "Escriu la fracció irreductible 3/2 (1 quilo i mig)."
        ]
      },
      {
        id: "tr_3_5",
        title: "Reducció a Denominador Comú (2/3 a dotzens)",
        lore: "Per comparar una recepta que demana 2/3 de tassa i 1/4 de tassa, les passem a dotzens!",
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
     MÒDUL 5: PROBLEMES AL SUPERMERCAT I SITUACIONS QUOTIDIANES
     ------------------------------------------------------------------------ */
  problemes: {
    1: [
      {
        id: "prob_1_1",
        title: "Sopar de Pizza a Casa",
        lore: "Divendres a la nit compartiu una pizza familiar a casa.",
        instruction: "Una pizza s'ha tallat en <strong>8 porcions iguals</strong>. El teu germà se n'ha menjat <strong>3 porcions</strong> i tu te n'has menjat <strong>2 porcions</strong>. <strong>Quina fracció de la pizza us heu menjat en total?</strong> Representa-la al tauler i escriu la fracció.",
        type: "problem_fraction",
        defaultShape: "circle",
        initNum: 0, initDen: 8,
        maxUnits: 1,
        targetNum: 5, targetDen: 8,
        requireExactParts: false,
        hints: [
          "Dades: la pizza té 8 parts iguals (denominador = 8). S'han menjat 3/8 i 2/8.",
          "Representació: selecciona 3 porcions a la pizza de 8 talls i després selecciona'n 2 més.",
          "Operació: 3/8 + 2/8 = 5/8. Escriu 5 al numerador i 8 al denominador."
        ]
      },
      {
        id: "prob_1_2",
        title: "El Brik de Llet per Esmorzar",
        lore: "Prepares l'esmorzar a la cuina abans d'anar a l'escola.",
        instruction: "Tenies un brik de llet ple (<strong>6/6</strong>). N'has fet servir <strong>4/6</strong> per preparar batuts i cafè amb llet. <strong>Quina fracció del brik de llet queda encara a la nevera?</strong> Representa-la al tauler i escriu-la.",
        type: "problem_fraction",
        defaultShape: "bar",
        initNum: 6, initDen: 6,
        maxUnits: 1,
        targetNum: 2, targetDen: 6,
        requireExactParts: false,
        hints: [
          "Dades: comences amb el brik ple (6/6) i en gastes 4/6.",
          "Representació: a la barra de 6 parts plenes, fes clic a 4 peces per treure les que has gastat.",
          "Operació: 6/6 - 4/6 = 2/6 (o la seva equivalent simplificada 1/3)."
        ]
      },
      {
        id: "prob_1_3",
        title: "Pagant al Supermercat (Fracció d'una quantitat)",
        lore: "Vas al supermercat amb un bitllet de 20 euros.",
        instruction: "Portes <strong>20 €</strong> a la cartera i et gastes les <strong>3/4 parts</strong> comprant fruita i verdura. <strong>Quants euros t'has gastat?</strong> (Pots ajudar-te amb el botó de repartir al tauler i escriure el nombre exacte d'euros).",
        type: "problem_number",
        defaultShape: "bar",
        initNum: 3, initDen: 4,
        totalQuantity: 20,
        unitLabel: "euros (€)",
        targetNumber: 15,
        suggestedNum: 3, suggestedDen: 4,
        hints: [
          "Per calcular 3/4 de 20 €, primer dividim els 20 € en 4 parts iguals (denominador).",
          "Cada quart (1/4) són 20 ÷ 4 = 5 €.",
          "Com que en gastem 3 quarts (numerador = 3), multipliquem: 3 × 5 = 15 €!"
        ]
      },
      {
        id: "prob_1_4",
        title: "La Safata de 10 Croissants del Forn",
        lore: "Al forn del barri han preparat una safata de 10 croissants.",
        instruction: "D'una safata de <strong>10 croissants iguals</strong>, a primera hora se n'han venut <strong>4/10</strong> i a mig matí se n'han venut <strong>3/10</strong> més. <strong>Quina fracció de la safata queda encara per vendre?</strong>",
        type: "problem_fraction",
        defaultShape: "grid",
        initNum: 0, initDen: 10,
        maxUnits: 1,
        targetNum: 3, targetDen: 10,
        requireExactParts: false,
        hints: [
          "Atenció a la pregunta: demana quina fracció QUEDA per vendre!",
          "Ja s'han venut 4/10 + 3/10 = 7/10 de la safata.",
          "Si el total és 10/10, queden per vendre 10/10 - 7/10 = 3/10."
        ]
      },
      {
        id: "prob_1_5",
        title: "La Bossa de 15 Taronges",
        lore: "Compres una malla de 15 taronges a la fruiteria.",
        instruction: "D'una bossa de <strong>15 taronges</strong>, n'utilitzes les <strong>2/5 parts</strong> per fer suc natural. <strong>Quantes taronges has utilitzat per al suc?</strong>",
        type: "problem_number",
        defaultShape: "bar",
        initNum: 2, initDen: 5,
        totalQuantity: 15,
        unitLabel: "taronges",
        targetNumber: 6,
        suggestedNum: 2, suggestedDen: 5,
        hints: [
          "Hem de calcular 2/5 de 15 taronges. Divideix 15 en 5 grups iguals (denominador = 5).",
          "15 ÷ 5 = 3 taronges a cada cinquè (1/5).",
          "Com que n'usem 2/5 per al suc, 2 × 3 = 6 taronges!"
        ]
      }
    ],
    2: [
      {
        id: "prob_2_1",
        title: "La Bossa de la Fruiteria (Suma amb Equivalència)",
        lore: "Peses dues bosses de fruita amb denominadors diferents!",
        instruction: "Al supermercat compres <strong>1/2 quilo</strong> de pomes i <strong>1/4 de quilo</strong> de maduixes. <strong>Quina fracció de quilo pesa la fruita en total?</strong> (Transforma 1/2 a quarts al tauler per sumar-los!).",
        type: "problem_fraction",
        defaultShape: "bar",
        initNum: 1, initDen: 4,
        maxUnits: 1,
        targetNum: 3, targetDen: 4,
        requireExactParts: false,
        hints: [
          "No podem sumar directament meitats (1/2) i quarts (1/4) sense tenir parts de la mateixa mida.",
          "Recorda que 1/2 kg és equivalent a 2/4 kg!",
          "Si sumem 2/4 + 1/4 obtenim 3/4 de quilo en total."
        ]
      },
      {
        id: "prob_2_2",
        title: "La Capsa de 24 Retoladors a la Papereria",
        lore: "Revises el material escolar a l'aula de 6è.",
        instruction: "Una capsa té <strong>24 retoladors</strong>. Les <strong>5/6 parts</strong> dels retoladors pinten perfecte i la resta s'han assecat. <strong>Quants retoladors pinten perfecte?</strong>",
        type: "problem_number",
        defaultShape: "grid",
        initNum: 5, initDen: 6,
        totalQuantity: 24,
        unitLabel: "retoladors",
        targetNumber: 20,
        suggestedNum: 5, suggestedDen: 6,
        hints: [
          "Calcula 5/6 de 24 retoladors: divideix els 24 retoladors en 6 grups iguals.",
          "Cada sisè (1/6) equival a 24 ÷ 6 = 4 retoladors.",
          "5 sisens són 5 × 4 = 20 retoladors."
        ]
      },
      {
        id: "prob_2_3",
        title: "Descompte a la Botiga d'Esports (El que falta pagar!)",
        lore: "Llegeix molt bé la pregunta per saber si et demanen l'estalvi o el preu final!",
        instruction: "Una motxilla val <strong>30 €</strong>. Per ser client del barri et fan una rebaixa i ja n'has pagat les <strong>3/5 parts</strong>. <strong>Quants euros FALTEN encara per acabar-la de pagar?</strong>",
        type: "problem_number",
        defaultShape: "line",
        initNum: 2, initDen: 5,
        totalQuantity: 30,
        unitLabel: "euros que falten",
        targetNumber: 12,
        suggestedNum: 2, suggestedDen: 5,
        hints: [
          "Si ja has pagat 3/5 del preu, vol dir que et FALTEN per pagar 2/5 del preu!",
          "1/5 de 30 € són 30 ÷ 5 = 6 €.",
          "Els 2/5 que falten són 2 × 6 = 12 € (o bé 30 € - 18 € = 12 €)."
        ]
      },
      {
        id: "prob_2_4",
        title: "Recepta de Batut de Fruites",
        lore: "En una gerra barreges suc de taronja i suc de préssec.",
        instruction: "En una gerra d'1 litre hi poses <strong>1/3 de litre</strong> de suc de taronja i <strong>2/6 de litre</strong> de suc de préssec. <strong>Quina fracció de la gerra has omplert en total?</strong> (Pots expressar-la en sisens o simplificada en terços).",
        type: "problem_fraction",
        defaultShape: "circle",
        initNum: 0, initDen: 6,
        maxUnits: 1,
        targetNum: 2, targetDen: 3,
        requireExactParts: false,
        hints: [
          "Transforma 1/3 a sisens: 1/3 és equivalent a 2/6.",
          "Ara suma els dos sucs: 2/6 + 2/6 = 4/6 de litre.",
          "Pots escriure 4/6 o la seva fracció irreductible 2/3 (totes dues es donen per bones!)."
        ]
      },
      {
        id: "prob_2_5",
        title: "Les 36 Ampolles d'Aigua per a l'Excursió",
        lore: "Les classes de 6è compren aigua al supermercat per a la sortida escolar.",
        instruction: "D'un pack de <strong>36 ampolles d'aigua</strong>, la classe de 6è A n'agafa <strong>1/3</strong> i la classe de 6è B n'agafa <strong>1/4</strong>. <strong>Quantes ampolles han agafat en total entre totes dues classes?</strong>",
        type: "problem_number",
        defaultShape: "grid",
        initNum: 7, initDen: 12,
        totalQuantity: 36,
        unitLabel: "ampolles en total",
        targetNumber: 21,
        suggestedNum: 7, suggestedDen: 12,
        hints: [
          "Calcula primer les ampolles de 6è A: 1/3 de 36 = 36 ÷ 3 = 12 ampolles.",
          "Calcula ara les ampolles de 6è B: 1/4 de 36 = 36 ÷ 4 = 9 ampolles.",
          "Suma-les: 12 + 9 = 21 ampolles en total!"
        ]
      }
    ],
    3: [
      {
        id: "prob_3_1",
        title: "Entrepans per a l'Equip de Bàsquet (Més d'una unitat!)",
        lore: "Prepareu el berenar per a 3 grups de jugadors del club esportiu.",
        instruction: "Cada grup de jugadors es menja <strong>3/4 de barra de pa</strong>. Si hi ha <strong>3 grups</strong>, <strong>quina fracció impròpia de barres de pa necessiten en total?</strong> Representa-la al tauler i escriu la fracció.",
        type: "problem_fraction",
        defaultShape: "bar",
        initNum: 3, initDen: 4,
        maxUnits: 3,
        targetNum: 9, targetDen: 4,
        requireExactParts: false,
        hints: [
          "Són 3 grups i cada grup menja 3/4: hem de sumar 3/4 + 3/4 + 3/4 (o fer 3 × 3/4).",
          "Selecciona 9 quarts en total repartits en les 3 barres del tauler (2 barres senceres i 1/4).",
          "Escriu la fracció impròpia 9/4."
        ]
      },
      {
        id: "prob_3_2",
        title: "El Pressupost de 60 € al Supermercat",
        lore: "Una família fa la compra setmanal amb un pressupost de 60 euros.",
        instruction: "Tens <strong>60 €</strong> per fer la compra. Et gastes <strong>1/3</strong> dels 60 € en peix i carn, i <strong>2/5</strong> dels mateixos 60 € en fruita i verdura. <strong>Quants euros et sobren encara al moneder?</strong>",
        type: "problem_number",
        defaultShape: "grid",
        initNum: 4, initDen: 12,
        totalQuantity: 60,
        unitLabel: "euros sobrants (€)",
        targetNumber: 16,
        suggestedNum: 4, suggestedDen: 12,
        hints: [
          "Peix i carn: 1/3 de 60 € = 60 ÷ 3 = 20 €.",
          "Fruita i verdura: 2/5 de 60 € = (60 ÷ 5) × 2 = 12 × 2 = 24 €.",
          "En total has gastat 20 + 24 = 44 €. Et sobren 60 - 44 = 16 €!"
        ]
      },
      {
        id: "prob_3_3",
        title: "Cistella de Fruita Variada (Denominador 12)",
        lore: "Suma fraccions amb diferent denominador transformant-les a dotzens.",
        instruction: "En una cistella del mercat, <strong>1/3</strong> del pes són pomes, <strong>1/4</strong> són peres i la resta són plàtans. <strong>Quina fracció de la cistella són plàtans?</strong> (Transforma a denominador <strong>12</strong>!).",
        type: "problem_fraction",
        defaultShape: "grid",
        initNum: 0, initDen: 12,
        maxUnits: 1,
        targetNum: 5, targetDen: 12,
        requireExactParts: false,
        hints: [
          "Passa 1/3 i 1/4 a dotzens: 1/3 = 4/12 (pomes) i 1/4 = 3/12 (peres).",
          "Entre pomes i peres sumen 4/12 + 3/12 = 7/12 de la cistella.",
          "Fins a completar tota la cistella (12/12), els plàtans són 12/12 - 7/12 = 5/12!"
        ]
      },
      {
        id: "prob_3_4",
        title: "Omplint Pots de Melmelada Casolana",
        lore: "Reparteix una fracció impròpia en pots petits d'1/4 de quilo.",
        instruction: "Has cuinat <strong>2 quilos i mig (5/2 kg)</strong> de melmelada de maduixa i la vols envasar en pots petits d'<strong>1/4 de quilo</strong> cadascun. <strong>Quants pots d'1/4 kg podràs omplir?</strong>",
        type: "problem_number",
        defaultShape: "bar",
        initNum: 10, initDen: 4,
        maxUnits: 3,
        totalQuantity: 10,
        unitLabel: "pots d'1/4 kg",
        targetNumber: 10,
        suggestedNum: 10, suggestedDen: 4,
        hints: [
          "Cada quilo sencer té 4 quarts (4 pots d'1/4 kg).",
          "2 quilos sencers són 2 × 4 = 8 pots, i mig quilo (1/2) són 2 pots més.",
          "En total, 5/2 equival a 10/4, així que ompliràs 10 pots!"
        ]
      },
      {
        id: "prob_3_5",
        title: "Les 48 Magdalenes de la Festa de l'Escola",
        lore: "Últim gran repte de 6è de Primària a la fira gastronòmica de l'escola!",
        instruction: "A la parada de 6è heu portat <strong>48 magdalenes</strong>. Al matí se n'han venut les <strong>3/8 parts</strong> i a la tarda se n'ha venut <strong>1/4 part</strong> més del total. <strong>Quantes magdalenes s'han venut en total en tot el dia?</strong>",
        type: "problem_number",
        defaultShape: "circle",
        initNum: 5, initDen: 8,
        totalQuantity: 48,
        unitLabel: "magdalenes venudes",
        targetNumber: 30,
        suggestedNum: 5, suggestedDen: 8,
        hints: [
          "Al matí: 3/8 de 48 = (48 ÷ 8) × 3 = 6 × 3 = 18 magdalenes.",
          "A la tarda: 1/4 de 48 = 48 ÷ 4 = 12 magdalenes (o bé suma 3/8 + 2/8 = 5/8 de 48).",
          "En total s'han venut 18 + 12 = 30 magdalenes!"
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------------
     MÒDUL 6 (FORA DE LES FRACCIONS): RESOLUCIÓ DE PROBLEMES D'OPERACIONS
     (Sumes, restes, multiplicacions, divisions i operacions combinades)
     ------------------------------------------------------------------------ */
  resolucio_problemes: {
    1: [
      {
        id: "rp_1_1",
        title: "El Canvi a la Caixa del Supermercat",
        lore: "Vas a comprar amb un bitllet de 50 € i pagues dos productes.",
        instruction: "Al supermercat compres un sac de pinso per al gos que val <strong>18 €</strong> i una capsa de detergent que val <strong>14 €</strong>. Si pagues amb un bitllet de <strong>50 €</strong>, <strong>quants euros et tornaran de canvi?</strong>",
        type: "general_problem",
        unitLabel: "euros (€) de canvi",
        targetNumber: 18,
        barModel: {
          totalLabel: "Bitllet entregat: 50 €",
          parts: [
            { label: "Pinso: 18 €", value: 18, color: "#4F46E5" },
            { label: "Detergent: 14 €", value: 14, color: "#0D9488" },
            { label: "Canvi: ? €", value: 18, color: "#F59E0B", isUnknown: true }
          ]
        },
        suggestedBlocks: [18, 14],
        hints: [
          "1r pas (Dades): Gastes 18 € en pinso i 14 € en detergent, i pagues amb 50 €.",
          "2n pas (Operació 1 - Suma la despesa): 18 + 14 = 32 € gastats en total.",
          "3r pas (Operació 2 - Resta per trobar el canvi): 50 - 32 = 18 € de canvi!"
        ]
      },
      {
        id: "rp_1_2",
        title: "Els Packs d'Ampolles d'Aigua",
        lore: "Comprem aigua per a la festa esportiva de l'escola.",
        instruction: "Al carretó del supermercat poses <strong>6 packs</strong> d'aigua amb <strong>6 ampolles a cada pack</strong>, i a més agafes <strong>5 ampolles soltes</strong>. <strong>Quantes ampolles d'aigua portes en total?</strong>",
        type: "general_problem",
        unitLabel: "ampolles en total",
        targetNumber: 41,
        barModel: {
          totalLabel: "Total d'ampolles: ? ampolles",
          parts: [
            { label: "6 packs × 6 = 36", value: 36, color: "#2563EB" },
            { label: "5 soltes", value: 5, color: "#10B981" }
          ]
        },
        suggestedBlocks: [6, 6, 6, 6, 6, 6, 5],
        hints: [
          "1r pas (Dades): Tens 6 packs iguals de 6 ampolles cadascun, més 5 ampolles soltes.",
          "2n pas (Multiplicació): Calcula les ampolles dels packs: 6 × 6 = 36 ampolles.",
          "3r pas (Suma): Afegeix les 5 ampolles soltes: 36 + 5 = 41 ampolles en total!"
        ]
      },
      {
        id: "rp_1_3",
        title: "Entrades per al Cinema del Barri",
        lore: "Un grup d'amics va al cinema dissabte a la tarda.",
        instruction: "Una colla de <strong>8 amics</strong> compra les entrades del cinema. En total paguen <strong>72 €</strong> per totes les entrades, que tenen el mateix preu. <strong>Quants euros costa cada entrada?</strong>",
        type: "general_problem",
        unitLabel: "euros (€) cada entrada",
        targetNumber: 9,
        barModel: {
          totalLabel: "Preu total: 72 € repartits en 8 entrades iguals",
          parts: [
            { label: "? €", value: 9, color: "#7C3AED", isUnknown: true },
            { label: "× 8 entrades iguals", value: 63, color: "#CBD5E1" }
          ]
        },
        suggestedBlocks: [9, 9, 9, 9, 9, 9, 9, 9],
        hints: [
          "1r pas (Dades): El total és 72 € i s'ha de repartir en 8 parts iguals.",
          "2n pas (Estratègia): Quan repartim un total en parts iguals, fem una divisió.",
          "3r pas (Divisió): 72 ÷ 8 = 9 € costa cada entrada!"
        ]
      },
      {
        id: "rp_1_4",
        title: "Places Lliures a l'Autocar de 6è",
        lore: "Sortida escolar al Museu de la Ciència.",
        instruction: "Un autocar té <strong>60 seients</strong>. Hi pugen <strong>23 alumnes</strong> de 6è A, <strong>25 alumnes</strong> de 6è B i <strong>3 mestres</strong>. <strong>Quants seients queden buits a l'autocar?</strong>",
        type: "general_problem",
        unitLabel: "seients buits",
        targetNumber: 9,
        barModel: {
          totalLabel: "Total autocar: 60 seients",
          parts: [
            { label: "6è A: 23", value: 23, color: "#4F46E5" },
            { label: "6è B: 25", value: 25, color: "#0D9488" },
            { label: "Mestres: 3", value: 3, color: "#D97706" },
            { label: "Buits: ?", value: 9, color: "#F59E0B", isUnknown: true }
          ]
        },
        suggestedBlocks: [23, 25, 3],
        hints: [
          "1r pas: Calcula primer quantes persones han pujat en total a l'autocar.",
          "2n pas (Suma): 23 + 25 + 3 = 51 persones ocupen seient.",
          "3r pas (Resta): 60 seients totals - 51 ocupats = 9 seients buits!"
        ]
      },
      {
        id: "rp_1_5",
        title: "Envasant Galetes al Forn",
        lore: "Al forn del carrer major acaben de treure una fornada de galetes d'avena.",
        instruction: "El forner ha fet <strong>96 galetes</strong> i les vol guardar en caixes de <strong>8 galetes</strong> cadascuna. <strong>Quantes caixes podrà omplir completament?</strong>",
        type: "general_problem",
        unitLabel: "caixes de galetes",
        targetNumber: 12,
        barModel: {
          totalLabel: "Total: 96 galetes agrupades de 8 en 8",
          parts: [
            { label: "1 caixa = 8 galetes", value: 8, color: "#059669" },
            { label: "Quantes caixes de 8 fan 96?", value: 88, color: "#A7F3D0", isUnknown: true }
          ]
        },
        suggestedBlocks: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
        hints: [
          "1r pas: Tenim 96 galetes i fem grups iguals de 8 galetes.",
          "2n pas: Per saber quants grups de 8 caben en 96, dividim 96 entre 8.",
          "3r pas (Divisió): 96 ÷ 8 = 12 caixes completes!"
        ]
      }
    ],
    2: [
      {
        id: "rp_2_1",
        title: "El Tiquet de la Xarcuteria i la Fruiteria",
        lore: "Problema d'operacions combinades amb multiplicacions i suma.",
        instruction: "Al mercat compres <strong>4 paquets de formatge</strong> a <strong>5 € cada paquet</strong> i <strong>3 safates de maduixes</strong> a <strong>6 € cada safata</strong>. <strong>Quants euros pagues en total per tota la compra?</strong>",
        type: "general_problem",
        unitLabel: "euros (€) en total",
        targetNumber: 38,
        barModel: {
          totalLabel: "Import total del tiquet: ? €",
          parts: [
            { label: "Formatge: 4 × 5 € = 20 €", value: 20, color: "#4F46E5" },
            { label: "Maduixes: 3 × 6 € = 18 €", value: 18, color: "#E11D48" }
          ]
        },
        suggestedBlocks: [5, 5, 5, 5, 6, 6, 6],
        hints: [
          "1r pas: Calcula el cost dels 4 paquets de formatge: 4 × 5 € = 20 €.",
          "2n pas: Calcula el cost de les 3 safates de maduixes: 3 × 6 € = 18 €.",
          "3r pas: Suma els dos imports: 20 + 18 = 38 € en total!"
        ]
      },
      {
        id: "rp_2_2",
        title: "Estalviant per a la Bicicleta Nova",
        lore: "Planifiques el teu estalvi setmanal per comprar una bicicleta d'esport.",
        instruction: "Una bicicleta val <strong>180 €</strong>. Ja tens <strong>60 €</strong> estalviats a la guardiola, i la resta la vols aconseguir estalviant la mateixa quantitat durant <strong>6 setmanes</strong>. <strong>Quants euros has d'estalviar cada setmana?</strong>",
        type: "general_problem",
        unitLabel: "euros (€) per setmana",
        targetNumber: 20,
        barModel: {
          totalLabel: "Preu bicicleta: 180 €",
          parts: [
            { label: "Ja tinc: 60 €", value: 60, color: "#10B981" },
            { label: "Falten 120 € en 6 setmanes (? €/setmana)", value: 120, color: "#F59E0B", isUnknown: true }
          ]
        },
        suggestedBlocks: [60, 20, 20, 20, 20, 20, 20],
        hints: [
          "1r pas (Resta): Calcula quants diners et falten encara: 180 € - 60 € = 120 €.",
          "2n pas (Divisió): Reparteix els 120 € que et falten entre les 6 setmanes.",
          "3r pas: 120 ÷ 6 = 20 € cada setmana! En operació combinada: (180 - 60) ÷ 6 = 20."
        ]
      },
      {
        id: "rp_2_3",
        title: "Les Taules del Menjador Escolar",
        lore: "Comptem la fruita necessària per al dinar de l'escola.",
        instruction: "Al menjador hi ha <strong>7 taules</strong>. A cada taula hi seuen <strong>5 nens i 3 nenes</strong>. Si cada alumne menja <strong>2 mandarines</strong> per postres, <strong>quantes mandarines es reparteixen en total?</strong>",
        type: "general_problem",
        unitLabel: "mandarines",
        targetNumber: 112,
        barModel: {
          totalLabel: "7 taules × (5 + 3 alumnes) × 2 mandarines",
          parts: [
            { label: "8 alumnes/taula × 7 taules = 56 alumnes", value: 56, color: "#2563EB" },
            { label: "× 2 mandarines cadascú = ?", value: 56, color: "#F59E0B", isUnknown: true }
          ]
        },
        suggestedBlocks: [16, 16, 16, 16, 16, 16, 16],
        hints: [
          "1r pas: A cada taula hi ha 5 + 3 = 8 alumnes.",
          "2n pas: En les 7 taules hi ha 7 × 8 = 56 alumnes en total.",
          "3r pas: Com que cadascú menja 2 mandarines, 56 × 2 = 112 mandarines!"
        ]
      },
      {
        id: "rp_2_4",
        title: "Comanda de Llibres per a la Biblioteca",
        lore: "Gestionem el pressupost de lectura de la classe de 6è.",
        instruction: "Tenim un val de <strong>100 €</strong> per a la llibreria del barri. Comprem <strong>4 còmics</strong> que costen <strong>16 € cadascun</strong>. <strong>Quants euros ens queden encara al val?</strong>",
        type: "general_problem",
        unitLabel: "euros (€) restants",
        targetNumber: 36,
        barModel: {
          totalLabel: "Val de la llibreria: 100 €",
          parts: [
            { label: "4 còmics × 16 € = 64 €", value: 64, color: "#7C3AED" },
            { label: "Sobra al val: ? €", value: 36, color: "#10B981", isUnknown: true }
          ]
        },
        suggestedBlocks: [16, 16, 16, 16, 36],
        hints: [
          "1r pas (Multiplicació): Calcula quant costen els 4 còmics: 4 × 16 € = 64 €.",
          "2n pas (Resta): Resta la despesa dels 100 € inicials.",
          "3r pas: 100 - 64 = 36 € queden disponibles al val!"
        ]
      },
      {
        id: "rp_2_5",
        title: "Collita de Tomàquets a la Cooperativa",
        lore: "Agrupem i repartim la collita del matí i de la tarda en caixes iguals.",
        instruction: "Un hortolà recull <strong>45 kg</strong> de tomàquets al matí i <strong>39 kg</strong> a la tarda. Els reparteix en <strong>7 caixes</strong> amb el mateix pes a cadascuna. <strong>Quants quilos de tomàquets posa a cada caixa?</strong>",
        type: "general_problem",
        unitLabel: "kg per caixa",
        targetNumber: 12,
        barModel: {
          totalLabel: "Total: 45 kg + 39 kg = 84 kg repartits en 7 caixes",
          parts: [
            { label: "Matí: 45 kg", value: 45, color: "#E11D48" },
            { label: "Tarda: 39 kg", value: 39, color: "#F97316" }
          ]
        },
        suggestedBlocks: [12, 12, 12, 12, 12, 12, 12],
        hints: [
          "1r pas (Suma): Calcula el total de quilos recollits: 45 + 39 = 84 kg.",
          "2n pas (Divisió): Reparteix els 84 kg en 7 caixes iguals.",
          "3r pas: (45 + 39) ÷ 7 = 84 ÷ 7 = 12 kg a cada caixa!"
        ]
      }
    ],
    3: [
      {
        id: "rp_3_1",
        title: "La Parada de Pastissos de la Fira Escolar",
        lore: "Problema multipas d'ingressos, despeses i repartiment del benefici.",
        instruction: "A la fira de l'escola heu venut <strong>15 pastissos</strong> a <strong>12 € cadascun</strong>. Si comprar els ingredients al supermercat us va costar <strong>40 €</strong> en total, i el guany net el repartiu a parts iguals entre <strong>2 associacions solidàries</strong>, <strong>quants euros rep cada associació?</strong>",
        type: "general_problem",
        unitLabel: "euros (€) per associació",
        targetNumber: 70,
        barModel: {
          totalLabel: "Ingressos: 15 × 12 € = 180 €",
          parts: [
            { label: "Despesa ingredients: 40 €", value: 40, color: "#EF4444" },
            { label: "Associació 1: ? €", value: 70, color: "#10B981", isUnknown: true },
            { label: "Associació 2: ? €", value: 70, color: "#0D9488", isUnknown: true }
          ]
        },
        suggestedBlocks: [40, 70, 70],
        hints: [
          "1r pas (Multiplicació - Ingressos): 15 pastissos × 12 € = 180 € recaptats.",
          "2n pas (Resta - Benefici net): Descomptem els 40 € dels ingredients: 180 - 40 = 140 € de guany.",
          "3r pas (Divisió): Repartim 140 € entre les 2 associacions: 140 ÷ 2 = 70 € cadascuna!"
        ]
      },
      {
        id: "rp_3_2",
        title: "Equipació per a l'Equip d'Atletisme",
        lore: "Operació combinada amb descompte a la botiga d'esports.",
        instruction: "El club compra <strong>12 samarretes</strong> a <strong>15 € cadascuna</strong> i <strong>12 pantalons</strong> a <strong>10 € cadascun</strong>. Al final, la botiga els descompten <strong>30 €</strong> per compra en grup. <strong>Quants euros paguen finalment?</strong>",
        type: "general_problem",
        unitLabel: "euros (€) finals",
        targetNumber: 270,
        barModel: {
          totalLabel: "12 × (15 € + 10 €) = 300 € menys 30 € de descompte",
          parts: [
            { label: "Preu final a pagar: ? €", value: 270, color: "#4F46E5", isUnknown: true },
            { label: "Descompte: 30 €", value: 30, color: "#F59E0B" }
          ]
        },
        suggestedBlocks: [180, 120],
        hints: [
          "1r pas: Cada equipació completa (samarreta + pantaló) val 15 + 10 = 25 €.",
          "2n pas: Les 12 equipacions costen 12 × 25 € = 300 € (o bé 180 € + 120 € = 300 €).",
          "3r pas: Apliquem el descompte de 30 €: 300 - 30 = 270 €!"
        ]
      },
      {
        id: "rp_3_3",
        title: "Les Safates d'Ous del Mercat Municipal",
        lore: "Càlcul en 3 passos: multiplicació, resta i divisió.",
        instruction: "A la parada del mercat arriben <strong>10 caixes</strong> amb <strong>24 ous a cada caixa</strong>. En descarregar-les es trenquen <strong>12 ous</strong>. Els ous que estan bé s'envasen en safates de <strong>6 ous</strong>. <strong>Quantes safates de 6 ous s'omplen?</strong>",
        type: "general_problem",
        unitLabel: "safates de 6 ous",
        targetNumber: 38,
        barModel: {
          totalLabel: "Total inicial: 10 × 24 = 240 ous",
          parts: [
            { label: "Trencats: 12", value: 12, color: "#EF4444" },
            { label: "228 ous bons ÷ 6 per safata = ? safates", value: 228, color: "#059669", isUnknown: true }
          ]
        },
        suggestedBlocks: [24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
        hints: [
          "1r pas (Multiplicació): Ous totals que arriben = 10 × 24 = 240 ous.",
          "2n pas (Resta): Ous que queden sencers = 240 - 12 = 228 ous.",
          "3r pas (Divisió): Safates de 6 ous = 228 ÷ 6 = 38 safates!"
        ]
      },
      {
        id: "rp_3_4",
        title: "Les Colònies de 6è de Primària",
        lore: "Repartiment de despeses d'un autobús entre l'alumnat.",
        instruction: "Llogar l'autocar per a les colònies costa <strong>450 €</strong> en total. L'associació de famílies (AFA) subvenciona <strong>90 €</strong>, i la resta es paga a parts iguals entre els <strong>18 alumnes</strong> que hi van. <strong>Quants euros ha de pagar cada alumne?</strong>",
        type: "general_problem",
        unitLabel: "euros (€) per alumne",
        targetNumber: 20,
        barModel: {
          totalLabel: "Cost total autocar: 450 €",
          parts: [
            { label: "Subvenció AFA: 90 €", value: 90, color: "#10B981" },
            { label: "360 € entre 18 alumnes (? €/alumne)", value: 360, color: "#2563EB", isUnknown: true }
          ]
        },
        suggestedBlocks: [90, 360],
        hints: [
          "1r pas (Resta): Descomptem l'ajuda de l'AFA: 450 € - 90 € = 360 €.",
          "2n pas (Divisió): Repartim els 360 € entre els 18 alumnes.",
          "3r pas: 360 ÷ 18 = 20 € ha de pagar cada alumne!"
        ]
      },
      {
        id: "rp_3_5",
        title: "Inventari de Begudes al Rebost",
        lore: "Últim repte expert d'operacions combinades al supermercat!",
        instruction: "Compres <strong>4 packs de sucs</strong> de <strong>6 unitats cadascun</strong> i <strong>3 packs de batuts</strong> de <strong>8 unitats cadascun</strong>. Si durant la setmana a casa us beveu <strong>18 envasos</strong> en total, <strong>quants envasos queden encara al rebost?</strong>",
        type: "general_problem",
        unitLabel: "envasos al rebost",
        targetNumber: 30,
        barModel: {
          totalLabel: "Comprats: (4 × 6) + (3 × 8) = 48 envasos",
          parts: [
            { label: "Beguts: 18", value: 18, color: "#EF4444" },
            { label: "Queden al rebost: ?", value: 30, color: "#0D9488", isUnknown: true }
          ]
        },
        suggestedBlocks: [24, 24],
        hints: [
          "1r pas (Multiplicacions): Sucs = 4 × 6 = 24. Batuts = 3 × 8 = 24.",
          "2n pas (Suma): En total has comprat 24 + 24 = 48 envasos.",
          "3r pas (Resta): Si se n'han begut 18, en queden 48 - 18 = 30 envasos!"
        ]
      }
    ]
  }
};
