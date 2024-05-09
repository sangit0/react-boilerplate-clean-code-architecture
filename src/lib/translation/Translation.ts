import { i18nInit } from './i18n';
import { ITranslation } from './translation.interface';

/**
 * Will be used to initialize the translation
 * App.tsx will use this to initialize the translation
 * @class Translation
 * @implements ITranslation
 * @returns void
 */
export class Translation implements ITranslation {
  public init(): void {
    i18nInit();
  }
}
