const reducer = (state, action: { type: string; payload: any }) => {
  switch (action.type) {
    case "reset":
      return action.payload;
    case "add":
      return [...state, { id: Date.now(), text: "", completed: false }];
    case "delete":
      return state.filter(item => item.id != action.payload);
    case "completed":
      return state.map(item => {
        if (item.id === action.payload)
          return {
            ...item,
            completed: !item.completed
          };
        return item;
      });

    case "update":
      return state.map(item => {
        const { id, text } = action.payload;
        if (item.id === id)
          return {
            ...item,
            text
          };
        return item;
      });
    default:
      return state;
  }
};

export default reducer;
