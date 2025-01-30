import { type SchemaTypeDefinition } from 'sanity'
import { pageType } from "./pageType";
import { pageBuilderType } from "./pageBuilderType";
import { faqType } from "./documents/faqType";
import { faqsType } from "./documents/faqsType";
import { featuresType } from "./blocks/featuresType";
import { heroType } from "./blocks/heroType";
import { splitImageType } from "./blocks/splitImageType";
import { siteSettingsType } from './siteSettingsType';
import { imageType } from './common/imageType';
import { linksType } from './common/linksType';
import { richTextType } from './common/richTextType';
import { textType } from './common/textType';
import home from './home';
import linkExternal from './objects/linkExternal';
import linkInternal from './objects/linkInternal';
import annotationLinkEmail from './annotation/annotationLinkEmail';
import annotationLinkExternal from './annotation/annotationLinkExternal';
import annotationLinkInternal from './annotation/annotationLinkInternal';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // ...all your existing schema types
    pageType,
    pageBuilderType,
    faqType,
    faqsType,
    featuresType,
    heroType,
    splitImageType,
    siteSettingsType,
    imageType,
    linksType,
    richTextType,
    textType,
    home,
    linkExternal,
    linkInternal,
    annotationLinkEmail,
    annotationLinkExternal,
    annotationLinkInternal
  ],
};
