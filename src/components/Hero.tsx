import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Aman Bhandari
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400">
                Data Analyst
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My background combines a Master's in Computer Science focus with practical experience in data analysis and master data management. As a Data Analyst, I specialize in the full data lifecycle, from cleaning and organizing raw data to building dashboards in Tableau and performing sales data modeling. I have proven success in data validation, including reducing reporting errors by 25% at Coca-Cola Beverages Nepal, and I'm committed to using data to drive corporate growth and efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium flex items-center gap-2 transition-all transform hover:scale-105"
              >
                View My Work
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-all"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/30 dark:to-primary/10 rounded-2xl flex items-center justify-center">
              <img src="./dist/img/Main.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
