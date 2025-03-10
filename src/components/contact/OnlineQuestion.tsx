import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './OnlineQuestion.module.css'
import Toast from "./Toast";

type formProps = {
  from_name: string;
  phone: string;
  email: string;
  message: string;
}

export default function OnlineQuestion() {
  const formRef = useRef<HTMLFormElement>(null);
  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState('');
  const [data, setData] = useState({
    from_name: '',
    phone: '',
    email: '',
    message: '',
  });

  const checkEmail = (email: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const checkPhone = (phone: string) => /^0\d{1,2}-\d{3,4}-\d{4}$/.test(phone);

  const setFormData = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.currentTarget;
    setData((prev: formProps): formProps => {
      return { ...prev, [name]: value }
    });
  }

  const showToastMsg = (message: string) => {
    setMessage(message);
    setToast(true);
  }

  const sendMail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(data)

    if(!checkPhone(data.phone)) {
      showToastMsg('전화번호를 확인해주시기 바랍니다.');
      return;
    }

    if(!checkEmail(data.email)) {
      showToastMsg('이메일 주소를 확인해주시기 바랍니다.');
      return;
    }

    emailjs.sendForm(
      'service_mgllrh3',
      'template_r0bpe4w',
      formRef.current as HTMLFormElement,
      { publicKey: '8bQd5Uc5wD8HEQyzz' }).then(
      (result) => {
        console.log('Email Send SUCCESS', result.text);
        if (result.text === 'OK') {
          showToastMsg('메일이 정상적으로 발송되었습니다.');
        }
      },
      (error) => {
        console.log('Email Send ERROR', error);
        showToastMsg('메일 발송이 실패하였습니다.');
      }
    );
  }

  return (
    <form ref={formRef} onSubmit={sendMail} className={styles.container}>
      <h1 className={styles.title}>온라인 문의</h1>
      <input type={'hidden'} name={'to_name'} value={'이트리소프트 관리자'} />
      <ul className={styles.formArea}>
        <li>
          <input type={'text'} name={'from_name'} placeholder={'이름/직급'} onInput={setFormData} className={styles.inputForm}/>
          <input type={'text'} name={'phone'} placeholder={'휴대폰 번호(ex. 010-0000-0000)'} onInput={setFormData} className={styles.inputForm}/>
          <input type={'text'} name={'email'} placeholder={'이메일주소(ex. abc@abc.com)'} onInput={setFormData} className={styles.inputForm}/>
        </li>
        <li>
          <textarea
            name={'message'}
            onInput={setFormData}
            placeholder={'서비스 또는 프로젝트 개발 의뢰 및 그밖에 궁금하신 점에 대해 간단한 문의 내용을 남기시면 빠른 시간 내에 연락드리겠습니다.'}
            className={styles.textareaForm}
          />
        </li>
      </ul>
      <div className={styles.buttonContainer}>
        <input type={"submit"} value={'전  송'} className={styles.button}/>
      </div>
      {toast && (<Toast setToast={setToast} message={message} />)}
    </form>
  );
}