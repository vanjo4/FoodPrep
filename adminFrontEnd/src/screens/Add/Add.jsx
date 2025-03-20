import React from 'react'
import './Add.css'
import {assets} from '../../assets/assets'

const Add = () => {
  return (
    <div className='screen'>
      <div className="container">
        <form >
          <div className="add-img-upload">
            <p>Upload Image</p>
            <label htmlFor="image">
              <img src={assets.upload_area} alt="" />
            </label>
            <input type="file" id='image' hidden required />
          </div>
          <div className="add-product-name">
            <p>Name</p>
            <input type="text" placeholder='Type here' />
          </div>
          <div className="add-product-desc">
            <p>Name</p>
            <textarea rows='6' placeholder='Write content here'></textarea>
          </div>
          <div className="add-category-price">
            <div className="add-category">
              <p>Category</p>
              <select  >
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Dessert">Dessert</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className="add-price">
              <p>Price</p>
              <input type="Number" placeholder='₹150'/>
            </div>
          </div>
          <button type='submit' className='add-btn'>Add</button>
        </form>
      </div>
    </div>
  )
}

export default Add