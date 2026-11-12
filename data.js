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
  },
  organitzador_problemes: {
    title: "5️⃣ Organitzador de Problemes: Model TOT – PART",
    ttsText: "L'organitzador de problemes ens ajuda a saber quina operació hem de fer fixant-nos en què sabem i què volem descobrir: a la Suma sabem les parts i busquem el tot. A la Resta sabem el tot i una part, i busquem l'altra part. A la Multiplicació les parts són iguals, sabem el valor de cada part i el número de parts, i busquem el tot. A la Divisió Partitiva sabem el tot i el número de parts iguals, i busquem el valor de cada part. I a la Divisió Quotativa sabem el tot i el valor de cada part, i busquem el número de parts.",
    html: `
      <h3>5️⃣ Organitzador de Problemes (Model TOT – PART)</h3>
      <p>Abans de fer cap operació, identifiquem el <strong>TOT</strong> i les <strong>PARTS</strong> amb aquests 5 esquemes:</p>

      <div class="grimori-concept-box" style="background:#FEF9C3; border-left-color:#EAB308;">
        <p>➕ <strong>1. SUMA (Volem saber el TOT <span style="color:#DC2626;">?</span>):</strong></p>
        <ul style="margin-left:1.2rem; margin-top:0.25rem;">
          <li>Sabem les parts (<span style="color:#16A34A; font-weight:900;">✓</span> i <span style="color:#16A34A; font-weight:900;">✓</span>).</li>
          <li>Volem saber el <strong>TOT (<span style="color:#DC2626; font-weight:900;">?</span>)</strong>. Les parts poden ser iguals o no.</li>
          <li><em>Exemple:</em> Tinc 5 caramels i el meu amic en té 3. Quants caramels tenim entre els dos? &rarr; <strong>5 + 3 = 8 caramels</strong>.</li>
        </ul>
      </div>

      <div class="grimori-concept-box" style="background:#FEF9C3; border-left-color:#EAB308;">
        <p>➖ <strong>2. RESTA (Volem saber l'altra PART <span style="color:#DC2626;">?</span>):</strong></p>
        <ul style="margin-left:1.2rem; margin-top:0.25rem;">
          <li>Sabem el <strong>TOT (<span style="color:#16A34A; font-weight:900;">✓</span>)</strong> i una <strong>PART (<span style="color:#16A34A; font-weight:900;">✓</span>)</strong>.</li>
          <li>Volem saber <strong>l'altra PART (<span style="color:#DC2626; font-weight:900;">?</span>)</strong>.</li>
          <li><em>Exemple:</em> En la branca d'un arbre hi ha 10 ocells i 4 se'n van volant. Quants ocells queden a la branca? &rarr; <strong>10 - 4 = 6 ocells</strong>.</li>
        </ul>
      </div>

      <div class="grimori-concept-box" style="background:#FEF9C3; border-left-color:#EAB308;">
        <p>✖️ <strong>3. MULTIPLICACIÓ (Relació entre 2 elements · Volem saber el TOT <span style="color:#DC2626;">?</span>):</strong></p>
        <ul style="margin-left:1.2rem; margin-top:0.25rem;">
          <li>Sabem el valor de les parts (<span style="color:#16A34A; font-weight:900;">✓</span>) i el número de parts a la clau inferior (<span style="color:#16A34A; font-weight:900;">✓</span>).</li>
          <li>Les parts són <strong>iguals</strong> i es repeteixen diverses vegades. Volem saber el <strong>TOT (<span style="color:#DC2626; font-weight:900;">?</span>)</strong>.</li>
          <li><em>Exemple:</em> Comprem 15 bolis i cada boli val 2 euros. Quant ens han costat els bolis? &rarr; <strong>15 × 2 = 30 euros</strong>.</li>
        </ul>
      </div>

      <div class="grimori-concept-box" style="background:#FEF9C3; border-left-color:#EAB308;">
        <p>➗ <strong>4. DIVISIÓ PARTITIVA (Volem saber el valor de cada PART <span style="color:#DC2626;">?</span>):</strong></p>
        <ul style="margin-left:1.2rem; margin-top:0.25rem;">
          <li>Sabem el <strong>TOT (<span style="color:#16A34A; font-weight:900;">✓</span>)</strong> i el <strong>número de parts (<span style="color:#16A34A; font-weight:900;">✓</span>)</strong>.</li>
          <li>Les parts són iguals i volem saber el <strong>valor de cada PART (<span style="color:#DC2626; font-weight:900;">?</span>)</strong>.</li>
          <li><em>Exemple:</em> Ens han donat 150 llibres nous per les 6 classes de Grans. Quants llibres toquen a cada classe? &rarr; <strong>150 : 6 = 25 llibres</strong>.</li>
        </ul>
      </div>

      <div class="grimori-concept-box" style="background:#FEF9C3; border-left-color:#EAB308;">
        <p>📦 <strong>5. DIVISIÓ QUOTATIVA (Volem saber el número de parts a la clau <span style="color:#DC2626;">?</span>):</strong></p>
        <ul style="margin-left:1.2rem; margin-top:0.25rem;">
          <li>Sabem el <strong>TOT (<span style="color:#16A34A; font-weight:900;">✓</span>)</strong> i el <strong>valor de cada part (<span style="color:#16A34A; font-weight:900;">✓</span>)</strong>.</li>
          <li>Les parts són iguals i volem saber el <strong>número de parts (<span style="color:#DC2626; font-weight:900;">?</span>)</strong>.</li>
          <li><em>Exemple:</em> Tinc 20 ampolles i les vull posar en capses de 5. Quantes capses faré? &rarr; <strong>20 : 5 = 4 capses</strong>.</li>
        </ul>
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
     APARTAT 2: RESOLUCIÓ DE PROBLEMES AMB L'ORGANITZADOR TOT - PART
     2. PROBLEMES DE SUMA (15 problemes en 3 nivells)
     ------------------------------------------------------------------------ */
  prob_suma: {
    1: [
      {
        id: "ps_1_1",
        title: "Les Bosses de Caramels",
        lore: "Exemple del model SUMA: sabem les dues parts i volem saber el TOT.",
        instruction: "Tinc una bossa amb <strong>5 caramels de maduixa</strong> i una altra bossa amb <strong>3 caramels de menta</strong>. <strong>Quants caramels tinc en total?</strong>",
        type: "general_problem",
        organizerType: "suma",
        expectedOp: "+",
        num1: 5,
        num2: 3,
        targetNumber: 8,
        unitLabel: "caramels",
        organizerData: {
          totLabel: "caramels en total",
          totVal: "?",
          part1Label: "caramels de maduixa",
          part1Val: 5,
          part2Label: "caramels de menta",
          part2Val: 3
        },
        hints: [
          "1r pas (Esquema): Sabem les dues PARTS (5 de maduixa i 3 de menta) i volem saber el TOT (?).",
          "2n pas (Organitzador): Posa '?' a TOT (caramels en total), i 5 i 3 als cercles PART amb les seves etiquetes.",
          "3r pas (Operació): 5 + 3 = 8 caramels!"
        ]
      },
      {
        id: "ps_1_2",
        title: "Cromos a l'Àlbum de l'Escola",
        lore: "Ajuntem els cromos que ja teníem amb els del sobre nou.",
        instruction: "A l'àlbum ja hi tens enganxats <strong>12 cromos d'animals</strong> i avui n'enganxes <strong>7 cromos de plantes</strong>. <strong>Quants cromos tens enganxats ara en total?</strong>",
        type: "general_problem",
        organizerType: "suma",
        expectedOp: "+",
        num1: 12,
        num2: 7,
        targetNumber: 19,
        unitLabel: "cromos",
        organizerData: {
          totLabel: "cromos en total",
          totVal: "?",
          part1Label: "cromos d'animals",
          part1Val: 12,
          part2Label: "cromos de plantes",
          part2Val: 7
        },
        hints: [
          "1r pas: Coneixem les dues parts (12 d'animals i 7 de plantes) i busquem el TOT (?).",
          "2n pas: Posa '?' al cercle TOT i escriu 12 i 7 als cercles PART.",
          "3r pas: 12 + 7 = 19 cromos!"
        ]
      },
      {
        id: "ps_1_3",
        title: "Les Fruites de la Macedònia",
        lore: "Preparem postres saludables a la cuina.",
        instruction: "Per fer una macedònia hi posem <strong>14 maduixes</strong> i <strong>11 rodanxes de plàtan</strong>. <strong>Quants trossos de fruita hi ha en total al bol?</strong>",
        type: "general_problem",
        organizerType: "suma",
        expectedOp: "+",
        num1: 14,
        num2: 11,
        targetNumber: 25,
        unitLabel: "trossos",
        organizerData: {
          totLabel: "trossos en total",
          totVal: "?",
          part1Label: "maduixes",
          part1Val: 14,
          part2Label: "rodanxes de plàtan",
          part2Val: 11
        },
        hints: [
          "1r pas: Les parts són 14 maduixes i 11 rodanxes de plàtan. Busquem el TOT (?).",
          "2n pas: Completa els cercles PART amb 14 i 11 i el cercle TOT amb '?'.",
          "3r pas: 14 + 11 = 25 trossos!"
        ]
      },
      {
        id: "ps_1_4",
        title: "Alumnes al Gimnàs",
        lore: "Activitat conjunta d'Educació Física.",
        instruction: "Al gimnàs de l'escola hi ha <strong>16 alumnes de 6è A</strong> i <strong>15 alumnes de 6è B</strong>. <strong>Quants alumnes hi ha en total al gimnàs?</strong>",
        type: "general_problem",
        organizerType: "suma",
        expectedOp: "+",
        num1: 16,
        num2: 15,
        targetNumber: 31,
        unitLabel: "alumnes",
        organizerData: {
          totLabel: "alumnes en total",
          totVal: "?",
          part1Label: "alumnes de 6è A",
          part1Val: 16,
          part2Label: "alumnes de 6è B",
          part2Val: 15
        },
        hints: [
          "1r pas: Sabem les dues parts (16 de 6è A i 15 de 6è B). Volem trobar el TOT (?).",
          "2n pas: Escriu '?' a TOT i 16 i 15 a cada PART.",
          "3r pas: 16 + 15 = 31 alumnes!"
        ]
      },
      {
        id: "ps_1_5",
        title: "El Tiquet de la Fleca",
        lore: "Comprem el pa i la coca per berenar.",
        instruction: "Al forn de pa em gasto <strong>4 euros en barres de pa</strong> i <strong>9 euros en una coca de xocolata</strong>. <strong>Quants euros pago en total?</strong>",
        type: "general_problem",
        organizerType: "suma",
        expectedOp: "+",
        num1: 4,
        num2: 9,
        targetNumber: 13,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros en total",
          totVal: "?",
          part1Label: "euros en barres de pa",
          part1Val: 4,
          part2Label: "euros en coca de xocolata",
          part2Val: 9
        },
        hints: [
          "1r pas: Sabem les dues parts de la despesa (4 € i 9 €). Volem saber el TOT (?).",
          "2n pas: Posa '?' al cercle TOT i 4 i 9 als cercles PART.",
          "3r pas: 4 + 9 = 13 euros!"
        ]
      }
    ],
    2: [
      {
        id: "ps_2_1",
        title: "La Compra a la Fruiteria",
        lore: "Situació quotidiana al mercat municipal.",
        instruction: "Al supermercat hem comprat una bossa amb <strong>24 pomes vermelles</strong> i una altra bossa amb <strong>18 pomes verdes</strong>. <strong>Quantes pomes hem comprat en total?</strong>",
        type: "general_problem",
        organizerType: "suma",
        expectedOp: "+",
        num1: 24,
        num2: 18,
        targetNumber: 42,
        unitLabel: "pomes",
        organizerData: {
          totLabel: "pomes en total",
          totVal: "?",
          part1Label: "pomes vermelles",
          part1Val: 24,
          part2Label: "pomes verdes",
          part2Val: 18
        },
        hints: [
          "1r pas: Coneixem les dues PARTS (24 pomes vermelles i 18 de verdes) i busquem el TOT (?).",
          "2n pas: Escriu 24 i 18 als cercles PART i '?' a TOT.",
          "3r pas: 24 + 18 = 42 pomes!"
        ]
      },
      {
        id: "ps_2_2",
        title: "Pàgines Llegides de la Novel·la",
        lore: "Club de lectura de 6è de Primària.",
        instruction: "Aquest cap de setmana has llegit <strong>36 pàgines dissabte</strong> i <strong>29 pàgines diumenge</strong>. <strong>Quantes pàgines has llegit en total?</strong>",
        type: "general_problem",
        organizerType: "suma",
        expectedOp: "+",
        num1: 36,
        num2: 29,
        targetNumber: 65,
        unitLabel: "pàgines",
        organizerData: {
          totLabel: "pàgines en total",
          totVal: "?",
          part1Label: "pàgines dissabte",
          part1Val: 36,
          part2Label: "pàgines diumenge",
          part2Val: 29
        },
        hints: [
          "1r pas: Les parts són 36 pàgines dissabte i 29 diumenge. Busquem el TOT (?).",
          "2n pas: Omple els cercles PART amb 36 i 29 i el TOT amb '?'.",
          "3r pas: 36 + 29 = 65 pàgines!"
        ]
      },
      {
        id: "ps_2_3",
        title: "Croissants i Ensaïmades al Forn",
        lore: "Recompte de brioixeria del matí.",
        instruction: "El forner ha venut aquest matí <strong>48 croissants</strong> i <strong>35 ensaïmades</strong>. <strong>Quantes peces de brioixeria ha venut en total?</strong>",
        type: "general_problem",
        organizerType: "suma",
        expectedOp: "+",
        num1: 48,
        num2: 35,
        targetNumber: 83,
        unitLabel: "peces",
        organizerData: {
          totLabel: "peces en total",
          totVal: "?",
          part1Label: "croissants",
          part1Val: 48,
          part2Label: "ensaïmades",
          part2Val: 35
        },
        hints: [
          "1r pas: Sabem les dues parts (48 croissants i 35 ensaïmades) i volem saber el TOT (?).",
          "2n pas: Posa '?' a TOT i 48 i 35 a cada PART.",
          "3r pas: 48 + 35 = 83 peces!"
        ]
      },
      {
        id: "ps_2_4",
        title: "Estalvis a les Dues Guardioles",
        lore: "Comptem els diners estalviats a casa.",
        instruction: "En Marc té <strong>54 euros en bitllets</strong> i <strong>28 euros en monedes</strong>. <strong>Quants euros té estalviats en total?</strong>",
        type: "general_problem",
        organizerType: "suma",
        expectedOp: "+",
        num1: 54,
        num2: 28,
        targetNumber: 82,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros en total",
          totVal: "?",
          part1Label: "euros en bitllets",
          part1Val: 54,
          part2Label: "euros en monedes",
          part2Val: 28
        },
        hints: [
          "1r pas: Les parts són 54 € en bitllets i 28 € en monedes. Volem saber el TOT (?).",
          "2n pas: Col·loca 54 i 28 a les PARTS i '?' al TOT.",
          "3r pas: 54 + 28 = 82 euros!"
        ]
      },
      {
        id: "ps_2_5",
        title: "Collita de Tomàquets a l'Hort",
        lore: "Recollim verdures al matí i a la tarda.",
        instruction: "Un pagès ha collit <strong>65 quilos de tomàquets al matí</strong> i <strong>47 quilos a la tarda</strong>. <strong>Quants quilos de tomàquets ha collit en tot el dia?</strong>",
        type: "general_problem",
        organizerType: "suma",
        expectedOp: "+",
        num1: 65,
        num2: 47,
        targetNumber: 112,
        unitLabel: "quilos",
        organizerData: {
          totLabel: "quilos en tot el dia",
          totVal: "?",
          part1Label: "quilos al matí",
          part1Val: 65,
          part2Label: "quilos a la tarda",
          part2Val: 47
        },
        hints: [
          "1r pas: Coneixem les dues parts (65 kg al matí i 47 kg a la tarda). Busquem el TOT (?).",
          "2n pas: Escriu '?' a TOT i 65 i 47 a les PARTS.",
          "3r pas: 65 + 47 = 112 quilos!"
        ]
      }
    ],
    3: [
      {
        id: "ps_3_1",
        title: "Visitants a la Fira del Llibre",
        lore: "Recompte total de participants del cap de setmana.",
        instruction: "A la Fira del Llibre del barri hi van anar <strong>345 persones dissabte</strong> i <strong>428 persones diumenge</strong>. <strong>Quantes persones van visitar la fira en total?</strong>",
        type: "general_problem",
        organizerType: "suma",
        expectedOp: "+",
        num1: 345,
        num2: 428,
        targetNumber: 773,
        unitLabel: "persones",
        organizerData: {
          totLabel: "persones en total",
          totVal: "?",
          part1Label: "persones dissabte",
          part1Val: 345,
          part2Label: "persones diumenge",
          part2Val: 428
        },
        hints: [
          "1r pas: Coneixem les dues PARTS (345 dissabte i 428 diumenge) i volem saber el TOT (?).",
          "2n pas: Posa 345 i 428 als dos cercles PART i '?' a TOT.",
          "3r pas: 345 + 428 = 773 persones!"
        ]
      },
      {
        id: "ps_3_2",
        title: "Llibres de la Biblioteca Escolar",
        lore: "Inventari de contes i llibres de ciència.",
        instruction: "A la biblioteca de l'escola hi ha <strong>275 contes d'aventures</strong> i <strong>185 llibres de ciència</strong>. <strong>Quants llibres hi ha en total entre les dues seccions?</strong>",
        type: "general_problem",
        organizerType: "suma",
        expectedOp: "+",
        num1: 275,
        num2: 185,
        targetNumber: 460,
        unitLabel: "llibres",
        organizerData: {
          totLabel: "llibres en total",
          totVal: "?",
          part1Label: "contes d'aventures",
          part1Val: 275,
          part2Label: "llibres de ciència",
          part2Val: 185
        },
        hints: [
          "1r pas: Sabem les dues parts (275 contes i 185 llibres de ciència). Busquem el TOT (?).",
          "2n pas: Col·loca 275 i 185 als cercles PART i '?' a TOT.",
          "3r pas: 275 + 185 = 460 llibres!"
        ]
      },
      {
        id: "ps_3_3",
        title: "Equipament Informàtic per a l'Aula",
        lore: "Comprem un portàtil i una pissarra digital.",
        instruction: "L'escola compra un <strong>ordinador portàtil per 540 euros</strong> i un <strong>projector digital per 385 euros</strong>. <strong>Quants euros costa tota la compra?</strong>",
        type: "general_problem",
        organizerType: "suma",
        expectedOp: "+",
        num1: 540,
        num2: 385,
        targetNumber: 925,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros tota la compra",
          totVal: "?",
          part1Label: "euros ordinador portàtil",
          part1Val: 540,
          part2Label: "euros projector digital",
          part2Val: 385
        },
        hints: [
          "1r pas: Coneixem el preu de cada part (540 € i 385 €) i volem saber el TOT (?).",
          "2n pas: Posa '?' a TOT i 540 i 385 a les PARTS.",
          "3r pas: 540 + 385 = 925 euros!"
        ]
      },
      {
        id: "ps_3_4",
        title: "El Viatge en Tren de les Vacances",
        lore: "Sumem els quilòmetres dels dos trams del trajecte.",
        instruction: "Un tren recorre <strong>268 quilòmetres al primer tram</strong> i <strong>354 quilòmetres al segon tram</strong>. <strong>Quants quilòmetres ha recorregut en total?</strong>",
        type: "general_problem",
        organizerType: "suma",
        expectedOp: "+",
        num1: 268,
        num2: 354,
        targetNumber: 622,
        unitLabel: "quilòmetres",
        organizerData: {
          totLabel: "quilòmetres en total",
          totVal: "?",
          part1Label: "quilòmetres primer tram",
          part1Val: 268,
          part2Label: "quilòmetres segon tram",
          part2Val: 354
        },
        hints: [
          "1r pas: Les parts són 268 km i 354 km. Volem saber el TOT (?).",
          "2n pas: Escriu 268 i 354 als cercles PART i '?' a TOT.",
          "3r pas: 268 + 354 = 622 quilòmetres!"
        ]
      },
      {
        id: "ps_3_5",
        title: "Recaptació de la Cursa Solidària",
        lore: "Ajuntem les aportacions de Primària i Secundària.",
        instruction: "A la cursa solidària s'han recaptat <strong>480 euros a Primària</strong> i <strong>365 euros a Secundària</strong>. <strong>Quants euros s'han recaptat en total?</strong>",
        type: "general_problem",
        organizerType: "suma",
        expectedOp: "+",
        num1: 480,
        num2: 365,
        targetNumber: 845,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros recaptats en total",
          totVal: "?",
          part1Label: "euros a Primària",
          part1Val: 480,
          part2Label: "euros a Secundària",
          part2Val: 365
        },
        hints: [
          "1r pas: Sabem les dues parts (480 € i 365 €) i volem trobar el TOT (?).",
          "2n pas: Posa '?' a TOT i 480 i 365 a cada PART.",
          "3r pas: 480 + 365 = 845 euros!"
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------------
     3. PROBLEMES DE RESTA (15 problemes en 3 nivells)
     ------------------------------------------------------------------------ */
  prob_resta: {
    1: [
      {
        id: "pr_1_1",
        title: "Els Ocells a l'Arbre",
        lore: "Exemple del model RESTA: sabem el TOT i una PART, i busquem l'altra PART.",
        instruction: "En un arbre hi ha <strong>10 ocells</strong>. Si <strong>4 ocells marxen volant</strong>, <strong>quants ocells queden a l'arbre?</strong>",
        type: "general_problem",
        organizerType: "resta",
        expectedOp: "-",
        num1: 10,
        num2: 4,
        targetNumber: 6,
        unitLabel: "ocells",
        organizerData: {
          totLabel: "ocells a l'arbre",
          totVal: 10,
          part1Label: "ocells marxen",
          part1Val: 4,
          part2Label: "ocells queden",
          part2Val: "?"
        },
        hints: [
          "1r pas (Esquema): Sabem el TOT (10 ocells) i una PART (4 ocells que marxen). Volem saber l'altra PART (?).",
          "2n pas (Organitzador): Posa 10 al cercle TOT, 4 a una PART i '?' a l'altra PART.",
          "3r pas (Operació): 10 - 4 = 6 ocells!"
        ]
      },
      {
        id: "pr_1_2",
        title: "Galetes a la Capsa d'Esmorzar",
        lore: "Sabem quantes galetes hi havia en total i quantes ens hem menjat.",
        instruction: "En una capsa hi havia <strong>15 galetes en total</strong>. Si per esmorzar ens n'hem menjat <strong>6 galetes</strong>, <strong>quantes galetes queden a la capsa?</strong>",
        type: "general_problem",
        organizerType: "resta",
        expectedOp: "-",
        num1: 15,
        num2: 6,
        targetNumber: 9,
        unitLabel: "galetes",
        organizerData: {
          totLabel: "galetes en total",
          totVal: 15,
          part1Label: "galetes menjades",
          part1Val: 6,
          part2Label: "galetes queden",
          part2Val: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (15 galetes) i una PART (6 menjades). Busquem l'altra PART (?).",
          "2n pas: Posa 15 a TOT, 6 a una PART i '?' a l'altra PART.",
          "3r pas: 15 - 6 = 9 galetes!"
        ]
      },
      {
        id: "pr_1_3",
        title: "El Canvi amb un Bitllet de 20 €",
        lore: "Paguem l'esmorzar a la cafeteria del barri.",
        instruction: "Portes un bitllet de <strong>20 euros en total</strong> i compres un entrepà i un suc que valen <strong>7 euros</strong>. <strong>Quants euros et tornen de canvi?</strong>",
        type: "general_problem",
        organizerType: "resta",
        expectedOp: "-",
        num1: 20,
        num2: 7,
        targetNumber: 13,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros en total",
          totVal: 20,
          part1Label: "euros gastats",
          part1Val: 7,
          part2Label: "euros de canvi",
          part2Val: "?"
        },
        hints: [
          "1r pas: El TOT és 20 € i la PART gastada és 7 €. Busquem la PART del canvi (?).",
          "2n pas: Col·loca 20 a TOT, 7 a una PART i '?' a l'altra PART.",
          "3r pas: 20 - 7 = 13 euros!"
        ]
      },
      {
        id: "pr_1_4",
        title: "Els Retoladors de l'Estoig",
        lore: "Revisem el material de plàstica.",
        instruction: "En un estoig hi ha <strong>18 retoladors en total</strong>. Si <strong>5 retoladors ja no pinten</strong>, <strong>quants retoladors pinten bé?</strong>",
        type: "general_problem",
        organizerType: "resta",
        expectedOp: "-",
        num1: 18,
        num2: 5,
        targetNumber: 13,
        unitLabel: "retoladors",
        organizerData: {
          totLabel: "retoladors en total",
          totVal: 18,
          part1Label: "retoladors no pinten",
          part1Val: 5,
          part2Label: "retoladors pinten bé",
          part2Val: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (18 retoladors) i una PART (5 que no pinten). Busquem l'altra PART (?).",
          "2n pas: Escriu 18 a TOT, 5 a una PART i '?' a l'altra.",
          "3r pas: 18 - 5 = 13 retoladors!"
        ]
      },
      {
        id: "pr_1_5",
        title: "Ous a la Nevera de Casa",
        lore: "Fem una truita de patates per sopar.",
        instruction: "A la nevera hi havia <strong>12 ous en total</strong>. Si n'hem fet servir <strong>4 ous per a la truita</strong>, <strong>quants ous queden a la nevera?</strong>",
        type: "general_problem",
        organizerType: "resta",
        expectedOp: "-",
        num1: 12,
        num2: 4,
        targetNumber: 8,
        unitLabel: "ous",
        organizerData: {
          totLabel: "ous en total",
          totVal: 12,
          part1Label: "ous per a la truita",
          part1Val: 4,
          part2Label: "ous queden",
          part2Val: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (12 ous) i una PART (4 utilitzats). Volem saber l'altra PART (?).",
          "2n pas: Posa 12 a TOT, 4 a una PART i '?' a l'altra PART.",
          "3r pas: 12 - 4 = 8 ous!"
        ]
      }
    ],
    2: [
      {
        id: "pr_2_1",
        title: "Els Seients de l'Autocar",
        lore: "Anem d'excursió amb l'escola.",
        instruction: "L'autocar de l'excursió té <strong>55 places en total</strong>. Si ja s'han assegut <strong>38 alumnes</strong>, <strong>quantes places queden lliures?</strong>",
        type: "general_problem",
        organizerType: "resta",
        expectedOp: "-",
        num1: 55,
        num2: 38,
        targetNumber: 17,
        unitLabel: "places",
        organizerData: {
          totLabel: "places en total",
          totVal: 55,
          part1Label: "places ocupades",
          part1Val: 38,
          part2Label: "places lliures",
          part2Val: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (55 places) i una PART (38 ocupades). Busquem l'altra PART (?).",
          "2n pas: Col·loca 55 a TOT, 38 a una PART i '?' a l'altra.",
          "3r pas: 55 - 38 = 17 places!"
        ]
      },
      {
        id: "pr_2_2",
        title: "El Llibre d'Aventures",
        lore: "Quantes pàgines ens falten per acabar el llibre?",
        instruction: "Un llibre té <strong>92 pàgines en total</strong>. Si ja n'he llegit <strong>47 pàgines</strong>, <strong>quantes pàgines em falten per acabar-lo?</strong>",
        type: "general_problem",
        organizerType: "resta",
        expectedOp: "-",
        num1: 92,
        num2: 47,
        targetNumber: 45,
        unitLabel: "pàgines",
        organizerData: {
          totLabel: "pàgines en total",
          totVal: 92,
          part1Label: "pàgines llegides",
          part1Val: 47,
          part2Label: "pàgines que falten",
          part2Val: "?"
        },
        hints: [
          "1r pas: El TOT és 92 pàgines i la PART llegida és 47. Volem saber l'altra PART (?).",
          "2n pas: Posa 92 a TOT, 47 a una PART i '?' a l'altra PART.",
          "3r pas: 92 - 47 = 45 pàgines!"
        ]
      },
      {
        id: "pr_2_3",
        title: "Les Barres de Pa del Forn",
        lore: "Venda matinal a la fleca del barri.",
        instruction: "El forner ha fet <strong>80 barres de pa en total</strong>. Si al matí n'ha venut <strong>56 barres</strong>, <strong>quantes barres li queden per a la tarda?</strong>",
        type: "general_problem",
        organizerType: "resta",
        expectedOp: "-",
        num1: 80,
        num2: 56,
        targetNumber: 24,
        unitLabel: "barres",
        organizerData: {
          totLabel: "barres en total",
          totVal: 80,
          part1Label: "barres venudes",
          part1Val: 56,
          part2Label: "barres que queden",
          part2Val: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (80 barres) i una PART (56 venudes). Busquem l'altra PART (?).",
          "2n pas: Escriu 80 a TOT, 56 a una PART i '?' a l'altra.",
          "3r pas: 80 - 56 = 24 barres!"
        ]
      },
      {
        id: "pr_2_4",
        title: "Comprant una Jaqueta amb Descompte",
        lore: "Rebaixes a la botiga de roba.",
        instruction: "Una jaqueta d'hivern valia <strong>65 euros en total</strong>, però avui té un descompte de <strong>18 euros</strong>. <strong>Quants euros pagarem finalment per la jaqueta?</strong>",
        type: "general_problem",
        organizerType: "resta",
        expectedOp: "-",
        num1: 65,
        num2: 18,
        targetNumber: 47,
        unitLabel: "euros",
        organizerData: {
          totLabel: "preu inicial total",
          totVal: 65,
          part1Label: "euros de descompte",
          part1Val: 18,
          part2Label: "euros a pagar",
          part2Val: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (65 €) i una PART que ens descompten (18 €). Busquem l'altra PART (?).",
          "2n pas: Posa 65 a TOT, 18 a una PART i '?' a l'altra PART.",
          "3r pas: 65 - 18 = 47 euros!"
        ]
      },
      {
        id: "pr_2_5",
        title: "LesPeces del Trencaclosques",
        lore: "Muntem un puzle a la taula del menjador.",
        instruction: "Un trencaclosques té <strong>100 peces en total</strong>. Si ja n'hem col·locat <strong>64 peces</strong>, <strong>quantes peces ens falten per posar?</strong>",
        type: "general_problem",
        organizerType: "resta",
        expectedOp: "-",
        num1: 100,
        num2: 64,
        targetNumber: 36,
        unitLabel: "peces",
        organizerData: {
          totLabel: "peces en total",
          totVal: 100,
          part1Label: "peces col·locades",
          part1Val: 64,
          part2Label: "peces que falten",
          part2Val: "?"
        },
        hints: [
          "1r pas: El TOT és 100 peces i la PART col·locada és 64. Busquem l'altra PART (?).",
          "2n pas: Posa 100 a TOT, 64 a una PART i '?' a l'altra.",
          "3r pas: 100 - 64 = 36 peces!"
        ]
      }
    ],
    3: [
      {
        id: "pr_3_1",
        title: "Estalvi per a la Bicicleta",
        lore: "Gestionem els nostres estalvis per comprar a la botiga d'esports.",
        instruction: "Una bicicleta de muntanya costa <strong>240 euros en total</strong>. Si ja tinc <strong>165 euros</strong> estalviats a la guardiola, <strong>quants euros em falten encara per poder-la comprar?</strong>",
        type: "general_problem",
        organizerType: "resta",
        expectedOp: "-",
        num1: 240,
        num2: 165,
        targetNumber: 75,
        unitLabel: "euros",
        organizerData: {
          totLabel: "preu total bicicleta",
          totVal: 240,
          part1Label: "euros estalviats",
          part1Val: 165,
          part2Label: "euros que falten",
          part2Val: "?"
        },
        hints: [
          "1r pas: Coneixem el TOT (240 €) i la PART que ja tenim (165 €). Volem trobar l'altra PART (?).",
          "2n pas: Escriu 240 al cercle TOT, 165 a una PART i '?' a l'altra.",
          "3r pas: 240 - 165 = 75 euros!"
        ]
      },
      {
        id: "pr_3_2",
        title: "Entrades del Teatre Municipal",
        lore: "Quantes entrades queden a la taquilla?",
        instruction: "El teatre del poble té <strong>350 butaques en total</strong>. Si ja s'han venut <strong>215 entrades</strong> per a l'obra d'avui, <strong>quantes butaques queden lliures?</strong>",
        type: "general_problem",
        organizerType: "resta",
        expectedOp: "-",
        num1: 350,
        num2: 215,
        targetNumber: 135,
        unitLabel: "butaques",
        organizerData: {
          totLabel: "butaques en total",
          totVal: 350,
          part1Label: "entrades venudes",
          part1Val: 215,
          part2Label: "butaques lliures",
          part2Val: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (350 butaques) i una PART (215 venudes). Busquem l'altra PART (?).",
          "2n pas: Posa 350 a TOT, 215 a una PART i '?' a l'altra.",
          "3r pas: 350 - 215 = 135 butaques!"
        ]
      },
      {
        id: "pr_3_3",
        title: "El Dipòsit d'Aigua de l'Hort",
        lore: "Reguem els bancals d'enciams i tomàquets.",
        instruction: "Un dipòsit de reg té <strong>500 litres d'aigua en total</strong>. Si al matí hem gastat <strong>185 litres</strong> per regar l'hort, <strong>quants litres d'aigua queden al dipòsit?</strong>",
        type: "general_problem",
        organizerType: "resta",
        expectedOp: "-",
        num1: 500,
        num2: 185,
        targetNumber: 315,
        unitLabel: "litres",
        organizerData: {
          totLabel: "litres en total",
          totVal: 500,
          part1Label: "litres gastats",
          part1Val: 185,
          part2Label: "litres que queden",
          part2Val: "?"
        },
        hints: [
          "1r pas: El TOT és 500 litres i la PART gastada és 185 litres. Volem saber l'altra PART (?).",
          "2n pas: Escriu 500 a TOT, 185 a una PART i '?' a l'altra.",
          "3r pas: 500 - 185 = 315 litres!"
        ]
      },
      {
        id: "pr_3_4",
        title: "Pressupost per a la Festa de Final de Curs",
        lore: "Gestionem els diners de la classe de 6è.",
        instruction: "La classe de 6è té <strong>420 euros en total</strong> per preparar la festa. Si han gastat <strong>275 euros en decoració i berenar</strong>, <strong>quants euros els sobren encara?</strong>",
        type: "general_problem",
        organizerType: "resta",
        expectedOp: "-",
        num1: 420,
        num2: 275,
        targetNumber: 145,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros en total",
          totVal: 420,
          part1Label: "euros gastats",
          part1Val: 275,
          part2Label: "euros que sobren",
          part2Val: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (420 €) i una PART (275 € gastats). Busquem l'altra PART (?).",
          "2n pas: Posa 420 a TOT, 275 a una PART i '?' a l'altra.",
          "3r pas: 420 - 275 = 145 euros!"
        ]
      },
      {
        id: "pr_3_5",
        title: "La Caminada per la Muntanya",
        lore: "Excursió de senderisme amb l'escola.",
        instruction: "La ruta d'avui fa <strong>850 metres de desnivell en total</strong>. Si abans de dinar ja hem pujat <strong>580 metres</strong>, <strong>quants metres ens falten per arribar al cim?</strong>",
        type: "general_problem",
        organizerType: "resta",
        expectedOp: "-",
        num1: 850,
        num2: 580,
        targetNumber: 270,
        unitLabel: "metres",
        organizerData: {
          totLabel: "metres en total",
          totVal: 850,
          part1Label: "metres pujats",
          part1Val: 580,
          part2Label: "metres que falten",
          part2Val: "?"
        },
        hints: [
          "1r pas: El TOT és 850 m i la PART pujada és 580 m. Volem saber l'altra PART (?).",
          "2n pas: Escriu 850 a TOT, 580 a una PART i '?' a l'altra.",
          "3r pas: 850 - 580 = 270 metres!"
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------------
     4. PROBLEMES DE MULTIPLICACIÓ (15 problemes en 3 nivells)
     ------------------------------------------------------------------------ */
  prob_multiplicacio: {
    1: [
      {
        id: "pm_1_1",
        title: "Comprant Samarretes",
        lore: "Exemple del model MULTIPLICACIÓ: parts iguals que es repeteixen.",
        instruction: "Una samarreta val <strong>15 euros</strong>. Si me'n compro <strong>2</strong>, <strong>quants diners em gastaré?</strong>",
        type: "general_problem",
        organizerType: "multiplicacio",
        expectedOp: "*",
        num1: 15,
        num2: 2,
        targetNumber: 30,
        unitLabel: "euros",
        organizerData: {
          totLabel: "diners que gastaré",
          totVal: "?",
          partLabel: "euros cada samarreta",
          partVal: 15,
          braceLabel: "samarretes",
          braceVal: 2
        },
        hints: [
          "1r pas (Esquema): Sabem el valor de cada PART (15 euros) i el número de parts (2 samarretes). Volem saber el TOT (?).",
          "2n pas (Organitzador): Posa '?' al cercle TOT, 15 a PART i 2 a la clau inferior (⏟).",
          "3r pas (Operació): 15 × 2 = 30 euros!"
        ]
      },
      {
        id: "pm_1_2",
        title: "Packs de Iogurts al Carretó",
        lore: "Cada pack té el mateix nombre de iogurts.",
        instruction: "Al supermercat agafem <strong>5 packs de iogurts</strong>, i a cada pack hi van <strong>4 iogurts</strong>. <strong>Quants iogurts portem en total?</strong>",
        type: "general_problem",
        organizerType: "multiplicacio",
        expectedOp: "*",
        num1: 4,
        num2: 5,
        targetNumber: 20,
        unitLabel: "iogurts",
        organizerData: {
          totLabel: "iogurts en total",
          totVal: "?",
          partLabel: "iogurts a cada pack",
          partVal: 4,
          braceLabel: "packs",
          braceVal: 5
        },
        hints: [
          "1r pas: Cada PART val 4 iogurts i es repeteix 5 vegades (5 packs). Busquem el TOT (?).",
          "2n pas: Posa '?' a TOT, 4 a PART i 5 a la clau inferior (⏟).",
          "3r pas: 4 × 5 = 20 iogurts!"
        ]
      },
      {
        id: "pm_1_3",
        title: "Les Capses de Llapis de Colors",
        lore: "Material nou per a la taula de dibuix.",
        instruction: "Hem comprat <strong>3 capses de llapis</strong> i a cada capsa hi ha <strong>10 llapis de colors</strong>. <strong>Quants llapis tenim en total?</strong>",
        type: "general_problem",
        organizerType: "multiplicacio",
        expectedOp: "*",
        num1: 10,
        num2: 3,
        targetNumber: 30,
        unitLabel: "llapis",
        organizerData: {
          totLabel: "llapis en total",
          totVal: "?",
          partLabel: "llapis a cada capsa",
          partVal: 10,
          braceLabel: "capses",
          braceVal: 3
        },
        hints: [
          "1r pas: Sabem el valor de cada PART (10 llapis) i el número de parts (3 capses). Busquem el TOT (?).",
          "2n pas: Posa '?' a TOT, 10 a PART i 3 a la clau inferior (⏟).",
          "3r pas: 10 × 3 = 30 llapis!"
        ]
      },
      {
        id: "pm_1_4",
        title: "Ampolles d'Aigua per a l'Excursió",
        lore: "Comprem paquets d'aigua mineral.",
        instruction: "Cada paquet d'aigua porta <strong>6 ampolles</strong>. Si comprem <strong>4 paquets iguals</strong>, <strong>quantes ampolles d'aigua tindrem en total?</strong>",
        type: "general_problem",
        organizerType: "multiplicacio",
        expectedOp: "*",
        num1: 6,
        num2: 4,
        targetNumber: 24,
        unitLabel: "ampolles",
        organizerData: {
          totLabel: "ampolles en total",
          totVal: "?",
          partLabel: "ampolles cada paquet",
          partVal: 6,
          braceLabel: "paquets",
          braceVal: 4
        },
        hints: [
          "1r pas: Cada PART val 6 ampolles i tenim 4 paquets iguals. Volem saber el TOT (?).",
          "2n pas: Posa '?' a TOT, 6 a PART i 4 a la clau inferior (⏟).",
          "3r pas: 6 × 4 = 24 ampolles!"
        ]
      },
      {
        id: "pm_1_5",
        title: "Les Taules de l'Aula de 6è",
        lore: "Organitzem els grups de treball cooperatiu.",
        instruction: "A la classe hi ha <strong>6 taules de grup</strong> i a cada taula hi seuen <strong>5 alumnes</strong>. <strong>Quants alumnes hi ha en total a la classe?</strong>",
        type: "general_problem",
        organizerType: "multiplicacio",
        expectedOp: "*",
        num1: 5,
        num2: 6,
        targetNumber: 30,
        unitLabel: "alumnes",
        organizerData: {
          totLabel: "alumnes en total",
          totVal: "?",
          partLabel: "alumnes a cada taula",
          partVal: 5,
          braceLabel: "taules de grup",
          braceVal: 6
        },
        hints: [
          "1r pas: Sabem el valor de cada PART (5 alumnes) i el número de parts (6 taules). Volem saber el TOT (?).",
          "2n pas: Posa '?' a TOT, 5 a PART i 6 a la clau inferior (⏟).",
          "3r pas: 5 × 6 = 30 alumnes!"
        ]
      }
    ],
    2: [
      {
        id: "pm_2_1",
        title: "Packs Familiars de Iogurts",
        lore: "Comparem grups iguals al carretó de la compra.",
        instruction: "Cada pack familiar del supermercat porta <strong>8 iogurts</strong>. Si comprem <strong>6 packs iguals</strong>, <strong>quants iogurts tindrem en total?</strong>",
        type: "general_problem",
        organizerType: "multiplicacio",
        expectedOp: "*",
        num1: 8,
        num2: 6,
        targetNumber: 48,
        unitLabel: "iogurts",
        organizerData: {
          totLabel: "iogurts en total",
          totVal: "?",
          partLabel: "iogurts a cada pack",
          partVal: 8,
          braceLabel: "packs de iogurts",
          braceVal: 6
        },
        hints: [
          "1r pas: Sabem el valor de cada PART (8 iogurts) i el número de parts (6 packs). Busquem el TOT (?).",
          "2n pas: Posa '?' a TOT, 8 als cercles PART i 6 a la clau inferior (⏟).",
          "3r pas: 8 × 6 = 48 iogurts!"
        ]
      },
      {
        id: "pm_2_2",
        title: "Safates de Magdalenes al Forn",
        lore: "Enfornem magdalenes acabades de fer.",
        instruction: "El forner treu del forn <strong>7 safates</strong> i a cada safata hi ha <strong>12 magdalenes</strong>. <strong>Quantes magdalenes ha cuit en total?</strong>",
        type: "general_problem",
        organizerType: "multiplicacio",
        expectedOp: "*",
        num1: 12,
        num2: 7,
        targetNumber: 84,
        unitLabel: "magdalenes",
        organizerData: {
          totLabel: "magdalenes en total",
          totVal: "?",
          partLabel: "magdalenes cada safata",
          partVal: 12,
          braceLabel: "safates",
          braceVal: 7
        },
        hints: [
          "1r pas: Cada PART és 12 magdalenes i es repeteix en 7 safates. Busquem el TOT (?).",
          "2n pas: Posa '?' a TOT, 12 a PART i 7 a la clau inferior (⏟).",
          "3r pas: 12 × 7 = 84 magdalenes!"
        ]
      },
      {
        id: "pm_2_3",
        title: "Còmics per a la Biblioteca",
        lore: "Renovem la col·lecció de lectura.",
        instruction: "Cada còmic nou val <strong>14 euros</strong>. Si l'escola en compra <strong>5 exemplars iguals</strong>, <strong>quants euros costaran en total?</strong>",
        type: "general_problem",
        organizerType: "multiplicacio",
        expectedOp: "*",
        num1: 14,
        num2: 5,
        targetNumber: 70,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros en total",
          totVal: "?",
          partLabel: "euros cada còmic",
          partVal: 14,
          braceLabel: "exemplars",
          braceVal: 5
        },
        hints: [
          "1r pas: Sabem el valor de cada PART (14 €) i el número de parts (5 exemplars). Volem saber el TOT (?).",
          "2n pas: Posa '?' a TOT, 14 a PART i 5 a la clau inferior (⏟).",
          "3r pas: 14 × 5 = 70 euros!"
        ]
      },
      {
        id: "pm_2_4",
        title: "Caixes de Taronges de la Cooperativa",
        lore: "Pesem les caixes de fruita.",
        instruction: "Cada caixa de taronges pesa <strong>15 quilos</strong>. Si al camió hi carreguen <strong>6 caixes iguals</strong>, <strong>quants quilos de taronges porten en total?</strong>",
        type: "general_problem",
        organizerType: "multiplicacio",
        expectedOp: "*",
        num1: 15,
        num2: 6,
        targetNumber: 90,
        unitLabel: "quilos",
        organizerData: {
          totLabel: "quilos en total",
          totVal: "?",
          partLabel: "quilos cada caixa",
          partVal: 15,
          braceLabel: "caixes",
          braceVal: 6
        },
        hints: [
          "1r pas: Cada PART és 15 kg i hi ha 6 caixes iguals. Volem saber el TOT (?).",
          "2n pas: Posa '?' a TOT, 15 a PART i 6 a la clau inferior (⏟).",
          "3r pas: 15 × 6 = 90 quilos!"
        ]
      },
      {
        id: "pm_2_5",
        title: "Les Files de Cadires al Concert",
        lore: "Preparem el pati per al concert de música.",
        instruction: "Al pati hem muntat <strong>8 files de cadires</strong> amb <strong>11 cadires a cada fila</strong>. <strong>Quantes cadires hem posat en total?</strong>",
        type: "general_problem",
        organizerType: "multiplicacio",
        expectedOp: "*",
        num1: 11,
        num2: 8,
        targetNumber: 88,
        unitLabel: "cadires",
        organizerData: {
          totLabel: "cadires en total",
          totVal: "?",
          partLabel: "cadires a cada fila",
          partVal: 11,
          braceLabel: "files",
          braceVal: 8
        },
        hints: [
          "1r pas: Sabem el valor de cada PART (11 cadires) i el número de parts (8 files). Busquem el TOT (?).",
          "2n pas: Posa '?' a TOT, 11 a PART i 8 a la clau inferior (⏟).",
          "3r pas: 11 × 8 = 88 cadires!"
        ]
      }
    ],
    3: [
      {
        id: "pm_3_1",
        title: "Les Capses de Retoladors de l'Escola",
        lore: "Material escolar per a les aules de Primària.",
        instruction: "Per a les classes de plàstica s'han comprat <strong>9 capses grans</strong> amb <strong>24 retoladors a cada capsa</strong>. <strong>Quants retoladors hi ha en total?</strong>",
        type: "general_problem",
        organizerType: "multiplicacio",
        expectedOp: "*",
        num1: 24,
        num2: 9,
        targetNumber: 216,
        unitLabel: "retoladors",
        organizerData: {
          totLabel: "retoladors en total",
          totVal: "?",
          partLabel: "retoladors a cada capsa",
          partVal: 24,
          braceLabel: "capses",
          braceVal: 9
        },
        hints: [
          "1r pas: Sabem el valor de cada PART (24 retoladors) i el número de parts (9 capses). Busquem el TOT (?).",
          "2n pas: Posa '?' a TOT, 24 a PART i 9 a la clau inferior (⏟).",
          "3r pas: 24 × 9 = 216 retoladors!"
        ]
      },
      {
        id: "pm_3_2",
        title: "Equipacions de Bàsquet del Club",
        lore: "Comprem l'equipació per a tots els jugadors.",
        instruction: "Cada equipació completa de bàsquet val <strong>28 euros</strong>. Si el club en compra <strong>12 equipacions iguals</strong>, <strong>quants euros pagarà en total?</strong>",
        type: "general_problem",
        organizerType: "multiplicacio",
        expectedOp: "*",
        num1: 28,
        num2: 12,
        targetNumber: 336,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros en total",
          totVal: "?",
          partLabel: "euros cada equipació",
          partVal: 28,
          braceLabel: "equipacions",
          braceVal: 12
        },
        hints: [
          "1r pas: Cada PART val 28 € i es repeteix 12 vegades. Volem saber el TOT (?).",
          "2n pas: Posa '?' a TOT, 28 a PART i 12 a la clau inferior (⏟).",
          "3r pas: 28 × 12 = 336 euros!"
        ]
      },
      {
        id: "pm_3_3",
        title: "Els Autocars de la Sortida Escolar",
        lore: "Tota l'escola va d'excursió al teatre.",
        instruction: "Per anar al teatre hem llogat <strong>4 autocars grans</strong> amb <strong>55 places a cada autocar</strong>. <strong>Quantes places tenim en total?</strong>",
        type: "general_problem",
        organizerType: "multiplicacio",
        expectedOp: "*",
        num1: 55,
        num2: 4,
        targetNumber: 220,
        unitLabel: "places",
        organizerData: {
          totLabel: "places en total",
          totVal: "?",
          partLabel: "places cada autocar",
          partVal: 55,
          braceLabel: "autocars",
          braceVal: 4
        },
        hints: [
          "1r pas: Sabem el valor de cada PART (55 places) i el número de parts (4 autocars). Busquem el TOT (?).",
          "2n pas: Posa '?' a TOT, 55 a PART i 4 a la clau inferior (⏟).",
          "3r pas: 55 × 4 = 220 places!"
        ]
      },
      {
        id: "pm_3_4",
        title: "Paquets de Folis per a la Fotocopiadora",
        lore: "Comanda de paper per a tot el trimestre.",
        instruction: "En una caixa hi ha <strong>8 paquets de paper</strong> i cada paquet té <strong>125 folis</strong>. <strong>Quants folis hi ha en total a la caixa?</strong>",
        type: "general_problem",
        organizerType: "multiplicacio",
        expectedOp: "*",
        num1: 125,
        num2: 8,
        targetNumber: 1000,
        unitLabel: "folis",
        organizerData: {
          totLabel: "folis en total",
          totVal: "?",
          partLabel: "folis cada paquet",
          partVal: 125,
          braceLabel: "paquets",
          braceVal: 8
        },
        hints: [
          "1r pas: Cada PART és 125 folis i tenim 8 paquets. Volem saber el TOT (?).",
          "2n pas: Posa '?' a TOT, 125 a PART i 8 a la clau inferior (⏟).",
          "3r pas: 125 × 8 = 1000 folis!"
        ]
      },
      {
        id: "pm_3_5",
        title: "Estalvi Mensual durant tot l'Any",
        lore: "Estalviem la mateixa quantitat cada mes.",
        instruction: "Una família estalvia <strong>45 euros cada mes</strong> durant els <strong>12 mesos de l'any</strong>. <strong>Quants euros haurà estalviat en total al final de l'any?</strong>",
        type: "general_problem",
        organizerType: "multiplicacio",
        expectedOp: "*",
        num1: 45,
        num2: 12,
        targetNumber: 540,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros en total",
          totVal: "?",
          partLabel: "euros cada mes",
          partVal: 45,
          braceLabel: "mesos",
          braceVal: 12
        },
        hints: [
          "1r pas: Sabem el valor de cada PART (45 €) i el número de parts (12 mesos). Busquem el TOT (?).",
          "2n pas: Posa '?' a TOT, 45 a PART i 12 a la clau inferior (⏟).",
          "3r pas: 45 × 12 = 540 euros!"
        ]
      }
    ]
  },
  /* ------------------------------------------------------------------------
     5. PROBLEMES DE DIVISIÓ PARTITIVA (15 problemes en 3 nivells)
     (Sabem el TOT i el número de parts; volem saber el valor de cada PART)
     ------------------------------------------------------------------------ */
  prob_div_partitiva: {
    1: [
      {
        id: "pdp_1_1",
        title: "Els Llibres dels Prestatges",
        lore: "Exemple del model DIVISIÓ PARTITIVA: sabem el TOT i el número de parts.",
        instruction: "Una escola ha comprat <strong>150 llibres</strong> i els vol repartir en <strong>6 prestatges</strong> a parts iguals. <strong>Quants llibres posarà a cada prestatge?</strong>",
        type: "general_problem",
        organizerType: "divisio_partitiva",
        expectedOp: "/",
        num1: 150,
        num2: 6,
        targetNumber: 25,
        unitLabel: "llibres",
        organizerData: {
          totLabel: "llibres en total",
          totVal: 150,
          partLabel: "llibres a cada prestatge",
          partVal: "?",
          braceLabel: "prestatges",
          braceVal: 6
        },
        hints: [
          "1r pas (Esquema): Sabem el TOT (150 llibres) i el número de parts (6 prestatges). Volem saber el valor de cada PART (?).",
          "2n pas (Organitzador): Posa 150 a TOT, '?' a PART i 6 a la clau inferior (⏟).",
          "3r pas (Operació): 150 : 6 = 25 llibres!"
        ]
      },
      {
        id: "pdp_1_2",
        title: "Repartint Galetes en Plats",
        lore: "Berenar familiar a casa.",
        instruction: "Tenim <strong>24 galetes en total</strong> i les volem repartir en <strong>4 plats</strong> a parts iguals. <strong>Quantes galetes posarem a cada plat?</strong>",
        type: "general_problem",
        organizerType: "divisio_partitiva",
        expectedOp: "/",
        num1: 24,
        num2: 4,
        targetNumber: 6,
        unitLabel: "galetes",
        organizerData: {
          totLabel: "galetes en total",
          totVal: 24,
          partLabel: "galetes a cada plat",
          partVal: "?",
          braceLabel: "plats",
          braceVal: 4
        },
        hints: [
          "1r pas: Sabem el TOT (24 galetes) i el número de parts (4 plats). Busquem el valor de cada PART (?).",
          "2n pas: Posa 24 a TOT, '?' a PART i 4 a la clau inferior (⏟).",
          "3r pas: 24 : 4 = 6 galetes!"
        ]
      },
      {
        id: "pdp_1_3",
        title: "Cromos entre Amics",
        lore: "Repartim un sobre gegant de cromos.",
        instruction: "Tres amics es reparteixen <strong>30 cromos en total</strong> a parts iguals entre tots <strong>3 amics</strong>. <strong>Quants cromos toquen a cada amic?</strong>",
        type: "general_problem",
        organizerType: "divisio_partitiva",
        expectedOp: "/",
        num1: 30,
        num2: 3,
        targetNumber: 10,
        unitLabel: "cromos",
        organizerData: {
          totLabel: "cromos en total",
          totVal: 30,
          partLabel: "cromos a cada amic",
          partVal: "?",
          braceLabel: "amics",
          braceVal: 3
        },
        hints: [
          "1r pas: El TOT és 30 cromos i el número de parts és 3 amics. Volem saber el valor de cada PART (?).",
          "2n pas: Posa 30 a TOT, '?' a PART i 3 a la clau inferior (⏟).",
          "3r pas: 30 : 3 = 10 cromos!"
        ]
      },
      {
        id: "pdp_1_4",
        title: "Les Flors dels Gerros",
        lore: "Decorem les taules del menjador.",
        instruction: "Tenim <strong>20 flors en total</strong> i les repartim a parts iguals en <strong>5 gerros</strong>. <strong>Quantes flors hi haurà a cada gerro?</strong>",
        type: "general_problem",
        organizerType: "divisio_partitiva",
        expectedOp: "/",
        num1: 20,
        num2: 5,
        targetNumber: 4,
        unitLabel: "flors",
        organizerData: {
          totLabel: "flors en total",
          totVal: 20,
          partLabel: "flors a cada gerro",
          partVal: "?",
          braceLabel: "gerros",
          braceVal: 5
        },
        hints: [
          "1r pas: Sabem el TOT (20 flors) i el número de parts (5 gerros). Busquem el valor de cada PART (?).",
          "2n pas: Posa 20 a TOT, '?' a PART i 5 a la clau inferior (⏟).",
          "3r pas: 20 : 5 = 4 flors!"
        ]
      },
      {
        id: "pdp_1_5",
        title: "El Preu d'un Iogurt del Pack",
        lore: "Mirem quant surt cada unitat al supermercat.",
        instruction: "Un pack de <strong>6 iogurts iguals</strong> costa <strong>12 euros en total</strong>. <strong>Quants euros val cada iogurt?</strong>",
        type: "general_problem",
        organizerType: "divisio_partitiva",
        expectedOp: "/",
        num1: 12,
        num2: 6,
        targetNumber: 2,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros en total",
          totVal: 12,
          partLabel: "euros cada iogurt",
          partVal: "?",
          braceLabel: "iogurts",
          braceVal: 6
        },
        hints: [
          "1r pas: Sabem el TOT (12 €) i el número de parts (6 iogurts). Volem saber el valor de cada PART (?).",
          "2n pas: Posa 12 a TOT, '?' a PART i 6 a la clau inferior (⏟).",
          "3r pas: 12 : 6 = 2 euros!"
        ]
      }
    ],
    2: [
      {
        id: "pdp_2_1",
        title: "El Preu de les Entrades de Cinema",
        lore: "Repartim el cost total entre els amics.",
        instruction: "Una colla de <strong>8 amics</strong> ha pagat <strong>72 euros en total</strong> per les seves entrades de cinema, que costen totes el mateix. <strong>Quants euros val cada entrada?</strong>",
        type: "general_problem",
        organizerType: "divisio_partitiva",
        expectedOp: "/",
        num1: 72,
        num2: 8,
        targetNumber: 9,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros en total",
          totVal: 72,
          partLabel: "euros cada entrada",
          partVal: "?",
          braceLabel: "amics",
          braceVal: 8
        },
        hints: [
          "1r pas: Sabem el TOT (72 €) i el número de parts (8 amics). Busquem el valor de cada PART (?).",
          "2n pas: Posa 72 a TOT, '?' a PART i 8 a la clau inferior (⏟).",
          "3r pas: 72 : 8 = 9 euros!"
        ]
      },
      {
        id: "pdp_2_2",
        title: "Les Cadires de les Files del Saló d'Actes",
        lore: "Organitzem el saló d'actes en files iguals.",
        instruction: "Hem col·locat <strong>96 cadires en total</strong> repartides en <strong>8 files iguals</strong>. <strong>Quantes cadires hi ha a cada fila?</strong>",
        type: "general_problem",
        organizerType: "divisio_partitiva",
        expectedOp: "/",
        num1: 96,
        num2: 8,
        targetNumber: 12,
        unitLabel: "cadires",
        organizerData: {
          totLabel: "cadires en total",
          totVal: 96,
          partLabel: "cadires a cada fila",
          partVal: "?",
          braceLabel: "files iguals",
          braceVal: 8
        },
        hints: [
          "1r pas: Sabem el TOT (96 cadires) i el número de parts (8 files). Busquem el valor de cada PART (?).",
          "2n pas: Posa 96 a TOT, '?' a PART i 8 a la clau inferior (⏟).",
          "3r pas: 96 : 8 = 12 cadires!"
        ]
      },
      {
        id: "pdp_2_3",
        title: "Els Equips del Torneig Esportiu",
        lore: "Fem equips amb el mateix nombre de participants.",
        instruction: "Al torneig s'han apuntat <strong>84 alumnes en total</strong> i s'han format <strong>7 equips iguals</strong>. <strong>Quants alumnes hi ha a cada equip?</strong>",
        type: "general_problem",
        organizerType: "divisio_partitiva",
        expectedOp: "/",
        num1: 84,
        num2: 7,
        targetNumber: 12,
        unitLabel: "alumnes",
        organizerData: {
          totLabel: "alumnes en total",
          totVal: 84,
          partLabel: "alumnes a cada equip",
          partVal: "?",
          braceLabel: "equips iguals",
          braceVal: 7
        },
        hints: [
          "1r pas: El TOT és 84 alumnes i el número de parts és 7 equips. Volem saber el valor de cada PART (?).",
          "2n pas: Posa 84 a TOT, '?' a PART i 7 a la clau inferior (⏟).",
          "3r pas: 84 : 7 = 12 alumnes!"
        ]
      },
      {
        id: "pdp_2_4",
        title: "Les Safates de Croissants del Forn",
        lore: "Repartim la pasta en safates iguals.",
        instruction: "El forner ha preparat <strong>90 croissants en total</strong> i els ha repartit en <strong>6 safates iguals</strong>. <strong>Quants croissants ha posat a cada safata?</strong>",
        type: "general_problem",
        organizerType: "divisio_partitiva",
        expectedOp: "/",
        num1: 90,
        num2: 6,
        targetNumber: 15,
        unitLabel: "croissants",
        organizerData: {
          totLabel: "croissants en total",
          totVal: 90,
          partLabel: "croissants cada safata",
          partVal: "?",
          braceLabel: "safates iguals",
          braceVal: 6
        },
        hints: [
          "1r pas: Sabem el TOT (90 croissants) i el número de parts (6 safates). Busquem el valor de cada PART (?).",
          "2n pas: Posa 90 a TOT, '?' a PART i 6 a la clau inferior (⏟).",
          "3r pas: 90 : 6 = 15 croissants!"
        ]
      },
      {
        id: "pdp_2_5",
        title: "Pàgines Diàries de Lectura",
        lore: "Planifiquem la lectura de la setmana.",
        instruction: "Vols llegir un conte de <strong>105 pàgines en total</strong> repartint-les a parts iguals durant els <strong>7 dies de la setmana</strong>. <strong>Quantes pàgines has de llegir cada dia?</strong>",
        type: "general_problem",
        organizerType: "divisio_partitiva",
        expectedOp: "/",
        num1: 105,
        num2: 7,
        targetNumber: 15,
        unitLabel: "pàgines",
        organizerData: {
          totLabel: "pàgines en total",
          totVal: 105,
          partLabel: "pàgines cada dia",
          partVal: "?",
          braceLabel: "dies",
          braceVal: 7
        },
        hints: [
          "1r pas: Sabem el TOT (105 pàgines) i el número de parts (7 dies). Busquem el valor de cada PART (?).",
          "2n pas: Posa 105 a TOT, '?' a PART i 7 a la clau inferior (⏟).",
          "3r pas: 105 : 7 = 15 pàgines!"
        ]
      }
    ],
    3: [
      {
        id: "pdp_3_1",
        title: "Repartint la Collita de Taronges",
        lore: "Cooperativa agrícola del poble.",
        instruction: "Un pagès ha recollit <strong>360 quilos de taronges</strong> i els ha repartit en <strong>15 caixes iguals</strong>. <strong>Quants quilos de taronges ha posat a cada caixa?</strong>",
        type: "general_problem",
        organizerType: "divisio_partitiva",
        expectedOp: "/",
        num1: 360,
        num2: 15,
        targetNumber: 24,
        unitLabel: "quilos",
        organizerData: {
          totLabel: "quilos en total",
          totVal: 360,
          partLabel: "quilos a cada caixa",
          partVal: "?",
          braceLabel: "caixes iguals",
          braceVal: 15
        },
        hints: [
          "1r pas: Sabem el TOT (360 kg) i el número de parts (15 caixes). Busquem el valor de cada PART (?).",
          "2n pas: Posa 360 a TOT, '?' a PART i 15 a la clau inferior (⏟).",
          "3r pas: 360 : 15 = 24 quilos!"
        ]
      },
      {
        id: "pdp_3_2",
        title: "El Preu de l'Autocar de les Colònies",
        lore: "Repartim la despesa del viatge entre l'alumnat.",
        instruction: "Llogar l'autocar costa <strong>450 euros en total</strong> i ho paguen a parts iguals entre <strong>18 alumnes</strong>. <strong>Quants euros ha de pagar cada alumne?</strong>",
        type: "general_problem",
        organizerType: "divisio_partitiva",
        expectedOp: "/",
        num1: 450,
        num2: 18,
        targetNumber: 25,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros en total",
          totVal: 450,
          partLabel: "euros cada alumne",
          partVal: "?",
          braceLabel: "alumnes",
          braceVal: 18
        },
        hints: [
          "1r pas: Sabem el TOT (450 €) i el número de parts (18 alumnes). Volem saber el valor de cada PART (?).",
          "2n pas: Posa 450 a TOT, '?' a PART i 18 a la clau inferior (⏟).",
          "3r pas: 450 : 18 = 25 euros!"
        ]
      },
      {
        id: "pdp_3_3",
        title: "Pagament a Terminis del Televisor",
        lore: "Comprem un electrodomèstic en quotes mensuals iguals.",
        instruction: "Un televisor costa <strong>648 euros en total</strong> i es paga en <strong>12 quotes mensuals iguals</strong>. <strong>Quants euros es paguen cada mes?</strong>",
        type: "general_problem",
        organizerType: "divisio_partitiva",
        expectedOp: "/",
        num1: 648,
        num2: 12,
        targetNumber: 54,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros en total",
          totVal: 648,
          partLabel: "euros cada mes",
          partVal: "?",
          braceLabel: "quotes mensuals",
          braceVal: 12
        },
        hints: [
          "1r pas: Sabem el TOT (648 €) i el número de parts (12 mesos). Busquem el valor de cada PART (?).",
          "2n pas: Posa 648 a TOT, '?' a PART i 12 a la clau inferior (⏟).",
          "3r pas: 648 : 12 = 54 euros!"
        ]
      },
      {
        id: "pdp_3_4",
        title: "Ampolles d'Oli a la Cooperativa",
        lore: "Repartim la producció en caixes iguals.",
        instruction: "S'han produït <strong>432 ampolles d'oli en total</strong> i es guarden en <strong>16 caixes iguals</strong>. <strong>Quantes ampolles van a cada caixa?</strong>",
        type: "general_problem",
        organizerType: "divisio_partitiva",
        expectedOp: "/",
        num1: 432,
        num2: 16,
        targetNumber: 27,
        unitLabel: "ampolles",
        organizerData: {
          totLabel: "ampolles en total",
          totVal: 432,
          partLabel: "ampolles a cada caixa",
          partVal: "?",
          braceLabel: "caixes iguals",
          braceVal: 16
        },
        hints: [
          "1r pas: El TOT és 432 ampolles i el número de parts és 16 caixes. Volem saber el valor de cada PART (?).",
          "2n pas: Posa 432 a TOT, '?' a PART i 16 a la clau inferior (⏟).",
          "3r pas: 432 : 16 = 27 ampolles!"
        ]
      },
      {
        id: "pdp_3_5",
        title: "Els Seients dels Vagons del Tren",
        lore: "Tots els vagons tenen el mateix nombre de places.",
        instruction: "Un tren d'alta velocitat té <strong>576 places en total</strong> repartides en <strong>9 vagons iguals</strong>. <strong>Quantes places té cada vagó?</strong>",
        type: "general_problem",
        organizerType: "divisio_partitiva",
        expectedOp: "/",
        num1: 576,
        num2: 9,
        targetNumber: 64,
        unitLabel: "places",
        organizerData: {
          totLabel: "places en total",
          totVal: 576,
          partLabel: "places cada vagó",
          partVal: "?",
          braceLabel: "vagons iguals",
          braceVal: 9
        },
        hints: [
          "1r pas: Sabem el TOT (576 places) i el número de parts (9 vagons). Busquem el valor de cada PART (?).",
          "2n pas: Posa 576 a TOT, '?' a PART i 9 a la clau inferior (⏟).",
          "3r pas: 576 : 9 = 64 places!"
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------------
     6. PROBLEMES DE DIVISIÓ QUOTATIVA (15 problemes en 3 nivells)
     (Sabem el TOT i el valor de cada part; volem saber el número de parts)
     ------------------------------------------------------------------------ */
  prob_div_quotativa: {
    1: [
      {
        id: "pdq_1_1",
        title: "Les Capses de Bombons",
        lore: "Exemple del model DIVISIÓ QUOTATIVA: sabem el TOT i el valor de cada part.",
        instruction: "Tinc <strong>20 bombons</strong> i els vull repartir en capses de manera que a cada capsa hi hagi <strong>5 bombons</strong>. <strong>Quantes capses necessitaré?</strong>",
        type: "general_problem",
        organizerType: "divisio_quotativa",
        expectedOp: "/",
        num1: 20,
        num2: 5,
        targetNumber: 4,
        unitLabel: "capses",
        organizerData: {
          totLabel: "bombons en total",
          totVal: 20,
          partLabel: "bombons a cada capsa",
          partVal: 5,
          braceLabel: "capses necessitaré",
          braceVal: "?"
        },
        hints: [
          "1r pas (Esquema): Sabem el TOT (20 bombons) i el valor de cada PART (5 bombons per capsa). Busquem el número de parts (?) a la clau inferior.",
          "2n pas (Organitzador): Posa 20 a TOT, 5 a PART i '?' a la clau inferior (⏟).",
          "3r pas (Operació): 20 : 5 = 4 capses!"
        ]
      },
      {
        id: "pdq_1_2",
        title: "Envasant Ous en Ouers de 6",
        lore: "Agrupem els ous de 6 en 6.",
        instruction: "A la granja s'han recollit <strong>18 ous en total</strong> i es guarden en capses de <strong>6 ous a cada capsa</strong>. <strong>Quantes capses s'ompliran?</strong>",
        type: "general_problem",
        organizerType: "divisio_quotativa",
        expectedOp: "/",
        num1: 18,
        num2: 6,
        targetNumber: 3,
        unitLabel: "capses",
        organizerData: {
          totLabel: "ous en total",
          totVal: 18,
          partLabel: "ous a cada capsa",
          partVal: 6,
          braceLabel: "capses s'ompliran",
          braceVal: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (18 ous) i el valor de cada PART (6 ous). Busquem el número de capses (?) a la clau inferior.",
          "2n pas: Posa 18 a TOT, 6 a PART i '?' a la clau inferior (⏟).",
          "3r pas: 18 : 6 = 3 capses!"
        ]
      },
      {
        id: "pdq_1_3",
        title: "Equips de Bàsquet al Pati",
        lore: "Fem equips de 5 jugadors.",
        instruction: "Al pati hi ha <strong>30 alumnes en total</strong> i volen fer equips de <strong>5 alumnes a cada equip</strong>. <strong>Quants equips podran formar?</strong>",
        type: "general_problem",
        organizerType: "divisio_quotativa",
        expectedOp: "/",
        num1: 30,
        num2: 5,
        targetNumber: 6,
        unitLabel: "equips",
        organizerData: {
          totLabel: "alumnes en total",
          totVal: 30,
          partLabel: "alumnes a cada equip",
          partVal: 5,
          braceLabel: "equips podran formar",
          braceVal: "?"
        },
        hints: [
          "1r pas: El TOT és 30 alumnes i cada PART és 5 alumnes. Volem saber el número d'equips (?) a la clau inferior.",
          "2n pas: Posa 30 a TOT, 5 a PART i '?' a la clau inferior (⏟).",
          "3r pas: 30 : 5 = 6 equips!"
        ]
      },
      {
        id: "pdq_1_4",
        title: "Bosses de Taronges al Mercat",
        lore: "Preparem bosses de 4 quilos.",
        instruction: "Tenim <strong>28 quilos de taronges en total</strong> i els posem en bosses de <strong>4 quilos a cada bossa</strong>. <strong>Quantes bosses prepararem?</strong>",
        type: "general_problem",
        organizerType: "divisio_quotativa",
        expectedOp: "/",
        num1: 28,
        num2: 4,
        targetNumber: 7,
        unitLabel: "bosses",
        organizerData: {
          totLabel: "quilos en total",
          totVal: 28,
          partLabel: "quilos a cada bossa",
          partVal: 4,
          braceLabel: "bosses prepararem",
          braceVal: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (28 kg) i cada PART (4 kg). Busquem el número de bosses (?) a la clau inferior.",
          "2n pas: Posa 28 a TOT, 4 a PART i '?' a la clau inferior (⏟).",
          "3r pas: 28 : 4 = 7 bosses!"
        ]
      },
      {
        id: "pdq_1_5",
        title: "Comprant Llibretes a la Papereria",
        lore: "Quantes llibretes podem comprar amb els nostres diners?",
        instruction: "Portes <strong>24 euros en total</strong> i vols comprar llibretes que costen <strong>3 euros cada llibreta</strong>. <strong>Quantes llibretes pots comprar?</strong>",
        type: "general_problem",
        organizerType: "divisio_quotativa",
        expectedOp: "/",
        num1: 24,
        num2: 3,
        targetNumber: 8,
        unitLabel: "llibretes",
        organizerData: {
          totLabel: "euros en total",
          totVal: 24,
          partLabel: "euros cada llibreta",
          partVal: 3,
          braceLabel: "llibretes",
          braceVal: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (24 €) i el valor de cada PART (3 €). Volem saber el número de llibretes (?) a la clau inferior.",
          "2n pas: Posa 24 a TOT, 3 a PART i '?' a la clau inferior (⏟).",
          "3r pas: 24 : 3 = 8 llibretes!"
        ]
      }
    ],
    2: [
      {
        id: "pdq_2_1",
        title: "Envasant Galetes al Forn",
        lore: "Agrupem galetes en caixes iguals.",
        instruction: "Al forn de pa han cuit <strong>96 galetes en total</strong> i les volen guardar en caixes posant <strong>8 galetes a cada caixa</strong>. <strong>Quantes caixes podran omplir?</strong>",
        type: "general_problem",
        organizerType: "divisio_quotativa",
        expectedOp: "/",
        num1: 96,
        num2: 8,
        targetNumber: 12,
        unitLabel: "caixes",
        organizerData: {
          totLabel: "galetes en total",
          totVal: 96,
          partLabel: "galetes a cada caixa",
          partVal: 8,
          braceLabel: "caixes ompliran",
          braceVal: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (96 galetes) i el valor de cada PART (8 galetes). Busquem el número de caixes (?) a la clau inferior.",
          "2n pas: Posa 96 a TOT, 8 a PART i '?' a la clau inferior (⏟).",
          "3r pas: 96 : 8 = 12 caixes!"
        ]
      },
      {
        id: "pdq_2_2",
        title: "Les Taules del Menjador Escolar",
        lore: "Quantes taules necessitem per a l'alumnat?",
        instruction: "Al menjador es queden a dinar <strong>84 alumnes en total</strong>. Si a cada taula hi caben <strong>6 alumnes</strong>, <strong>quantes taules es necessiten?</strong>",
        type: "general_problem",
        organizerType: "divisio_quotativa",
        expectedOp: "/",
        num1: 84,
        num2: 6,
        targetNumber: 14,
        unitLabel: "taules",
        organizerData: {
          totLabel: "alumnes en total",
          totVal: 84,
          partLabel: "alumnes a cada taula",
          partVal: 6,
          braceLabel: "taules es necessiten",
          braceVal: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (84 alumnes) i cada PART (6 alumnes per taula). Busquem el número de taules (?) a la clau inferior.",
          "2n pas: Posa 84 a TOT, 6 a PART i '?' a la clau inferior (⏟).",
          "3r pas: 84 : 6 = 14 taules!"
        ]
      },
      {
        id: "pdq_2_3",
        title: "Garrafes d'Aigua de 5 Litres",
        lore: "Embotellem l'aigua d'una font.",
        instruction: "Tenim <strong>75 litres d'aigua en total</strong> i els volem posar en garrafes on hi caben <strong>5 litres a cada garrafa</strong>. <strong>Quantes garrafes omplirem?</strong>",
        type: "general_problem",
        organizerType: "divisio_quotativa",
        expectedOp: "/",
        num1: 75,
        num2: 5,
        targetNumber: 15,
        unitLabel: "garrafes",
        organizerData: {
          totLabel: "litres en total",
          totVal: 75,
          partLabel: "litres a cada garrafa",
          partVal: 5,
          braceLabel: "garrafes omplirem",
          braceVal: "?"
        },
        hints: [
          "1r pas: El TOT és 75 litres i cada PART és 5 litres. Volem saber el número de garrafes (?) a la clau inferior.",
          "2n pas: Posa 75 a TOT, 5 a PART i '?' a la clau inferior (⏟).",
          "3r pas: 75 : 5 = 15 garrafes!"
        ]
      },
      {
        id: "pdq_2_4",
        title: "Àlbum de Fotografies de les Colònies",
        lore: "Enganxem el mateix nombre de fotos a cada pàgina.",
        instruction: "Hem imprès <strong>90 fotografies en total</strong> de les colònies i en posem <strong>6 fotografies a cada pàgina</strong> de l'àlbum. <strong>Quantes pàgines omplirem?</strong>",
        type: "general_problem",
        organizerType: "divisio_quotativa",
        expectedOp: "/",
        num1: 90,
        num2: 6,
        targetNumber: 15,
        unitLabel: "pàgines",
        organizerData: {
          totLabel: "fotografies en total",
          totVal: 90,
          partLabel: "fotografies cada pàgina",
          partVal: 6,
          braceLabel: "pàgines omplirem",
          braceVal: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (90 fotos) i el valor de cada PART (6 fotos). Busquem el número de pàgines (?) a la clau inferior.",
          "2n pas: Posa 90 a TOT, 6 a PART i '?' a la clau inferior (⏟).",
          "3r pas: 90 : 6 = 15 pàgines!"
        ]
      },
      {
        id: "pdq_2_5",
        title: "Packs de Llaunes de Refresc",
        lore: "Agrupem les llaunes en packs de 6.",
        instruction: "A la festa hi ha <strong>108 llaunes en total</strong> agrupades en packs de <strong>6 llaunes a cada pack</strong>. <strong>Quants packs hi ha?</strong>",
        type: "general_problem",
        organizerType: "divisio_quotativa",
        expectedOp: "/",
        num1: 108,
        num2: 6,
        targetNumber: 18,
        unitLabel: "packs",
        organizerData: {
          totLabel: "llaunes en total",
          totVal: 108,
          partLabel: "llaunes a cada pack",
          partVal: 6,
          braceLabel: "packs hi ha",
          braceVal: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (108 llaunes) i cada PART (6 llaunes). Busquem el número de packs (?) a la clau inferior.",
          "2n pas: Posa 108 a TOT, 6 a PART i '?' a la clau inferior (⏟).",
          "3r pas: 108 : 6 = 18 packs!"
        ]
      }
    ],
    3: [
      {
        id: "pdq_3_1",
        title: "Les Safates d'Ous del Mercat",
        lore: "Envasem ous a la parada del mercat.",
        instruction: "Un granger té <strong>180 ous en total</strong> i els vol col·locar en safates de cartró on hi caben <strong>12 ous a cada safata</strong>. <strong>Quantes safates podrà omplir?</strong>",
        type: "general_problem",
        organizerType: "divisio_quotativa",
        expectedOp: "/",
        num1: 180,
        num2: 12,
        targetNumber: 15,
        unitLabel: "safates",
        organizerData: {
          totLabel: "ous en total",
          totVal: 180,
          partLabel: "ous a cada safata",
          partVal: 12,
          braceLabel: "safates necessitarà",
          braceVal: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (180 ous) i el valor de cada PART (12 ous). Busquem el número de safates (?) a la clau inferior.",
          "2n pas: Posa 180 a TOT, 12 a PART i '?' a la clau inferior (⏟).",
          "3r pas: 180 : 12 = 15 safates!"
        ]
      },
      {
        id: "pdq_3_2",
        title: "Els Autocars per a l'Excursió",
        lore: "Quants autocars necessitem per a tota l'escola?",
        instruction: "A l'excursió de final de curs hi van <strong>220 persones en total</strong>. Si a cada autocar hi caben <strong>55 persones</strong>, <strong>quants autocars cal llogar?</strong>",
        type: "general_problem",
        organizerType: "divisio_quotativa",
        expectedOp: "/",
        num1: 220,
        num2: 55,
        targetNumber: 4,
        unitLabel: "autocars",
        organizerData: {
          totLabel: "persones en total",
          totVal: 220,
          partLabel: "persones cada autocar",
          partVal: 55,
          braceLabel: "autocars cal llogar",
          braceVal: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (220 persones) i cada PART (55 persones per autocar). Busquem el número d'autocars (?) a la clau inferior.",
          "2n pas: Posa 220 a TOT, 55 a PART i '?' a la clau inferior (⏟).",
          "3r pas: 220 : 55 = 4 autocars!"
        ]
      },
      {
        id: "pdq_3_3",
        title: "Estalviant Setmana a Setmana",
        lore: "Quantes setmanes necessito per reunir els diners?",
        instruction: "Vols estalviar <strong>240 euros en total</strong> per a una tauleta digital. Si estalvies <strong>15 euros cada setmana</strong>, <strong>quantes setmanes necessitaràs?</strong>",
        type: "general_problem",
        organizerType: "divisio_quotativa",
        expectedOp: "/",
        num1: 240,
        num2: 15,
        targetNumber: 16,
        unitLabel: "setmanes",
        organizerData: {
          totLabel: "euros en total",
          totVal: 240,
          partLabel: "euros cada setmana",
          partVal: 15,
          braceLabel: "setmanes necessitaràs",
          braceVal: "?"
        },
        hints: [
          "1r pas: El TOT és 240 € i cada PART és 15 €. Busquem el número de setmanes (?) a la clau inferior.",
          "2n pas: Posa 240 a TOT, 15 a PART i '?' a la clau inferior (⏟).",
          "3r pas: 240 : 15 = 16 setmanes!"
        ]
      },
      {
        id: "pdq_3_4",
        title: "Caixes de Llibres per a la Biblioteca",
        lore: "Empaquetem llibres de 24 en 24.",
        instruction: "Una editorial envia <strong>336 llibres en total</strong> guardats en caixes on hi caben <strong>24 llibres a cada caixa</strong>. <strong>Quantes caixes ha enviat?</strong>",
        type: "general_problem",
        organizerType: "divisio_quotativa",
        expectedOp: "/",
        num1: 336,
        num2: 24,
        targetNumber: 14,
        unitLabel: "caixes",
        organizerData: {
          totLabel: "llibres en total",
          totVal: 336,
          partLabel: "llibres a cada caixa",
          partVal: 24,
          braceLabel: "caixes enviades",
          braceVal: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (336 llibres) i cada PART (24 llibres). Busquem el número de caixes (?) a la clau inferior.",
          "2n pas: Posa 336 a TOT, 24 a PART i '?' a la clau inferior (⏟).",
          "3r pas: 336 : 24 = 14 caixes!"
        ]
      },
      {
        id: "pdq_3_5",
        title: "Xarxes de Pilotes d'Educació Física",
        lore: "Guardem les pilotes al magatzem del gimnàs.",
        instruction: "Al gimnàs tenim <strong>144 pilotes en total</strong> i les guardem en xarxes on hi caben <strong>16 pilotes a cada xarxa</strong>. <strong>Quantes xarxes necessitem?</strong>",
        type: "general_problem",
        organizerType: "divisio_quotativa",
        expectedOp: "/",
        num1: 144,
        num2: 16,
        targetNumber: 9,
        unitLabel: "xarxes",
        organizerData: {
          totLabel: "pilotes en total",
          totVal: 144,
          partLabel: "pilotes a cada xarxa",
          partVal: 16,
          braceLabel: "xarxes necessitem",
          braceVal: "?"
        },
        hints: [
          "1r pas: Sabem el TOT (144 pilotes) i cada PART (16 pilotes). Busquem el número de xarxes (?) a la clau inferior.",
          "2n pas: Posa 144 a TOT, 16 a PART i '?' a la clau inferior (⏟).",
          "3r pas: 144 : 16 = 9 xarxes!"
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------------
     7. PROBLEMES BARREJATS I DE 2 OPERACIONS (15 problemes en 3 nivells)
     ------------------------------------------------------------------------ */
  prob_barrejats: {
    1: [
      {
        id: "pb_1_1",
        title: "El Canvi de la Compra al Supermercat (2 Operacions)",
        lore: "Primer sumem el que gastem i després calculem el canvi!",
        instruction: "Al supermercat compres un sac de pinso que val <strong>18 euros</strong> i una capsa de detergent que val <strong>14 euros</strong> (en total gastes <strong>32 euros</strong>). Si pagues amb un bitllet de <strong>50 euros</strong>, <strong>quants euros et tornaran de canvi?</strong>",
        type: "general_problem",
        isTwoStep: true,
        organizerType: "resta",
        step1Expected: { a: 18, op: "+", b: 14, res: 32 },
        expectedOp: "-",
        num1: 50,
        num2: 32,
        targetNumber: 18,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros bitllet entregat",
          totVal: 50,
          part1Label: "euros gastats (18 + 14)",
          part1Val: 32,
          part2Label: "euros de canvi",
          part2Val: "?"
        },
        hints: [
          "1r pas (Operació 1 - Suma): Calcula quant gastes en total: 18 + 14 = 32 euros.",
          "2n pas (Organitzador TOT-PART de Resta): El TOT és el bitllet de 50 €, una PART és la despesa (32 €) i l'altra PART és el canvi (?).",
          "3r pas (Operació 2 - Resta): 50 - 32 = 18 euros de canvi!"
        ]
      },
      {
        id: "pb_1_2",
        title: "Els Packs d'Aigua i les Ampolles Soltes (2 Operacions)",
        lore: "Primer multipliquem els packs i després hi sumem les ampolles soltes!",
        instruction: "Al carretó poses <strong>6 packs d'aigua</strong> de <strong>6 ampolles cadascun</strong> (que són <strong>36 ampolles</strong> en packs) i a més agafes <strong>5 ampolles soltes</strong>. <strong>Quantes ampolles d'aigua portes en total?</strong>",
        type: "general_problem",
        isTwoStep: true,
        organizerType: "suma",
        step1Expected: { a: 6, op: "*", b: 6, res: 36 },
        expectedOp: "+",
        num1: 36,
        num2: 5,
        targetNumber: 41,
        unitLabel: "ampolles",
        organizerData: {
          totLabel: "ampolles en total",
          totVal: "?",
          part1Label: "ampolles en packs (6 × 6)",
          part1Val: 36,
          part2Label: "ampolles soltes",
          part2Val: 5
        },
        hints: [
          "1r pas (Operació 1 - Multiplicació): Calcula quantes ampolles hi ha als 6 packs: 6 × 6 = 36 ampolles.",
          "2n pas (Organitzador TOT-PART de Suma): Les dues PARTS són 36 ampolles en packs i 5 ampolles soltes. Busquem el TOT (?).",
          "3r pas (Operació 2 - Suma): 36 + 5 = 41 ampolles en total!"
        ]
      },
      {
        id: "pb_1_3",
        title: "El Val de la Llibreria i els Còmics (2 Operacions)",
        lore: "Primer multipliquem el preu dels còmics i després restem del val!",
        instruction: "Tens un val de <strong>100 euros en total</strong> per a la llibreria. Compres <strong>4 còmics</strong> a <strong>16 euros cadascun</strong> (que costen <strong>64 euros</strong>). <strong>Quants euros et queden encara al val?</strong>",
        type: "general_problem",
        isTwoStep: true,
        organizerType: "resta",
        step1Expected: { a: 4, op: "*", b: 16, res: 64 },
        expectedOp: "-",
        num1: 100,
        num2: 64,
        targetNumber: 36,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros del val en total",
          totVal: 100,
          part1Label: "euros dels 4 còmics",
          part1Val: 64,
          part2Label: "euros que queden al val",
          part2Val: "?"
        },
        hints: [
          "1r pas (Operació 1 - Multiplicació): Calcula el preu dels 4 còmics: 4 × 16 = 64 euros.",
          "2n pas (Organitzador TOT-PART de Resta): El TOT és 100 €, la PART gastada és 64 € i busquem la PART que queda (?).",
          "3r pas (Operació 2 - Resta): 100 - 64 = 36 euros!"
        ]
      },
      {
        id: "pb_1_4",
        title: "La Collita del Matí i de la Tarda en Caixes (2 Operacions)",
        lore: "Primer sumem tota la collita i després la repartim en caixes iguals!",
        instruction: "Un hortolà recull <strong>45 quilos</strong> de tomàquets al matí i <strong>39 quilos</strong> a la tarda (en total <strong>84 quilos</strong>). Els reparteix a parts iguals en <strong>7 caixes</strong>. <strong>Quants quilos posa a cada caixa?</strong>",
        type: "general_problem",
        isTwoStep: true,
        organizerType: "divisio_partitiva",
        step1Expected: { a: 45, op: "+", b: 39, res: 84 },
        expectedOp: "/",
        num1: 84,
        num2: 7,
        targetNumber: 12,
        unitLabel: "quilos",
        organizerData: {
          totLabel: "quilos collits en total",
          totVal: 84,
          partLabel: "quilos a cada caixa",
          partVal: "?",
          braceLabel: "caixes iguals",
          braceVal: 7
        },
        hints: [
          "1r pas (Operació 1 - Suma): Calcula tots els quilos recollits: 45 + 39 = 84 quilos.",
          "2n pas (Organitzador de Divisió Partitiva): El TOT és 84 quilos, la clau inferior és 7 caixes i busquem el valor de cada PART (?).",
          "3r pas (Operació 2 - Divisió): 84 : 7 = 12 quilos a cada caixa!"
        ]
      },
      {
        id: "pb_1_5",
        title: "Estalvi Setmanal per a la Bicicleta (2 Operacions)",
        lore: "Primer restem el que ja tenim i després dividim entre les setmanes!",
        instruction: "Una bicicleta val <strong>180 euros</strong>. Si ja tens <strong>60 euros</strong> estalviats (et falten <strong>120 euros</strong>) i vols reunir el que et falta durant <strong>6 setmanes</strong> a parts iguals, <strong>quants euros has d'estalviar cada setmana?</strong>",
        type: "general_problem",
        isTwoStep: true,
        organizerType: "divisio_partitiva",
        step1Expected: { a: 180, op: "-", b: 60, res: 120 },
        expectedOp: "/",
        num1: 120,
        num2: 6,
        targetNumber: 20,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros que falten reunir",
          totVal: 120,
          partLabel: "euros cada setmana",
          partVal: "?",
          braceLabel: "setmanes",
          braceVal: 6
        },
        hints: [
          "1r pas (Operació 1 - Resta): Calcula quants diners et falten: 180 - 60 = 120 euros.",
          "2n pas (Organitzador de Divisió Partitiva): El TOT per reunir és 120 €, el número de parts és 6 setmanes i busquem el valor de cada PART (?).",
          "3r pas (Operació 2 - Divisió): 120 : 6 = 20 euros cada setmana!"
        ]
      }
    ],
    2: [
      {
        id: "pb_2_1",
        title: "Places Buides a l'Autocar Escolar (2 Operacions)",
        lore: "Sumem els viatgers i restem del total de seients.",
        instruction: "Un autocar té <strong>60 seients en total</strong>. Hi pugen <strong>26 alumnes de 6è A</strong> i <strong>25 alumnes de 6è B</strong> (en total <strong>51 ocupats</strong>). <strong>Quants seients queden buits?</strong>",
        type: "general_problem",
        isTwoStep: true,
        organizerType: "resta",
        step1Expected: { a: 26, op: "+", b: 25, res: 51 },
        expectedOp: "-",
        num1: 60,
        num2: 51,
        targetNumber: 9,
        unitLabel: "seients",
        organizerData: {
          totLabel: "seients en total",
          totVal: 60,
          part1Label: "seients ocupats",
          part1Val: 51,
          part2Label: "seients buits",
          part2Val: "?"
        },
        hints: [
          "1r pas (Operació 1 - Suma): Suma els alumnes que han pujat: 26 + 25 = 51 seients ocupats.",
          "2n pas (Organitzador de Resta): El TOT és 60 seients, una PART és 51 ocupats i l'altra PART és els seients buits (?).",
          "3r pas (Operació 2 - Resta): 60 - 51 = 9 seients buits!"
        ]
      },
      {
        id: "pb_2_2",
        title: "Les Safates d'Ous Sense Trencar (2 Operacions)",
        lore: "Restem els ous trencats i agrupem la resta en safates de 6.",
        instruction: "A la parada del mercat tenen <strong>150 ous</strong>, però se'n trenquen <strong>6 ous</strong> (queden <strong>144 ous bons</strong>). Els envasen en safates posant <strong>6 ous a cada safata</strong>. <strong>Quantes safates ompliran?</strong>",
        type: "general_problem",
        isTwoStep: true,
        organizerType: "divisio_quotativa",
        step1Expected: { a: 150, op: "-", b: 6, res: 144 },
        expectedOp: "/",
        num1: 144,
        num2: 6,
        targetNumber: 24,
        unitLabel: "safates",
        organizerData: {
          totLabel: "ous bons en total",
          totVal: 144,
          partLabel: "ous a cada safata",
          partVal: 6,
          braceLabel: "safates ompliran",
          braceVal: "?"
        },
        hints: [
          "1r pas (Operació 1 - Resta): Ous bons = 150 - 6 = 144 ous.",
          "2n pas (Organitzador de Divisió Quotativa): El TOT d'ous bons és 144, cada PART és 6 ous per safata i busquem el número de safates (?) a la clau inferior.",
          "3r pas (Operació 2 - Divisió): 144 : 6 = 24 safates!"
        ]
      },
      {
        id: "pb_2_3",
        title: "La Parada Solidària de Pastissos (2 Operacions)",
        lore: "Multipliquem els ingressos i descomptem la despesa d'ingredients.",
        instruction: "A la fira escolar heu venut <strong>15 pastissos</strong> a <strong>12 euros cadascun</strong> (recaptant <strong>180 euros</strong>). Si comprar els ingredients va costar <strong>40 euros</strong>, <strong>quants euros de benefici net han quedat?</strong>",
        type: "general_problem",
        isTwoStep: true,
        organizerType: "resta",
        step1Expected: { a: 15, op: "*", b: 12, res: 180 },
        expectedOp: "-",
        num1: 180,
        num2: 40,
        targetNumber: 140,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros recaptats en total",
          totVal: 180,
          part1Label: "euros despesa ingredients",
          part1Val: 40,
          part2Label: "euros benefici net",
          part2Val: "?"
        },
        hints: [
          "1r pas (Operació 1 - Multiplicació): Calcula els diners recaptats: 15 × 12 = 180 euros.",
          "2n pas (Organitzador de Resta): El TOT recaptat és 180 €, una PART és la despesa (40 €) i busquem l'altra PART de benefici (?).",
          "3r pas (Operació 2 - Resta): 180 - 40 = 140 euros!"
        ]
      },
      {
        id: "pb_2_4",
        title: "Les Mandarines del Menjador (2 Operacions)",
        lore: "Sumem els alumnes de cada taula i multipliquem pel nombre de taules.",
        instruction: "Al menjador hi ha <strong>8 taules</strong>. A cada taula hi seuen <strong>5 nens i 4 nenes</strong> (és a dir, <strong>9 alumnes a cada taula</strong>). <strong>Quants alumnes hi ha en total a les 8 taules?</strong>",
        type: "general_problem",
        isTwoStep: true,
        organizerType: "multiplicacio",
        step1Expected: { a: 5, op: "+", b: 4, res: 9 },
        expectedOp: "*",
        num1: 9,
        num2: 8,
        targetNumber: 72,
        unitLabel: "alumnes",
        organizerData: {
          totLabel: "alumnes en total",
          totVal: "?",
          partLabel: "alumnes a cada taula",
          partVal: 9,
          braceLabel: "taules",
          braceVal: 8
        },
        hints: [
          "1r pas (Operació 1 - Suma): Alumnes a cada taula = 5 + 4 = 9 alumnes.",
          "2n pas (Organitzador de Multiplicació): Cada PART val 9 alumnes, la clau inferior és 8 taules i busquem el TOT (?).",
          "3r pas (Operació 2 - Multiplicació): 9 × 8 = 72 alumnes!"
        ]
      },
      {
        id: "pb_2_5",
        title: "Subvenció per a l'Autocar de Colònies (2 Operacions)",
        lore: "Restem l'ajuda de l'AFA i repartim la resta entre els alumnes.",
        instruction: "L'autocar de les colònies costa <strong>450 euros</strong>. L'AFA de l'escola en paga <strong>90 euros</strong> (queden <strong>360 euros</strong> per pagar) i la resta es reparteix en parts iguals entre <strong>18 alumnes</strong>. <strong>Quants euros paga cada alumne?</strong>",
        type: "general_problem",
        isTwoStep: true,
        organizerType: "divisio_partitiva",
        step1Expected: { a: 450, op: "-", b: 90, res: 360 },
        expectedOp: "/",
        num1: 360,
        num2: 18,
        targetNumber: 20,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros a repartir",
          totVal: 360,
          partLabel: "euros cada alumne",
          partVal: "?",
          braceLabel: "alumnes",
          braceVal: 18
        },
        hints: [
          "1r pas (Operació 1 - Resta): Descomptem els 90 € de l'AFA: 450 - 90 = 360 euros.",
          "2n pas (Organitzador de Divisió Partitiva): El TOT a repartir és 360 €, el número de parts és 18 alumnes i busquem el valor de cada PART (?).",
          "3r pas (Operació 2 - Divisió): 360 : 18 = 20 euros cada alumne!"
        ]
      }
    ],
    3: [
      {
        id: "pb_3_1",
        title: "L'Equipació d'Atletisme amb Descompte (2 Operacions)",
        lore: "Multipliquem el cost de les equipacions i apliquem la rebaixa.",
        instruction: "El club compra <strong>12 equipacions</strong> que valen <strong>25 euros cadascuna</strong> (en total <strong>300 euros</strong>). La botiga els fa un descompte de <strong>30 euros</strong>. <strong>Quants euros paguen finalment?</strong>",
        type: "general_problem",
        isTwoStep: true,
        organizerType: "resta",
        step1Expected: { a: 12, op: "*", b: 25, res: 300 },
        expectedOp: "-",
        num1: 300,
        num2: 30,
        targetNumber: 270,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros preu inicial",
          totVal: 300,
          part1Label: "euros de descompte",
          part1Val: 30,
          part2Label: "euros a pagar finalment",
          part2Val: "?"
        },
        hints: [
          "1r pas (Operació 1 - Multiplicació): 12 × 25 = 300 euros abans del descompte.",
          "2n pas (Organitzador de Resta): El TOT és 300 €, una PART és el descompte (30 €) i l'altra PART és el preu final (?).",
          "3r pas (Operació 2 - Resta): 300 - 30 = 270 euros!"
        ]
      },
      {
        id: "pb_3_2",
        title: "Empaquetant Pomelos i Taronges (2 Operacions)",
        lore: "Sumem tota la fruita i calculem quantes caixes de 15 kg omplirem.",
        instruction: "Un pagès té <strong>190 quilos de taronges</strong> i <strong>110 quilos de pomelos</strong> (en total <strong>300 quilos</strong>). Els vol guardar en caixes posant <strong>15 quilos a cada caixa</strong>. <strong>Quantes caixes necessitarà?</strong>",
        type: "general_problem",
        isTwoStep: true,
        organizerType: "divisio_quotativa",
        step1Expected: { a: 190, op: "+", b: 110, res: 300 },
        expectedOp: "/",
        num1: 300,
        num2: 15,
        targetNumber: 20,
        unitLabel: "caixes",
        organizerData: {
          totLabel: "quilos de fruita en total",
          totVal: 300,
          partLabel: "quilos a cada caixa",
          partVal: 15,
          braceLabel: "caixes necessitarà",
          braceVal: "?"
        },
        hints: [
          "1r pas (Operació 1 - Suma): Suma tota la fruita: 190 + 110 = 300 quilos.",
          "2n pas (Organitzador de Divisió Quotativa): El TOT és 300 kg, cada PART és 15 kg per caixa i busquem el número de caixes (?) a la clau inferior.",
          "3r pas (Operació 2 - Divisió): 300 : 15 = 20 caixes!"
        ]
      },
      {
        id: "pb_3_3",
        title: "Les Capses de Retoladors que Queden (2 Operacions)",
        lore: "Multipliquem les capses i restem els retoladors gastats.",
        instruction: "A l'escola han comprat <strong>8 capses</strong> amb <strong>24 retoladors a cada capsa</strong> (en total <strong>192 retoladors</strong>). Si a final de trimestre se n'han gastat <strong>35 retoladors</strong>, <strong>quants retoladors nous queden?</strong>",
        type: "general_problem",
        isTwoStep: true,
        organizerType: "resta",
        step1Expected: { a: 8, op: "*", b: 24, res: 192 },
        expectedOp: "-",
        num1: 192,
        num2: 35,
        targetNumber: 157,
        unitLabel: "retoladors",
        organizerData: {
          totLabel: "retoladors comprats en total",
          totVal: 192,
          part1Label: "retoladors gastats",
          part1Val: 35,
          part2Label: "retoladors que queden",
          part2Val: "?"
        },
        hints: [
          "1r pas (Operació 1 - Multiplicació): 8 × 24 = 192 retoladors en total.",
          "2n pas (Organitzador de Resta): El TOT és 192, una PART és 35 gastats i busquem l'altra PART que queda (?).",
          "3r pas (Operació 2 - Resta): 192 - 35 = 157 retoladors!"
        ]
      },
      {
        id: "pb_3_4",
        title: "Repartint el Premi del Concurs Literari (2 Operacions)",
        lore: "Sumem els dos premis i els repartim a parts iguals entre l'equip.",
        instruction: "Un grup de <strong>6 alumnes</strong> ha guanyat un primer premi de <strong>150 euros</strong> i un accèssit de <strong>90 euros</strong> (en total <strong>240 euros</strong>). Si es reparteixen el total a parts iguals entre els <strong>6 alumnes</strong>, <strong>quants euros rep cadascú?</strong>",
        type: "general_problem",
        isTwoStep: true,
        organizerType: "divisio_partitiva",
        step1Expected: { a: 150, op: "+", b: 90, res: 240 },
        expectedOp: "/",
        num1: 240,
        num2: 6,
        targetNumber: 40,
        unitLabel: "euros",
        organizerData: {
          totLabel: "euros de premi en total",
          totVal: 240,
          partLabel: "euros cada alumne",
          partVal: "?",
          braceLabel: "alumnes",
          braceVal: 6
        },
        hints: [
          "1r pas (Operació 1 - Suma): 150 + 90 = 240 euros de premi total.",
          "2n pas (Organitzador de Divisió Partitiva): El TOT és 240 €, la clau inferior és 6 alumnes i busquem el valor de cada PART (?).",
          "3r pas (Operació 2 - Divisió): 240 : 6 = 40 euros cada alumne!"
        ]
      },
      {
        id: "pb_3_5",
        title: "Cadires per al Festival de Música (2 Operacions)",
        lore: "Multipliquem les files del matí i hi sumem les cadires extra de la tarda.",
        instruction: "Per al festival hem posat <strong>12 files</strong> amb <strong>15 cadires a cada fila</strong> (que són <strong>180 cadires</strong>) i després hem afegit <strong>45 cadires més</strong> al fons. <strong>Quantes cadires hi ha en total?</strong>",
        type: "general_problem",
        isTwoStep: true,
        organizerType: "suma",
        step1Expected: { a: 12, op: "*", b: 15, res: 180 },
        expectedOp: "+",
        num1: 180,
        num2: 45,
        targetNumber: 225,
        unitLabel: "cadires",
        organizerData: {
          totLabel: "cadires en total",
          totVal: "?",
          part1Label: "cadires a les files (12 × 15)",
          part1Val: 180,
          part2Label: "cadires afegides al fons",
          part2Val: 45
        },
        hints: [
          "1r pas (Operació 1 - Multiplicació): 12 × 15 = 180 cadires a les files.",
          "2n pas (Organitzador de Suma): Les dues PARTS són 180 cadires de les files i 45 cadires extra. Busquem el TOT (?).",
          "3r pas (Operació 2 - Suma): 180 + 45 = 225 cadires en total!"
        ]
      }
    ]
  }
};

const ORGANIZER_MODELS_INFO = {
  suma: {
    id: "suma",
    title: "SUMA",
    subtitle: "Sabem les parts i busquem el TOT",
    opSymbol: "+",
    totStatus: "?",
    part1Status: "✓",
    part2Status: "✓",
    isMultiPart: false,
    bullets: [
      "Sabem les parts.",
      "Volem saber el tot.",
      "Les parts poden ser iguals o no."
    ],
    exampleProblem: "Tinc una bossa amb 5 caramels de maduixa i una altra bossa amb 3 caramels de menta. Quants caramels tinc en total?",
    exampleOperation: "5 + 3 = 8 caramels",
    exampleDetails: "Cercle TOT = ? (caramels en total) · Cercle PART 1 = 5 (caramels de maduixa) · Cercle PART 2 = 3 (caramels de menta)."
  },
  resta: {
    id: "resta",
    title: "RESTA",
    subtitle: "Sabem el TOT i una part; busquem l'altra PART",
    opSymbol: "-",
    totStatus: "✓",
    part1Status: "✓",
    part2Status: "?",
    isMultiPart: false,
    bullets: [
      "Sabem el tot i una part.",
      "Volem saber l'altra part."
    ],
    exampleProblem: "En un arbre hi ha 10 ocells. Si 4 ocells marxen volant, quants ocells queden a l'arbre?",
    exampleOperation: "10 − 4 = 6 ocells",
    exampleDetails: "Cercle TOT = 10 (ocells a l'arbre) · Cercle PART 1 = 4 (ocells marxen) · Cercle PART 2 = ? (ocells queden)."
  },
  multiplicacio: {
    id: "multiplicacio",
    title: "MULTIPLICACIÓ",
    subtitle: "Hi ha una relació entre 2 elements (parts iguals)",
    opSymbol: "*",
    totStatus: "?",
    partStatus: "✓",
    braceStatus: "✓",
    isMultiPart: true,
    bullets: [
      "Sabem el valor de les parts i el número de parts.",
      "Volem saber el tot.",
      "Les parts són iguals i es repeteixen diverses vegades."
    ],
    exampleProblem: "Una samarreta val 15 euros. Si me'n compro 2, quants diners em gastaré?",
    exampleOperation: "15 × 2 = 30 euros",
    exampleDetails: "Cercle TOT = ? (diners que gastaré) · Cercles PART = 15 (euros cada samarreta) · Clau inferior (⏟) = 2 (samarretes)."
  },
  divisio_partitiva: {
    id: "divisio_partitiva",
    title: "DIVISIÓ PARTITIVA",
    subtitle: "Hi ha una relació entre 2 elements (busquem el valor de cada part)",
    opSymbol: "/",
    totStatus: "✓",
    partStatus: "?",
    braceStatus: "✓",
    isMultiPart: true,
    bullets: [
      "Sabem el tot i el número de parts.",
      "Volem saber el valor de cada part.",
      "Les parts són iguals."
    ],
    exampleProblem: "Una escola ha comprat 150 llibres i els vol repartir en 6 prestatges a parts iguals. Quants llibres posarà a cada prestatge?",
    exampleOperation: "150 : 6 = 25 llibres",
    exampleDetails: "Cercle TOT = 150 (llibres en total) · Cercles PART = ? (llibres a cada prestatge) · Clau inferior (⏟) = 6 (prestatges)."
  },
  divisio_quotativa: {
    id: "divisio_quotativa",
    title: "DIVISIÓ QUOTATIVA",
    subtitle: "Hi ha una relació entre 2 elements (busquem el número de parts)",
    opSymbol: "/",
    totStatus: "✓",
    partStatus: "✓",
    braceStatus: "?",
    isMultiPart: true,
    bullets: [
      "Sabem el tot i el valor de les parts.",
      "Volem saber el número de parts.",
      "Les parts són iguals."
    ],
    exampleProblem: "Tinc 20 bombons i els vull repartir en capses de manera que a cada capsa hi hagi 5 bombons. Quantes capses necessitaré?",
    exampleOperation: "20 : 5 = 4 capses",
    exampleDetails: "Cercle TOT = 20 (bombons en total) · Cercles PART = 5 (bombons a cada capsa) · Clau inferior (⏟) = ? (capses necessitaré)."
  }
};
