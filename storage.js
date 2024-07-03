// localStorage.setItem('userId',87952214);
const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id')
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value')
    const value = valueInput.value;

    // This means when put truthy value it take the input
    if(id && value){
        localStorage.setItem(id,value);
    }
   
    idInput.value = '';
    valueInput.value = '';


}