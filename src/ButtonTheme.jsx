import { useEffect, useState } from "react";

export default function ButtonTheme() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  });

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <button
        className="bg-slate-800 text-white hover:bg-slate-950 dark:bg-slate-300 dark:text-black dark:hover:bg-slate-500 px-4 py-2 rounded"
        onClick={handleChangeTheme}
      >
        Change color
      </button>
    </>
  );
}
