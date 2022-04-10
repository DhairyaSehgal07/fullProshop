import React, {useState,useEffect} from 'react'
import { Link, useLocation, useNavigate,useParams } from 'react-router-dom'
import { Form, Button ,FormGroup} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { getUserDetails } from '../actions/userActions'


const UserEditScreen = () => {

    const userId = useParams();
    
    console.log(userId);
  
  

    const [name, setName]= useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setisAdmin] = useState(false)



    const dispatch = useDispatch()
    
    const userDetails = useSelector((state) => state.userDetails)
    
    const { loading, error, user } = userDetails
    
    
    
   

    useEffect(() => {
        
            dispatch(getUserDetails(userId))

},[dispatch,userId,user])


    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
      <>
            <Link to='/admin/userlist' className='btn btn-light my-3'>
                Go Back
            </Link>
 
      <FormContainer>
          <h1>Edit User</h1>
                {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message>
                    : (
                         <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}>
                      
                  </Form.Control>
              </Form.Group>

              <Form.Group controlId='email'>
                  <Form.Label className='mt-3'>Email Address</Form.Label>
                  <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}>
                      
                  </Form.Control>
                            </Form.Group>

                            <FormGroup controlId='isadmin'>
                                <Form.Check
                                    className='mt-3'
                                    type='checkbox'
                                    label='Is Admin'
                                    checked={isAdmin}
                                onChange={(e)=> setisAdmin(e.target.checked)}>
                                    
                                </Form.Check>
            </FormGroup>
                            

              <Button type='submit' variant='primary' className='mt-2'>
                 Update
             </Button>

          </Form>
                )}
         
      
            </FormContainer>
                 </>
  )
}

export default UserEditScreen