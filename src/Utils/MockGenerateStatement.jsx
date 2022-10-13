import { AcctData } from "./MockFetchDetails";

const MockGenerateStatement = (data) => {
    const Data = AcctData.filter((i) => i.acctNo === data.accountNo);
    if (Data.length !== 0) {
      return Data;
    } else {
      throw new Error("Sorry, this customer does not have sufficient balance to process this request");
    }
  };
  

  export default MockGenerateStatement;
  