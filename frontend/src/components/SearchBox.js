import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import {Link, Navigate, useNavigate} from 'react-router-dom'


const SearchBox = () => {
    const [keyword, setKeyword] = useState('')

    const navigate = useNavigate()
    
    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
        
            navigate(`/search/${keyword}`)
        
        } else {
            navigate('/'  )
        }
    }

  return (
      <Form onSubmit={submitHandler} className="Form-inline" style={{ display:"flex" , marginLeft: "8px" , marginTop: "12px"}}>
          <Form.Control type='text' name='q' onChange={(e) => 
              setKeyword(e.target.value)} placeholder='Search Products...' className='mr-sm-2 ml-sm-5'></Form.Control>
          <Button type='submit' variant='outline-success' className='p-2' style={{marginLeft: "6px" }} onClick={submitHandler}>
              Search
          </Button>
    </Form>
        
    )
  
}

export default SearchBox