# AWABAH PACKAGES

A List of local packages used across all Awabah products and repositories.

## Installation

```bash

yarn add awabah-packages

```

## Importing

```JavaScript
import AwabahPackages from 'Awabah-packages';
```

## Usage

```JavaScript
const package = AwabahPackages[`Package_Name`](arg);

const result = package(arg);

// or

const { packageName } = AwabahPackages;

const result = packageName(arg);

```

## Packages

### 1. Find User In Model Query

### 2. Format Phone Number

### 3. Gender In Word

### 4. Lower Case

### 5. Merge Two Object

### 6. Processing Charges

```JavaScript
import AwabahPackages from 'Awabah-packages';

const { CalculateProcessingFee } = AwabahPackages;
/*
** Amount: string(that consists of only numbers)
*/
const {
  totalFee,
  awabahProcessingFee,
  totalProcessingFee,
  paystackProcessingFee,
} = CalculateProcessingFee(amount);
```

Each item returned from the `CalculateProcessingFee` function is an object that consists of `amount`, `currency`, `precision` and a handful of methods such as `getAmount`, `getCurrency`, etc. You can learn more about it here [Learn more](./docs/PROCESSING_CHARGES.md)

### 7. Slugify

### 8. Split Value

### 9. Title Case

### 10. Trim String
