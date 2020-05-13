const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

let item_count = 0;
let checked_items = 0;

function newTodo() {

  let task = document.getElementById('task_input').value;

  if (task == "") return;
  
  item_count += 1;
	is_Done = false;

	let list_item = document.createElement('li');
	let container = document.createElement('div');
  let cb_task = document.createElement('label');
  let check_box = document.createElement('input');
	let task_text = document.createElement('span');
	let deleted = document.createElement('button');
	
	task_text.textContent = task;

  check_box.type = 'checkbox';

	deleted.innerHTML = "<i class='material-icons prefix'>delete_forever</i>";
	deleted.addEventListener('click', function () {
		list_item.parentNode.removeChild(list_item);
		item_count -= 1;

    if (check_box.checked) {
      checked_items -= 1
    }
    console.log("this is still running.")
    itemCountSpan.textContent = item_count;
    uncheckedCountSpan.textContent = item_count - checked_items;

	});

  check_box.addEventListener('change', function() {
    console.log("this is still running inside checkbox")
    if (check_box.checked) {
      checked_items += 1;
    }
    else {
      checked_items -= 1;
    }

    itemCountSpan.textContent = item_count;
    uncheckedCountSpan.textContent = item_count - checked_items;
  });

	deleted.classList.add('button');
  container.classList.add('row');
  container.classList.add('white');
  container.classList.add('card');
  cb_task.classList.add('col');
  cb_task.classList.add('l11');
  deleted.classList.add('col');
  deleted.classList.add('l1');
  deleted.classList.add('waves-effect');
  deleted.classList.add('waves-light');
  deleted.classList.add('btn');
  deleted.classList.add('red');
  task_text.classList.add('verticle-align-center');

  cb_task.append(check_box)
	cb_task.append(task_text);
  container.append(cb_task);
  container.append(deleted);
	list_item.append(container);
	list.append(list_item);

  itemCountSpan.textContent = item_count;
	uncheckedCountSpan.textContent = item_count - checked_items;
  document.getElementById('task_input').value = '';
}