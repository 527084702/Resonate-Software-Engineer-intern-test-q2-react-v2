import './App.css';
import DataTable from './components/DataTable';

function App() {
  return (
    <>
      <h2>Question 2: Real world problem </h2>
      <p>Write a responsive “Contacts” application that allows the user to browse their contacts:</p>

      <ul>
        <li>Make use of <a href="https://jsonplaceholder.typicode.com" target="_blank" rel="noreferrer">https://jsonplaceholder.typicode.com</a> (/users are the contacts)</li>
        <li>Use either VueJS, Angular or React</li>
        <li>Make it visually appealing</li>
        <li>No need to implement Create/Update/Delete</li>
        <li>Provide instructions on how to run the code</li>
      </ul>
      
      <h2>Solution</h2>
      <DataTable />
    </>
  );
}

export default App;