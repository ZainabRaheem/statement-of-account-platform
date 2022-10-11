<div className="generator-details">
  <p>Enter a valid account number to generate an account statement</p>
  <div className="detailss d-flex align-items-center">
    <form class="login-form">
      <div class="form-group login-details username">
        <label class="label" for="username">
          Account number
        </label>
        <input
          type="text"
          name="username"
          class="form-control input-box"
          placeholder="Enter your account number"
          id="username"
          required
        />
      </div>
    </form>

    <div class="button">
      <button
        type="submit"
        value="login"
        class="btn mt-4 py-2 px-4 fetch-button"
      >
        Fetch details
      </button>
    </div>
  </div>
  <div className="buttons">
    <button>Generate Statement</button>
    <button>Clear All</button>
  </div>
</div>;
