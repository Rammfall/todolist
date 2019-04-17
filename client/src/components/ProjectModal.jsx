import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      name: '',
      id: '',
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.name,
      id: nextProps.id,
    });
  }

  titleHandler(e) {
    this.setState({ name: e.target.value });
  }

  handleSave() {
    const item = this.state;
    this.props.saveModalDetails(item)
  }

  render() {
    return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Jewel</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p><span className="modal-lable">Name:</span><input value={this.state.name} onChange={(e) => this.titleHandler(e)} /></p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
