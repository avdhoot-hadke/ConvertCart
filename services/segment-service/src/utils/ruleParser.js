export function parseRules(rulesText) {
  return rulesText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.match(/^(\w+)\s*(<=|>=|==|!=|=|<|>)\s*(.+)$/);
      if (!parts) return null;
      const [, field, operator, value] = parts;
      return {
        field: field.trim(),
        operator: operator ? operator.trim() : "==",
        value: value ? value.trim() : undefined,
      };
    })
    .filter(Boolean);
}

export function applyRules(products, rules) {
  return products.filter((product) => {
    return rules.every((rule) => {
      const prodValue = product[rule.field];
      if (rule.operator === "=") return `${prodValue}` === `${rule.value}`;
      if (rule.operator === ">") return Number(prodValue) > Number(rule.value);
      if (rule.operator === "<") return Number(prodValue) < Number(rule.value);
      if (rule.operator === ">=")
        return Number(prodValue) >= Number(rule.value);
      if (rule.operator === "<=")
        return Number(prodValue) <= Number(rule.value);
      if (rule.operator === "!=") return `${prodValue}` !== `${rule.value}`;
      return false;
    });
  });
}
