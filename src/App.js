import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';
import { fetchUsers } from './features/userSlice';
import { setName, setEmail, resetForm } from './features/formSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const { users, loading, error } = useSelector((state) => state.users);
  const formData = useSelector((state) => state.form); // Access form data from state
  const dispatch = useDispatch();

  // Fetch users when the component mounts
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Handle form changes
  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}`);

    // Reset form after submission
    dispatch(resetForm());
  };

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <h2>Users List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={formData.name} 
            onChange={handleNameChange} 
            placeholder="Enter your name" 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={formData.email} 
            onChange={handleEmailChange} 
            placeholder="Enter your email" 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
