export const mapToArray = obj =>
  !obj
  ? []
  : Object.keys(obj).map((key) => obj[key])
