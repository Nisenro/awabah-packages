# PROCESSING CHARGES

This function calculates and returns the total fee and other useful information on the value passed;

### Importing

```JavaScript
import AwabahPackages from 'Awabah-packages';
```

### Usage

```JavaScript
const CalculateProcessingFee = AwabahPackages.CalculateProcessingFee(arg);

const result = CalculateProcessingFee(arg);

// or

const { CalculateProcessingFee } = AwabahPackages;

const result = CalculateProcessingFee(arg);

```

### Arguments

This function accepts only one argument called `amount` as shown below:

```JavaScript
const {
  totalFee,
  awabahProcessingFee,
  paystackProcessingFee,
  totalProcessingFee,
} = CalculateProcessingFee(amount);

```

- Amount is of type `string` or `number`
- Amount variable should contain only numbers

```JavaScript
const amount = 111; // ✅ correct
const amount = '1111';// ✅ correct
const amount = '33.5s1';// ❌ Incorrect
const amount = {
  value = 111;
};// ❌ Incorrect

```

### Response Object

The response object can be destructured to get the following properties

- `totalFee`: This is the total amount to be paid by the user. This gotten by evaluating and adding the `totalProcessingFee` fee to the `amount`.
- `awabahProcessingFee`: This is the amount Awabah is charging per transaction depending on the `amount`. This fee is capped at **&#8358;100**.
- `paystackProcessingFee`: This is the amount Paystack charges per transaction depending on the `amount`. This fee is capped at **&#8358;2000**.
- `totalProcessingFee`: This is the total amount of processing fee charged per transaction. This is derived by adding `awabahProcessingFee` to `paystackProcessingFee`.
