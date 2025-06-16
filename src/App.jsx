import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HexColorPicker } from 'react-colorful';
import chroma from 'chroma-js';
import { ColorPicker } from './components/ColorPicker';
import { ColorPalette } from './components/ColorPalette';
import { VintagePalettes } from './components/VintagePalettes';
import { VINTAGE_PALETTES, generateShades, generateComplementary } from './utils/colorUtils';

function App() {
  const [color, setColor] = useState('#3b82f6');
  const [palette, setPalette] = useState([]);
  const [paletteName, setPaletteName] = useState('');
  const [bgColor, setBgColor] = useState('#f8fafc');
  const [showBgPicker, setShowBgPicker] = useState(false);
  const [activeTab, setActiveTab] = useState('custom');
  const [isLoading, setIsLoading] = useState(true);

  // Initialize with a random palette
  useEffect(() => {
    setTimeout(() => {
      generateRandomPalette();
      setIsLoading(false);
    }, 1000);
  }, []);

  const generateRandomPalette = useCallback(() => {
    const newPalette = Array(5).fill().map(() => {
      const randomColor = chroma.random().hex();
      return {
        color: randomColor,
        shades: generateShades(randomColor),
        isLocked: false
      };
    });
    setPalette(newPalette);
  }, []);

  const addColor = useCallback(() => {
    setPalette([...palette, {
      color,
      shades: generateShades(color),
      isLocked: false
    }]);
  }, [color, palette]);

  const removeColor = useCallback((index) => {
    setPalette(prev => prev.filter((_, i) => i !== index));
  }, []);

  const applyVintagePalette = useCallback((colors) => {
    const newPalette = colors.map(color => ({
      color,
      shades: generateShades(color),
      isLocked: false
    }));
    setPalette(newPalette);
    setActiveTab('custom');
  }, []);

  const generateComplementaryPalette = useCallback(() => {
    applyVintagePalette(generateComplementary(color));
  }, [color, applyVintagePalette]);

  const handleColorSelect = (selectedColor) => {
    setColor(selectedColor);
    // Scroll to color picker
    document.getElementById('color-picker')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-rose-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-full border-4 border-amber-200 border-t-amber-600"
        />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen p-4 md:p-8 transition-colors duration-500"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8 relative">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl font-bold text-amber-900 font-vintage mb-2"
          >
            ChromaCraft
          </motion.h1>
          <p className="text-amber-800/80">Vintage & Modern Color Studio</p>



          <AnimatePresence>
            {showBgPicker && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl z-10"
              >
                <HexColorPicker
                  color={bgColor}
                  onChange={setBgColor}
                  style={{ width: '200px', height: '200px' }}
                />
                <div className="mt-2 text-center">
                  <button
                    onClick={() => setShowBgPicker(false)}
                    className="text-xs text-amber-700 hover:text-amber-900"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-amber-200 bg-white/50 p-1">
            {['custom', 'vintage'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === tab
                    ? 'bg-amber-100 text-amber-900'
                    : 'text-amber-700 hover:bg-amber-50'
                  }`}
              >
                {tab === 'custom' ? 'Custom Palette' : 'Vintage Palettes'}
              </button>
            ))}
          </div>
        </div>

        <main className="space-y-8">
          <AnimatePresence mode="wait">
            {activeTab === 'custom' && (
              <motion.section
                key="custom"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="vintage-card"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div id="color-picker">
                    <ColorPicker
                      color={color}
                      onColorChange={setColor}
                      onAddColor={addColor}
                      onGenerateComplementary={generateComplementaryPalette}
                    />
                  </div>

                  <ColorPalette
                    palette={palette}
                    onRemoveColor={removeColor}
                    onGenerateRandom={generateRandomPalette}
                    paletteName={paletteName}
                    onPaletteNameChange={setPaletteName}
                    onColorSelect={handleColorSelect}
                  />
                </div>
              </motion.section>
            )}

            {activeTab === 'vintage' && (
              <motion.section
                key="vintage"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <VintagePalettes
                  palettes={VINTAGE_PALETTES}
                  onApplyPalette={applyVintagePalette}
                />
              </motion.section>
            )}
          </AnimatePresence>
        </main>

        <footer className="mt-12 text-center text-amber-800/60 text-sm">
          <p>
            <a href="https://github.com/YadavAkhileshh" target="_new" rel="noopener noreferrer" className="hover:text-amber-800">
              ChromaCraft
            </a> &copy; {new Date().getFullYear()} - Create beautiful color palettes
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;