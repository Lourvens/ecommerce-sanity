import React from "react";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const { query } = await searchParams;
  return <div>{JSON.stringify(query)}</div>;
};

export default SearchPage;
