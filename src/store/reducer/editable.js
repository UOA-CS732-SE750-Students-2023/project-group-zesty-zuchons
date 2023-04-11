const setEditable = (state, action) => {
  switch (action.type) {
    case "setEditableTrue":
      state = true;
      break
    case "setEditableFalse":
      state = false;
      break
    default:
    // pass through
  }
  return state;
};
export default setEditable;
