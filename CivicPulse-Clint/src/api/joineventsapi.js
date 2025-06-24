export const joinedEventsPromise = (email, accessToken) => {
  return fetch(`https://civic-pulse-server.vercel.app/joined-events?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
