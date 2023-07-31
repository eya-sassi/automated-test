import React from "react";
import "./App.css";
import{Routes,Route,Link} from 'react-router-dom';
import Contact from './components/contact.js';
import About from './components/About.js' ;
import Home from './components/Home.js' ;
import {Navbar,Nav,Container} from 'react-bootstrap'; ;

function App() {
  
  return (
    

      <div className="App">
        <Navbar style={{ backgroundColor: '#005985' }} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>

      </div>

        
      
      );
  
}

export default App;



// // Wait for the form submission to complete
// await driver.wait(until.urlContains("thankyou"));

// // Verify the success message or any other expected result
// const successMessage = await driver.findElement(By.id("success-message"));
// const actualMessage = await successMessage.getText();
// const expectedMessage = "Thank you for contacting us!";
// if (actualMessage === expectedMessage) {
//   console.log("Test Passed!");
// } else {
//   console.log("Test Failed!");
// }
