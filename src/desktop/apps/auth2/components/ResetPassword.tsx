import React, { Component } from 'react'
import { DesktopModal } from '@artsy/reaction/dist/Components/Authorization/DesktopModal'
import { ResetPasswordForm } from '@artsy/reaction/dist/Components/Authorization/ResetPasswordForm'
import { ModalProps } from './Types'

export class ResetPassword extends Component<ModalProps> {
  render() {
    return (
      <DesktopModal show={true} onClose={this.props.onClose}>
        <ResetPasswordForm
          handleSubmit={values => {
            console.log('Form submitting:', values)
          }}
          handleChangeMode={e => this.props.onTypeChange(e)}
          values={{}}
        />
      </DesktopModal>
    )
  }
}
