/**
 * Created by admin on 10.07.2017.
 */
import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class Boards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthorized: false
        };
    }
    render() {
        if (this.state.isAuthorized) {
            return <div>Boards</div>;
        } else {
            return (<div>
                <Redirect to={{
                    pathname: "/login"
                }}/></div>
        );
        }

    }
}
