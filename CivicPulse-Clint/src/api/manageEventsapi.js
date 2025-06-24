export const manageEventsPromise = (email, accessToken) => {
  return fetch(`https://civic-pulse-server.vercel.app/my-events?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
