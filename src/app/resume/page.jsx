export default function Index() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 dark:bg-gray-800">
      <div className="shadow-lg p-10 rounded-xl my-10 bg-base-100 dark:bg-gray-700 max-w-4xl w-full">
        <section>
          <div className="text-center mb-10">
            <img
              src="../../cv_billede-modified.png"
              alt="Halfdan Monie"
              className="w-40 h-40 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h1 className="text-4xl font-bold mb-4 text-cyan-700 dark:text-cyan-400">
              Halfdan Karlsen Monie
            </h1>
            <p className="text-xl ">
              <a href="https://www.ug.dk/uddannelser/erhvervsuddannelser/teknologibyggeriogtransport/data-og-kommunikationsuddannelsen">
                Datatekniker med speciale i programmering
              </a>
            </p>
          </div>
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-4 text-cyan-700 dark:text-cyan-400">
              Om Mig
            </h2>
            <p className="mb-4">
              Mit navn er Halfdan Karlsen Monie, og jeg er 19 år gammel. Jeg bor
              i Odense sammen med mine forældre og søskende.
            </p>
            <p className="mb-4">
              Jeg er i gang med min uddannelse på Syddansk Erhvervsskole, hvor
              jeg studerer som datatekniker med speciale i programmering.
            </p>
            <p className="mb-4">
              I min fritid nyder jeg at tilbringe tid sammen med mine venner og
              have det sjovt med dem. Jeg spiller også badminton i OBK, hvilket
              jeg har gjort i ca 10 år.
            </p>
            <h2 className="text-2xl font-bold mb-4 text-cyan-700 dark:text-cyan-400">
              Uddannelse
            </h2>
            <ul className="mb-4 pl-5 list-disc">
              <li>
                2022-Nu: Syddansk Erhvervsskole, Datatekniker med speciale i
                programmering.
              </li>
              <li>
                2021-2022: Hjemly Idrætsefterskole 10 klasse afgangseksamen
              </li>
              <li>2011-2021: Odense Friskole, 9 klasse afgangseksamen.</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4 text-cyan-700 dark:text-cyan-400">
              Karriere Mål
            </h2>
            <p className="mb-4">
              Mit mål er at arbejde i en virksomhed, hvor jeg kan udvikle mine
              evner som datatekniker og få indblik i, hvordan det er at arbejde
              i en IT-virksomhed.
            </p>
            <h2 className="text-2xl font-bold mb-4 text-cyan-700 dark:text-cyan-400">
              Erfaring
            </h2>
            <p className="mb-4">
              Jeg arbejder lige nu som opvasker på restauranten Gringas, hvilket
              jeg virkelig værdsætter, da jeg synes, at arbejdsmiljøet er
              fantastisk.
            </p>
            <p className="mb-4">
              Jeg har tidligere arbejdet som opstrenger hos Ketshop, hvor jeg
              også var iblandt nogle gode kollegaer.
            </p>
            <h2 className="text-2xl font-bold mb-4 text-cyan-700 dark:text-cyan-400">
              Færdigheder
            </h2>
            <p className="mb-4">
              Jeg trives bedst, når jeg arbejder i et positivt arbejdsmiljø, og
              jeg er god til at overholde mine forpligtelser, især når det
              drejer sig om at møde til tiden.
            </p>
            <p className="mb-4">
              Min erfaring inden for programmering er begrænset, men jeg finder
              emnet meget interessant og er ivrig efter at lære mere.
            </p>
            <p className="mb-4">
              Min passion for IT opstod allerede, da jeg fik min første
              computer, og jeg har altid nydt at arbejde med teknologi.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
