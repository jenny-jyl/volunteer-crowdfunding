import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./projectForm.css";


function PledgeForm() {
  const [pledge, setPledge] = useState({
    amount: '',
    comment: '',
    anonymous: false,
    project: null,
  });

  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}projects/`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    setPledge((prevPledge) => ({
      ...prevPledge,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = window.localStorage.getItem('token');
    if (token && pledge.amount && pledge.project) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}pledges/`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(pledge),
        });
        const data = await response.json();
        console.log(data);
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    }
  };


  return (
    <form className="pledge-form">
      <div className='pledgeField'>
        <label htmlFor='amount'>Amount:</label>
        <input
          type='number'
          id='amount'
          placeholder='Enter amount'
          onChange={handleChange}
        />
      </div>
      <div className='pledgeField'>
        <label htmlFor='comment'>Comment:</label>
        <textarea
          id='comment'
          placeholder='Add a comment (optional)'
          onChange={handleChange}
        />
      </div>
      <div className='pledgeField'>
        <label htmlFor='anonymous'>Anonymous:</label>
        <input
          type='checkbox'
          id='anonymous'
          checked={pledge.anonymous}
          onChange={handleChange}
        />
      </div>
      <div className='pledgeField'>
        <button type='submit' onClick={handleSubmit}>
          Pledge
        </button>
      </div>
    </form>
  );
}

export default PledgeForm;
