const DateRange = () => {
  return (
    <div className="container-fluid">
      <p>Date Range</p>
      {/* <div className="date-range"> */}
      <form class="statement-type login-form">
        <div class="form-group login-details start-date">
          <label class="label" for="start date">
            Start date
          </label>
          <input
            type="date"
            name="start date"
            class="form-control input-box"
            value="start date"
            id="start date"
            min=""
            max=""
            required
          />
        </div>

        <div class="form-group login-details end-date">
          <label class="label" for="end date">
            End date
          </label>
          <input
            type="date"
            name="end date"
            class="form-control input-box"
            value="end date"
            id="end date"
            min=""
            max=""
            required
          />
        </div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default DateRange;
