const setEditable = (state = true, action) => {
  switch (action.type) {
    case "setEditableTrue":
      state = true;
    case "setEditableFalse":
      state = false;
    default:
    // pass through
  }
  return state;
};
export default setEditable;
