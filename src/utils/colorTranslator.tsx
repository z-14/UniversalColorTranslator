import { colorMap } from "@/data/colors";

type TranslateResult = {
  success: boolean;
  hexCode?: string;
  error?: string;
}

export function translateColor(colorName: string): TranslateResult {
  const normalizedColorName = colorName.toLowerCase().trim();
  if (normalizedColorName in colorMap) {
    return {
      success: true,
      hexCode: colorMap[normalizedColorName]
    };
  } else {
    return {
      success: false,
      error: `Color "${colorName}" not found in the color map.`
    };
  }
}
