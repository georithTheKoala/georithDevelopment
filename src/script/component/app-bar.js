class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Bubblegum Sans', sans-serif;
        }
        :host {
            display: block;
            width: 100%;
            background-color: #393b44;
            color: #ffffff;
            box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
        }
        h2 {
            padding: 16px;
            text-align: center;
        }
        </style>
        <h2>LetsCook.com</h2>`;
    }
 }
  
 customElements.define("app-bar", AppBar);