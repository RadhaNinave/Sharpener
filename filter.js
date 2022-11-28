var form=document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// Form submit event
form.addEventListener('submit', addItem);

// Filter event
filter.addEventListener('keyup', filterItems);
// Add item
function addItem(e){
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('item').value;
    var newItem2=document.getElementById('item2').value;
    // Create new li element
    var li = document.createElement('li');
    
    // Add class
    li.className = 'list-group-item';
   
    // Add class
    li.className = 'list-group-item';
   
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
   li.appendChild(document.createTextNode(newItem2));
    itemList.appendChild(li);
    
  
}  
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      var description=item.childNodes[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 ||description.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }