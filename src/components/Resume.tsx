import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Resume() {
  const experiences = [
    {
      title: 'Data Analyst',
      company: 'Ihub Pvt. Ltd. | Murarka Organization',
      period: 'December 1, 2024 - Present',
      description: 'Skills Learned and Applied: Reporting and visualization, incentive planning, cross-functional coordination, financial analysis, performance monitoring, data quality',
      achievements: [
        'I prepare daily sales and stock reports to help managers make timely decisions.',
        'I create incentive & KPI reports for the sales team, which help to improve their performance.',
        'I also prepare MDMS reports to make sure all mobile phones are registered properly as per government rules.',
        'I clean and organize raw data to remove mistakes and make it useful',
        'I create clear charts and dashboards to show sales trends, stock levels, and team performance using Excel and Tableau',
        'Sometimes, I create reports that helps payment collections from newroad reatilers and track outstanding & differences',
        ],
    },
    {
      title: 'Secondary Master Data Coordinator',
      company: 'Bottlers Nepal Ltd',
      period: 'October 18, 2023 - November 30, 2024',
      description: 'Skills Learned and Applied: Advance Excel, SAP, B2B website (Coke Buddy), data cleaning, cross-border collaboration, problem solving.',
      achievements: [
        'I maintained and updated secondary customer master data with 99.9% accuracy, ensuring clean and reliable records for the RGM team',
        'I cleaned, validated, and merged data from SAP, VXceed, and Coke Buddy platforms, which reduced reporting errors by 25% and improved data consistency across systems',
        'I worked closely with international teams from India (Salescode.ai, Asterix) and Africa (Dimension Data) to resolve data-related issues, align processes, and support regional reporting tasks',
        'I created weekly and monthly secondary master dump that helped senior management monitor customer activity, plan outlet coverage, and make better business decisions',
        'I also supported tasks such as user access control for data tools, assisted in troubleshooting sync issues between platforms, and suggested improvements that made the data update process faster and more efficient',
      ],
    },
    {
      title: 'CSC-Live Chat Executive',
      company: 'Daraz Kyamu Pvt. Ltd',
      period: 'January 15th, 2021 - January 22nd, 2022',
      description: 'Skills Learned and Applied: Communication, conflict resolution, multitasking, team work, patience',
      achievements: [
        'I handled over 1200+ customer chats and maintained a 98% customer satisfaction score.',
        'I helped customers solve problems related to delivery, payments, refunds, and how to use the Daraz platform.',
        'I replied to multiple chats at the same time and made sure customers got quick and helpful answers.',
        'I helped reduce reply time by 30% by improving how we handled chats and by working more efficiently & reported technical issues to the support team and followed up with customers until their problems were solved.',
        'I kept a friendly and professional tone in all chats, which helped build trust with customers.',
      ],
    },
  ];

  const education = [
    {
      degree: 'Masters of Computer Science (MCS)',
      institution: 'Lincoln International College Of Management & IT',
      year: '2026',
      details: 'Studying the Master of Computer Science will strengthen my technical and analytical skills, helping me advance from data reporting to data-driven roles like Data Scientist or Analytics Manager and build a strong foundation for global career opportunities.',
    },
    {
      degree: 'Bachelor in Computer Application (BCA)',
      institution: 'Kathmandu Bernhardt College | Tribhuvan University (T.U.)',
      year: '2023',
      details: 'Studying the Bachelor in Computer Application (BCA) equipped me with strong skills in statistics, database management, programming, and data analysis, enabling me to effectively apply mathematical, analytical, and technical concepts to interpret data, build insights, and support data-driven decision-making in my role as a Data Analyst.',
    },
    {
      degree: '10+2 Management | Business Studies',
      institution: 'Prasadi Academy | National Education Board (NEB)',
      year: '2018',
      details: 'Studying Business Studies in 10+2 gave me a strong understanding of business models, management principles, and organizational processes, which helped me interpret data from a business perspective and transform analytical insights into practical strategies that support informed decision-making.',
    },
  ];

  const certifications = [
    'Introduction to Career Skills in Data Analytics | November 5, 2025 | Certificate of Completion',
    'Ideation Workshop | Lincoln International College | January 3, 2025 | Participation',
    'Getting Started with Azure Data Factory | December 12, 2023 | Participation',
    'Avenue of the year | Rotaract | July 2022 - June 2023 | Award',
    'Outstanding Coordinator of events | Rotaract | July 2022 - June 2023 | Appreciation',
    'Professional Development Director | Rotaract | July 2022 - June 2023 | Contribution',
    'Professional Development Director | Rotaract | July 2022 - June 2023 | Appreciation',
    '5 Days Bootcamp on Graphics Designing | May 21- May 25, 2022 | Participation',
    'Internet of Things Systems : From Sensor and Embedded Computing to Data Analytics Paradigm | August 05, 2020 | Participation',
    'National Arduino Workshop Campaign | January 30, 2019 | Participation',
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Professional experience and qualifications
          </p>
          <button className="mt-6 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium flex items-center gap-2 mx-auto transition-all transform hover:scale-105">
            <Download size={20} />
            Download Resume PDF
          </button>
        </div>

        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="px-4 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIdx) => (
                      <li
                        key={achIdx}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <ul className="space-y-3">
                  {certifications.map((cert, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-6 h-6 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
