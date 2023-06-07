import React, { useState } from 'react';

function TableGenerator() {
  const [number, setNumber] = useState(0);

  const handleInputChange = (event) => {
    const inputNumber = parseInt(event.target.value);
    setNumber(inputNumber);
  };

  const generateTable = () => {
    if (isNaN(number) || number === 0) {
      return null;
    }

    const table = [];
    for (let i = 1; i <= 10; i++) {
      const result = number * i;
      table.push(
        <tr key={i}>
          <td>{number}</td>
          <td>×</td>
          <td>{i}</td>
          <td>=</td>
          <td>{result}</td>
        </tr>
      );
    }
    return table;
  };

  return (
    <div>
      <input type="number" value={number} onChange={handleInputChange} />
      <table>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
}

export default TableGenerator;
