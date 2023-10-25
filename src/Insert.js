import { useState } from "react";
import List from './List';

var todo = [];

function Insert()
{
	const [notes, setNotes] = useState("");
	
	const makeNote = (event) =>
	{
		event.preventDefault();
		todo = [...todo, notes];
		document.getElementById('note').value = '';
		setNotes('');
	}
	
	return(
		<>
			<form onSubmit={makeNote}>
				<input
					id="note"
					className="note"
					type="text"
					placeholder="Add New"
					value={notes}
					onChange={(e) => setNotes(e.target.value)}
				/>
				<List list={todo} />
			</form>
		</>
	);
}

export default Insert;