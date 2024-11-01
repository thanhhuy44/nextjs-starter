const ApiFetch = async (pathname: string, options?: RequestInit) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}` + pathname, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });
};

export default ApiFetch;
