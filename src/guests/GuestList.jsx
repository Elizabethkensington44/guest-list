import { useState, useEffect } from "react";
import { getGuests } from "../api/guests";

export default function GuestList({ setGuestId }) {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    const syncGuests = async () => {
      const data = await getGuests();
      setGuests(data);
    };
    syncGuests();
  }, []);

  return (
    <>
      <h1>Guest List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guests) => (
            <tr key={guests.id} onClick={() => setGuestId(guests.id)}>
              <td>{guests.name}</td>
              <td>{guests.email}</td>
              <td>{guests.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Select a guest to see more details.</p>
    </>
  );
}
