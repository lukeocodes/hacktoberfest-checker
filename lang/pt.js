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
      button: 'Website não oficial',
      text:
        'Este é um website não oficial. Clica para acederes ao website oficial.',
    },

    navigation: {
      home: 'Início',
      details: 'Detalhes',
      check: 'Verificar um Repositório',
    },

    check_repository: {
      title: 'Faz parte do <strong>Hacktoberfest?</strong>',
      error: 'Erro',
      retry: 'Verificar outro?',
      success:
        'Até agora, este projeto está a participar no <strong>Hacktoberfest</strong>.',
      failure:
        'Até agora, este projeto não está a participar no <strong>Hacktoberfest</strong>.',
      results_are_in: 'Resultados para',
      cta: 'Faz parte?',
      noRepoFound: 'No previous repo checks found... yet!',
    },

    color_picker: {
      label: 'Modo Escuro',
    },

    footer: {
      presented_by: 'Hacktoberfest apresentado por',
      offical_site: 'Website oficial do Hacktoberfest',
    },

    hero: {
      title: 'Faz parte do <strong>Hacktoberfest?</strong>',
      tagline:
        'Verifica se um projeto faz parte do <strong>Hacktoberfest</strong> deste ano olhando através do URL do seu repositório.',
      cta: 'Verificar um Repositório',
    },

    lang_picker: {
      alt: 'Linguagem',
    },

    logo: {
      alt: 'Hacktoberfest',
    },

    repository: {
      has_topic: '<code>hacktoberfest</code> topic',
      has_pr: '<code>hacktoberfest-accepted</code> PRs',
      no_topic: 'Missing <code>hacktoberfest</code> topic',
      no_pr: 'No <code>hacktoberfest-accepted</code> PRs',
      banned: 'Excluído do Hacktoberfest',
      remove: 'Remover',
      refresh: 'Recarregar',
      issues_need_help: 'problemas precisam de ajuda',
    },
  },
}
