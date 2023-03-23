import { useDispatch, useSelector } from "react-redux/es/exports";
import { toggle } from "./actions";

const Lorem = () => {
	const { mode } = useSelector((state) => state.reducers);
	const dispatch = useDispatch();

	return (
		<div
			style={{
				backgroundColor: mode === false ? "#fff" : "#000",
				color: mode === false ? "#000" : "#fff",
			}}>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Quisquam, eligendi harum dolor, dignissimos eveniet nulla
				numquam ad natus minus eaque fugiat perspiciatis ipsam et! Est
				sequi aut corrupti iste eius? Exercitationem non adipisci labore
				placeat quibusdam rem qui aut possimus nihil, odit voluptates
				nostrum numquam magni dolorem minima soluta consectetur cumque
				quasi voluptate! Fuga nam deserunt obcaecati, nisi perspiciatis
				minima?
			</p>
			<button onClick={() => dispatch(toggle())}>
				Toggle to {mode === false ? "dark" : "light"}
			</button>
		</div>
	);
};

export default Lorem;
