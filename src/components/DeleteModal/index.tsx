import React, { useState } from 'react';
import { Button, Modal as AntModal } from 'antd';

interface Props {
  modalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

export const DeleteModal = ({ modalOpen, handleCancel, handleOk }: Props) => {

  return (
    <>
      <AntModal title="Delete Character" open={modalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Do you really want to delete this character?</p>
        <p>You won&apos;t be able to see it again.</p>
      </AntModal>
    </>
  )
}
