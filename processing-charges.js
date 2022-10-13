const Dinero = require('dinero.js');

Dinero.defaultCurrency = "NGN";
Dinero.defaultPrecision = 4;

const localProcessingLowerfee = Dinero({ amount: 20 });
const localProcessingHigherfee = Dinero({ amount: 100 });
const paystackPercentageCharge = 0.015;
const paystackProcessingLimit = Dinero({ amount: 2000 });
const limit = Dinero({ amount: 4000 });

module.exports = function (amount) {
  let totalFee = Dinero({ amount: 0 });
  let awabahProcessingFee = Dinero({ amount: 0 });
  let totalProcessingFee = Dinero({ amount: 0 });
  let mininumProcessingFee = Dinero({ amount: 100 });

  if (!/^[0-9]*$/.test(amount.toString())) {
    return {
      totalFee,
      awabahProcessingFee,
      totalProcessingFee,
      paystackProcessingFee: Dinero({ amount: 0 }),
    };
  }

  const formattedAmount = Dinero({ amount: Number(amount) });
  if (formattedAmount.lessThan(mininumProcessingFee)) {
    return {
      totalFee,
      awabahProcessingFee,
      totalProcessingFee,
      paystackProcessingFee: Dinero({ amount: 0 }),
    };
  }
  let paystackProcessingFee = Dinero({
    amount: Math.ceil(formattedAmount.getAmount() * paystackPercentageCharge),
  });

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
    paystackProcessingFee = paystackProcessingLimit;
  }

  totalFee = formattedAmount.add(totalProcessingFee);
  return {
    totalFee,
    awabahProcessingFee,
    totalProcessingFee,
    paystackProcessingFee,
  };
};
