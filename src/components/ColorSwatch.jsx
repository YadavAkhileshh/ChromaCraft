import { motion } from 'framer-motion';
import { TrashIcon } from '@heroicons/react/24/outline';

export const ColorSwatch = ({ color, onRemove, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="color-swatch"
    style={{ backgroundColor: color }}
    onClick={onClick}
  >
    <div className="color-actions">
      <span className="text-white bg-black/70 px-2 py-1 rounded text-xs">
        {color}
      </span>
    </div>
    {onRemove && (
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className="absolute top-2 right-2 p-1 bg-white/80 rounded-full hover:bg-red-100"
        title="Remove color"
      >
        <TrashIcon className="w-4 h-4 text-red-600" />
      </button>
    )}
  </motion.div>
);