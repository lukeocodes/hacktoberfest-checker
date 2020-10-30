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
            button: 'Sito non ufficiale',
            text:
                'Questo è un sito non ufficiale. Premi qui per andare al sito ufficiale.',
        },

        navigation: {
            home: 'Home',
            details: 'Dettagli',
            check: 'Controllare la Repository',
        },

        check_repository: {
            title: 'Il progetto partecipa a <strong>Hacktoberfest?</strong>',
            error: 'Errore',
            retry: 'Controllare un altra repository?',
            success:
                'Questo progetto sta partecipando ad <strong>Hacktoberfest</strong> finora.',
            failure:
                'Questo progetto non sta partecipando ad <strong>Hacktoberfest</strong> per adesso.',
            results_are_in: 'I risultati sono pronti per',
            cta: 'Vi partecipano?',
            noRepoFound: 'Nessun controllo predendete sulle repository sono state trovate ... per adesso',
        },

        color_picker: {
            label: 'Dark Mode',
        },

        footer: {
            presented_by: 'Hacktoberfest presentato da',
            offical_site: 'Sito ufficiale di Hacktoberfest',
        },

        hero: {
            title: 'Vi partecipano ad <strong>Hacktoberfest?</strong>',
            tagline:
                'Controlla se il progetto partecipa questo anno ad <strong>Hacktoberfest</strong> inserendo URL della repository.',
            cta: 'Controllare la Repository',
        },

        lang_picker: {
            alt: 'Lingua',
        },

        logo: {
            alt: 'Hacktoberfest',
        },

        repository: {
            has_topic: '<code>hacktoberfest</code> topic',
            has_pr: '<code>hacktoberfest-accepted</code> PRs',
            no_topic: 'Manca il topic <code>hacktoberfest</code>',
            no_pr: 'No <code>hacktoberfest-accepted</code> PRs',
            banned: 'Escluso dal Hacktoberfest',
            remove: 'Rimuovere',
            refresh: 'Ricaricare',
            issues_need_help: 'Bisogno di aiuto per un problema',
        },
    },
}
