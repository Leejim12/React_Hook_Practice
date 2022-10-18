import mv from '../jsonData/MvInfo.json'

export default function MyObject() {
  //Object 순회 
  for(let k in mv){
    console.log("키 : ",k)
    console.log("값 : " ,mv[k]);

    // 값이 Object.
    for(let chk in mv[k]){
      console.log("자식키 : ",chk)
      console.log("자식 값 : ",mv[k][chk]);
    }
  }
  console.log("mv값 : " + mv);
  

  //영화정보 추출
  const myInfo = mv.movieInfoResult.movieInfo;
  console.log(myInfo);
  
  //Object 순회
  // for (let k in myInfo){
  //   console.log("키",k)
  // }

  //Object.entries(오브젝트명) : 키와 값의 배열 
  // console.log(Object.entries(myInfo));

  //배열 순회
  //for(let item of Object.entries(myInfo)) : item은 배열
  // for(let [k,v] of Object.entries(myInfo)){
  //   console.log(k,v);
  // }


  // filter
  const com = myInfo.companys;
  console.log(com);

  // map(()=>{}) 함수 : 배열의 항목을 가지고 와서 새로운 배열을 생성.
  const mcom = com.map((item)=>
                        item.companyNm + '(' + item.companyPartNm + ')'
  )
  console.log(mcom);
  // prototype : 어디에서 상속되었느냐!!!!

  //filter(()=>{}) : 배열 항목 가지고 와서 조건 맞는 새 항목으로 새 배열 생성.
  const fcom = com.filter(
    (item)=>
    item.companyPartNm ==='배급사'
  )
  console.log(fcom);


  const actors = myInfo.actors;
  const lis = actors.map(
    (item)=>
    <li key = {item.cast.replace(' ','')+item.peopleNm}>{item.cast}: {item.peopleNm} </li>
  );
  console.log(lis);
    




  return(
    <>
    <h1>오브젝트 연습</h1>
    <ul>
      {lis}
    </ul>
    </>
  );
}