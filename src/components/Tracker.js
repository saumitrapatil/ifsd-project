import { useState } from "react";

export default function Tracker() {
  const [month, setMonth] = useState("January");
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    date: "",
    remark: "",
    amount: "",
    platform: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);

  const filteredExpenses = expenses.filter((expense) => {
    const expenseMonth = new Date(expense.date).toLocaleString("default", {
      month: "long",
    });
    return expenseMonth === month;
  });

  const totalExpenditure = filteredExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleEditBudget = () => {
    const newBudget = prompt("Enter new budget:", budget);
    if (newBudget && !isNaN(newBudget)) {
      setBudget(Number(newBudget));
    }
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    const expense = {
      id: expenses.length + 1,
      ...newExpense,
      amount: Number(newExpense.amount),
    };
    setExpenses([...expenses, expense]);
    setNewExpense({ date: "", remark: "", amount: "", platform: "" });
    setShowAddForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            ExpenseTracker
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/app">
                  Go to app
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/team">
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row mb-4 align-items-center">
          <div className="col">
            <select
              className="form-select w-auto"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <div className="col text-center">
            <h5 className="mb-0">Total Expenditure: ₹{totalExpenditure}</h5>
          </div>
          <div className="col text-end">
            <div className="d-flex align-items-center justify-content-end gap-2">
              <h5 className="mb-0">Budget: ₹{budget}</h5>
              <button className="btn btn-link p-0" onClick={handleEditBudget}>
                ✏️
              </button>
            </div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Remark</th>
                <th>Amount</th>
                <th>Platform</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.date}</td>
                  <td>{expense.remark}</td>
                  <td>₹{expense.amount}</td>
                  <td>{expense.platform}</td>
                  <td>
                    <button
                      className="btn btn-link text-danger p-0"
                      onClick={() => handleDeleteExpense(expense.id)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showAddForm ? (
          <form onSubmit={handleAddExpense} className="mt-4">
            <div className="row g-3">
              <div className="col-md-3">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={newExpense.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  name="remark"
                  placeholder="Remark"
                  value={newExpense.remark}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-2">
                <input
                  type="number"
                  className="form-control"
                  name="amount"
                  placeholder="Amount"
                  value={newExpense.amount}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-2">
                <input
                  type="text"
                  className="form-control"
                  name="platform"
                  placeholder="Platform"
                  value={newExpense.platform}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary w-100">
                  Add
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="text-end mt-4">
            <button
              className="btn btn-dark"
              onClick={() => setShowAddForm(true)}
            >
              + Add Expense
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
