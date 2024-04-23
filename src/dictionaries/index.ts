import "server-only";
import { DictionaryType } from "./types";

const dictionaries: any = {
  en: () => import("./en").then((module): DictionaryType => module.en),
  "pt-BR": () =>
    import("./pt-BR").then((module): DictionaryType => module.ptBR),
};

export const getDictionary = async (
  locale: string
): Promise<DictionaryType> => {
  return dictionaries[locale]();
};
