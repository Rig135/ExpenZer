import Box from '@mui/material/Box';

const expenseItems = [
    {
        id: 1,
        title: "Grocery Shopping",
        amount: 1450,
        category: "Food",
        date: "2026-10-01"
    },
    {
        id: 2,
        title: "Metro Card Recharge",
        amount: 500,
        category: "Transport",
        date: "2026-10-02"
    },
    {
        id: 3,
        title: "Electricity Bill",
        amount: 2200,
        category: "Utilities",
        date: "2026-10-03"
    },
    {
        id: 4,
        title: "Movie Tickets",
        amount: 750,
        category: "Entertainment",
        date: "2026-10-04"
    },
    {
        id: 5,
        title: "Coffee & Snacks",
        amount: 280,
        category: "Food",
        date: "2026-10-05"
    },
    {
        id: 6,
        title: "Hot Wheels",
        amount: 180,
        category: "Toys",
        date: "2026-10-05"
    }
]


export default function ExpenseLogs() {
    const groupedByDate = Object.groupBy(expenseItems, (Item) => Item.date);
    return (
        <div >
            {/* Outer Loop: creates one "Box" per unique date */}
            {Object.entries(groupedByDate)
                .sort(([dateA], [dateB]) => dateB.localeCompare(dateA))
                .map(([date, expenses]) => (
                    <Box key={date} sx={{ border: "1px solid black" }} className="date-box">

                        <h3>{date}</h3>

                        {/*Inner Loop: renders all items for this date*/}
                        {expenses.map((expenses) => (
                            <div key={expenses.id} className="item-row">
                                <span>{expenses.title}</span>
                                <span>₹{expenses.amount}</span>
                            </div>
                        ))}
                    </Box>
                ))}
        </div>
    );
}