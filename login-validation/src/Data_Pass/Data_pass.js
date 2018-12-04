import React, { Component } from 'react';

class Test extends Component {

 constructor(props){
   super(props);
   this.state = {
     Data: [
       {
        "_id": "3981238763078",
        "title": "yahoo",
        "url": "yahoo.com",
       },
       {
         "_id": "874390583576",
         "title": "google",
         "url": "google.com",
       }
     ]
   }
 }


    clickMe(item){
      alert('test click');
      console.log(item.title);
    }

    render() {

        return (
            <div classname="App">
                <br/>
                <h1>Hello React!!!</h1>
                {
                  this.state.Data.map((item, index) => (
                    <p>
                      <a onClick={this.clickMe.bind(this, item)}>
                        {item.url}
                      </a>
                    </p>
                  ))
                }
            </div>
        );
    }
}
export default Test;
