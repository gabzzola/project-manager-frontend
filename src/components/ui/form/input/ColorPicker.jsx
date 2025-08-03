import { useState, useRef, useEffect } from 'react';
import { SwatchesPicker } from 'react-color';
import inputStyles from './Input.module.css';

const popoverStyles = {
  popover: {
    position: 'absolute',
    zIndex: '2',
    marginTop: '0.5rem',
  },
};

function ColorPickerInput({ label, name, value, onChange }) {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setDisplayColorPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = () => setDisplayColorPicker((prev) => !prev);

  const handleColorChange = (color) => {
    onChange({
      target: {
        name: name,
        value: color.hex,
      },
    });
    setDisplayColorPicker(false);
  };

  return (
    <div className={inputStyles.inputContainer}>
      <label className={inputStyles.label}>
        {label}:
      </label>

      <input type="hidden" name={name} value={value} />

      <div style={{ position: 'relative' }}>
        <div
          className={inputStyles.input}
          style={{
            cursor: 'pointer',
            padding: '5px',
            height: '44px',
          }}
          onClick={handleClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        >
          <div
            style={{
              backgroundColor: value,
              width: '100%',
              height: '100%',
              borderRadius: '4px',
            }}
          />
        </div>

        {displayColorPicker && (
          <div style={popoverStyles.popover} ref={popoverRef}>
            <SwatchesPicker color={value} onChangeComplete={handleColorChange} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ColorPickerInput;
