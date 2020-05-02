// Get the difference in years
export function getDifferenceYear(year) {
  return new Date().getFullYear() - year;
}

// Calculate the total to pay according to the brand
export function calculateBrand(brand) {
  let i;

  switch (brand) {
    case "american":
      i = 1.15;
      break;
    case "asian":
      i = 1.05;
      break;
    case "european":
      i = 1.3;
      break;
    default:
      break;
  }
  return i;
}

// Calculate plan type
export function getPlan(plan) {
  return plan === "basic" ? 1.2 : 1.5;
}

// Capitalize
export function firstCapital(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
