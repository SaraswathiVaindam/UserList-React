import UserProfile from './components/userProfile'
import './App.css'

const userDetailsList = [
  {
  uniqueNo: 1,
  imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name: "Esther Howard",
  role: "Software Developer"
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Software Engineer"
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Software Engineer"
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Esther Devon Lane",
    role: "Software Developer"
  }
]



const App = () => (
  <div className='list-container'>
    <h1 className='title'>User List</h1>
    <ul>
      {userDetailsList.map((eachItem) => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo}/>
      ))}
    </ul>
  </div>
)

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


