import {
  calculateInvestmentResults,
  currencyFormatter,
} from "../util/investment";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((value) => {
          const totalInterest =
            value.valueEndOfYear -
            value.annualInvestment * value.year -
            initialInvestment;
          const totalAmountInvested = value.valueEndOfYear - totalInterest;
          return (
            <tr key={value.year}>
              <td>{value.year}</td>
              <td>{currencyFormatter.format(value.valueEndOfYear)}</td>
              <td>{currencyFormatter.format(value.interest)}</td>
              <td>{currencyFormatter.format(totalInterest)}</td>
              <td>{currencyFormatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
