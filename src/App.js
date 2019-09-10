import React, { Component } from 'react';
import './App.css';
import Uno from './components/sub/uno';
import Dos from './components/sub/dos';
import Tres from './components/sub/tres';
import Cuatro from './components/sub/cuatro';
import Cinco from './components/sub/cinco'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

class App extends Component {
    state = {
        members : [
            { name: 'David', age:30, belt:'black', id: 1 }, 
            { name: 'Andres', age:55, belt:'blue', id: 2 },
            { name: 'Oscar', age:17, belt:'blue', id: 3 }
        ],
        numbers : [5,7,11,17]
    } 
    addMember = (member) => {
        member.id = Math.random();
        let members = [...this.state.members, member];
        this.setState({
            members: members
        })
        console.log(members);
    }
    deleteMember = (id) => {
        let members = this.state.members.filter( member => {
            return member.id !== id
        });
        this.setState({
            members: members
        });
    }
    render () {
        return (
            <BrowserRouter>
                <div className="app-content">
                    <Navbar/>
                    <Switch> {/* esto sirve para que no confunda /:post_id  with  /contact or /about*/ }
                        <Route exact path='/' component={ Home }/>
                        <Route path='/about' component={ About }/>
                        <Route path='/contact' component={ Contact }/>
                        <Route path='/:post_id' component={ Post } />
                    </Switch>
                    <Uno name='Marcelo Biagiola' age='25' text='esto es una prueba'/>
                    <br></br>
                    <Dos numbers={ this.state.numbers }/>
                    <br></br>
                    <Tres members={ this.state.members } />
                    <br></br>
                    <Cuatro deleteMember={this.deleteMember} members={ this.state.members } />
                    <Cinco addMember={this.addMember} />
                </div>
            </BrowserRouter>    
        )
    }
}

export default App;

