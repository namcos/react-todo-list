import { useEffect, useState } from "react";

function List(props)
{
	const [list, setList] = useState(props.list);
	
	const doneList = (e) =>
	{
		let id = "";
		id = e.target.value;
		
		let el = document.getElementById(id);
		
		if(e.target.checked)
		{
			el.style.textDecoration = "line-through";
			el.style.color = "#777";
		}
		else
		{
			el.style.textDecoration = "none";
			el.style.color = "#000";
		}
	}
	
	const makeList = () =>
	{
		return list.map((list, index) => (<li id={index} key={index}><input type="checkbox" value={index} onClick={doneList} />{list}</li>));
	}
	
	useEffect(() =>
	{
		setList(props.list);
	}, [props.list]);
	
	return(
		<ul className="list">
		{ makeList() }
		</ul>
	);
}

export default List;