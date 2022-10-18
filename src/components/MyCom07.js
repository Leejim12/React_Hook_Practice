import './My06.css';
let mv = {
  "rnum": "2",
  "rank": "2",//
  "rankInten": "-1",
  "rankOldAndNew": "OLD",
  "movieCd": "20215601",
  "movieNm": "공조2: 인터내셔날",//
  "openDt": "2022-09-07",
  "salesAmt": "147988846",
  "salesShare": "13.3",
  "salesInten": "-38522666",
  "salesChange": "-20.7",
  "salesAcc": "68148142496",
  "audiCnt": "17727",
  "audiInten": "-1260",
  "audiChange": "-6.6",
  "audiAcc": "6642615",
  "scrnCnt": "780",
  "showCnt": "2337"
        };
function MyCom(probs) {
  return(
    <>
      <h1>object 타입 연습</h1>
      <ul>
          {mv.rank}
          {mv.movieNm}
          {mv.salesAmt}
          {mv.audiCnt}
          {mv.audiInten}
          {mv.movieCd}
      </ul>
    </>
    
    );
  }
  // const myMv = {...probs.item}; // 얕은 복사.
  // 순위 : rank
  // 영화명 : movieNm
  // 매출액 : salesAmt
  // 관객수 :  auidCnt
  // 관객수 증감분 : auidInten
  // 영화코드 : movieCD

  /// map() 함수
  // let arr = [1,2,3];
  // arr = arr.map((item) => item*2)
  // console.log("arr : "+arr);



  // const liis = object.entries(myMv).map((item) => 
  //   <li key={item[0]}>
  // <span className='mvLik'>{item[0]}</span>
  // <span className='mvLik'>{item[0]}</span>
  //   </li>  
  // )
  //object 생성.//probs는 무조건 오브젝트타입
  let obj = new Object();
  console.log('obj1 생성',obj);

  //object 생성.3
  let obj2 = {};
  console.log('obj2 생성',obj2);
  

          
      
    
    
  
  // console.log('obj3 생성',mv);
  // console.log('영화명(.) : ', mv.movieNm);
  // console.log('영화명([]) : ', mv['movieNm']);

  // //obj순회
  // for(let k in mv){
  //   // console.log(k,'=>',mv[k]);
  // }

  // console.log('------------------------------------------');
  // //obj순회2
  // for(let [k,v] of Object.entries(mv)){
  //   // console.log(k,'=>',mv[k]);
  //   if(k==="movieNm") break
  // }


  // // 얕은 복사 
  // obj = mv;
  // console.log("얕은 복사 : ",obj);
  // // 깊은 복사
  // obj2 = {...mv};
  // mv.movieNm = "공조2";
  // console.log("깊은 복사(전개 연산자...사용): ",obj2);


  //jsx내용 생성
  // let lis = [];
  // for(let[k,v] of Object.entries(mv)){
  //   lis.push(<li key = {k}><span className='mvLiK'> {k} </span> 
  //                          <span className='mvLiK'> {v}</span></li>)
  //           }
    

  // console.log(lis);
export default MyCom;