import { getGuest } from "../api/guests";
import { useState, useEffect } from "react";

export default function GuestDetails({ guestId, setGuestId }) {
  const [guest, setGuests] = useState(null);

  useEffect(() => {
    const syncGuests = async () => {
      const data = await getGuest(guestId);
      setGuests(data);
    };
    syncGuests();
  }, [guestId]);

  if (!guest) return <p>Loading...</p>;

  return (
    <article className="guest-details">
      <h1>{guest.name}</h1>
      <address>
        {getGuest.email}
        <br />
        {guest.phone}
      </address>
      <p>{guest.job}</p>
      <p>{guest.bio}</p>
      <button onClick={() => setGuestId(null)}>back</button>
    </article>
  );
}
