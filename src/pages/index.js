import Image from "next/image";
import localFont from "next/font/local";

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
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/profile-image.jpg" // Replace with your image
          alt="Zhiyu Liao"
          width={180}
          height={180}
          priority
        />
        <h1 className="text-2xl font-bold">Zhiyu Liao</h1>
        <p className="text-center sm:text-left">
          Computer Science student at Lasalle College, Montreal. Passionate about
          software development, mobile, and web technologies.
        </p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            <strong>Technical Skills:</strong> C#, Java, Python, JavaScript, HTML, CSS, SQL.
          </li>
          <li>
            <strong>Languages:</strong> English (Fluent), Chinese (Fluent), French (Intermediate).
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/zhiyu0617"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My GitHub
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/CV_Zhiyu_Liao.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </main>

      <section className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-xl font-bold">Featured Projects</h2>
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">Online Queueing System</h3>
            <p className="text-sm">
              Developed a secure online queuing system using Python and MySQL.
              Features include real-time queuing status and encrypted data storage.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">Online Food Ordering System</h3>
            <p className="text-sm">
              Built a food ordering system in Java, integrating a dynamic menu
              and payment via API. Stored data using Firebase.
            </p>
          </div>
        </div>
      </section>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
      </footer>
    </div>
  );
}
