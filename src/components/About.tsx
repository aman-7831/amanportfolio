import { GraduationCap, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const timeline = [
    {
      year: '3rd Semester Running',
      title: 'Masters of Computer Science',
      description: 'My program began in September 2024 and is scheduled for completion in 2026.',
      icon: GraduationCap,
    },
    {
      year: '2023',
      title: 'Coca-Cola Beverages Nepal',
      description: 'I continued my career with Coca-Cola, a leading multinational company, where i managed nationwide seconday customer data. It is rewarding to support key business decisions for this global leader.',
      icon: TrendingUp,
    },
    {
      year: '2022',
      title: 'Avenue of the year | Rotaract',
      description: 'Under my leadership, the Professional Development Committee received the "Avenue of the Year" award, and 7 of 9 team members were honored as "Rotaract of the Month" for delivering outstanding events.',
      icon: Award,
    },
    {
      year: '2020',
      title: 'Daraz Nepal',
      description: 'At the age of 18, I began my professional journey as an intern with a multinational company, gaining valuable early experience and foundational skills in a global environment.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a Data Analyst with a strong foundation in both Computer Application (BCA)
               and a pursuit of a Master's in Computer Science (MCS). My expertise lies in transforming 
               raw data into actionable insights to drive business decisions, with over a year of experience 
               in dedicated data roles.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Currently, I'm at Ihub Pvt Ltd., where I'm responsible for preparing crucial sales, stock,
               and KPI reports using tools like Excel VBA and Tableau. I actively support managerial and sales 
               strategies, including incentive.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Before this, I was managing secondary master data at Coca-Cola Beverages Nepal, 
              maintaining high-accuracy customer master data and reducing reporting errors by 25% through 
              cleaning and validation across platforms like SAP and VXceed. I'm skilled in cross-functional 
              and cross-border collaboration, having worked with international teams to align processes. 
              My previous experience in Live Chat Customer Service also honed my problem-solving, multitasking, and 
              communication skills.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I am highly dedicated and committed to leveraging my problem-solving skills
               to contribute to corporate growth and continuous improvement. 
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                <p className="text-3xl font-bold text-primary">7+</p>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                <p className="text-3xl font-bold text-primary">2+</p>
                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">My Journey</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                        <Icon className="text-primary" size={20} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
