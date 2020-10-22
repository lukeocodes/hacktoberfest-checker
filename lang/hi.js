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
      button: 'अनौपचारिक वेबसाइट',
      text:
        'यह एक अनौपचारिक वेबसाइट है। हैक्टोबरफेस्ट साइट के लिए यहां क्लिक करें।',
    },

    check_repository: {
      title:
        'कौन से प्रोजेक्ट <strong>हैक्टोबरफेस्ट</strong> में भाग ले रहे हैं?',
      error: 'त्रुटि',
      retry: 'पुनः जाँच करें?',
      success:
        'यह प्रोजेक्ट <strong>हैक्टोबरफेस्ट</strong> में हिस्सा ले रही है।',
      failure:
        'यह प्रोजेक्ट <strong>हैक्टोबरफेस्ट</strong> में हिस्सा नहीं ले रही है।',
      results_are_in: 'इनके नतीजे आ गए है: ',
      cta: 'जांच करें?',
    },

    color_picker: {
      label: 'डार्क मोड',
    },

    footer: {
      presented_by: 'हैक्टोबरफेस्ट प्रस्तुतकर्ता:',
      offical_site: 'अधिकृत हैक्टोबरफेस्ट साइट',
    },

    hero: {
      title:
        'जाँच करें कि कौन से प्रोजेक्ट <strong>हैक्टोबरफेस्ट</strong> में भाग ले रहे हैं?',
      tagline:
        'रिपॉज़िटरी URL से जांच करें कौन से प्रोजेक्ट इस साल <strong>हैक्टोबरफेस्ट</strong> में हिस्सा ले रहे हैं।',
      cta: 'जांच करें',
    },

    lang_picker: {
      alt: 'भाषा',
    },

    logo: {
      alt: 'हैक्टोबरफेस्ट',
    },

    repository: {
      has_topic: '<code>hacktoberfest</code> विषय है',
      has_pr: '<code>hacktoberfest-accepted</code> पीआर है',
      no_topic: '<code>hacktoberfest</code> विषय नहीं है',
      no_pr: '<code>hacktoberfest-accepted</code> पीआर नहीं है',
      banned: 'हैक्टोबरफेस्ट से वर्जित',
      remove: 'हटाएं',
      refresh: 'रिफ्रेश',
      issues_need_help: 'मदद की जरूरत है',
    },
  },
}
