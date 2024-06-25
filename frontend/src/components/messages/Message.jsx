
const Message = () => {
    return (
      <div className="chat chat-end">
          <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                  <img src="/profile.png" alt="user avatar" />
              </div>
          </div>
          <div className={`chat-bubble text-white bg-blue-500`}>Hii!What is upp? </div>
          <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>18:47</div>
          
        
      </div>
    )
  }
  
  export default Message
  


// const Message = () => {
//   return (
//     <div className="chat chat-end">
//         <div className="chat-image avatar">
//             <div className="w-10 rounded-full">
//                 <img src="/profile.png" alt="user avatar" />
//             </div>
//         </div>
//         <div className={`chat-bubble text-white bg-blue-500`}>Hii!What is upp? </div>
//         <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>18:47</div>
        
      
//     </div>
//   )
// }

// export default Message
