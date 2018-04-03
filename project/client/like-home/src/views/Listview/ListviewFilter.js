import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Checkbox , Glyphicon} from 'react-bootstrap';
import './ListviewFilter.scss';
import Calendar from 'react-icons/lib/fa/calendar'
import MdLocationOn from 'react-icons/lib/md/location-on'
import TiLocationOutline from 'react-icons/lib/ti/location-outline'
import Bed from 'react-icons/lib/fa/bed'
import FaDollar from 'react-icons/lib/fa/dollar'
import Search from 'react-icons/lib/fa/search'
import Autocomplete from '../../components/Autocomplete'
import DateRange from '../../components/DateRange'



// to be read from backend
const locations = [
    "chicago",
    "san francisco",
    "los angeles",
    "san jose",
    "washington",
    "new york",
    "miami",
    "las vegas"
]

class ListviewFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div class="listViewContainer">
                <h2>ListViewFilter</h2>
                <div class="searchContain">
                    <form onSubmit={this.submit} class="mainbar">
                        <div class="form-row">
                            <div class="inputs-row">
                                <label class="location-input">
                                    <MdLocationOn class="icon-size" />
                                    <Autocomplete options={locations} placeholder="Where To?" ref="location" required />
                                </label>

                                <label class="date-input">
                                    <Calendar class="icon-size" />
                                    <DateRange />
                                </label>

                                <label class="price-input">
                                    <FaDollar class="icon-size" />
                                    <input id="Min-price" type="number" class="price-text" placeholder="Min?" ref="Min" required />
                                    <input id="Min-price" type="number" class="price-text" placeholder="Max?" ref="Max" required />
                                </label>

                                <label class="room-input" >
                                    <Bed class="icon-size" />
                                    <select class="room-text" ref="roomNum" >
                                        <option value="one">1</option>
                                        <option value="two">2</option>
                                        <option value="three">3</option>
                                        <option value="4plus">4+</option>
                                    </select>
                                </label>

                                <label>
                                    <button class="search"> <Search class="search-icon" /> </button>
                                </label>

                            </div>
                        </div>
                    </form>

                </div>

                <div class="lowerContain">
                    <div class="listbox">
                        <ListGroup >
                            <ListGroupItem header="Hotel Name">
                            <input placeholder="Hotel name..." class="borderline"></input>
                            <button type="submit" class="searchHotel"> > </button>
                            </ListGroupItem>
                            <ListGroupItem header="Additional Filter">
                                <dl>
                                    <dt><Checkbox>swimming pool</Checkbox></dt>
                                    <dt><Checkbox>Free Breakfast</Checkbox></dt>
                                    <dt><Checkbox>Free Parking</Checkbox></dt>
                                    <dt><Checkbox>Free Wifi</Checkbox></dt>
                                    <dt><Checkbox>Pet Friendly</Checkbox></dt>
                                 </dl>
                        </ListGroupItem>
                                    <ListGroupItem header="Rating">
                                    <dl>
                                    <dt><Checkbox><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/></Checkbox></dt>
                                    <dt><Checkbox><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/></Checkbox></dt>
                                    <dt><Checkbox><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/></Checkbox></dt>
                                    <dt><Checkbox><Glyphicon glyph="star"/><Glyphicon glyph="star"/></Checkbox></dt>
                                    <dt><Checkbox><Glyphicon glyph="star"/></Checkbox></dt>
                                    </dl>
                                    
                                    </ListGroupItem>


                    </ListGroup>
                    </div>
                </div>
                    </div>

                    );
                }
            }
            
export default ListviewFilter;