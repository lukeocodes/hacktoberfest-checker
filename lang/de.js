export default {
  /**
   * NAMING RULES
   *
   * {type_of_vue_file}: {
   *   {component_name}: {
   *     {noun_or_abbr}: 'String'
   *   }
   * }
   *
   * e.g.
   *
   * components: {
   *   hero: {
   *     title: 'Do they <strong>Hacktoberfest?</strong>',
   *     tagline: 'Check if a project takes part in <strong>Hacktoberfest</strong>',
   *   }
   * }
   *
   * Usage:
   *
   *   $t('components.announcement.button')
   */

  /**
   * Layout strings
   *
   * Strings used in /layouts/**.vue files
   */

  /**
   * Page strings
   *
   * Strings used in /pages/**.vue files
   */

  /**
   * Component strings
   *
   * Strings used in /components/**.vue files
   */
  components: {
    announcement: {
      button: 'Inoffizielle Seite',
      text:
        'Dies ist eine inoffizielle Website. Klicke hier für die offizielle Hacktoberfest-Website.',
    },

    check_repository: {
      title: 'Nimmt ein Projekt am <strong>Hacktoberfest</strong> teil?',
      error: 'Fehler',
      retry: 'Eine weiteres Projekt überprüfen?',
      success:
        'Dieses Projekt nimmt bisher am <strong>Hacktoberfest</strong> teil.',
      failure:
        'Dieses Projekt nimmt bisher nicht am <strong>Hacktoberfest</strong> teil.',
      results_are_in: 'Ergebnisse stehen bereit für',
      cta: 'Wirklich?',
      noRepoFound: 'Keine bisherigen repo checks gefunden... bis jetzt!',
    },

    color_picker: {
      label: 'Dark Mode',
    },

    footer: {
      presented_by: 'Hacktoberfest präsentiert von',
      offical_site: 'Offizielle Hacktoberfest-Site',
    },

    hero: {
      title: 'Nimmt ein Projekt am <strong>Hacktoberfest</strong> teil?',
      tagline:
        'Prüfen Sie ob ein Projekt dieses Jahr am hacktoberfest teilnimmt, indem Sie die URL des Repositories eingeben.',
      cta: 'Ein Repository prüfen',
    },

    lang_picker: {
      alt: 'Sprache',
    },

    logo: {
      alt: 'Hacktoberfest Logo',
    },

    repository: {
      has_topic: '<code>hacktoberfest</code> topic',
      has_pr: '<code>hacktoberfest-accepted</code> PRs',
      no_topic: 'Fehlendes <code>hacktoberfest</code> topic',
      no_pr: 'Keine <code>hacktoberfest-accepted</code> PRs',
      banned: 'Vom Hacktoberfest ausgeschlossen',
      remove: 'Entfernen',
      refresh: 'Aktualisieren',
      issues_need_help: 'Probleme brauchen Hilfe',
    },
  },
}
