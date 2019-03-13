import React, {Component} from 'react';
class UserPage extends Component {
  render() {
    return(
        <div>
          <input type="text" ref={(input)=>{this.bookInput = input}}/>
          <button onClick={this.addBook.bind(this)} type="button">Add book</button>
          <ul>
          {
            this.props.testStore.map((book, index) =>
          <li key={index}>{book}</li>)
          }
          </ul>
        </div>
    );
  }
}
