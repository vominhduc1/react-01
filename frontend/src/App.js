import logo from './logo.svg';
import './App.css';

function Article(prop){
  console.log(prop); // để in ra
  return (
    <div>
      <img style={{height:"250px", width:"550px"}} src={prop.image}></img>
      <h1>{prop.title || "Hello!!!"}</h1>
      <h2>{prop.detail}</h2>
    </div>
  )
}
function App() {
  return (
    <div className="App">
  
    <Article image="https://images.unsplash.com/photo-1699387291203-cc56fd18239b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D" title="Nguyen Van A" detail="Đây là một đoạn văn bản, mỗi đoạn văn bản sẽ được hiển thị một dòng riêng và được khai báo bằng thẻ"></Article>
    
    <Article image="https://images.unsplash.com/photo-1703209935484-34f5c826f1da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" title="Nguyen Van B" detail="Đây là một đoạn văn bản, mỗi đoạn văn bản sẽ được hiển thị một dòng riêng và được khai báo bằng thẻ"></Article>
     
    <Article image="https://images.unsplash.com/photo-1702933017536-44e01bff1111?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8" detail="Đây là một đoạn văn bản, mỗi đoạn văn bản sẽ được hiển thị một dòng riêng và được khai báo bằng thẻ"></Article>

    </div>
  );
}

export default App;
