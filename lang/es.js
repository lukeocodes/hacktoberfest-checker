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
      button: 'Sitio no oficial',
      text:
        'Este sitio no es oficial. Clica aquí para ir a la web oficial del Hacktoberfest.',
    },

   navigation: {
      home: 'Inicio',
      details: 'Deatlles',
      check: 'Comprueba un repositorio',
    },

    check_repository: {
      title: 'Participan en <strong>Hacktoberfest?</strong>',
      error: 'Error',
      retry: 'Quieres probarlo de nuevo?',
      success:
        'Este proyecto participa en el <strong>Hacktoberfest</strong> por el momento.',
      failure:
        'Estre proyecto no forma parte del <strong>Hacktoberfest</strong> por el momento.',
      results_are_in: 'El resultado es',
      cta: 'Participan?',
      noRepoFound: 'No se han encontrado comprobaciones... aun!',
    },

    color_picker: {
      label: 'Modo oscuro',
    },

    footer: {
      presented_by: 'Hacktoberfest presentado por',
      offical_site: 'Sitio oficial de Hackthoberfest',
    },

    hero: {
      title: 'Participan en el <strong>Hacktoberfest?</strong>',
      tagline:
        'Comprueba si un proyecto forma parte del <strong>Hacktoberfest</strong> este año escribiendo la URL de su repositorio.',
      cta: 'Comprobar un repositorio',
    },

    lang_picker: {
      alt: 'Idioma',
    },

    logo: {
      alt: 'Hacktoberfest',
    },

    repository: {
      has_topic: '<code>hacktoberfest</code> topic',
      has_pr: '<code>hacktoberfest-accepted</code> PRs',
      no_topic: 'No tiene el <code>hacktoberfest</code> topic',
      no_pr: 'Sin PRs con <code>hacktoberfest-accepted</code>',
      banned: 'Excluido del Hacktoberfest',
      remove: 'Eliminar',
      refresh: 'Actualizar',
      issues_need_help: 'necesitan ayuda con los fallos',
    },
  },
}
