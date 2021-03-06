import React, { Component } from 'react'
import './MyBookings.scss'
import ListView from '../../../components/ListView'
import { Grid, Row, Col } from 'react-bootstrap'
import AccountListView from '../../../components/AccountListView';

class MyBookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
        return (
                <div class="MyBookingsContainer">
                    <h2>My Bookings</h2>
                <AccountListView />
                </div>
        );
    }
}

export default MyBookings;