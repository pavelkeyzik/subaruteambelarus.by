import { IEmotionTheme } from '../types/theme';

const ACCENT = '#6cb6ff';

export const darkTheme: IEmotionTheme = {
  colors: {
    primary: ACCENT,
    foreground: '#bbb',
    headersColor: '#eee',
    headerBackground: '#222',
    headerBorderColor: 'transparent',
    bodyBackground: '#111',
    appLogoForeground: '#fff',
    linkColor: ACCENT,
    blockquoteBackground: '#333',
    blockquoteForeground: '#ccc',
    blockquoteBorderColor: ACCENT,
    postPreviewBackground: '#222',
    postPreviewShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    footerBorderColor: '#333',
    footerCopyrightColor: '#999',
    socialsColor: '#ccc',
    toggleThemeIcon: '#eee',
    tagForeground: '#bbb',
    imageBackground: '#202020',
    stayUpdatedBackground: '#1b1b1b',
    stayUpdatedSocialLinksFill: '#ccc',
    contentLayoutBackground: '#222',
    figureCaptionForeground: '#aaa',
    articleBigTitleForeground: '#fff',
    mobileMenuIconColor: '#fff',
    mobileMenuLinksColor: '#ddd',
    mobileMenuBackground: '#0b0b0b',
    tableBorderColor: '#555',
    tableHeaderBackground: '#2a2a2a',
  },
};
