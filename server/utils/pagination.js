// server/utils/pagination.js
exports.getPaginationParams = (query) => {
  const { page, per_page } = query;
  return {
    page: page || 1,
    per_page: per_page || 9
  };
};
