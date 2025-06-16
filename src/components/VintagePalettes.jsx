import { motion } from 'framer-motion';

export const VintagePalettes = ({ palettes, onApplyPalette }) => {
  return (
    <div className="vintage-card">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {palettes.map((palette, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white/70 rounded-lg p-3 cursor-pointer border border-white/30 hover:shadow-md transition-all"
            onClick={() => onApplyPalette(palette.colors)}
          >
            <div className="flex h-6 mb-2 rounded overflow-hidden shadow-inner">
              {palette.colors.map((color, i) => (
                <div
                  key={i}
                  className="flex-1"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <h3 className="text-sm font-medium text-center text-amber-900 truncate">
              {palette.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};