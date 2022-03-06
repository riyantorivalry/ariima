import React, { useState } from 'react'
import { object } from 'prop-types'
import firebase from './firebase'
import 'firebase/compat/firestore'
import { styWrapperItem } from './styles';

export default function WishesForm({guestName}) {
  const [name, setName] = useState(guestName);
  const [wishes, setWishes] = useState("");

  const onSubmit = e =>{
    e.preventDefault()
    firebase
    .firestore()
    .collection("guest")
      .add({
        name,
        wishes,
      })
      .then(()=>setName(""), setWishes(""))
  }

  return (
    
    <div className='item' css={styWrapperItem}>
      <form className='form' onSubmit={onSubmit}>
        <label for="name">Nama : </label><br/>
        <input className='inputName' name="name"
        type="text" 
        value={name} 
        placeholder=""
        onChange={e=>setName(e.currentTarget.value)}
        />
        <br/><br/>
        <label for="wishes">Ucapan : </label><br/>
        <textarea className='inputWishes' name="wishes" 
          type="text" 
          value={wishes} 
          placeholder=""
          rows="5" cols="100"
          onChange={e=>setWishes(e.currentTarget.value)}
          />
        <br/><br/>
        <button className="btn btn-sm button-nav">Kirim</button>
      </form>
    </div>
  )
}

WishesForm.propTypes = {
  guestName: object.isRequired,
};