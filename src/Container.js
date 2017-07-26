class Container{
	constructor(container){
		// this.element = document.createElement('div');
    this.element = document.getElementById(container);
    this.width= 500;
    this.height = 500;
	}
  create(){
    this.element.style.width = this.width;
    this.element.style.height = this.height;
    // this.element.style.background = 'gray';
    this.element.classList.add('center');
  }
  append(elementId){
    this.element.appendChild(elementId);
  }
  remove(elementId){
    this.element.removeChild(elementId);
  }
}

export default Container;
