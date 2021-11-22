import React from 'react'
import Button from 'react-bootstrap/Button';
import './styles.css';
export default function PersonDetails(props) {

    return (
        <div>
            <div id="body">
                <div id="topTitle">
                    <p key={props.person.uuid}>{props.person.name.title} {props.person.name.first} {props.person.name.last} - {props.person.login.uuid} </p>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-2" id="col_left">
                        <img id="image_set" src={props.person.picture.large} alt="Image thumbnail"></img>
                        <button type="button" id="buttonconfigmargin" class="btn btn-primary">Details</button>
                         </div>
                         <div class="col-6">
                            <p>User Name: {props.person.login.username}</p>
                            <p>Gender : {props.person.gender}</p>
                            <p>Time Zone Description : {props.person.location.timezone.description}</p>
                            <p>Address : {props.person.location.street.number}, {props.person.location.street.name}, {props.person.location.city}, {props.person.location.state}, {props.person.location.postcode}, {props.person.location.country}</p>
                            <p>Email :  {props.person.email}</p>
                            <p>Birth Date and Age : {props.person.dob.date} ({props.person.dob.age})</p>
                            <p>Register Date : {props.person.registered.date}</p>
                            <p>Phone# : {props.person.phone}</p>
                         </div>
                    </div>
                </div>
            </div>
           
            

        </div>
    )
}
