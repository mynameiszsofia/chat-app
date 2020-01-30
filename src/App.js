import React from 'react';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <Contact 
      avatar='https://randomuser.me/api/portraits/women/40.jpg'
      name='Carrie Sutton'
      character="Carrie"
      status='online'
      />
      <Contact 
      avatar='https://randomuser.me/api/portraits/women/86.jpg'
      name='Denise Morris'
      character="Denise"
      status='online'
      />
      <Contact 
      avatar='https://randomuser.me/api/portraits/women/5.jpg'
      name='Jacqueline Russel'
      character="Jac"
      status='offline'
            />
            <ContactList />
            
    </div>
  );
}

export default App;
