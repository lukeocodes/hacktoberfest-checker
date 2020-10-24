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
        'C'est un site non-officiel. Cliquez pour le site officiel du Hacktoberfest.',
    },

    navigation: {
      home: 'Accueil',
      details: 'Détails',
      check: 'Vérifier un référentiel',
    },

    check_repository: {
      title: 'Est-ce qu'ils <strong>Hacktoberfest?</strong>',
      error: 'Erreur',
      retry: 'Vérifiez un autre?',
      success:
        'Ce projet participe à<strong>Hacktoberfest</strong> jusque là.',
      failure:
        'Ce projet ne participe pas à <strong>Hacktoberfest</strong> jusque là.',
      results_are_in: 'Les résultats sont arrivés pour',
      cta: 'Est-ce qu'ils??',
      noRepoFound: 'Aucun contrôle de repo précédent trouvé ... pour l'instant!',
    },

    color_picker: {
      label: 'Mode sombre',
    },

    footer: {
      presented_by: 'Hacktoberfest présenté par',
      offical_site: 'Site officiel du Hacktoberfest',
    },

    hero: {
      title: est-ce qu'ils <strong>Hacktoberfest?</strong>',
      tagline:
        'Vérifier si un projet participe à <strong>Hacktoberfest</strong> cette année en recherchant l'URL de leur référentiel.',
      cta: 'Vérifier un référentiel',
    },

    lang_picker: {
      alt: 'Langue',
    },

    logo: {
      alt: 'Hacktoberfest',
    },

    repository: {
      has_topic: '<code>hacktoberfest</code> topic',
      has_pr: '<code>hacktoberfest-accepted</code> PRs',
      no_topic: 'Disparu <code>hacktoberfest</code> sujet',
      no_pr: 'Non <code>hacktoberfest-accepted</code> PRs',
      banned: 'Exclus du Hacktoberfest',
      remove: 'Retirer',
      refresh: 'Rafraîchir',
      issues_need_help: 'les problèmes ont besoin d'aide',
    },
  },
}
