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
      button: 'Onofficiële pagina',
      text:
        'Dit is een niet-officiële website. Klik hier voor de officiële website van Hacktoberfest. ',
    },

    navigation: {
      home: 'Home',
      details: 'Details',
      check: 'Check een Repository',
    },

    check_repository: {
      title: 'Doet een project al aan het <strong>Hacktoberfest</strong> mee?',
      error: 'Error',
      retry: 'Bekijk een ander project?',
      success:
        'Dit project doet al mee aan het <strong>Hacktoberfest</strong>.',
      failure:
        'Dit project doet nog niet aan het <strong>Hacktoberfest</strong> mee.',
      results_are_in: 'Resultaten zijn klaar voor',
      cta: 'Echt?',
      noRepoFound: 'Geen eerdere repo-checks gevonden ... tot nu!',
    },

    color_picker: {
      label: 'Dark Mode',
    },

    footer: {
      presented_by: 'Hacktoberfest gepresenteerd door',
      offical_site: 'Officiele Hacktoberfest-Site',
    },

    hero: {
      title: 'Doet een project aan het <strong>Hacktoberfest</strong> mee?',
      tagline:
        'Controleer of een project dit jaar deelneemt aan het Hacktoberfest door de URL van de repository in te voeren.',
      cta: 'Een Repository checken',
    },

    lang_picker: {
      alt: 'Taal',
    },

    logo: {
      alt: 'Hacktoberfest Logo',
    },

    repository: {
      has_topic: '<code>hacktoberfest</code> topic',
      has_pr: '<code>hacktoberfest-accepted</code> PRs',
      no_topic: 'Missend <code>hacktoberfest</code> topic',
      no_pr: 'Geen <code>hacktoberfest-accepted</code> PRs',
      banned: 'Uitgesloten van het Hacktoberfest',
      remove: 'Verwijderen',
      refresh: 'Updaten',
      issues_need_help: 'Problemen hebben hulp nodig',
    },
  },
}
