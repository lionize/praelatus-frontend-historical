export const ticketsSelector = (state) => {
  const ids = state.tickets.ids
  return ids.map(id => state.tickets.byId[id])
}
