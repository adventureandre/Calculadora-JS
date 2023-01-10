function Calculadora() {
	this.display = document.querySelector('.display');
	this.inicia = () => {
		this.capturacliques();
		this.capturaEnter();
	}
	this.capturaEnter = ()=>{
		this.display.addEventListener('keyup', evt => {
			if (evt.keyCode !== 13) return;
			this.realizaConta();
		})
	}
	this.capturacliques = () => {
		document.addEventListener('click', event => {
			const el = event.target;
			if (el.classList.contains('btn-num')) this.addnumdisplay(el);
			if (el.classList.contains('btn-clear')) this.clear();
			if (el.classList.contains('btn-del')) this.del();
			if (el.classList.contains('btn-eq')) this.realizaConta();
		});
	}
	this.realizaConta = () =>{
		conta = this.display
		try {
			const conta = eval(this.display.value);
			if(!conta){
				alert('Conta Invalida!')
				return;
			}
			this.display.value = conta;
		}catch (e){
			alert('Conta Invalida!')
			return;
		}
	}

	this.addnumdisplay = el => {
		this.display.value += el.innerText;
		this.display.focus()
	}
	this.clear = () => this.display.value = '';
	this.del = () => this.display.value = this.display.value.slice(0, -1);





}

const calculadora = new Calculadora();
calculadora.inicia();