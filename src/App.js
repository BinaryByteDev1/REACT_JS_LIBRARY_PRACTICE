import ExpenceItem from "./Components/ExpenceItem";

function App(){

        let ExpenceDate = "March 10 2023";
        let ExpenceTitle = "Car Insurance";
        let ExpenceAmount = 500;


        let expense = [
            {
                id : "em_1",
                date : "March 10 2023",
                title : "School Fee" , 
                amount : 3000
            },
            {

                id : "em_2",
                date : "August 10 2023",
                title : "Gym Fee" , 
                amount : 6000
            },
            {
                id : "em_3",
                date : "April 10 2023",
                title : "Car Insurance" , 
                amount : 13000
            },
            {
                id : "em_4",
                date : "November 11 2023",
                title : "Studies" , 
                amount : 13000
            }
        ];
    return (
        <div>
            <ExpenceItem 
                    date = {expense[0].date} 
                    title = {expense[0].title} 
                    amount = {expense[0].amount}>
            </ExpenceItem>

            <ExpenceItem 
                    date = {expense[1].date} 
                    title = {expense[1].title} 
                    amount = {expense[1].amount}>
            </ExpenceItem>

            <ExpenceItem 
                    date = {expense[2].date} 
                    title = {expense[2].title} 
                    amount = {expense[2].amount}>
            </ExpenceItem>

            <ExpenceItem 
                    date = {expense[3].date} 
                    title = {expense[3].title} 
                    amount = {expense[3].amount}>
            </ExpenceItem>
        </div>
      
    )
}
export default App;