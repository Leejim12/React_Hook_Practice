import '../components/MyCom04.css';
import MyHello from './MyHello';


 function MyCom() {
  // 스타일 오브젝트 
  const styleObj = {
    color:'white',
    backgroundColor:'black',
    padding:'15px',
  //  textAlign : 'center',
  }
  
  
  
  return(
  <>
    <h1 style = {{backgroundColor:'red'}}>스타일 변경 예제</h1>
    {/* 인라인 스타일은 오브젝트 타입으로 
    바깥 {}는 JSX의 표현식을 위한 {}이고,
    안쪽 {}는 자바스크립트의 object type 표시/
    */}
      <p style = {{color : 'green',
                backgroundColor:'yellow',
                }}>
        리액트에서 스타일 변경 - 인라인 형식으로.
     </p>
        
      <p style ={styleObj}>리액트에서 스타일 변경 - 인라인 형식으로.</p>
    </>
  
  );
}
export default MyCom;