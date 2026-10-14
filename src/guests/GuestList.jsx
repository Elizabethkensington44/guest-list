import { useState, useEffect } from "react";
import { getGuest } from "../api/guest";

export default function GuestList({ setGuestId }) {
  const [guest, setGuest] = useState([]);

  useEffect(() => {
    const syncGuest = async () => {
      const data = await getGuest();
      setGuest(data);
    };
    syncGuest();
  }, []);

  return (
    <>
      <hi>Guest List</hi>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guest.map((guest) => (
            <tr key={guest.id} onClick={() => setGuestId(guest.id)}>
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Select a guest to see more details.</p>
    </>
  );
}
