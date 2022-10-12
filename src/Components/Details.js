import Form from "./Form";

const Details = () => {
  return (
    <div className="card details">
      <div className="card-body details">
        <Form />
        <hr />
        <div className="buttons px-4 pt-3 pb-4">
          <button className="button generate">Generate Statement</button>
          <button className="button clear">Clear All</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
