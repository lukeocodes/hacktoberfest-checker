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
      button: '비공식 사이트',
      text:
        '여기는 비공식 사이트입니다. 공식 Hacktoberfest 사이트를 방문하시려면 클릭하세요.',
    },

    navigation: {
      home: '홈',
      details: '세부 사항',
      check: '리포지터리 확인',
    },

    check_repository: {
      title: '<strong>Hacktoberfest</strong>를 하고 계신가요?',
      error: '오류',
      retry: '다른 저장소를 하시겠어요?',
      success:
        '이 프로젝트는 현재까지 <strong>Hacktoberfest</strong>에 참여하고 있습니다.',
      failure:
        '이 프로젝트는 아직까지 <strong>Hacktoberfest</strong>에 참여하고 있지 않습니다.',
      results_are_in: '결과는 다음과 같습니다:',
      cta: '진행 중?',
      noRepoFound: '이전에 확인된 리포지터리가 아직까지 없습니다!',
    },

    color_picker: {
      label: '다크 모드',
    },

    footer: {
      presented_by: 'Hacktoberfest presented by',
      offical_site: '공식 Hacktoberfest 사이트',
    },

    hero: {
      title: '<strong>Hacktoberfest?</strong>를 하고 계신가요?',
      tagline:
        '<strong>Hacktoberfest</strong>에 올해 참여하고 있는지 리포지터리 URL을 살펴보세요.',
      cta: '리포지터리 확인',
    },

    lang_picker: {
      alt: '언어',
    },

    logo: {
      alt: 'Hacktoberfest',
    },

    repository: {
      has_topic: '<code>hacktoberfest</code> 토픽',
      has_pr: '<code>hacktoberfest-accepted</code> PRs',
      no_topic: '<code>hacktoberfest</code> 주제가 없음',
      no_pr: '<code>hacktoberfest-accepted</code> PR이 없음',
      banned: 'Hacktoberfest에서 제외됨',
      remove: '삭제',
      refresh: '새로고침',
      issues_need_help: '도움을 필요로 하는 이슈',
    },
  },
}
