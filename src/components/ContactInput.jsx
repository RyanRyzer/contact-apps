import React from 'react';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      tag: '',
      image: null,
    };
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onImageChangeEventHandler = this.onImageChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onTagChangeEventHandler(event) {
    this.setState(() => {
      return {
        tag: event.target.value,
      };
    });
  }

  onImageChangeEventHandler(event) {
    this.setState(() => {
      return {
        image: event.target.files[0],
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    const { name, tag, image } = this.state;
    this.props.addContact({ name, tag, image });
  }

  render() {
    return (
      <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler} />
        <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler} />
        <input type="file" onChange={this.onImageChangeEventHandler} />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;
