import React from 'react';
import PageFrame from 'components/PageFrame';
import styles from 'pages/Provision.module.css';

export default function Provision() {
  const id = 'Provision';
  const to = '/provision/';
  const name = '';

  return (
    <PageFrame id={id} to={to} menu={name} isTab={false}>
      <>
        <p className={styles.para}>[제1장 총칙]</p>
        <div className={styles.t_box}>
          <p className={styles.group}>제1조(목적)</p>
          <span className={styles.contents}>
            이 약관은 이트리소프트가 운영하는 서비스의 회원가입과 서비스 이용에
            대한 이용자의 권리, 의무와 책임사항을 규정함을 목적으로 합니다.
          </span>
        </div>
        <div className={styles.t_box}>
          <p className={styles.group}>제2조(정의)</p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>'이트리소프트'란 회사가
              재화나 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신 설비를
              이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의 영업장과
              사이트를 운영하는 사업자의 의미로도 사용합니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>'이용자'란 이 약관에 따라
              '이트리소프트'가 제공하는 서비스를 받는 회원과 비회원을 말합니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>③</span>'회원'이라 함은
              '이트리소프트'에 개인정보를 제공하여 회원등록을 한 자로서,
              '이트리소프트'의 정보를 지속적으로 제공받으며, '이트리소프트'가
              제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>④</span>'비회원'이라 함은 회원에
              가입하지 않고 '이트리소프트'가 제공하는 서비스를 이용하는 자를
              말합니다.
            </li>
          </ol>
        </div>
        <div className={styles.t_box}>
          <p className={styles.group}>제3조(약관의 명시와 개정)</p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>'이트리소프트'는 이 약관의
              내용과 상호, 연락처(전화, 팩스, 전자우편 주소 등) 등을 이용자가 알
              수 있도록 사이트 초기 서비스화면에 게시합니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>'이트리소프트'는
              약관의규제등에관한법률, 전자거래기본법, 전자서명법,
              정보통신망이용촉진등에 관한 법률, 방문판매등에 관한 법률,
              소비자보호법 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할
              수 있습니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>③</span>'이트리소프트'가 약관을
              개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께
              사이트의 초기화 면에 그 적용일자 7일 이전부터 적용일자 전일까지
              공지합니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>④</span>'이트리소프트'가 약관을
              개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만
              적용되고 그 이전에 이미 체결된 계약에 대해서는 개정전의 약관조항이
              그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관
              조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의
              공지기간내에 '이트리소프트'에 송신하여 '이트리소프트'의 동의를
              받은 경우에는 개정약관조항이 적용됩니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>⑤</span>&nbsp;이 약관에서 정하지
              아니한 사항과 이 약관의 해석에 관하여는 정부가 제정한
              전자거래소비자 보호지침 및 관계 법령 또는 상관례에 따릅니다.
            </li>
          </ol>
        </div>
        <div className={styles.t_box}>
          <p className={styles.group}>제4조(서비스의 제공 및 변경)</p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>'이트리소프트'는 다음과 같은
              서비스를 제공합니다.
              <ol className={styles.ol}>
                <li className={styles.ol_li}>
                  <span className={styles.num}>1.</span>재화 또는 상품에
                  대한정보 제공 및 구매계약의 체결
                </li>
                <li className={styles.ol_li}>
                  <span className={styles.num}>2.</span>구매계약이 체결된 재화
                  또는 상품의 배송
                </li>
                <li className={styles.ol_li}>
                  <span className={styles.num}>3.</span>기타 이트리소프트가
                  정하는 서비스
                </li>
              </ol>
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>'이트리소프트'는 재화의 품절
              또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해
              제공할 재화·상품의 내용을 변경할 수 있습니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>③</span>'이트리소프트'가 제공하기로
              이용자와 계약을 체결한 서비스의 내용을 재화의 품절 또는 기술적
              사양의 변경 등의 사유로 변경할 경우에는 '이트리소프트'는 이로
              인하여 이용자가 입은 손해를 배상하지 아니합니다. 단,
              '이트리소프트'에게 고의 또는 과실이 있는 경우에는 그러하지
              아니합니다.
            </li>
          </ol>
        </div>
        <div className={styles.t_box}>
          <p className={styles.group}>제5조(서비스의 중단)</p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>'이트리소프트'는 컴퓨터 등
              정보통신설비의 보수점검,교체 및 고장, 통신의 두절 등의 사유가
              발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>제1항에 의한 서비스 중단의
              경우에는 '이트리소프트'는 제8조에 정한 방법으로 이용자에게
              통지합니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>③</span>'이트리소프트'는 제1항의
              사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는
              제3자가 입은 손해에 대하여 배상하지 아니합니다. 단
              '이트리소프트'에게 고의 또는 과실이 있는 경우에는 그러하지
              아니합니다.
            </li>
          </ol>
        </div>
        <p className={styles.para}>[제2장 회원가입계약]</p>
        <div className={styles.t_box}>
          <p className={styles.group}>제6조(회원가입)</p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>'이트리소프트' 이용자는
              '이트리소프트'가 정한 가입 양식에 따라 이 약관에 동의한다는 의사
              표시를 한 후 회원정보를 기입함으로서 회원가입을 신청합니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>'이트리소프트'는 제1항과 같이
              회원으로 가입할 것을 신청한 이용자 중 다음 각호에 해당하지 않는 한
              회원으로 등록합니다.
              <ol className={styles.ol}>
                <li className={styles.ol_li}>
                  <span className={styles.num}>1.</span>가입신청자가 이 약관
                  제7조 제3항에 의하여 이전에 회원자격을 상실한적이 있는 경우
                </li>
                <li className={styles.ol_li}>
                  <span className={styles.num}>2.</span>다만 제7조 제3항에 의한
                  회원자 격 상실후 3년이 경과한 자로서 사이트의 회원 재가입
                  승낙을 얻은 경우에는 예외로 한다.
                </li>
                <li className={styles.ol_li}>
                  <span className={styles.num}>3.</span>등록 내용에 허위,
                  기재누락, 오기가 있는 경우
                </li>
                <li className={styles.ol_li}>
                  <span className={styles.num}>4.</span>기타 회원으로 등록하는
                  것이 이트리소프트의 기술상 현저히 지장이 있다고 판단되는 경우
                </li>
              </ol>
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>③</span>회원가입계약의 성립시기는
              '이트리소프트'의 가입신청거절 통보가 없는 이상 이용자가 회원강입
              신청절차를 완료한 때로 합니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>④</span>&nbsp;회원은 제15조 제1항에
              의한 등록사항에 변경이 있는 경우, 즉시 전자우편 기타 방법으로
              '이트리소프트'에 대하여 그 변경사항을 알려야 합니다.
            </li>
          </ol>
        </div>
        <div className={styles.t_box}>
          <p className={styles.group}>제7조(회원 탈퇴 및 자격 상실 등)</p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>회원은 '이트리소프트'에게
              언제든지 탈퇴를 요청할 수 있으며 이트리소프트은 즉시 회원 탈퇴를
              처리합니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>회원이 다음 각 호의 사유에
              해당하는 경우, '이트리소프트'는 회원자격을 제한 및 정지시킬 수
              있습니다.
              <ol className={styles.ol}>
                <li className={styles.ol_li}>
                  <span className={styles.num}>1.</span>가입 신청시에 허위
                  내용을 등록한 경우
                </li>
                <li className={styles.ol_li}>
                  <span className={styles.num}>2.</span>'이트리소프트'를
                  이용하여 구입한 재화또는상품 등의 대금, 기타 '이트리소프트'
                  이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는
                  경우
                </li>
                <li className={styles.ol_li}>
                  <span className={styles.num}>3.</span>다른 사람의
                  '이트리소프트' 이용을 방해하거나 그 정보를 도용하는 등
                  전자거래 질서 를 위협하는 경우
                </li>
                <li className={styles.ol_li}>
                  <span className={styles.num}>4.</span>'이트리소프트'를
                  이용하여 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를
                  하는 경우
                </li>
              </ol>
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>③</span>'이트리소프트' 회원 자격을
              제한,정지 시킨 후, 동일한 행위가 2회이상 반복되거나 30일이내에 그
              사유가 시정되지 아니하는 경우 '이트리소프트'는 회원자격을 상실시킬
              수 있습니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>④</span>'이트리소프트'가 회원자격을
              상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를
              통지하고, 회원등록 말소 전에 소명할 기회를 부여합니다.
            </li>
          </ol>
        </div>
        <div className={styles.t_box}>
          <p className={styles.group}>제8조(회원에 대한 통지)</p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>'이트리소프트'가 회원에 대한
              통지를 하는 경우, 회원이 '이트리소프트'에게 제출한 전자우편 주소로
              할 수 있습니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>'이트리소프트'는 불특정다수
              회원에 대한 통지의 경우 1주일이상 '이트리소프트' 게시판에
              게시함으로서 개별 통지에 갈음할 수 있습니다.
            </li>
          </ol>
        </div>
        <p className={styles.para}>[제3장 구매계약]</p>
        <div className={styles.t_box}>
          <p className={styles.group}>제9조(구매신청)</p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>'이트리소프트' 이용자는
              '이트리소프트'상에서 이하의 방법에 의하여 구매를 신청합니다.
              <ol className={styles.ol}>
                <li className={styles.ol_li}>
                  <span className={styles.num}>1.</span>성명, 주소, 전화번호
                  입력
                </li>
                <li className={styles.ol_li}>
                  <span className={styles.num}>2.</span>재화 또는 상품의 선택
                </li>
                <li className={styles.ol_li}>
                  <span className={styles.num}>3.</span>결제방법의 선택
                </li>
                <li className={styles.ol_li}>
                  <span className={styles.num}>4.</span>전화로 구매신청하는 방법
                </li>
              </ol>
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>구매신청의 취소는 상품 배송
              절차가 시작되기 이전까지 해야 합니다. 당회사 영업시간중에 유선으로
              통보하여야 합니다.
            </li>
          </ol>
        </div>
        <div className={styles.t_box}>
          <p className={styles.group}>제10조(계약의 성립)</p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>이트리소프트는 제9조와 같은
              구매신청에 대하여 다음 각 호에 해당하지 않는 한 승낙합니다.
              <ol className={styles.ol}>
                <li className={styles.ol_li}>
                  <span className={styles.num}>1.</span>신청 내용에 허위,
                  기재누락, 오기가 있는 경우 기타 구매신청에 승낙하는 것이
                  이트리소프트 기술상, 및 업무 수행상 현저히 지장이 있다고
                  판단하는 경우
                </li>
              </ol>
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>'이트리소프트' 승낙이 제12조
              제1항의 수신확인통지형태로 이용자에게 도달한 시점 에 계약이 성립한
              것으로 봅니다.
            </li>
          </ol>
        </div>
        <p className={styles.para}>[제4장 대금결제]</p>
        <div className={styles.t_box}>
          <p className={styles.group}>제11조(지급방법)</p>
          <span className={styles.span}>
            '이트리소프트'에서 구매한 재화 또는 상품에 대한 대금지급방법은 다음
            각 호의 하나로 할 수 있습니다.
          </span>
          <p className={styles.p2}>- 계좌이체</p>
          <p className={styles.p2}>- 신용카드결제</p>
          <p className={styles.p2}>- 온라인무통장입금</p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>회원이 상품을 구입할 때
              사용할 수 있는 결제 수단에는 신용카드, 온라인 송금, 사이버캐시
              등이 있습니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>신용카드는 회원의 동의를 얻어
              등록한 후 사용할 수 있습니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>③</span>온라인 송금은 회원이 직접
              황윤규(이트리소프트) 계좌로 돈을 입금하는 방식입니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>④</span>사이버캐시는
              '이트리소프트'에서 현금처럼 사용할 수 있습니다.
            </li>
          </ol>
          <p className={styles.p_bold}>- 사이버캐시에 관한 규정</p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>사이버캐시는 '이트리소프트'
              사이트 내에서 마치 현금처럼 사용할 수 있는 전자 화폐입니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>사이버캐시는
              '이트리소프트'에서 물건을 구입할 때 자동으로 적립됩니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>③</span>구매할 때 적립된 사이버캐시는
              현금으로 환불 되지 않습니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>④</span>사이버캐시는 현금이나
              신용카드와 함께 사용할 수 있습니다. 예) 10,000원 짜리 상품을
              구입할 때 1,000원의 사이버캐시가 있다면 9,000원만 현금이나
              신용카드로 지불
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>⑤</span>사이버캐시와 다른 결제 수단을
              함께 사용할 경우 사이버캐시가 먼저 사용됩니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>⑥</span>사이버캐시는 1,000원 단위로
              사용할 수 있습니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>⑦</span>회원을 탈퇴할 경우
              사이버캐시는 모두 소멸됩니다.
            </li>
          </ol>
        </div>
        <div className={styles.t_box}>
          <p className={styles.group}>
            제12조(수신확인통지·구매신청 변경 및 취소)
          </p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>'이트리소프트'는 이용자의
              구매신청이 있는 경우 이용자에게 수신확인통지를 합니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>수신확인통지를 받은 이용자는
              의사표시의 불일치등이 있는 경우에는 수신 확인 통지를 받은 후 즉시
              구매신청 변경 및 취소를 요청할 수 있습니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>③</span>'이트리소프트'는 배송 전
              이용자의 구매신청 변경 및 취소 요청이 있는 때에는 지체없이 그
              요청에 따라 처리합니다.
            </li>
          </ol>
        </div>
        <p className={styles.para}>[제5장 이트리소프트와 이용자의 의무사항]</p>
        <div className={styles.t_box}>
          <p className={styles.group}>제14조(개인정보보호)</p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>'이트리소프트'는 이용자의
              정보수집시 구매계약 이행에 필요한 최소한의 정보를 수집합니다. 다음
              사항을 필수사항으로 하며 그 외 사항은 선택사항으로 합니다.
              <ol className={styles.ol}>
                <li className={styles.ol_li}>
                  <span className={styles.num}>1.</span>성명
                </li>
                <li className={styles.ol_li}>
                  <span className={styles.num}>2.</span>이메일
                </li>
                <li className={styles.ol_li}>
                  <span className={styles.num}>3.</span>연락처
                </li>
              </ol>
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>'이트리소프트' 이용자의
              개인식별이 가능한 개인정보를 수집하는 때에는 이하 각 호의 경우를
              제외하고는 반드시 당해 이용자의 동의를 받습니다.
              <ol className={styles.ol}>
                <li className={styles.ol_li}>
                  <span className={styles.num}>1.</span>법률에 특별한 규정이
                  있는 경우
                </li>
                <li className={styles.ol_li}>
                  <span className={styles.num}>2.</span>전자거래 계약의 이행을
                  위해서 필요한 경우
                </li>
                <li className={styles.ol_li}>
                  <span className={styles.num}>3.</span>재화등의 제공에 따른
                  요금정산을 위하여 필요한 경우
                </li>
              </ol>
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>③</span>제공된 개인정보는 이용자의
              동의없이 목적외의 이용이나 제3자에게 제공 할 수 없으며, 이에 대한
              모든 책임은 '이트리소프트'가 책임을 집니다. 다만, 다음의 경우에는
              예외로 합니다.
              <ol className={styles.ol}>
                <li className={styles.ol_li}>
                  <span className={styles.num}>1.</span>배송업무상 배송업체에게
                  배송에 필요한 최소한의 이용자의 정보(성명, 주소 ,전화번호)를
                  알려주는 경우
                </li>
                <li className={styles.ol_li}>
                  <span className={styles.num}>2.</span>통계작성, 학술연구 또는
                  시장조사를 위하여 필요한 경우로서 특정개인을 식별할 수 없는
                  형태로 제공하는 경우
                </li>
              </ol>
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>④</span>'이트리소프트'가 제2항과
              제3항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보관리
              책임자의 신원(소속, 성명 및 전화번호 기타 연락처), 정보의 수집목적
              및 이용목적, 제3자에 대한 정보제공 관련사항(제공+받는자, 제공목적
              및 제공할 정보 의 내용)등 정보통신망 이용 촉진 등에 관한 법률
              제16조 제3항이 규정 한 사항을 미리 명시하거나 고지해야 하며
              이용자는 언제든지 이 동의를 철회할 수 있습니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>⑤</span>이용자는 언제든지
              '이트리소프트'가 가지고 있는 자신의 개인정보에 대해 열람 및
              오류정정을 요구할 수 있으며 '이트리소프트'는 이에 대해 지체 없이
              필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을 요구한
              경우에는 '이트리소프트'가 그 오류를 정정 할 때까지 당해 개인정보를
              이용하지 않습니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>⑥</span>'이트리소프트'는 개인정보
              보호를 위하여 관리자를 한정하여 그 수를 최소화하며 신용카드,
              은행계좌 등을 포함한 이용자의 개인정보의 분실, 도난, 유출,변조
              등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>⑦</span>'이트리소프트' 또는 그로부터
              개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은
              목적을 달성한 때에는 당해 개인정보를 지체 없이 파기합니다.
            </li>
          </ol>
        </div>
        <div className={styles.t_box}>
          <p className={styles.group}>제15조(회사의 의무)</p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>'이트리소프트'는 법령과 이
              약관이 금지하거나 공서양속에 반하는 행위를 하지 않습니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>'이트리소프트'는 이 약관이
              정하는 바에 따라 지속적이고, 안정적으로 재화·용역을 제공하는데
              최선을 다하여야 합니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>③</span>'이트리소프트'는 이용자가
              안전하게 인터넷 서비스를 이용할 수 있도록 이용자의
              개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>④</span>'이트리소프트'가 상품이나
              용역에 대하여 「표시·광고의공정화에관한법률」 제3조 소정의 부당한
              표시·광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할
              책임을 집니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>⑤</span>'이트리소프트'는 이용자가
              원하지 않는 영리목적의 광고성 전자우편을 발송하지 않습니다.
            </li>
          </ol>
        </div>
        <div className={styles.t_box}>
          <p className={styles.group}>
            제16조(회원의 ID 및 비밀번호에 대한 의무)
          </p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>제15조의 경우를 제외한 ID와
              비밀번호에 관한 관리책임은 회원에게 있습니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>회원은 자신의 ID 및
              비밀번호를 제3자에게 이용하게 해서는 안됩니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>③</span>ID 및 비밀번호의 관리상
              불충분, 사용자의 과실, 제3자의 사용 등에 의한 손해의 책임은 회원이
              집니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>④</span>자신의 ID 및 비밀번호를
              도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로
              '이트리소프트'에게 통보하고 '이트리소프트'의 안내가 있는 경우에는
              그에 따라야 합니다.
            </li>
          </ol>
        </div>
        <div className={styles.t_box}>
          <p className={styles.group}>제17조(이용자의 의무)</p>
          <span className={styles.span}>
            이용자는 다음 행위를 하여서는 안됩니다.
          </span>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>신청 또는 변경시 허위내용의
              등록
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>'이트리소프트'에 게시된
              정보의 변경
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>③</span>'이트리소프트'가 정한 정보
              이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>④</span>'이트리소프트' 기타 제3자의
              저작권 등 지적재산권에 대한 침해
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>⑤</span>'이트리소프트' 기타 제3자의
              명예를 손상시키거나 업무를 방해하는 행위
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>⑥</span>외설 또는 폭력적인
              메시지·화상·음성 기타 공서양속에 반하는 정보를 사이트에 공개 또는
              게시하는 행위
            </li>
          </ol>
        </div>
        <p className={styles.para}>[제6장 기타]</p>
        <div className={styles.t_box}>
          <p className={styles.group}>
            제18조(연결'사이트'과 피연결'사이트' 간의 관계)
          </p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>'이트리소프트'는 연결사이트가
              독자적으로 제공하는 상품 또는 상품에 의하여 이용자와행하는 거래에
              대하서는 보증 책임을 지지 않습니다.
            </li>
          </ol>
        </div>
        <div className={styles.t_box}>
          <p className={styles.group}>제19조(저작권의 귀속 및 이용제한)</p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>'이트리소프트' 작성한
              저작물에 대한 저작권 기타 지적재산권은 이트리소프트에게
              귀속합니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>이용자는 '이트리소프트'를
              이용함으로써 얻은 정보를 이트리소프트의 사전 승낙없이 복제, 송신,
              출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나
              제3자에게 이용하게 하여서는 안됩니다.
            </li>
          </ol>
        </div>
        <div className={styles.t_box}>
          <p className={styles.group}>제20조(분쟁해결)</p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>'이트리소프트'느 이용자가
              제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기
              위하여 피해보상처리기구를 설치·운영합니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>'이트리소프트'는 이용자로부터
              제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>③</span>다만, 제20조 제2항에 대하여
              신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시
              통보해 드립니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>④</span>'이트리소프트'와 이용자간에
              발생한 분쟁은 전자거래기본법 제28조 및 동 시행령 제15조에 의하여
              설치된 전자거래분쟁조정위원회의 조정에 따를 수 있습니다.
            </li>
          </ol>
        </div>
        <div className={styles.t_box}>
          <p className={styles.group}>제21조(재판권 및 준거법)</p>
          <ol className={styles.ol}>
            <li className={styles.ol_li}>
              <span className={styles.num}>①</span>'이트리소프트'와 이용자간에
              발생한 전자거래 분쟁에 관한 소송은 민사소송법상의 관할법원에
              제기합니다.
            </li>
            <li className={styles.ol_li}>
              <span className={styles.num}>②</span>'이트리소프트'와 이용자간에
              제기된 전자거래 소송에는 대한민국 법을 적용합니다.
            </li>
          </ol>
        </div>
        <div className={styles.t_box}>
          <p className={styles.group}>제22조(약관외 준칙)</p>
          <span className={styles.span}>
            당 약관에 명시되지 않은 사항은 전자거래 기본법, 전자서명법,
            방문판매법 및 기타 관련법령의 규정에 의합니다.
          </span>
        </div>
        <p className={styles.p1}>시행일자 : 2012 년 01월 09일</p>
      </>
    </PageFrame>
  );
}
