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
let totalFee = Dinero({ amount: 0, currency: "NGN", precision: 4 });
let totalProcessingFee = Dinero({ amount: 0, currency: "NGN", precision: 4 });
let mininumProceesfinFee = Dinero({ amount: 100, currency: "NGN", precision: 4 });

module.exports = function(amount) {
    const formattedAmount = Dinero({
        amount: Number(amount),
        currency: "NGN",
        precision: 4,
    });
    const paystackProcessingFee = formattedAmount.percentage(
        paystackPercentageCharge,
    );

    if (formattedAmount.lessThanOrEqual(limit)) {
        totalProcessingFee = localProcessingLowerfee.add(paystackProcessingFee);
    } else if (
        formattedAmount.greaterThan(limit) &&
        paystackProcessingFee.lessThan(paystackProcessingLimit)
    ) {
        totalProcessingFee = localProcessingHigherfee.add(paystackProcessingFee);
    } else if (
        formattedAmount.greaterThan(limit) &&
        paystackProcessingFee.greaterThan(paystackProcessingLimit)
    ) {
        totalProcessingFee = localProcessingHigherfee.add(paystackProcessingLimit);
    }

    totalFee = formattedAmount.add(totalProcessingFee);
    console.log("");
    console.log("formattedAmount", formattedAmount);
    console.log("totalProcessingFee", totalProcessingFee.getAmount());
    console.log("paystackProcessingFee", paystackProcessingFee);
    console.log("totalFee", totalFee);
    console.log("");
    return {
        totalFee,
        paystackProcessingFee,
        totalProcessingFee: totalProcessingFee
            .multiply(10000)
            .toFormat("$0,000.00"),
    };

}