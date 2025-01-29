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
    home
  ],
};
