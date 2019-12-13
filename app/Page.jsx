import React from "react";

class Page extends React.Component {
  show() {
    console.log(123);
  }

  render() {
    return (
      <div>
        <button type="submit" onClick={this.show()}>
          Hello React!123
        </button>
      </div>
    );
  }
}

export default Page;
