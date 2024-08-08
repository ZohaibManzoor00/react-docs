const theme = {
  titleSuffix: " | Intro to React",
  sidebar: { toggleButton: true },
  primaryHue: 190,
  search: true,
  unstable_flexsearch: true,
  unstable_staticImage: true,
  floatTOC: true,
  font: false,
  github: "https://github.com/The-Marcy-Lab-School/7-0-0-intro-react",
  projectLink: "https://github.com/The-Marcy-Lab-School/7-0-0-intro-react",
  logo: () => (
    <>
      <img
        src="/react.png"
        height="25"
        width="25"
        style={{ marginRight: ".5em" }}
      />
      <h1>
        Intro to React <span style={{ opacity: 0.2, fontSize: '14px', marginLeft: '5px', fontWeight: 'bold' }}>The Marcy Lab School</span>
      </h1>
    </>
  ),
  head: function Head(props) {
    return (
      <>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/marcy-logo-dark.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/marcy-logo-dark.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/marcy-logo-dark.png"
        />
        <link rel="mask-icon" href="/marcy-logo-dark.png" color="#000000" />
        <link rel="shortcut icon" href="/marcy-logo-dark.png" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="description"
          content="Website created for The Marcy Lab School's Intro to React course"
        />
        <meta
          name="description"
          content="Website for The Marcy Lab School's course on React"
        />
        <meta name="author" content="Zohaib Manzoor" />
        <meta
          property="og:url"
          content="https://javascriptpatterns.vercel.app/patterns" // TODO: change to deployed url
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="692" />
        <meta property="og:title" content={`${props.title} | Intro to React`} />
        <meta
          property="og:description"
          content="Website created for The Marcy Lab School's Intro to React course"
        />
        <meta
          property="og:image"
          content="https://javascriptpatterns.vercel.app/ogimage1.png" // TODO: update
        />
      </>
    );
  },
  darkMode: true,
  footerText: `${new Date().getFullYear()} © The Marcy Lab School`,
  nextThemes: { defaultTheme: "dark" },
};
export default theme;
