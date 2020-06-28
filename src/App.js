import React, { Component } from 'react'
import './App.css'
import Movie from './Components/Movie';
import data from './Components/Data'

export default class App extends Component {
    state={
        query:'',

    }
  
    search=(e)=>{
       this.setState({
           query:e.target.value
       })
    }

    render() {
        let name=[];
        let year=[];
        Object.keys(data).forEach((value)=>{
            name.push(data[value].title)
            year.push(data[value].year)
        })
        // console.log(name)
        // console.log(year)


        let newName=name.filter((value)=>{
            return value.toLowerCase().indexOf(this.state.query)!==-1;
        })


        return (<div className='container'>
                                <div className='input-container'>
                        <label>search for an item</label>
                        <input type='text' placeholder='search here...' className='form-control' onKeyUp={this.search}/>
                    </div>
                    <div className='movies-container'>
                          {
                             newName.map((value,i)=>{
                                  return (<Movie name={value} title={name[i]} year={year[i]} key={i}/>)
                              })
                          }
                    </div>
                  
        </div>
           
        )
    }
}


