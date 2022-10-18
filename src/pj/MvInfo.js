// import MvInfo from '../pj/MvInfo';
import mv from '../jsonData/MvInfo.json'
import MvTimer from './MvTimer';
import { useState,useEffect } from "react";
/*
영화명 movieNm
영화코드 movieCd
개봉일 openDt
제작상태 prdtStatNm
관람등급 audits => watchGradeNm
상영시간 showTm
제작국가 nations => nation => nationNm
감독 directors=>director=>peopleNm
장르 genres => genre => genreNm
배급사 companys => company => companyPartNm === 배급사
*/

function MvInfo(){
    // json 가져오기
  const mvinfo = mv.movieInfoResult.movieInfo;
  // const myMv = { ...probs.item };
  // const keys = ["movieNm","movieCd","openDt","prdtStatNm","showTm","watchGradeNm","nations","peopleNm","genreNm","companyPartNm"]
  // const mvs = mv.map((m) => <MyCom key={m.movieCd} item={m} />);
  // const lis = keys.map((k) => (
  //   <li className="mvLi" key={k}>
  //     <span className={k}>{myMv[k]}</span>
  //   </li>
  // ));

  // 출력용 오브젝트
  let myinfo = {};
  const key1 = ['movieNm','movieCd','openDt','prdtStatNm','showTm',]
  const key2 = ['audits','nations','directors','genres','companys']

  // 키 생성
  const keys = {
    'movieNm' : '영화명 : ',
    'movieCd' : '영화코드 : ',
    'openDt' : '개봉일자 : ',
    'prdtStatNm' : '제작상태 : ',
    'showTm': '상영시간 : ',
    'audits': '관람등급 : ',
    'nations':'제작국가 : ',
    'directors':'감독 : ',
    'genres':'장르 : ',
    'companys':'배급사 : ',

  }
  
  
  // key1에 해당하는 값 추출
  for(let k of key1){
    myinfo[keys[k]] = mvinfo[k];
  }
  


  //key2에 해당하는 값 추출 : 배열에서 추출
  for(let k of key2){
    switch (k) {
      case 'audits' :
        myinfo[keys[k]] = mvinfo[k].map((item)=>item.watchGradeNm);
        break;     
      case 'nations':
        myinfo[keys[k]] = mvinfo[k].map((item)=>item.nationNm); 
        break;
      case 'directors':
        myinfo[keys[k]] = mvinfo[k].map((item)=>item.peopleNm);
        break;
      case 'genres':
        myinfo[keys[k]] = mvinfo[k].map((item)=>item.genreNm);
        break;
      default :
        myinfo[keys[k]] = mvinfo[k].filter((item)=>item.companyPartNm ==='배급사');
        myinfo[keys[k]] = myinfo[keys[k]].map((item)=>item.companyNm);
        break;  
    }
  }


  // 출력내용
  const lis = [];


  for (let [k,v] of Object.entries(myinfo)){
    lis.push(<li key={myinfo.movieCd + k}>
      <span className='Tspan'>{k}</span>
      <span className='Cspan'>{v}</span>
    </li>);
  }

  let [cntUp, setCntUp] = useState(0);
  let [cntDown, setCntDown] = useState(0);
  let[flag,setFlag]=useState(false);
  let[flag2,setFlag2]=useState(false);
  //이벤트
  const handleUp = () => {
    setCntUp(++cntUp);
    console.log(cntUp);
  };


  const handleDown = () => {
    setCntDown(++cntDown);
    console.log(cntDown);
  };

  // 시계 클릭시
  const handleTimer = () =>{
    setFlag(!flag);
  }
  const handleTimer2 = () =>{
    setFlag2(!flag2);
    setFlag2(flag2==='none'?'flex':'none');
  }

  // useEffect Hook : 랜더링시 매번
  useEffect(()=>{
    console.log('매번 →', cntUp);
  });

  // useEffect Hook : 컴포넌트 생성 시 한번
  useEffect(()=>{
    console.log('한번 수행', cntUp);
  }, []);

  // useEffect Hook : 관련 State변수가 변경될 때 실행
  useEffect(()=>{
    console.log('관련 State변수 변경', cntUp);
  }, [cntUp]);
  
  const [viewTimer, setViewTimer] = useState(true)

  return(
    <>
      <h1> 인생은 아름다워 영화정보 </h1>
      

      <div className = "mainDiv">
      <ul>
        {/* <li><span>영화명 : </span>{mvinfo.movieNm}</li>
        <li><span>영화코드 : </span>{mvinfo.movieCd}</li>
        <li><span>개봉일자 : </span></li>
        <li><span>제작상태</span></li>
        <li><span>상영시간</span></li>
        <li><span>관람등급</span></li>
        <li><span>제작국가</span></li>
        <li><span>감독</span></li>
        <li><span>장르</span></li>
        <li><span>배급사</span></li> */}
        {lis}
     </ul>
      </div>
      
      <div className='mvList2'>
        <span onClick={handleUp}>👍</span><span>&nbsp;&nbsp;{cntUp}&nbsp;&nbsp;</span>
        <button onClick={handleUp}>+1</button>
        <span onClick={handleDown}>&nbsp;&nbsp;&nbsp;&nbsp;👎</span><span>&nbsp;&nbsp;{cntDown}&nbsp;&nbsp;</span>
        <button onClick={handleDown}>+1</button>
        <span onClick={handleTimer}>&nbsp;&nbsp;&nbsp;&nbsp;🧭&nbsp;&nbsp;&nbsp;</span>
        <button onClick={() => setViewTimer(true)}>켜기</button>        
        <button onClick={() => setViewTimer(false)}>끄기</button>
        <span onClick={handleTimer2}>🚚</span>
      </div>

      <div className='mvList3'>
        {/* {false && <MvTimer />} */}
        버튼에 물린거 : { viewTimer ? <MvTimer/> : <></> }
      </div>

      <div className='mvList4'>
        시계 아이콘에 물린거 {flag && <MvTimer />}
        {/* { viewTimer ? <MvTimer/> : <></> } */}
      </div>
      <div className='mvList5' style={{'display':flag2}}>
        트럭 디스플레이{<MvTimer />}
      </div>

    </>
  );
}

export default MvInfo;