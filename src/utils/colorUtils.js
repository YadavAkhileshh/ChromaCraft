import chroma from 'chroma-js';

export const generateShades = (baseColor) => {
  return [
    chroma(baseColor).darken(0.8).saturate(0.8).hex(),
    chroma(baseColor).darken(0.4).saturate(0.6).hex(),
    baseColor,
    chroma(baseColor).brighten(0.4).saturate(0.4).hex(),
    chroma(baseColor).brighten(0.8).saturate(0.2).hex(),
  ];
};

export const generateComplementary = (baseColor) => {
  const base = chroma(baseColor);
  return [
    base.hex(),
    base.set('hsl.h', (base.get('hsl.h') + 30) % 360).hex(),
    base.set('hsl.h', (base.get('hsl.h') + 180) % 360).hex(),
    base.set('hsl.h', (base.get('hsl.h') + 210) % 360).hex(),
    base.set('hsl.h', (base.get('hsl.h') + 330) % 360).hex(),
  ];
};

// Generate a range of vintage colors
const generateVintageColors = (hue, saturation, lightness, count) => {
  return Array.from({ length: count }, (_, i) => {
    const h = (hue + (i * 30)) % 360;
    return chroma.hsl(h, saturation, lightness).hex();
  });
};

export const VINTAGE_PALETTES = [
  // Earthy Tones
  { name: "Desert Sands", colors: ["#D4B483", "#E8D6B3", "#A39171", "#9B6A6C", "#D9AE94"] },
  { name: "Rustic Charm", colors: ["#6B4E3B", "#9B6A6C", "#D4B483", "#E8D6B3", "#A39171"] },
  { name: "Earthy Hues", colors: ["#8D6E63", "#A1887F", "#BCAAA4", "#D7CCC8", "#EFEBE9"] },
  { name: "Muddy Waters", colors: ["#5D4037", "#795548", "#8D6E63", "#A1887F", "#BCAAA4"] },
  { name: "Clay & Stone", colors: ["#3E2723", "#5D4037", "#8D6E63", "#D7CCC8", "#EFEBE9"] },
  
  // Muted Pastels
  { name: "Dusty Rose", colors: ["#FCE4EC", "#F8BBD0", "#F48FB1", "#F06292", "#EC407A"] },
  { name: "Soft Lavender", colors: ["#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC"] },
  { name: "Mint Fresh", colors: ["#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A"] },
  { name: "Powder Blue", colors: ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5"] },
  { name: "Lemon Chiffon", colors: ["#FFFDE7", "#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58"] },
  
  // Deep Jewel Tones
  { name: "Royal Velvet", colors: ["#673AB7", "#5E35B1", "#512DA8", "#4527A0", "#311B92"] },
  { name: "Emerald Forest", colors: ["#2E7D32", "#388E3C", "#43A047", "#4CAF50", "#66BB6A"] },
  { name: "Sapphire Night", colors: ["#1565C0", "#0D47A1", "#1565C0", "#1976D2", "#1E88E5"] },
  { name: "Amethyst Haze", colors: ["#7B1FA2", "#6A1B9A", "#9C27B0", "#8E24AA", "#AB47BC"] },
  { name: "Ruby Wine", colors: ["#C2185B", "#AD1457", "#880E4F", "#E91E63", "#D81B60"] },
  
  // Vintage Washes
  { name: "Faded Denim", colors: ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5"] },
  { name: "Washed Linen", colors: ["#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD", "#9E9E9E"] },
  { name: "Vintage Teal", colors: ["#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA"] },
  { name: "Faded Rose", colors: ["#FCE4EC", "#F8BBD0", "#F48FB1", "#F06292", "#EC407A"] },
  { name: "Washed Olive", colors: ["#F1F8E9", "#DCEDC8", "#C5E1A5", "#AED581", "#9CCC65"] },
  
  // Autumn Colors
  { name: "Autumn Leaves", colors: ["#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726"] },
  { name: "Pumpkin Spice", colors: ["#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800"] },
  { name: "Cranberry Sauce", colors: ["#F8BBD0", "#F48FB1", "#F06292", "#EC407A", "#E91E63"] },
  { name: "Chestnut Roast", colors: ["#D7CCC8", "#BCAAA4", "#A1887F", "#8D6E63", "#5D4037"] },
  { name: "Golden Hour", colors: ["#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58", "#FFEB3B"] },
  
  // Winter Colors
  { name: "Frosty Morn", colors: ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5"] },
  { name: "Icy Blue", colors: ["#E1F5FE", "#B3E5FC", "#81D4FA", "#4FC3F7", "#29B6F6"] },
  { name: "Winter Sky", colors: ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5"] },
  { name: "Snowfall", colors: ["#FAFAFA", "#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD"] },
  { name: "Twilight", colors: ["#E8EAF6", "#C5CAE9", "#9FA8DA", "#7986CB", "#5C6BC0"] },
  
  // Spring Colors
  { name: "Spring Blossom", colors: ["#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC"] },
  { name: "Meadow Fresh", colors: ["#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A"] },
  { name: "Easter Egg", colors: ["#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC"] },
  { name: "April Showers", colors: ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5"] },
  { name: "May Flowers", colors: ["#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC"] },
  
  // Summer Colors
  { name: "Beach Day", colors: ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5"] },
  { name: "Ocean Breeze", colors: ["#E1F5FE", "#B3E5FC", "#81D4FA", "#4FC3F7", "#29B6F6"] },
  { name: "Sunny Day", colors: ["#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58", "#FFEB3B"] },
  { name: "Tropical Punch", colors: ["#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336"] },
  { name: "Summer Sunset", colors: ["#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800"] },
  
  // Monochromatic
  { name: "Classic Black & White", colors: ["#FFFFFF", "#F5F5F5", "#E0E0E0", "#9E9E9E", "#212121"] },
  { name: "Shades of Gray", colors: ["#FAFAFA", "#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD"] },
  { name: "Warm Grays", colors: ["#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD", "#9E9E9E"] },
  { name: "Cool Grays", colors: ["#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD", "#9E9E9E"] },
  { name: "Charcoal", colors: ["#212121", "#424242", "#616161", "#757575", "#9E9E9E"] },
  
  // Vintage Posters
  { name: "Retro Poster", colors: ["#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336"] },
  { name: "Vintage Ad", colors: ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5"] },
  { name: "Old Print", colors: ["#D7CCC8", "#BCAAA4", "#A1887F", "#8D6E63", "#5D4037"] },
  { name: "Classic Magazine", colors: ["#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58", "#FFEB3B"] },
  { name: "Antique Book", colors: ["#D7CCC8", "#BCAAA4", "#A1887F", "#8D6E63", "#5D4037"] },
  

  // Generate additional palettes programmatically
  ...Array.from({ length: 150 }, (_, i) => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 0.7 - (Math.random() * 0.3);
    const lightness = 0.5 - (Math.random() * 0.2);
    
    return {
      name: `Vintage ${i + 1}`,
      colors: Array.from({ length: 5 }, (_, j) => {
        const h = (hue + (j * 15)) % 360;
        const s = Math.max(0.2, Math.min(0.8, saturation + (Math.random() * 0.2 - 0.1)));
        const l = Math.max(0.2, Math.min(0.8, lightness + (Math.random() * 0.2 - 0.1)));
        return chroma.hsl(h, s, l).hex();
      })
    };
  })
];