import { getGuests } from "../api/guests";
import { useState, useEffect } from "react";

export default function GuestDetails({ guestId, setGuestId }) {
  const [guests, setGuests] = useState(null);

  useEffect(() => {
    const syncGuests = async () => {
      const data = await getGuests(guestId);
      setGuests(data);
    };
    syncGuests();
  }, [guestId]);

  if (!guests) return <p>Loading...</p>;

  return (
    <article className="guest-details">
      <h1>{guests.name}</h1>
      <address>
        {getGuests.email}
        <br />
        {guests.phone}
      </address>
      <p>{guests.job}</p>
      <p>{guests.bio}</p>
      <button onClick={() => setGuestId(null)}>back</button>
    </article>
  );
}
