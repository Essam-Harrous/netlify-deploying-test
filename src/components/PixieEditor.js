import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class PixieEditor extends Component {
  componentDidMount() {
    var pixie = new window.Pixie({
      crossOrigin: true,
      watermarkText: 'Pixie Demo',
      baseUrl: 'http://localhost:3000',
      onLoad: function () {
        window.postMessage('pixieLoaded', '*');
      },
    });
  }
  render() {
    return ReactDOM.createPortal(
      <pixie-editor>
        <div className='global-spinner'>
          <div className='la-ball-spin-clockwise la-2x'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {setTimeout(function () {
          var spinner = document.querySelector('.global-spinner');
          if (spinner) spinner.style.display = 'flex';
        }, 50)}
      </pixie-editor>,
      document.getElementById('pixie')
    );
  }
}
export default PixieEditor;
