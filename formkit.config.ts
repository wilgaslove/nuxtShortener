
import {fr} from '@formkit/i18n';
import {defineFormKitConfig} from '@formkit/vue';
import { rootClasses } from './formkit.theme';

export default defineFormKitConfig({
    //definis les langues additionnelles
    locales: { fr },
    //definis la langue active
    locale: "fr",
    config: {
        rootClasses,

    }
})