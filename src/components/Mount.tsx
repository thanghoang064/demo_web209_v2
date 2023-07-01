import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect, useState } from "react";
const tabs = ['posts','comments','albums']
const Mount = () => {
    const [title,setTitle] = useState<string>('');
    const [posts,setPosts] = useState<any[]>([]);
    const [type,setType] = useState('posts');
    //hàm effect nhận 2 đối số 
    //useEffect(callback,[deps]) 
     // hàm call back thực hiện các effec (bắt buộc ) Tự truyền vào 
     //deps depenencies  (Không bắt buộc)
     // 1. useEffect(callback)
     //-gọi callback mỗi khi tk component re-render (ít dùng)
     //-thời điểm nó lọt vào  (gọi callback sau khi component thêm element vào dom)
    // 2. useEffect(callback,[])
    //- Chỉ gọi callback 1 lần sau khi componet đc mount
    //3.  useEffect(callback,[deps])
//-------
//1 .Callback luôn được gọi sau khi components mounted (Ly thuyet chung)
//
    useEffect(()=> {
       // console.log('Mounted',title);
       // console.log(title);
    //    document.title = title;
        fetch(`http://localhost:3001/${type}`)
        .then(res=>res.json())
        .then(posts=>{
            setPosts(posts);
            // console.log(posts);
        })
    },[type])
    
   // document.title = title;// nếu viết ở ngoài thế này thì có khả năng bị chặn lại việc render nếu logic phức tạp
    return(<div>
        {tabs.map((tab,index)=>(
            <button key={index}
            style={type === tab ?{
                color:'#fff',
                backgroundColor:'red',
            }:{}}
            onClick={()=> setType(tab)}>
                {tab}
            </button>
        ))}
        <input value={title} onChange={e=>setTitle(e.target.value)} />

        <ul>
        {posts.map(post => (
            <li key={post.id}>{post.name}</li>
        ))}
        </ul>
    </div>)
}

export default Mount;