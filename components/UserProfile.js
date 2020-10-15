import React, { useCallback } from 'react';
import { Button, Card } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';

const UserProfile = () => {

    return (
      <Card
        actions={[
          <div key="Node">
            연결 노드 수
            <br />0
          </div>,
          <div key="Write">
            입력 데이터
            <br />0
          </div>,
          <div key="Read">
            받은 데이터
            <br />0
          </div>,
        ]}
      >
        <Card.Meta avatar={<Avatar>ZC</Avatar>} title="KKM" />
        <Button >로그아웃</Button>
      </Card>
    );
}

export default UserProfile;