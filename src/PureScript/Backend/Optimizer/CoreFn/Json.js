export const unsafeStringFromIntArray = function(arr) {
  return String.fromCharCode.apply(null, arr);
};
