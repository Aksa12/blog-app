export default defineI18nConfig(() => ({
  locales: ['en', 'de'],
  defaultLocale: 'de',
  legacy: false,
  messages: {
    en: {
      header: {
        title: 'e-Mission Blog',
        language: 'Language',
        home: 'Home',
        contact: 'Contact',
      },
      home: {
        title: 'Featured Posts',
        searchPlaceholder: 'Search the posts by title or content...',
        readMoreCTA: 'Read More',
        viewDetailsCTA: 'View Details',
        postsEmptyText: 'No posts found',
      },
      postDetail: {
        searchPlaceholder: 'Search the posts by title or content...',
        readMoreCTA: 'Read More',
        viewDetailsCTA: 'View Details',
      },
      common: {
        backCTA: 'Back',
        errorMsg:
          'An error occurred while loading the data. Please try again later.',
        msgSentAlert: 'Your message has been sent.',
      },
      contactUs: {
        title: 'Contact Us',
        nameLabel: 'Name',
        namePlaceholder: 'Your Name',
        emailLabel: 'Email',
        emailPlaceholder: 'Your Email',
        messageLabel: 'Message',
        messagePlaceholder: 'Your Message',
        sendMessageCTA: 'Send Message',
        errMsg: {
          nameRequired: 'Name is required.',
          emailRequired: 'Email is required.',
          emailInvalid: 'Email is invalid.',
          messageRequired: 'Message is required.',
        },
      },
      footer: {
        copyright: '© 2025 e-Mission Blog. All rights reserved.',
      },
    },
    de: {
      header: {
        title: 'e-Mission Blog',
        language: 'Sprache',
        home: 'Startseite',
        contact: 'Kontakt',
      },
      home: {
        title: 'Ausgewählte Beiträge',
        searchPlaceholder: 'Suchen Sie die Beiträge nach Titel oder Inhalt...',
        readMoreCTA: 'Mehr lesen',
        viewDetailsCTA: 'Details anzeigen',
        postsEmptyText: 'Keine Beiträge gefunden',
      },
      common: {
        backCTA: 'Zurück',
        errorMsg:
          'Beim Laden der Daten ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.',
        msgSentAlert: 'Ihre Nachricht wurde gesendet.',
      },
      contactUs: {
        title: 'Kontakt',
        nameLabel: 'Name',
        namePlaceholder: 'Deine Name',
        emailLabel: 'E-Mail',
        emailPlaceholder: 'Deine E-Mail',
        messageLabel: 'Nachricht',
        messagePlaceholder: 'Deine Nachricht',
        sendMessageCTA: 'Nachricht senden',
        errMsg: {
          nameRequired: 'Name ist erforderlich.',
          emailRequired: 'E-Mail ist erforderlich.',
          emailInvalid: 'E-Mail ist ungültig.',
          messageRequired: 'Nachricht ist erforderlich.',
        },
      },
      footer: {
        copyright: '© 2025 e-Mission Blog. Alle Rechte vorbehalten.',
      },
    },
  },
}))
