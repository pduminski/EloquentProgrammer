interface InflationRates {
  year: number;
  rate: number;
}

interface RecentSalaries {
  year: number;
  salary: number;
}

const inflationRates: InflationRates[] = [
  { year: 2017, rate: 2.0 },
  { year: 2018, rate: 1.6 },
  { year: 2019, rate: 2.3 },
  { year: 2020, rate: 3.4 },
  { year: 2021, rate: 5.1 },
  { year: 2022, rate: 14.4 },
  { year: 2023, rate: 10.0 },
  // Add more years and rates as needed
];

const mySalaries: RecentSalaries[] = [
  { year: 2017, salary: 4000 },
  { year: 2018, salary: 5600 },
  { year: 2019, salary: 6500 },
  { year: 2020, salary: 12800 },
  { year: 2021, salary: 16000 },
  { year: 2022, salary: 20800 },
  { year: 2023, salary: 16800 },
  // Add more years and net salaries as needed
];

class Employee {
  constructor(private fullName: string, private salaries: RecentSalaries[]) {}

  getFullName(): string {
    return "Employee " + this.fullName;
  }

  // getSalaries(): RecentSalaries[] {
  //   return this.salaries;
  // }

  // recursion method which will help us calculate salary increase
  calculateSalaryIncrease(currentYearSalary: number, previousYearSalary: number): number {
    return ((currentYearSalary - previousYearSalary) / previousYearSalary) * 100;
  }

  // go to the loop for all years and use our recursion method calculateSalaryIncrease()
  calculateAndDisplayStatisticsForSalaryInflation() {
    let globalInflation: number = 0;
    let globalSalaryIncrease: number = 0;

    for (let i = 1; i < this.salaries.length; i++) {
      let currentYear: number = this.salaries[i].year;
      let previousYear: number = currentYear - 1; // check later what is the difference
      let currentYearSalary: number = this.salaries[i].salary;
      let previousYearSalary: number = this.salaries[i - 1].salary;
      let inflationRateForCurrentYear: number = inflationRates[i].rate;

      // calculate salary increase
      let salaryIncrease: number = this.calculateSalaryIncrease(currentYearSalary, previousYearSalary);

      // calculate actual salary increase including inflation
      let salaryIncreaseWithInflationRate = salaryIncrease - inflationRateForCurrentYear;

      // increment global values to have overall score
      globalInflation += inflationRateForCurrentYear;
      globalSalaryIncrease += salaryIncrease;

      console.log(`Salary increase from ${previousYear} to ${currentYear} was ${salaryIncrease.toFixed(2)}%`);
      console.log(`Inflation rate in ${currentYear}: ${inflationRateForCurrentYear?.toFixed(2)}%`);
      console.log(`Real salary increase: ${salaryIncreaseWithInflationRate.toFixed(2)}%\n`);
    }
    let overallSalaryInflationScore: number = globalSalaryIncrease - globalInflation;
    // Log global values
    console.log(`Your overall score is: `);
    console.log(`Overall increase in salary in ${this.salaries.length} years : ${globalSalaryIncrease.toFixed(2)}%`);
    console.log(`Overall Inflation during that period : ${globalInflation.toFixed(2)}%`);
    console.log(`Salary increase vs inflation : ${overallSalaryInflationScore.toFixed(2)}%`);
  }
}

let employee: Employee = new Employee("Paweł Dumiński", mySalaries);
console.log(employee.getFullName());
employee.calculateAndDisplayStatisticsForSalaryInflation();
