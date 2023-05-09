interface ILegalSectionProps {}

export function LegalSection({}: ILegalSectionProps) {
  return (
    <div className="">
      <div className="container mx-auto p-4">
        <p className="mb-2">
          Bitte beachte: Wir versuchen die Information so vollständig wie
          möglich zu halten, allerdings sind Fehler nicht ausgeschlossen. Im
          Zweifelsfall kontaktiere auf jeden Fall einen Tierarzt.
        </p>
        <p className="mb-2">
          Die hier dargestellten Informationen basieren auf folgenden Quellen:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <a href="https://www.hundeo.com/gesundheit/was-duerfen-hunde-nicht-essen">
              hundeo.com
            </a>
          </li>
          <li>
            <a href="https://www.purina.at/artikel/hunde/fuettern/was-hunde-fressen/was-duerfen-hunde-essen">
              purina.at
            </a>
          </li>
        </ul>
        <div className="border-t pt-4">
          <h2 className="mb-6 text-lg">
            Offenlegunspflicht gemäß § 25 Mediengesetz
          </h2>
          <dl>
            <dt className="font-semibold">Medieninhaber</dt>
            <dd className="mb-4">Thomas Prochazka</dd>
            <dt className="font-semibold">Wohnort</dt>
            <dd className="mb-4">Wien</dd>
            <dt className="font-semibold">Unternehmensgegenstand</dt>
            <dd className="mb-4">
              Aufbereitung der Information bezüglich giftiger Lebensmittel für
              Hunde
            </dd>
          </dl>
        </div>
        <div className="border-t pt-4">© Thomas Prochazka, 2023</div>
      </div>
    </div>
  );
}
