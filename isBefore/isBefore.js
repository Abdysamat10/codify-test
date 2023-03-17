function isBefore(target, base) {
    const target2 = new Date(target);
    const base2 = new Date(base);
    return target2 < base2
  }
  console.log(isBefore('01.01.2023', '01.02.2022'));
  console.log(isBefore('01.02.2022', '01.01.2023'));
  console.log(isBefore('01.02.2022', '01.02.2022'));