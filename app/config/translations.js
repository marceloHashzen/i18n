import I18n from 'ex-react-native-i18n';

I18n.fallbacks = true;
I18n.defaultLocale = "pt-BR";
I18n.locale = "pt-BR";

export default I18n.translations = {
    'pt-BR': {
        greeting: 'Olá!',
        bye: 'Até logo!',
        goScreen: 'Ir para tela {{number}}',
        screen: 'Tela {{number}}',
    },
    'en': {
        greeting: 'Hi!',
        bye: 'So long!',
        goScreen: 'Go to screen {{number}}',
        screen: 'Screen {{number}}',
    }
};