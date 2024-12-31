// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// const useGetConversations = () => {
// 	const [loading, setLoading] = useState(false);
// 	const [conversations, setConversations] = useState([]);

// 	useEffect(() => {
// 		const getConversations = async () => {
// 			setLoading(true);
// 			try {
// 				const token = localStorage.getItem("jwt");
// 				const res = await fetch("http://localhost:5432/api/users",{
// 					headers: {"Authorization": token}
// 				});
// 				const data = await res.json();
// 				if (data.error) {
// 					throw new Error(data.error);
// 				}
// 				setConversations(data);
// 			} catch (error) {
// 				toast.error(error.message);
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		getConversations();
// 	}, []);

// 	return { loading, conversations };
// };
// export default useGetConversations;



import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("jwt");
        const res = await fetch("http://localhost:9876/api/users", {
          headers: {
            "Authorization": token,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || "Failed to fetch conversations");
        }

        const data = await res.json();
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
