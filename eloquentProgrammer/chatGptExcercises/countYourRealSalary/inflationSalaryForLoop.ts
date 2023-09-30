interface InflationSalaryData {
  year: number;
  inflationRate: number;
  salary: number;
}

const inflationSalaryData: InflationSalaryData[] = [
  { year: 2017, inflationRate: 2.0, salary: 4000 },
  { year: 2018, inflationRate: 1.6, salary: 5600 },
  { year: 2019, inflationRate: 2.3, salary: 6500 },
  { year: 2020, inflationRate: 3.4, salary: 12800 },
  { year: 2021, inflationRate: 5.1, salary: 16000 },
  { year: 2022, inflationRate: 14.4, salary: 20800 },
  { year: 2023, inflationRate: 10.0, salary: 16800 },
  // Add more years and rates as needed
];

function calculateSalaryIncreasePercentage(data: InflationSalaryData[]): void {
  let accumulatedInflation: number = 0;
  let accumulatedSalaryIncrease: number = 0;

  for (let i = 1; i < data.length; i++) {
    const currentYearData = data[i];
    const previousYearData = data[i - 1];

    const currentYear = currentYearData.year;
    const currentSalary = currentYearData.salary;
    const currentYearInflation = currentYearData.inflationRate;
    const previousSalary = previousYearData.salary;

    const salaryPercentageIncrease = ((currentSalary - previousSalary) / previousSalary) * 100;

    accumulatedInflation += currentYearInflation;
    accumulatedSalaryIncrease += salaryPercentageIncrease;

    console.log(`Year: ${currentYear}`);
    console.log(`Salary: ${currentSalary.toFixed(2)} PLN`);
    console.log(`Inflation Rate: ${currentYearInflation.toFixed(2)}%`);
    console.log(`Salary Increase: ${salaryPercentageIncrease.toFixed(2)}%\n`);
  }
  console.log(`Global Accumulated Inflation Rate: ${accumulatedInflation.toFixed(2)}%`);
  console.log(`Global Accumulated Salary Increase: ${accumulatedSalaryIncrease.toFixed(2)}%`);

  let realSalaryIncreaseIncludingInflation: number = accumulatedSalaryIncrease - accumulatedInflation;
  console.log(`Real Salary Increase: ${realSalaryIncreaseIncludingInflation.toFixed(2)}%`);
}

calculateSalaryIncreasePercentage(inflationSalaryData);
