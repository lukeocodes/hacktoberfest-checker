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
      button: 'Неофициальный Сайт',
      text:
        'Это не официальный сайт. Кликните чтобы перейти на официальный сайт Hacktoberfest.',
    },

    navigation: {
      home: 'Домашняя страница',
      details: 'Детали',
      check: 'Проверить репозиторий',
    },

    check_repository: {
      title: 'Принимает ли проект участие в <strong>Hacktoberfest</strong>?',
      error: 'Ошибка',
      retry: 'Снова проверить?',
      success:
        'Этот проект пока ещё принимает участие в <strong>Hacktoberfest</strong> ... на данный момент.',
      failure:
        'Этот проект ещё не учавствует в <strong>Hacktoberfest</strong> ... на данный момент.',
      results_are_in: 'Подводятся результаты для',
      cta: 'Уверены?',
      noRepoFound: 'Никаких предыдущих проверок репозиторя не найдено.. пока',
    },

    color_picker: {
      label: 'Ночной Режим',
    },

    footer: {
      presented_by: 'Hacktoberfest представлен',
      offical_site: 'Официальная страница Hacktoberfest',
    },

    hero: {
      title: 'Принимают ли они участие в <strong>Hacktoberfest</strong>?',
      tagline:
        'Проверьте принимает ли проект участие в <strong>Hacktoberfest</strong> в этом году через URL адресс их репозитория.',
      cta: 'Проверить Репозиторий',
    },

    lang_picker: {
      alt: 'Язык',
    },

    logo: {
      alt: 'Hacktoberfest лого',
    },

    repository: {
      has_topic: '<code>hacktoberfest</code> тема',
      has_pr: '<code>hacktoberfest-accepted</code> PRы',
      no_topic: 'Отсутствует <code>hacktoberfest</code> раздел',
      no_pr: 'Нет <code>hacktoberfest-accepted</code> PRов',
      banned: 'Исключены из Hacktoberfest',
      remove: 'Убрать',
      refresh: 'Обновить',
      issues_need_help: 'Проблемы требующие внимания',
    },
  },
}
