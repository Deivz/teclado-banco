function Campo({quantia}){
	return(
		<input type="text" name="cliente" id="valor" required maxLength="10" readOnly placeholder = {`R$${quantia}`}></input>
	)
}

export default Campo

