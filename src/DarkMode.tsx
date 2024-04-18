import * as React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

interface DarkModeProps {
  onChange: (checked: boolean) => void;
  theme :  string;
}

const DarkMode: React.FC<DarkModeProps> = ({theme, onChange }) => {
  // const [isDarkMode, setDarkMode] = React.useState(false);
  
  const toggleDarkMode = (checked: boolean) => {
    // setDarkMode(checked);
    onChange(checked); // Call the onChange prop function with the checked value
  };

  return (
    <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={theme === "dark"}
      onChange={toggleDarkMode}
      size={30}
    />
  );
};

export default DarkMode;