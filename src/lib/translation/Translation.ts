import { i18nInit } from './i18n';
import { ITranslation } from './translation.interface';

/**
 * The Translation class is responsible for initializing the translation functionality.
 * It is utilized within App.tsx to set up the translation.
 * @class Translation
 * @implements ITranslation
 */
export class Translation implements ITranslation {
  /**
   * Initializes the translation functionality by invoking the i18nInit function.
   * @returns void
   */
  public init(): void {
    i18nInit();
  }
}
