// import React from 'react';
import React, { Component } from 'react'
import Counter from './counter';
import Toggle from './toggle';
import AppDate from './appDate';

export default class AppHooks extends Component {


    render() {
        return (
            <div>
                <React.Fragment>
                    <Counter/>
                    <hr/>
                    <Toggle/>
                    <hr/>
                    <AppDate/>
                </React.Fragment>

            </div>
        )
    }
}


 