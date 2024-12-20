import Image from 'next/image'; 
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
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100`}
    >
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-gray-100 shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
          <h1 className="text-xl font-bold">Zhiyu Liao&apos;s Portfolio</h1>
          <ul className="flex space-x-6">
            <li><a href="#summary" className="hover:text-blue-400">Summary</a></li>
            <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
            <li><a href="#education" className="hover:text-blue-400">Education</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
            <li><a href="#languages" className="hover:text-blue-400">Languages</a></li>
          </ul>
          <a
            href="/Zhiyu_Liao_CV.pdf"
            download="Zhiyu_Liao_CV.pdf"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            Download CV
          </a>
        </div>
      </nav>

      <div className="pt-24">
        {/* Profile Header */}
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Image
              src="/photo.jpg"
              alt="Zhiyu Liao"
              width={200}
              height={200}
              className="w-52 h-52 rounded-full border-4 border-gray-700 shadow-lg object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">Zhiyu Liao</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Montreal, QC, Canada</p>
          <div className="flex justify-center flex-col gap-4 mt-4">
            <div className="flex justify-center gap-6">
              <a href="https://www.linkedin.com/in/zhiyu-liao-330513327/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
              <a href="https://github.com/zhiyu0617" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
            </div>

            <div className="flex justify-center gap-6 mt-2">
              <a href="mailto:zhiyuliao1@gmail.com" className="text-blue-600 hover:underline">zhiyuliao1@gmail.com</a>
              <a href="tel:438-722-7918" className="text-blue-600 hover:underline">438-722-7918</a>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section id="summary" className="px-8 sm:px-20 py-8">
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Professional Summary</h2>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <p className="text-lg">
              Enthusiastic Computer Science student with a strong foundation in software development, algorithms, and data structures.
              Proficient in multiple programming languages, including Python, Java, and C#. Possesses strong analytical skills,
              effective teamwork, and excellent communication abilities. Actively seeking opportunities to apply technical knowledge
              and gain practical experience in real-world projects.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-8 sm:px-20 py-8 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-700 text-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Programming Languages</h3>
              <ul className="list-disc pl-5">
                <li>C#</li>
                <li>Java</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>Swift</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-700 text-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Web Technologies</h3>
              <ul className="list-disc pl-5">
                <li>HTML, CSS, PHP</li>
                <li>JavaScript</li>
                <li>ASP.NET</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-700 text-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Database Technologies</h3>
              <ul className="list-disc pl-5">
                <li>MySQL</li>
                <li>SQLite</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="px-8 sm:px-20 py-8">
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-400">DEC in Computer Science</h3>
              <p>Lasalle College, Montreal, Canada (Jan 2023 - May 2025)</p>
              <p className="text-gray-400 mt-2">
                Relevant Coursework: Android Mobile Development, iOS Mobile Development, Data Structures, Operating Systems and Network,
                Database, Information Systems
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-400">Bachelor of Science in Life Science</h3>
              <p>Sichuan Agricultural College, Chengdu, China (Sept 2018 – June 2022)</p>
              <p className="text-gray-400 mt-2">
                Relevant Coursework: Genetics, Organisms, Evolution and Phylogeny, Microbiology, Biochemistry, Statistical Methods
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-8 sm:px-20 py-8">
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-400">Property Rental Management System</h3>
              <p className="text-gray-400 mt-2">
                <strong>Technologies:</strong> MySQL, ASP.NET Core Web App (MVC)
              </p>
              <p className="mt-2">
                Developed a property rental management system for a web-based application designed to streamline property management tasks.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-400">Online Queueing System</h3>
              <p className="text-gray-400 mt-2">
                <strong>Technologies:</strong> Python, MySQL
              </p>
              <p className="mt-2">
                Developed a secure online queueing system with user authentication and real-time queuing status.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-400">Online Food Ordering Software</h3>
              <p className="text-gray-400 mt-2">
                <strong>Technologies:</strong> Java, Firebase, API Integration
              </p>
              <p className="mt-2">
                Developed an online food ordering software allowing users to order food, modify menus, and make payments.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-400">Development of Team Websites</h3>
              <p className="text-gray-400 mt-2">
                <strong>Technologies:</strong> PHP
              </p>
              <p className="mt-2">
                Developed a Team website to introduce the team, including background music, animated transitions, etc.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-8 sm:px-20 py-8">
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Experience</h2>
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-400">Research Assistant Intern</h3>
            <p>TechLEX GROUP, Sichuan, China (May 2021 – June 2021)</p>
            <p className="text-gray-400 mt-2">Responsible for experimental design, data collection, and analysis.</p>
          </div>
        </section>

        {/* Languages Section */}
        <section id="languages" className="px-8 sm:px-20 py-8">
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Languages</h2>
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
            <ul className="list-disc pl-5">
              <li>English: Fluent</li>
              <li>French: Intermediate</li>
              <li>Chinese (Mandarin): Native</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
