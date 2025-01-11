type ColorMap = {
  [key: string]: string;
};

const colorMap: ColorMap = {
  red: "#FF0000",
  blue: "#0000FF",
  green: "#008000",
  yellow: "#FFFF00",
  purple: "#800080",
  orange: "#FFA500",
  black: "#000000",
  white: "#FFFFFF",
};

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
