import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './OnlineQuestion.module.css'

export default function OnlineQuestion() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendMail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs.sendForm(
      'service_mgllrh3',
      'template_r0bpe4w',
      formRef.current as HTMLFormElement,
      { publicKey: '8bQd5Uc5wD8HEQyzz' }).then(
      (result) => {
        console.log('Email Send SUCCESS', result.text);
      },
      (error) => {
        console.log('Email Send ERROR', error);
      }
    );
  }

  return (
    <form ref={formRef} onSubmit={sendMail} className={styles.container}>
      <h1 className={styles.title}>온라인 문의</h1>
      <input type={'hidden'} name={'to_name'} value={'이트리소프트 관리자'} />
      <ul className={styles.formArea}>
        <li>
          <input type={'text'} name={'from_name'} placeholder={'이름/직급'} className={styles.inputForm}/>
          <input type={'text'} name={'phone'} placeholder={'휴대폰 번호'} className={styles.inputForm}/>
          <input type={'text'} name={'email'} placeholder={'이메일주소'} className={styles.inputForm}/>
        </li>
        <li>
          <textarea
            name={'message'}
            placeholder={'서비스 또는 프로젝트 개발 의뢰 및 그밖에 궁금하신 점에 대해 간단한 문의 내용을 남기시면 빠른 시간 내에 연락드리겠습니다.'}
            className={styles.textareaForm}
          />
        </li>
      </ul>
      <div className={styles.buttonContainer}>
        <input type={"submit"} value={'전  송'} className={styles.button}/>
      </div>
    </form>
  );
}