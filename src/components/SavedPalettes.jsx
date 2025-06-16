import { motion } from 'framer-motion';
import { ColorSwatch } from './ColorSwatch';

export const SavedPalettes = ({ palettes, onLoadPalette }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="vintage-card"
  >
    <h2 className="text-2xl font-vintage font-semibold text-amber-900 mb-4">
      Your Saved Palettes
    </h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {palettes.map((savedPalette) => (
        <motion.div
          key={savedPalette.id}
          whileHover={{ scale: 1.02 }}
          className="bg-white/70 rounded-xl p-4 shadow-sm border border-white/30"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-amber-900">{savedPalette.name}</h3>
            <span className="text-xs text-amber-700/70">
              {savedPalette.date}
            </span>
          </div>
          <div className="flex h-8 mb-3 rounded overflow-hidden shadow-inner">
            {savedPalette.colors.map((color, i) => (
              <div
                key={i}
                className="flex-1"
                style={{ backgroundColor: color.color }}
              />
            ))}
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={() => onLoadPalette(savedPalette)}
              className="text-xs text-amber-700 hover:text-amber-900"
            >
              Load
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  savedPalette.colors.map(c => c.color).join(', ')
                );
                alert('Colors copied to clipboard!');
              }}
              className="text-xs text-amber-700 hover:text-amber-900"
            >
              Copy All
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);