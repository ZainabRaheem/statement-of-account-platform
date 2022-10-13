const MockFetchDetails = (acctNo) => {
  const data = AcctData.filter((i) => i.acctNo === acctNo);

  if (data.length !== 0) {
    return data;
  } else {
    throw new Error("Account not found");
  }
};

export const AcctData = [
  {
    acctNo: "2012345678",
    acctName: "Ifunanya Jennifer Ofodu",
    currency: "NGN",
    email: "ifunanya.jennifer.ofodu@abcxyz.com",
  },

  {
    acctNo: "2012389678",
    acctName: "Ifunanya Ofodu",
    currency: "NGN",
    email: "ifunanya.ofodu@abcxyz.com",
  },
];

export default MockFetchDetails;
