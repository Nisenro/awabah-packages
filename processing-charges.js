import Dinero from "dinero.js";

const localProcessingLowerfee = Dinero({
  amount: 20,
  currency: "NGN",
  precision: 4,
});
const localProcessingHigherfee = Dinero({
  amount: 100,
  currency: "NGN",
  precision: 4,
});
const paystackPercentageCharge = 1.5;
const paystackProcessingLimit = Dinero({
  amount: 2000,
  currency: "NGN",
  precision: 4,
});
const limit = Dinero({ amount: 4000, currency: "NGN", precision: 4 });

module.exports = function (amount) {
  let totalFee = Dinero({ amount: 0, currency: "NGN", precision: 4 });
  let awabahProcessingFee = Dinero({
    amount: 0,
    currency: "NGN",
    precision: 4,
  });
  let totalProcessingFee = Dinero({ amount: 0, currency: "NGN", precision: 4 });
  let mininumProceesingFee = Dinero({
    amount: 100,
    currency: "NGN",
    precision: 4,
  });

  if (!/^[0-9]*$/.test(amount.toString())) {
    return {
      totalFee,
      awabahProcessingFee,
      totalProcessingFee,
      paystackProcessingFee: Dinero({
        amount: 0,
        currency: "NGN",
        precision: 4,
      }),
    };
  }
  const formattedAmount = Dinero({
    amount: Number(amount),
    currency: "NGN",
    precision: 4,
  });
  const paystackProcessingFee = formattedAmount.percentage(
    paystackPercentageCharge,
    "HALF_EVEN"
  );

  if (formattedAmount.lessThanOrEqual(mininumProceesingFee)) {
    return {
      totalFee,
      awabahProcessingFee,
      totalProcessingFee,
      paystackProcessingFee,
    };
  }

  if (formattedAmount.lessThanOrEqual(limit)) {
    totalProcessingFee = localProcessingLowerfee.add(paystackProcessingFee);
    awabahProcessingFee = localProcessingLowerfee;
  } else if (
    formattedAmount.greaterThan(limit) &&
    paystackProcessingFee.lessThan(paystackProcessingLimit)
  ) {
    totalProcessingFee = localProcessingHigherfee.add(paystackProcessingFee);
    awabahProcessingFee = localProcessingHigherfee;
  } else if (
    formattedAmount.greaterThan(limit) &&
    paystackProcessingFee.greaterThan(paystackProcessingLimit)
  ) {
    totalProcessingFee = localProcessingHigherfee.add(paystackProcessingLimit);
    awabahProcessingFee = localProcessingHigherfee;
  }

  totalFee = formattedAmount.add(totalProcessingFee);
  return {
    totalFee,
    awabahProcessingFee,
    totalProcessingFee,
    paystackProcessingFee,
  };
};
