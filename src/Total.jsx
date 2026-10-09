import './Total.css';

export default function Total({ expenseItems }) {
    const total = expenseItems.reduce((acc, item) => acc + item.amount, 0);
    return (
        <div className="total-container">
            <span className="total-label">Spent this month</span>
            <h1 className="total-amount"><span style={{ fontSize: '0.6em', verticalAlign: 'top' }}>₹</span>-{total.toLocaleString('en-IN')}</h1>
        </div >
    )
}