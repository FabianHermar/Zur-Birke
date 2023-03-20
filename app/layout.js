import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/Favicon/favicon.ico' />
        <link rel='canonical' href='https://zur-birke.com' />
        <title>Zur Birke - Magdeburg | German cuisine near me | Book now</title>
        <script
          defer
          type='module'
          src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
        ></script>
        <script
          defer
          noModule
          src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'
        ></script>
        <meta
          name='description'
          content='Auf der sonnigen Terasse oder im Gastraum - Lust auf einen gem&uuml;tlichen Abend mit deutschem Essen in unserem wundersch&ouml;nen Lokal? Unser ansprechender Au&szlig;enbereich ist bei sch&ouml;nem Wetter besonders einladend. Ein hervorragendes Restaurant mit Mittagstisch: Unsere deutsche K&uuml;che wird Sie mit besonders authentischen Gerichten verw&ouml;hnen. Lassen Sie sich von unseren leckeren Speisen und einer umfassenden Auswahl an k&uuml;hlen Getr&auml;nken verw&ouml;hnen. Genie&szlig;en Sie Ihr Mittagessen oder Ihr Abendessen in unserer Lokalit&auml;t!&nbsp; Jeden Sonntag erwartet Sie hausgemachter Kuchen. Was gibt es passenderes als eine Tasse hei&szlig;en Kaffee dazu. Ihre Veranstaltungen und Feiern liegen uns sehr am Herzen, fragen Sie uns einfach, wir freuen uns. Wir w&uuml;nschen Guten Appetit.&nbsp; Ihre Birke&nbsp;'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/Favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/Favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/Favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/Favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/Favicon/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#00aba9' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='apple-mobile-web-app-title' content='Zur Birke' />
        <meta name='application-name' content='Zur Birke' />
        <meta property='og:url' content='https://zur-birke.com' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Zur Birke' />
        <meta
          property='og:description'
          content='Auf der sonnigen Terasse oder im Gastraum - Lust auf einen gem&uuml;tlichen Abend mit deutschem Essen in unserem wundersch&ouml;nen Lokal? Unser ansprechender Au&szlig;enbereich ist bei sch&ouml;nem Wetter besonders einladend. Ein hervorragendes Restaurant mit Mittagstisch: Unsere deutsche K&uuml;che wird Sie mit besonders authentischen Gerichten verw&ouml;hnen. Lassen Sie sich von unseren leckeren Speisen und einer umfassenden Auswahl an k&uuml;hlen Getr&auml;nken verw&ouml;hnen. Genie&szlig;en Sie Ihr Mittagessen oder Ihr Abendessen in unserer Lokalit&auml;t!&nbsp; Jeden Sonntag erwartet Sie hausgemachter Kuchen. Was gibt es passenderes als eine Tasse hei&szlig;en Kaffee dazu. Ihre Veranstaltungen und Feiern liegen uns sehr am Herzen, fragen Sie uns einfach, wir freuen uns. Wir w&uuml;nschen Guten Appetit.&nbsp; Ihre Birke&nbsp;'
        />
        <meta
          property='og:image'
          content='https://zur-birke.com/Favicon/android-chrome-512x512.png'
        />
        <meta
          property='og:image:secure_url'
          content='https://zur-birke.com/Favicon/android-chrome-512x512.png'
        />
        <meta property='og:locate' content='de_DE' />
        <meta property='og:site_name' content='Zur Birke' />
      </head>
      <body>{children}</body>
    </html>
  )
}
