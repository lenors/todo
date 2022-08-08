import React, { Component } from "react";

export default class Main extends Component {
  state = {
    filme: "",
    listaFilmes: []
  };

  handleChange = (event) => {
    this.setState({
      filme: event.target.value
    });
  };
  Send = (event) => {
    event.preventDefault(); // uma forma de envia com enter
    if (this.state.filme !== "") {
      this.setState({
        listaFilmes: this.state.listaFilmes.concat({
          filme: this.state.filme,
          id: Date.now()
        }),
        filme: ""
      });
    }
  };

  Remove = (id) => {
    this.setState({
      listaFilmes: this.state.listaFilmes.filter((ident) => ident.id !== id)
    });
  };

  RemoveAll = () => {
    this.setState({
      listaFilmes: this.state.listaFilmes.filter((ident) => ident.listaFilmes)
    });
  };

  render() {
    return (
      //<form onSubmit={(e)=>{e.preventDefault()}}> uma forma de fazer enviar com enter
      <form>
        <input onChange={this.handleChange} value={this.state.filme} />
        <button onClick={this.Send}>Send</button>
        <button onClick={() => this.RemoveAll()}>X </button>
        {this.state.listaFilmes.map((item) => (
          <div>
            <ul>
              <li>{item.filme}</li>
            </ul>
            <button
              onClick={() => {
                this.Remove(item.id);
              }}
            >
              {" "}
              X{" "}
            </button>
          </div>
        ))}
      </form>
    );
  }
}
