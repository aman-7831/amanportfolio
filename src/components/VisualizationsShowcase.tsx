import { BarChart, LineChart, PieChart, HeatMap } from './Visualizations';

export default function VisualizationsShowcase() {
  const barData = [
    { label: 'Kathmandu residents use smartphones | Samsung, Apple, Xiaomi, Oppo, Realme', value: 90, color: '#059669' },
    { label: 'Regularly use digital payments | Fonepay, eSewa, Khalti, IME Pay', value: 85, color: '#10b981' },
    { label: 'Rely on ride-sharing services | Pathao, Indriver, Yango', value: 75, color: '#34d399' },
    { label: 'Buying premium FMCG products | Red Bull, Coca-Cola, Pringles, Dove', value: 40, color: '#6ee7b7' },
    { label: 'Have adopted electric vehicles | Tata, BYD, Tesla, Deepal, NIU, Segway', value: 10, color: '#6ee7b7' },
  ];

  const lineData = [
    { x: '2015', y: 0 },
    { x: '2016', y: 15 },
    { x: '2017', y: 25 },
    { x: '2018', y: 40 },
    { x: '2019', y: 60 },
    { x: '2020', y: 85 },
     { x: '2021', y: 150 },
    { x: '2022', y: 220 },
    { x: '2023', y: 280 },
    { x: '2024', y: 320 },
  ];

  const pieData = [
    { label: 'Tiktok Store', value: 50, color: '#059669' },
    { label: 'Facebook/Instagram', value: 15, color: '#10b981' },
    { label: 'Daraz', value: 25, color: '#34d399' },
    { label: 'Google Search', value: 7, color: '#34d399' },
    { label: 'Others', value: 3, color: '#34d399' },
  ];

  const heatMapData = [
    [9, 4, 8, 7, 6, 9, 8],  
    [8, 9, 8, 9, 7, 8, 7],  
    [7, 8, 6, 8, 5, 8, 6], 
    [6, 9, 5, 9, 4, 7, 5],
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Data Visualizations
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Sample visualizations showcasing analytical capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              What Kathmandu is Buying Now (2024 Data)
            </h3>
            <BarChart data={barData} />
          </div>

          <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              EV Sales Growth Trend in Nepal (2015-2024)
            </h3>
            <LineChart data={lineData} />
          </div>

          <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              TikTok Drives 50% of New Customer Growth in Nepal's Digital Market (2025 Data)
            </h3>
            <PieChart data={pieData} />
          </div>

          <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              From Local Stores to TikTok Shop: The 2024 Nepal Retail Scorecard (Heatmap)
            </h3>
            <div className="overflow-x-auto">
              <HeatMap data={heatMapData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
