import '../NewExpense/NewExpense.css'

const AddNewExpenseButton = (props) => {
  const handleButton = (event) => {
    props.onHandleButton(event)
  }

  return (
    <div className='new-expense'>
      <button type='button' className='new-expense__button' onClick={handleButton}>Add New Expense</button>
    </div>
  )
}

export default AddNewExpenseButton