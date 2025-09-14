# 🚀 Getting Started

1. Clone this repository
   ```bash
   git clone <this_repo_link>
   cd kds_backend
2. run nameValidator.ts
    ```bash
    npx ts-node nameValidator.ts
3. run missingNumber.ts
   ```bash
   npx ts-node missingNumber.ts  

# 📝 Logic Test

## (1) Name Validator

### Problem

Write a function to validate a name.

### Definitions

1. A **term** is either an **initial** or **word**.
2. **Initial** = 1 character and must end with a dot (`.`)
3. **Word** = 2 or more characters (no dots allowed)

### A "valid name" must follow these formats:

- `I. Septian`
- `I. T. Septian`
- `Ivan T. Septian`
- `Ivan Tri Septian`

### Invalid Examples:

| Invalid Name           | Reason                                                                 |
|------------------------|------------------------------------------------------------------------|
| `Ivan`                 | Must contain 2 or 3 terms                                              |
| `I Tri`                | Initials must end with a dot                                           |
| `I. T Septian`         | Initials must end with a dot                                           |
| `i. Tri`               | Incorrect capitalization                                               |
| `I. septian`           | Incorrect capitalization                                               |
| `i. t. Septian`        | Incorrect capitalization                                               |
| `I. Tri Septian`       | Cannot have: initial first + word middle                               |
| `I. T. S.`             | Last name cannot be an initial                                         |
| `Ivan. Tri Septian`    | Dot not allowed after a word                                           |

### Rules Recap:

1. Each term must be **capitalized** correctly.
2. **Initials** must be 1 character followed by a dot.
3. **Words** must be 2 or more characters, with **no dots**.
4. The name must have **2 or 3 terms**.
5. If there are 3 terms:
   - You can expand both first and middle name.
   - You can expand first name and keep middle as initial.
   - You **cannot** keep first as initial and expand the middle.
6. **Last name must always be a word**.

### Function Signature:

function validName(name: string): boolean;

### Examples:
- validName("I. Tri")            ➞ true
- validName("I. T. Septian")     ➞ true
- validName("Ivan T. Septian")   ➞ true

- validName("Ivan")              ➞ false
- validName("i. Tri")            ➞ false
- validName("I Tri")             ➞ false
- validName("I. Tri Septian")    ➞ false
- validName("I. Tri P.")         ➞ false
- validName("Ivan. Tri Septian") ➞ false

## (2) Find All Numbers Disappeared in an Array

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

### Constraints:
* n == nums.length
* 1 <= n <= 105
* 1 <= nums[i] <= n

### Examples:
const nums = [4,3,2,7,8,2,3,1]
findDisapperared(nums)  ➞ [5,6]

const nums = [1,1]
findDisapperared(nums)  ➞ [2]
