import { HexColorPicker } from 'react-colorful';
import { PlusIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { generateShades } from '../utils/colorUtils';

export const ColorPicker = ({ 
  color, 
  onColorChange, 
  onAddColor,
  onGenerateComplementary 
}) => {
  return (
    <div>
      <h2 className="text-2xl font-vintage font-semibold text-amber-900 mb-4">
        Color Picker
      </h2>
      <div className="flex justify-center mb-4">
        <HexColorPicker 
          color={color} 
          onChange={onColorChange} 
          style={{ width: '100%' }}
        />
      </div>
      <div className="grid grid-cols-5 gap-2 mb-4">
        {generateShades(color).map((shade, i) => (
          <div
            key={i}
            className="h-12 rounded-md cursor-pointer transition-transform hover:scale-105"
            style={{ backgroundColor: shade }}
            onClick={() => onColorChange(shade)}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={onAddColor}
          className="vintage-btn flex-1 flex items-center justify-center gap-2 hover:scale-105 transition-transform"
        >
          <PlusIcon className="w-5 h-5" />
          Add to Palette
        </button>
        <button
          onClick={onGenerateComplementary}
          className="vintage-btn hover:scale-105 transition-transform"
          title="Generate complementary colors"
        >
          <SparklesIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};