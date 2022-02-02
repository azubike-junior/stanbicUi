export const checkObj = (data: any, setError: Function) => {
  for (var key in data) {
    if (data[key] === "") {
      return setError("Please Fill all fields");
    } else return setError("");
  }
};
