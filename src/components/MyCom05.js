import './My06.css';

function MyCom() {
  //object 생성.
  let obj = new Object();
  console.log('obj1 생성',obj);

  //object 생성.3
  let obj2 = {};
  console.log('obj2 생성',obj2);
  
  let mv = {

            "rnum": "1",
            "rank": "1",
            "rankInten": "0",
            "rankOldAndNew": "OLD",
            "movieCd": "20215601",
            "movieNm": "공조2: 인터내셔날",
            "openDt": "2022-09-07",
            "salesAmt": "186527512",
            "salesShare": "23.2",
            "salesInten": "-645733705",
            "salesChange": "-77.6",
            "salesAcc": "68000199650",
            "audiCnt": "18989",
            "audiInten": "-61139",
            "audiChange": "-76.3",
            "audiAcc": "6624892",
            "scrnCnt": "979",
            "showCnt": "3048"
          }
        
      
    
    
  
  // console.log('obj3 생성',mv);
  // console.log('영화명(.) : ', mv.movieNm);
  // console.log('영화명([]) : ', mv['movieNm']);

  //obj순회
  for(let k in mv){
    // console.log(k,'=>',mv[k]);
  }

  console.log('------------------------------------------');
  //obj순회2
  for(let [k,v] of Object.entries(mv)){
    // console.log(k,'=>',mv[k]);
    if(k==="movieNm") break
  }


  // 얕은 복사 
  obj = mv;
  console.log("얕은 복사 : ",obj);
  // 깊은 복사
  obj2 = {...mv};
  mv.movieNm = "공조2";
  console.log("깊은 복사(전개 연산자...사용): ",obj2);


  //jsx내용 생성
  let lis = [];
  for(let[k,v] of Object.entries(mv)){
    lis.push(<li key = {k}><span className='mvLiK'> {k} </span> 
                           <span className='mvLiK'> {v}</span></li>)
            }
    

  console.log(lis);


  return(
  <>
    <h1>object 타입 연습</h1>
    <ul>
        {lis}
    </ul>
  </>
  
  );
}
export default MyCom;