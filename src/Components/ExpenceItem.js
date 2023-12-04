import './ExpenceItem.css';

function ExpenceItem(props){

    // const month = props.date.toLocaleString('en-US', {month});
    // const day = props.date.toLocaleString('en-US', {day});
    // const year = props.date.getFullYear();

    
    return (
        <div className='Expense'>
            <div className='product_date'>
                <h3>{ props.date.toString() }</h3> 
            
            </div>

            <div className='item_Names'>
                <h3>{props.title}</h3> 
            </div>

            <div className='expence_price'>
                <b>${props.amount}</b>
            </div>
        </div>

    );
}

export default ExpenceItem;
