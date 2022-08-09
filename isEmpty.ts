export const isEmpty = (e): boolean => {
  switch (e) {
    case "":
    case 0:
    case "0":
    case null:
    case false:
    case undefined:
      return true;
    default:
      return false;
  }
}



