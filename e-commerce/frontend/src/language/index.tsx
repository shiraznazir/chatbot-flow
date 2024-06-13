import en from "./en/index";

let langType: string = "en";

const lang = (variable: string): string => {
  if (variable.trim().length !== 0) {
    if (langType === "en") {
      if (en[variable]) {
        return en[variable];
      } else {
        return "__" + variable + "__"; // Use the variable itself instead of en[variable]
        // return titleCase(variable);
      }
    }
  }
  return ""; // Return empty string if no condition matches
};

// const titleCase = (s: string): string =>
//   s
//     .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase()) // Initial char (after -/_)
//     .replace(/[-_]+(.)/g, (_, c) => " " + c.toUpperCase()); // First char after each -/_

export default lang;
