const isInitial = (term: string) => {
  // Initials must be 1 character followed by a dot
  return /^[A-Z]\.$/.test(term);
};

const isWord = (term: string) => {
  // Words must be 2 or more characters, with *no dots
  return /^[A-Z][a-z]+$/.test(term);
};

const validName = (name: string) => {
  const n = name.split(" ");

  // The name must have 2 or 3 terms
  if (n.length < 2 || n.length > 3) return false;

  // If name length === 2, it can be initial + word or word + word
  if (n.length === 2) {
    const [firstName, lastName] = n;
    if (isInitial(firstName) && isWord(lastName)) return true;
    if (isWord(firstName) && isWord(lastName)) return true;
    return false;
  }

  const [firstName, middleName, lastName] = n;

  // Last name must always be a word
  if (!isWord(lastName)) return false;

  // You can expand both first and middle name.
  if (isWord(firstName) && isWord(middleName)) return true;

  // You can expand first name and keep middle as initial.
  if (isWord(firstName) && isInitial(middleName)) return true;

  // You cannot keep first as initial and expand the middle.
  if (isInitial(firstName) && isInitial(middleName)) return true;

  return false;
};

// VALID
console.log("\nSAMPLE VALID NAME");
console.log("I. Tri", "<<<", validName("I. Tri"));
console.log("I. T. Septian", "<<<", validName("I. T. Septian"));
console.log("Ivan T. Septian", "<<<", validName("Ivan T. Septian"));

// INVALID
console.log("\nSAMPLE INVALID NAME");
console.log("Ivan", "<<<", validName("Ivan"));
console.log("i. Tri", "<<<", validName("i. Tri"));
console.log("I Tri", "<<<", validName("I Tri"));
console.log("I. Tri Septian", "<<<", validName("I. Tri Septian"));
console.log("I. Tri P.", "<<<", validName("I. Tri P."));
console.log("Ivan. Tri Septian", "<<<", validName("Ivan. Tri Septian"));
