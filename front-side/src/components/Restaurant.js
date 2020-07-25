import React from "react"
import { Form } from "reactstrap";

function Restaurant() {
    return (
        <div>
            <div className='restaurantThumb'/>
            <div className='restaurantInfo'>
                <ul>
                    <li>{this.props.restaurantName}</li>
                    <li>{this.props.restaurantLocation}</li>
                    <li>{this.props.restaurantComment}</li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Restaurant;