import './ExpenseLogs.css';

function formatDate(dateStr) {
    const [year, month, day] = dateStr.split('-');
    return `${day}-${month}-${year}`;
}

export default function ExpenseLogs({ expenseItems }) {
    const groupedByDate = Object.groupBy(expenseItems, (Item) => Item.date);

    // Array of pale background colors for the date boxes
    const paleColors = ['#f3f8fe', '#fef8f3', '#f3fef5', '#fef3f8'];

    return (
        <div className="logs-container">
            {Object.entries(groupedByDate)
                .sort(([dateA], [dateB]) => dateB.localeCompare(dateA))
                .map(([date, expenses], index) => {
                    const dateTotal = expenses.reduce((acc, item) => acc + item.amount, 0);
                    // Cycle through the pale colors based on the index
                    const bgColor = paleColors[index % paleColors.length];

                    return (
                        <div key={date} className="date-box" style={{ backgroundColor: bgColor }}>
                            <div className="date-header">
                                <span>{date === '2026-10-05' ? 'Today' : formatDate(date)}</span>
                                <span>₹-{dateTotal.toLocaleString('en-IN')}</span>
                            </div>

                            {expenses.map((expense) => (
                                <div key={expense.id} className="item-row">
                                    <div className="item-left">
                                        <div className="item-icon-placeholder">
                                            {/* Temporary icon placeholder */}
                                            {expense.category.charAt(0)}
                                        </div>
                                        <div className="item-details">
                                            <span className="item-title">{expense.category}</span>
                                            <span className="item-category">{expense.title}</span>
                                        </div>
                                    </div>
                                    <div className="item-amount">
                                        - {expense.amount}₹
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                })}
        </div>
    );
}