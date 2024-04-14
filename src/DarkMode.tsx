import * as React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

interface DarkModeProps {
  onChange: (checked: boolean) => void;
}

const DarkMode: React.FC<DarkModeProps> = ({ onChange }) => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    onChange(checked); // Call the onChange prop function with the checked value
  };

  return (
    <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
    />
  );
};

export default DarkMode;