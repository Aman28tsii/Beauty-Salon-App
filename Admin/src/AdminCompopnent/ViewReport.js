
const ViewReport = () => {
    return ( <>
    <div className="sidebar">
<h2>Admin Panel</h2>
</div>
<div className="content">
<h1>View Reports</h1>
<div className="report">
<h2>Monthly Revenue Report</h2>
<p><strong>Month:</strong> June 2022</p>
<p><strong>Total Revenue:</strong> $1000</p>
</div>
<div className="report">
<h2>Top 5 Most Booked Services</h2>
<ul>
<li>Haircut: 50 bookings</li>
<li>Manicure: 30 bookings</li>
<li>Pedicure: 25 bookings</li>
<li>Facial: 20 bookings</li>
<li>Massage: 15 bookings</li>
</ul>
</div>
</div>
</> );
}
 
export default ViewReport;