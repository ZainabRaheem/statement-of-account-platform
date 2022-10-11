const StatementType = () => {
  return (
    <div className="container-fluid">
      <p>Statement type</p>
      <div className="statement-type">
        <input
          type="radio"
          name="Print on A4"
          value="Print on A4"
          id="Print on A4"
        />
        <label for="Print on A4">Print on A4</label>

        <input
          type="radio"
          name="Print on Letterhead"
          value="Print on Letterhead"
          id="Print on Letterhead"
        />
        <label for="Print on Letterhead">Print on Letterhead</label>

        <input
          type="radio"
          name="Send via Email"
          value="Send via Email"
          id="Send via Email"
        />
        <label for="Send via Email">Send via Email</label>
      </div>
    </div>
  );
};

export default StatementType;
