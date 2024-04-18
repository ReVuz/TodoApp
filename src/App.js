import Input from './Input';
import Display from './Display';
import { useEffect, useState } from 'react';
import DarkMode from './DarkMode.tsx';

function App() {
  const [toDos, setToDos] = useState([]);
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || 'light'; // Default to 'light' if not found
  });
  useEffect(() => {
    console.log("Theme:", theme);
    localStorage.setItem('theme', theme); 
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);


  
  const handleThemeSwitch = (checked) => {
    console.log("Checked:", checked);
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r to-emerald-600 from-sky-400 p-5 dark:bg-gradient-to-r dark:to-emerald-950 dark:from-sky-950 ">
      <div className='float-right'>
        <DarkMode onChange={handleThemeSwitch} theme={theme}/>
      </div>
      <div className="group rounded mx-auto max-w-[750px] min-h-[630px] bg-white hover:neon-teal bg-white dark:bg-slate-800">
        <h1 className="text-center p-4 mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl dark:bg-gradient-to-r dark:to-emerald-400 dark:from-sky-800 lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-400 transition-colors duration-300 ease-in-out group-hover:to-sky-500 group-hover:from-emerald-400">
          TODO APP
        </h1>
        <Input setToDos={setToDos} toDos={toDos} />
        <Display setToDos={setToDos} toDos={toDos} />
      </div>
    </div>
  );
}

export default App;