import './My.css';
import MyHello from './MyHello';


 function MyCom() {
  return(
  // root -> h1,h2
  // probs 매개변수로 전달. 속성값을 설정할 수 있음.
  <div>
    <MyHello name='PNU'num='1' ck='' />
    <MyHello name='K-Digital'num='2' ck='1'/>
    <MyHello name='부산대학교'num='3' ck=''/>
  </div>
    );
}
export default MyCom;