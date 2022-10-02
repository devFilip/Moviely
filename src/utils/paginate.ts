export const paginate = (
  currentPage: number,
  pageSize: number,
  items: Array<any>
) => {
  const lastIndex = currentPage * pageSize;
  const firstIndex = lastIndex - pageSize;
  return items.slice(firstIndex, lastIndex);
};
