import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ${isDarkMode ? "dark" : ""}`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg">
          <Image
            className="object-cover"
            src="/profile-image.jpg" // Replace with your image
            alt="Zhiyu Liao"
            layout="fill"
            priority
          />
        </div>

        <h1 className="text-3xl font-bold text-center sm:text-left text-primary-600 dark:text-primary-300 transition-colors">Zhiyu Liao</h1>
        <p className="text-center sm:text-left text-lg text-secondary-500 dark:text-secondary-400">
          Computer Science student at Lasalle College, Montreal. Passionate about
          software development, mobile, and web technologies.
        </p>

        <div className="flex justify-center sm:justify-start gap-6 mt-6">
          <a
            className="rounded-full border border-solid border-transparent bg-primary-500 text-white px-6 py-2 hover:bg-primary-700 transition-colors"
            href="https://github.com/zhiyu0617"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My GitHub
          </a>
          <a
            className="rounded-full border border-solid border-primary-500 text-primary-500 px-6 py-2 hover:bg-primary-100 transition-colors"
            href="/CV_Zhiyu_Liao.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </main>

      <section className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-300">
          Featured Projects
        </h2>
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all transform hover:scale-105">
            <h3 className="text-lg font-semibold text-primary-500 dark:text-primary-300">Online Queueing System</h3>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              Developed a secure online queuing system using Python and MySQL.
              Features include real-time queuing status and encrypted data storage.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all transform hover:scale-105">
            <h3 className="text-lg font-semibold text-primary-500 dark:text-primary-300">Online Food Ordering System</h3>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              Built a food ordering system in Java, integrating a dynamic menu
              and payment via API. Stored data using Firebase.
            </p>
          </div>
        </div>
      </section>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-secondary-500 dark:text-secondary-400">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/zhiyu-liao"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/zhiyu0617"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <button
          className="text-primary-500 dark:text-primary-300 hover:text-primary-700 dark:hover:text-primary-500 transition-colors"
          onClick={toggleDarkMode}
        >
          Toggle Dark Mode
        </button>
      </footer>
    </div>
  );
}
