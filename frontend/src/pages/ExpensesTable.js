import React from 'react'

const ExpensesTable = ({ expenses, handleDeleteExpense }) => {
    console.log('ExpensesTable-->', expenses);
  return (
    <div className='expense-list'>
      {
        expenses?.map((expense, index) => (
          <div key={index} className='expense-item'>
            <button className='delete-button'
            onClick={() => handleDeleteExpense(expense._id)}
            >X</button>
            <div className='expense-description'>{expense.text}</div>
            <div className='expense-amount'
              style={{ color: expense.amount < 0 ? 'red' : 'green' }}
            >{expense.amount}</div>
          </div>
        ))
      }
    </div>
  )
}

export default ExpensesTable