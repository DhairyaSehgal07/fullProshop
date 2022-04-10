import React, {useState,useEffect} from 'react'
import { Link, useLocation, useNavigate,useParams } from 'react-router-dom'
import { Form, Button ,FormGroup} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {listProductDetails,updateProduct} from '../actions/ProductActions'
import {PRODUCT_UPDATE_RESET} from '../constants/productConstants'

const ProductEditScreen = () => {

    const productId = useParams();
    
    
  
  

    const [name, setName]= useState('')
    const [price, setPrice] = useState('0')
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState('0')
    const [description,setDescription] = useState('')



    const dispatch = useDispatch()

    const navigate = useNavigate()
    
    const productDetails = useSelector((state) => state.productDetails)
    
    const { loading, error, product } = productDetails

     const productUpdate = useSelector((state) => state.productUpdate)
    
    const { loading:loadingUpdate, error:errorUpdate } = productUpdate

    // YAHA PE ERROR AA RHA HAI VRO !!.🤡   PRODUCT ID VALA SAME USER EDIT SCREEN ME JO AA RHA VRO 
    //UNABLE TO GET THE PRODUCT REQUEST THAT'S WHY

    useEffect(() => {
        // if () {
        //     dispatch({ type: PRODUCT_UPDATE_RESET })
        //     navigate('/admin/productlist')
        // } 
        dispatch(listProductDetails(productId))
        
           
        

},[dispatch,productId,product])
    
    


    const submitHandler = (e) => {
        e.preventDefault()
        //UPDATE PRODUCT
    }
    return (
      <>
            <Link to='/admin/productlist' className='btn btn-light my-3'>
                Go Back
            </Link>
 
      <FormContainer>
          <h1>Edit Product</h1>
                {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message>
                    : (
                         <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}>
                      
                  </Form.Control>
              </Form.Group>

              <Form.Group controlId='price'>
                  <Form.Label className='mt-3'>Price </Form.Label>
                                <Form.Control type='number'
                                    placeholder='Enter price'
                                    value={price}
                    onChange={(e) => setPrice(e.target.value)}>   
                  </Form.Control>
                            </Form.Group>

                            <FormGroup controlId='image'>
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter image url'
                                    value={image}
                                  onChange={(e) => setImage(e.target.value)}>   
                               </Form.Control>
                         </FormGroup>
                            


                            <FormGroup controlId='brand'>
                                   <Form.Label>Brand</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter brand '
                                    value={brand}
                                  onChange={(e) => setBrand(e.target.value)}>   
                               </Form.Control>
                            </FormGroup>
                            
                                <Form.Group controlId='countInStock'>
                  <Form.Label className='mt-3'>Count In Stock </Form.Label>
                                <Form.Control type='number'
                                    placeholder='Enter countInStock'
                                    value={countInStock}
                    onChange={(e) => setCountInStock(e.target.value)}>   
                  </Form.Control>
                            </Form.Group>


                             <FormGroup controlId='category'>
                                   <Form.Label>Category</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter category '
                                    value={category}
                                  onChange={(e) => setCategory(e.target.value)}>   
                               </Form.Control>
                            </FormGroup>


                             <FormGroup controlId='description'>
                                   <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter description '
                                    value={description}
                                  onChange={(e) => setDescription(e.target.value)}>   
                               </Form.Control>
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

export default ProductEditScreen