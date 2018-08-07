import React from "react";
import "./bootstrap.min.css";

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users" + "?LIMIT5")
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  Edit(id) {
    console.log(id + "Button is Clicked");
  }

  render() {
    const { data } = this.state;
    let filteredResults = this.state.data.filter(item => {
      return (
        item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <div className="container">
        <div className="jumbotron text-right">
          <button className="btn btn-primary">Add</button>
        </div>

        <div className="container">
          <div className="card">
            <div className="card-header">
              <h1>List of Data</h1>
              <form className="form-inline float-right">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={this.state.search}
                  onChange={this.updateSearch.bind(this)}
                />
              </form>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">UserName</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredResults.map(item => (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-xs"
                        onClick={this.Edit.bind(this, item.id)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Fetch;
