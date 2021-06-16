import { React, useState } from 'react';
import './App.css';
import TodoList from './Todolist/todolist';
import { Paper, Switch } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

function App() {
  const[dm,setdm] = useState(false);
  const theme = createMuiTheme({
    palette : {
      type: dm ? "dark" : "light",
    },
  });
  
  return (
   
    <ThemeProvider theme={theme} >
     <br />
     <br />
     <br />
     <Paper className="paper" elevation={3}>
     <h5 className="switch"> 
     <Switch  checked={dm} onChange={() => setdm(!dm)} />
      Switch To Dark Mode
        </h5> 
     <TodoList />
      </Paper>
     

     
   
    
      
      
   
    </ThemeProvider>
    
   
  
  );
}

export default App;
