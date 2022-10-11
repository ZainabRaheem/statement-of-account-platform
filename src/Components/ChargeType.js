const StatementType = () => {
  return (
    <div className="container-fluid">
      <p>Charge type</p>
      <div className="charge-type">
        <input
          type="radio"
          name="Charge customer"
          value="Charge customer"
          id="Charge customer"
        />
        <label for="Charge customer">Charge customer</label>

        <input
          type="radio"
          name="Do not charge customer"
          value="Do not charge customer"
          id="Do not charge customer"
        />
        <label for="Do not charge customer">Do not charge customer</label>
      </div>
    </div>
  );
};

export default StatementType;
