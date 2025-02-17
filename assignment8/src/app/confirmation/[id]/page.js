export default function BookingConfirmation({ params, searchParams }) {
    const { id } = params;
    const { name, email, mobile } = searchParams;
    const bookingId = Math.floor(Math.random() * 1000000);
  
    return (
      <div className="container">
        <h1>Booking Confirmation</h1>
        <p>Booking ID: {bookingId}</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Mobile: {mobile}</p>
      </div>
    );
  }