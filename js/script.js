const items = document.querySelectorAll('.main-navbar .item');
function showMenu(){
	items.forEach(item=>item.classList.toggle('active'));
}