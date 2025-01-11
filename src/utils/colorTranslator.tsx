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
  
  export function translateColor(colorName: string): string {
    const normalizedColorName = colorName.toLowerCase().trim();
    
    if (normalizedColorName in colorMap) {
      return colorMap[normalizedColorName];
    } else {
      throw new Error(`Color "${colorName}" not found in the color map.`);
    }
  }
  
  