import { useState } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { FaBars } from "react-icons/fa";

const Home = () => {

	const [showSidebar, setShowSidebar] = useState(false);
	return (
		<div className='flex h-[450px] sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			
			<button
				className="sm:hidden absolute top-2 left-2 z-10 p-2 bg-gray-700 text-white rounded-full"
				onClick={() => setShowSidebar(!showSidebar)}
			>
				<FaBars size={16} />
			</button>

			<div className=
				{`${
          showSidebar ? "hidden" : "block"
        } flex sm:flex h-full overflow-auto`}
				>
					<Sidebar/>
			</div>
			
			<div className=
				{`
					${!showSidebar ? "hidden" : "block"}
					flex sm:flex overflow-auto
				`}
				>
					<MessageContainer />
			</div>
			
		</div>
	);
};
export default Home;