import { motion, AnimatePresence } from 'framer-motion';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

export const ColorPalette = ({ 
  palette, 
  onRemoveColor, 
  onGenerateRandom,
  onSavePalette,
  paletteName,
  onPaletteNameChange,
  onColorSelect
}) => {
  return (
    <div className="lg:col-span-2">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h2 className="text-2xl font-vintage font-semibold text-amber-900">
          Current Palette
        </h2>
        <div className="flex gap-2 w-full sm:w-auto">
          
          <button
            onClick={onGenerateRandom}
            className="vintage-btn"
            title="Generate random palette"
          >
            <ArrowPathIcon className="w-5 h-5" />
          </button>
          
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-4">
        <AnimatePresence>
          {palette.map((item, index) => (
            <motion.div
              key={item.color}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative group h-32 rounded-xl transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: item.color }}
              onClick={() => onColorSelect(item.color)}
            >
              <div className="absolute inset-0 bg-black/0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white bg-black/70 px-2 py-1 rounded text-xs">
                  {item.color}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveColor(index);
                }}
                className="absolute top-2 right-2 p-1 bg-white/80 rounded-full hover:bg-red-100"
                title="Remove color"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};