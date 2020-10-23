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
      button: 'Unofficial Site',
      text:
        'This is an unofficial site. Click for the official Hacktoberfest site.',
    },

    navigation: {
      home: 'Home',
      details: 'Details',
      check: 'Check a Repository',
    },

    check_repository: {
      title: 'Do they <strong>Hacktoberfest?</strong>',
      error: 'Error',
      retry: 'Check another?',
      success:
        'This project is taking part in <strong>Hacktoberfest</strong> so far.',
      failure:
        'This project is not taking part in <strong>Hacktoberfest</strong> so far.',
      results_are_in: 'Results are in for',
      cta: 'Do they?',
      noRepoFound: 'No previous repo checks found... yet!',
    },

    color_picker: {
      label: 'Dark Mode',
    },

    footer: {
      presented_by: 'Hacktoberfest presented by',
      offical_site: 'Official Hacktoberfest Site',
    },

    hero: {
      title: 'Do they <strong>Hacktoberfest?</strong>',
      tagline:
        'Check if a project takes part in <strong>Hacktoberfest</strong> this year by looking up their repository URL.',
      cta: 'Check a Repository',
    },

    lang_picker: {
      alt: 'Language',
    },

    logo: {
      alt: 'Hacktoberfest',
    },

    repository: {
      has_topic: '<code>hacktoberfest</code> topic',
      has_pr: '<code>hacktoberfest-accepted</code> PRs',
      no_topic: 'Missing <code>hacktoberfest</code> topic',
      no_pr: 'No <code>hacktoberfest-accepted</code> PRs',
      banned: 'Excluded from Hacktoberfest',
      remove: 'Remove',
      refresh: 'Refresh',
      issues_need_help: 'issues need help',
    },
  },
}
