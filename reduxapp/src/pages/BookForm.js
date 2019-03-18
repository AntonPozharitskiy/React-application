import React, { Component } from 'react';

class BookForm extends Component {
render() {
return (
<div>
  <h1>Create Book</h1>
  <form>
   <input required type="text" placeholder="Enter Post Title" /><br /><br />
   <textarea required rows="5" cols="28" placeholder="Enter Post" /><br /><br />
   <button>Add</button>
  </form>
</div>
);
}
}
export default BookForm;
