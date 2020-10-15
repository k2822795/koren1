import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/Applayout';
import NicknameEditForm from '../components/NicknameEditForm';
import WriteData from '../components/WriteData';

const profile = () => {
  const dummy = [{ nickname: 'kkm' }, { nickname: 'kangmun' }, { nickname: '강문' }];
  const followerList = [{ nickname: 'kkm' }, { nickname: '바보' }, { nickname: 'hak' }];

    return (
      <>
        <Head>
            <title>데이터 목록</title>
        </Head>
        <AppLayout>
          {/*<NicknameEditForm />*/}
          <WriteData header="입력한 응급 데이터 목록" data={dummy} />
          
        </AppLayout>
      </>
    );
}

export default profile;