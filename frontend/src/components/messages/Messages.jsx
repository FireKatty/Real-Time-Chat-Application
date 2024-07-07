// import useGetMessages from "../../hooks/useGetMessages";
// import Message from "./Message";
// import MessageSkeleton from "../skeletons/MessageSkeleton";
// import { useEffect, useRef } from "react";
// import useListenMessages from "../../hooks/useListenMessages";

// const Messages = () => {
//   const { loading, messages } = useGetMessages();
//   useListenMessages();
//   const lastMessageRef = useRef();

//   useEffect(() => {
//     setTimeout(() => {
//       lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   }, [messages]);

//   return (
//     <div className="px-4 flex-1 overflow-auto">
//       {!loading && messages.length > 0 && 
//         messages.map((message, index) => (
//           <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
//             <Message message={message} />
//           </div>
//         ))
//       }

//       {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

//       {!loading && messages.length === 0 && (
//         <p className="text-center">Send a message to start the conversation</p>
//       )}
//     </div>
//   );
// }

// export default Messages;




import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"
import MessageSkeleton from "../skeltons/MessageSkelton";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;


// const Messages = () => {
//   const {loading,messages}= useGetMessages();
//   console.log(messages);
//   useListenMessages();
//   const lastMessageRef = useRef();

//   useEffect(()=>{
//     setTimeout(()=>{
//       lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" });
//     },100)
//   },[messages])

//   return (
//     <div className="px-4 flex-1 overflow-auto"> 
//       {!loading && messages.length > 0 && 
//       messages.map((message)=>(<div key={message._id} ref={lastMessageRef}>
//         <Message  message = {message} />
//         </div>
//       ))}

//       {loading && [...Array(3)].map((_, idx)=><MessageSkeleton key={idx}/>)}
//       {!loading && messages.length ===0 && (
//         <p className="text-center">Send a message to start the conversation</p>
//       )}
//     </div>
//   );
// }


// export default Messages



// import Message from "./Message"

// const Messages = () => {
//   return (
//     <div className="px-4 flex-1 overflow-auto"> 
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//     </div>
//   )
// }


// export default Messages
